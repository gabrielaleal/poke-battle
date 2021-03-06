import { map } from 'lodash';
import { denormalize } from 'normalizr';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getSettledBattlesList } from '../actions/battles-list';
import Loading from '../components/Loading';
import PageTitle from '../components/Title';
import { battleListSchema } from '../utils/schema';

const SettledBattleItem = ({ battle }) => {
  const { id: battleId, creator, opponent, winner } = battle;

  return (
    <Link to={{ pathname: `/battles/${battleId}/`, state: { battle, isLoading: false } }}>
      <div className="list-item settled-battle-item">
        <h6 className="pokemon-font">Battle #{battleId}</h6>
        <div>
          <span className="list-attribute">Players</span> {creator.email} VS {opponent.email}
        </div>
        <div>
          <span className="list-attribute">Winner</span> {winner.email}
        </div>
      </div>
    </Link>
  );
};

class SettledBattlesList extends React.Component {
  componentDidMount() {
    const { getSettledBattlesList } = this.props;
    getSettledBattlesList();
  }

  render() {
    const { battles, isLoading } = this.props;

    if (isLoading) {
      return <Loading />;
    }

    return (
      <div className="pk-container battle-detail">
        <PageTitle title="Settled Battles" />
        <div className="content">
          {battles.length === 0 && (
            <div className="no-battles">
              <h4>Ops, there are no battles yet!</h4>
            </div>
          )}
          <div className="battle-list">
            {map(battles, (value, key) => (
              <SettledBattleItem key={key} battle={value} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

SettledBattlesList.propTypes = {
  battles: PropTypes.array,
  isLoading: PropTypes.bool,
  getSettledBattlesList: PropTypes.func,
};

SettledBattleItem.propTypes = {
  battle: PropTypes.object,
};

const mapStateToProps = (state) => {
  const { battles } = state;
  const denormalizedData = denormalize(
    battles.settledBattlesList,
    battleListSchema,
    battles.entities
  );

  return {
    isLoading: battles.loading.list,
    battles: denormalizedData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSettledBattlesList: () => dispatch(getSettledBattlesList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettledBattlesList);
