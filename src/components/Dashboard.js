import React, { useEffect } from 'react';
import SignOut from './SignOut';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCars } from '../redux/actions/carActions';

const Dashboard = ({ fetchCars, userReducer, carReducer }) => {
  useEffect(() => {
    fetchCars();
  }, []);
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

const mapStateToProps = (state) => {
  console.log(state.carReducer);
  return {
    carReducer: state.carReducer,
  };
};

const mapDispatchToProps = {
  fetchCars,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
