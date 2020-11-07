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
      <h3>Take appointement</h3>

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
        <input type="submit" value="Book" />
      </form>
    </div>
  );
};

export default AppointementForm;
