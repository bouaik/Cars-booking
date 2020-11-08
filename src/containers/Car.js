import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCar } from '../redux/actions/carActions';
import AppointementForm from '../components/AppointementForm';
import { bookAppointement } from '../redux/actions/appointementActions';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

const Car = ({
  fetchCar,
  carReducer,
  userReducer,
  bookAppointement,
  appointementReducer,
}) => {
  const { id } = useParams();

  useEffect(() => {
    fetchCar(id);
  }, [fetchCar, id]);

  return (
    <div>
      {userReducer.user.token ? (
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
                  username={userReducer.user.user.username}
                  bookAppointement={bookAppointement}
                  carId={id}
                  appointementReducer={appointementReducer}
                />
              </Grid>
            </Grid>
          ))}
        </Container>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

Car.propTypes = {
  carReducer: PropTypes.shape({
    cars: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  userReducer: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
  }).isRequired,
  appointementReducer: PropTypes.object.isRequired,

  fetchCar: PropTypes.func.isRequired,
  bookAppointement: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    carReducer: state.carReducer,
    userReducer: state.userReducer,
    appointementReducer: state.appointementReducer,
  };
};

const mapDispatchToProps = {
  fetchCar,
  bookAppointement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Car);
