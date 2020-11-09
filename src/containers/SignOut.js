import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logUserOut } from '../redux/actions/userActions';

const SignOut = ({ logUserOut }) => {
  const handleOnClick = e => {
    e.preventDefault();
    logUserOut();
  };

  return (
    <div className="signout_cover">
      <input type="submit" value="Sign out" onClick={handleOnClick} />
    </div>
  );
};

SignOut.propTypes = {
  logUserOut: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  logUserOut: () => dispatch(logUserOut()),
});

export default connect(null, mapDispatchToProps)(SignOut);
