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
    username: username,
    car_id: carId,
  };

  const [appoiInfo, setAppoiInfo] = useState(appData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppoiInfo({ ...appoiInfo, [name]: value });
  };

  const handleSubmit = (e) => {
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
      <h3 className="appointement_title">Take appointement</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="City"
          type="text"
          name="city"
          onChange={handleChange}
        />
        <br />
        <input type="date" name="date" onChange={handleChange} />
        <br />
        <input type="time" name="time" onChange={handleChange} />
        <br />
        <input type="submit" className="submit_btn" />
      </form>
    </div>
  );
};

AppointementForm.propTypes = {
  username: PropTypes.string.isRequired,
  carId: PropTypes.string.isRequired,
  bookAppointement: PropTypes.func.isRequired,
  appointementReducer: PropTypes.object.isRequired,
};

export default AppointementForm;
