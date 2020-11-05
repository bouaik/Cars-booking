import React, { useEffect } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCars } from '../redux/actions/carActions';
import Nav from './Nav';

const Dashboard = ({ fetchCars, userReducer, carReducer }) => {
  useEffect(() => {
    fetchCars();
  }, [fetchCars]);
  return (
    <div>
      {userReducer.user.token ? (
        <div>
          <Nav />
          <h1>Welcome, {userReducer.user.user.username}</h1>
          {carReducer.cars.map((car) => (
            <div key={car.id}>
              <Link to={`/car/${car.id}`}>{car.name}</Link>
              <br />
              <br />
              <img src={car.img_url} alt="car pic" />
            </div>
          ))}
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    carReducer: state.carReducer,
  };
};

const mapDispatchToProps = {
  fetchCars,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
