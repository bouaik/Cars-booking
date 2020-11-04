import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCar } from '../redux/actions/carActions';

const Car = ({ fetchCar, carReducer, userReducer }) => {
  const { id } = useParams();

  useEffect(() => {
    fetchCar(id);
  }, []);

  const username = userReducer.user.user.username;
  const appData = {
    city: '',
    date: '',
    time: '',
    username: username,
  };

  const [time, setTime] = useState(appData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTime({ ...time, [name]: value });
  };

  console.log(time);
  return (
    <div>
      <h1>Hello world!</h1>
      {carReducer.cars.map((car) => (
        <div key={car.id}>
          <h1 key={car.id}>{car.name}</h1>
          <img src={car.img_url} alt="car pic" />
          <div>
            <h3>Take appointement</h3>
            <input
              placeholder="City"
              type="text"
              name="city"
              onChange={handleChange}
            />
            <input type="date" name="date" onChange={handleChange} />
            <input type="time" name="time" onChange={handleChange} />
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.userReducer.user.user.username);
  return {
    carReducer: state.carReducer,
    userReducer: state.userReducer,
  };
};

const mapDispatchToProps = {
  fetchCar,
};

export default connect(mapStateToProps, mapDispatchToProps)(Car);
