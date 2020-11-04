import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAppointements } from '../redux/actions/appointementActions';

const Appointements = ({ fetchAppointements, userReducer }) => {
  const username = userReducer.user.user.username;
  useEffect(() => {
    fetchAppointements(username);
  }, [fetchAppointements, username]);
  return <div>This is Appointements page</div>;
};

const mapStateToProps = (state) => {
  console.log(state.appointementReducer.appointements);
  return {
    appointementReducer: state.appointementReducer,
    userReducer: state.userReducer,
  };
};

const mapDispatchToProps = {
  fetchAppointements,
};

export default connect(mapStateToProps, mapDispatchToProps)(Appointements);
