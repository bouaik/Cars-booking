import React from 'react';
import SignOut from './SignOut';
import { Redirect } from 'react-router';

const Dashboard = ({ userReducer, carReducer }) => {
  return (
    <div>
      {userReducer.user.token ? (
        <div>
          <h1>Welcome, {userReducer.user.user.username}</h1>
          {carReducer.cars.map((car) => (
            <div key={car.id}>
              {car.name}
              <br></br>
              {car.price}
              <img src={car.img_url} />
            </div>
          ))}
          <SignOut />
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

export default Dashboard;
