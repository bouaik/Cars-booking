import React from 'react';
import LoginComponent from './LoginComponent';
import SignUpComponent from './SignUpComponent';
import { Redirect } from 'react-router';

const Home = ({ userReducer }) => {
  return (
    <div>
      {userReducer.user.token ? (
        <Redirect to="/dashboard" />
      ) : (
        <div>
          <h1>Sign Up or Login!</h1>
          {userReducer.user.error ? <h4>{userReducer.user.error}</h4> : null}
          <SignUpComponent />
          <LoginComponent />
        </div>
      )}
    </div>
  );
};

export default Home;
