import React from 'react';
import SignOut from './SignOut';
import { Redirect } from 'react-router';

const Dashboard = ({ userReducer }) => {
  return (
    <div>
      {userReducer.user.token ? (
        <div>
          <h1>Welcome, {userReducer.user.user.username}</h1>
          <SignOut />
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

export default Dashboard;
