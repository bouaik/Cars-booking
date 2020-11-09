import React, { useState } from 'react';
import Alert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';

const AppointementForm = ({
  username,
  bookAppointement,
  carId,
  appointementReducer,
}) => {
  const appData = {
    city: '',
    date: '',
    time: '',
    username,
    car_id: carId,
  };

  const [appoiInfo, setAppoiInfo] = useState(appData);

  const handleChange = e => {
    const { name, value } = e.target;
    setAppoiInfo({ ...appoiInfo, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    bookAppointement(appoiInfo);
  };

  return (
    <div className="appointement_container">
      {appointementReducer.appointements.message ? (
        <Alert severity="success">
          {appointementReducer.appointements.message}
        </Alert>
      ) : null}
      {appointementReducer.appointements.error ? (
        <Alert severity="error">
          {appointementReducer.appointements.error}
        </Alert>
      ) : null}
      <h3 className="appointement_title">Take appointement</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="City"
          type="text"
          name="city"
          onChange={handleChange}
        />
        <br />
        <input
          type="date"
          name="date"
          onChange={handleChange}
          className="app_input"
        />
        <br />
        <input
          type="time"
          name="time"
          onChange={handleChange}
          className="app_input"
        />
        <br />
        <input type="submit" className="app_input submit_btn" />
      </form>
    </div>
  );
};

AppointementForm.propTypes = {
  username: PropTypes.string.isRequired,
  carId: PropTypes.string.isRequired,
  bookAppointement: PropTypes.func.isRequired,
  appointementReducer: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default AppointementForm;
