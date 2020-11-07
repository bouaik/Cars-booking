import React, { useState } from 'react';

const AppointementForm = ({ username, bookAppointement, carId }) => {
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
    console.log(appoiInfo);
    bookAppointement(appoiInfo);
  };

  return (
    <div className="car_container">
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

export default AppointementForm;
