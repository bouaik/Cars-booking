import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAppointements } from '../redux/actions/appointementActions';

const Appointements = ({
  fetchAppointements,
  userReducer,
  appointementReducer,
}) => {
  const username = userReducer.user.user.username;
  useEffect(() => {
    fetchAppointements(username);
  }, [fetchAppointements, username]);

  const hadnleTime = (a) => {
    let time = new Date(a);
    return `${time.getHours()}:${time.getUTCMinutes()}`;
  };
  return (
    <div>
      My Appointements
      {appointementReducer.appointements.map((appointement) => (
        <div key={appointement.id}>
          <h3>{appointement.city}</h3>
          <h4>{appointement.date}</h4>
          <h4>{hadnleTime(appointement.time)}</h4>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    appointementReducer: state.appointementReducer,
    userReducer: state.userReducer,
  };
};

const mapDispatchToProps = {
  fetchAppointements,
};

export default connect(mapStateToProps, mapDispatchToProps)(Appointements);
