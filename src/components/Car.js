import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCar } from '../redux/actions/carActions';

const Car = ({ fetchCar, carReducer }) => {
  const { id } = useParams();

  useEffect(() => {
    fetchCar(id);
  }, []);

  return (
    <div>
      <h1>Hello world!</h1>
      {carReducer.cars.map((car) => (
        <div key={car.id}>
          <h1 key={car.id}>{car.name}</h1>
          <img src={car.img_url} alt="car pic" />
        </div>
      ))}
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
  fetchCar,
};

export default connect(mapStateToProps, mapDispatchToProps)(Car);
