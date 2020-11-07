import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCar } from '../redux/actions/carActions';
import AppointementForm from './AppointementForm';
import { bookAppointement } from '../redux/actions/appointementActions';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const Car = ({ fetchCar, carReducer, userReducer, bookAppointement }) => {
  const { id } = useParams();

  useEffect(() => {
    fetchCar(id);
  }, [fetchCar, id]);

  const username = userReducer.user.user.username;

  return (
    <Container className="car_cover">
      {carReducer.cars.map((car) => (
        <Grid container key={car.id} spacing={2} className="car_container">
          <Grid item sm={8}>
            <img src={car.img_url} alt="car pic" className="img" />
          </Grid>
          <Grid item sm={4}>
            <h1 className="car_name">{car.name}</h1>
            <div className="car_info">
              <h3>
                <span>Price:</span> {car.price}$
              </h3>
              <h3>
                <span>Transmition: </span>
                {car.transmition}
              </h3>
              <h3>
                <span>Duration:</span> {car.duration}
              </h3>
            </div>
            <AppointementForm
              username={username}
              bookAppointement={bookAppointement}
              carId={id}
            />
          </Grid>
        </Grid>
      ))}
    </Container>
  );
};

const mapStateToProps = (state) => {
  // console.log(state.appointementReducer);
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
