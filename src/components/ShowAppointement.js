import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

const ShowAppointement = ({ appointementReducer: { appointements } }) => {
  const classes = useStyles();

  const hadnleTime = a => {
    const time = new Date(a);
    return `${time.getHours()}h:${time.getUTCMinutes()}`;
  };

  return (
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
            {appointements.map(appointement => (
              <TableRow key={appointement.id}>
                <TableCell data-testid="city_name" component="th" scope="row">
                  {appointement.city}
                </TableCell>
                <TableCell align="right" data-testid="date">
                  {appointement.date}
                </TableCell>
                <TableCell align="right" data-testid="time">
                  {hadnleTime(appointement.time)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

ShowAppointement.propTypes = {
  appointementReducer: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default ShowAppointement;
