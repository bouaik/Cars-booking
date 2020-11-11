import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { fetchAppointements } from '../redux/actions/appointementActions';
import ShowAppointement from '../components/ShowAppointement';

const Appointements = ({
  fetchAppointements,
  userReducer,
  appointementReducer,
}) => {
  let username = '';
  if (userReducer.user.user) {
    username = userReducer.user.user.username;
  }

  useEffect(() => {
    fetchAppointements(username);
  }, [fetchAppointements, username]);

  return (
    <div>
      {userReducer.user.token ? (
        <ShowAppointement appointementReducer={appointementReducer} />
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

Appointements.propTypes = {
  userReducer: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    user: PropTypes.oneOfType([PropTypes.object]).isRequired,
  }).isRequired,
  appointementReducer: PropTypes.oneOfType([PropTypes.object]).isRequired,
  fetchAppointements: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  appointementReducer: state.appointementReducer,
  userReducer: state.userReducer,
});

const mapDispatchToProps = {
  fetchAppointements,
};

export default connect(mapStateToProps, mapDispatchToProps)(Appointements);
