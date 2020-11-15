import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: '100px !important',
    height: '100px !important',
  },
}));

function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress className={classes.circle} />
    </div>
  );
}

export default CircularIndeterminate;
