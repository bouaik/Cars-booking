import React from 'react';
import { connect } from 'react-redux';
import { logUserOut } from '../redux/actions/userActions';

const SignOut = ({ logUserOut }) => {
  const handleOnClick = (e) => {
    e.preventDefault();
    logUserOut();
  };

  return (
    <div>
      <input type="submit" value="Sign out" onClick={handleOnClick} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logUserOut: () => dispatch(logUserOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignOut);
