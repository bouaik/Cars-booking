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
          <SignUpComponent />
          <LoginComponent />
        </div>
      )}
    </div>
  );
};

export default Home;
