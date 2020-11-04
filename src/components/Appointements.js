import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAppointements } from '../redux/actions/appointementActions';

const Appointements = ({ fetchAppointements }) => {
  useEffect(() => {
    fetchAppointements();
  }, []);
  return <div>This is Appointements page</div>;
};

const mapStateToProps = (state) => {
  console.log(state);
  return {};
};

const mapDispatchToProps = {
  fetchAppointements,
};

export default connect(mapStateToProps, mapDispatchToProps)(Appointements);
