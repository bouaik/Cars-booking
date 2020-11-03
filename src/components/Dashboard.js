import React from 'react';
import SignOut from './SignOut';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

const Dashboard = ({ userReducer, carReducer }) => {
  return (
    <div>
      {userReducer.user.token ? (
        <div>
          <h1>Welcome, {userReducer.user.user.username}</h1>
          {carReducer.cars.map((car) => (
            <div key={car.id}>
              <Link to={`/car/${car.id}`}>{car.name}</Link>
              <br />
              <br />
              <img src={car.img_url} alt="car pic" />
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
