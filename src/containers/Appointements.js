import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { fetchAppointements } from '../redux/actions/appointementActions';

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

const Appointements = ({
  fetchAppointements,
  userReducer,
  appointementReducer,
}) => {
  let username = '';
  if (userReducer.user.user) {
    username = userReducer.user.user.username;
  }
  const classes = useStyles();

  useEffect(() => {
    fetchAppointements(username);
  }, [fetchAppointements, username]);

  const hadnleTime = a => {
    const time = new Date(a);
    return `${time.getHours()}h:${time.getUTCMinutes()}`;
  };
  return (
    <div>
      {userReducer.user.token ? (
        <Container>
          <h1 className="appointements">My appointements</h1>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>City</TableCell>
                  <TableCell align="right">Date</TableCell>
                  <TableCell align="right">Time</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {appointementReducer.appointements.map(appointement => (
                  <TableRow key={appointement.id}>
                    <TableCell component="th" scope="row">
                      {appointement.city}
                    </TableCell>
                    <TableCell align="right">{appointement.date}</TableCell>
                    <TableCell align="right">
                      {hadnleTime(appointement.time)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

Appointements.propTypes = {
  userReducer: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    user: PropTypes.objectOf(PropTypes.object()).isRequired,
  }).isRequired,
  appointementReducer: PropTypes.objectOf(PropTypes.object()).isRequired,
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
