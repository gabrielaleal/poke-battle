import PropTypes from 'prop-types';
import React from 'react';

// eslint-disable-next-line no-unused-vars
const Navbar = ({ user }) => (
  <nav>
    <div className="pk-nav">
      <div>
        <a href={window.Urls.home()}>
          <div className="pk-logo" />
        </a>
      </div>
      {/* <div className="btns-container">
        <a href={window.Urls.login()}>
          <div className="pk-small-btn">Login</div>
        </a>
        <a href={window.Urls.signup()}>
          <div className="pk-small-btn">SignUp</div>
        </a>
        <span>Welcome, {user.email}</span>
        <a href={window.Urls.logout()}>
          <div className="pk-small-btn">Logout</div>
        </a>
      </div> */}
    </div>
  </nav>
);

Navbar.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }),
};

Navbar.defaultProps = {
  user: {},
};
export default Navbar;
