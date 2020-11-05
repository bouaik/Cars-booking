import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCar } from '../redux/actions/carActions';
import AppointementForm from './AppointementForm';
import { bookAppointement } from '../redux/actions/appointementActions';

const Car = ({ fetchCar, carReducer, userReducer, bookAppointement }) => {
  const { id } = useParams();

  useEffect(() => {
    fetchCar(id);
  }, [fetchCar, id]);

  const username = userReducer.user.user.username;

  return (
    <div>
      {carReducer.cars.map((car) => (
        <div key={car.id}>
          <h1 key={car.id}>{car.name}</h1>
          <img src={car.img_url} alt="car pic" />
          <div>
            <h3>Take appointement</h3>
            <AppointementForm
              username={username}
              bookAppointement={bookAppointement}
              carId={id}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    carReducer: state.carReducer,
    userReducer: state.userReducer,
  };
};

const mapDispatchToProps = {
  fetchCar,
  bookAppointement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Car);
