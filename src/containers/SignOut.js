import React from 'react';
import { connect } from 'react-redux';
import { logUserOut } from '../redux/actions/userActions';
import PropTypes from 'prop-types';

const SignOut = ({ logUserOut }) => {
  const handleOnClick = (e) => {
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

const mapDispatchToProps = (dispatch) => {
  return {
    logUserOut: () => dispatch(logUserOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignOut);
