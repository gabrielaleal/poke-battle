import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';

import { getUserData } from './actions/user';
import Navbar from './components/navbar';
import BattleDetails from './pages/battle-details';

class App extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getUserData();
  }

  render() {
    const { user } = this.props;

    return (
      <BrowserRouter>
        <div>
          <Navbar user={user} />
          <div className="block-body">
            <Switch>
              <BattleDetails path="/battles/:pk/" user={user} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  getUserData: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user.data,
});

const mapDispatchToProps = {
  getUserData,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
