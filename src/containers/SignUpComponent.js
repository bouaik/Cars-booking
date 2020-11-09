import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { signUserUp } from '../redux/actions/userActions';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  alert: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  image: {
    backgroundImage:
      'url(https://i.pinimg.com/736x/7d/b7/21/7db7211ebe62c187ce7ff82e88e4b353.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUpComponent = ({ signUserUp, userReducer }) => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleOnChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    signUserUp(user);
    setUser({
      username: '',
      email: '',
      password: '',
    });
  };

  const classes = useStyles();

  return (
    <div>
      {userReducer.user.token ? (
        <Redirect to="/dashboard" />
      ) : (
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign Up
              </Typography>

              {userReducer.user.error ? (
                <div className={classes.alert}>
                  <Alert severity="error">{userReducer.user.error}</Alert>
                </div>
              ) : null}

              <form
                className={classes.form}
                noValidate
                onSubmit={handleOnSubmit}
              >
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  type="text"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  onChange={handleOnChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  autoFocus
                  onChange={handleOnChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="password"
                  onChange={handleOnChange}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign Up
                </Button>
                <Grid container>
                  <Grid item xs />
                  <Grid item>
                    <Link component={RouterLink} to="/" variant="body2">
                      {'Do you have an account? Login '}
                    </Link>
                  </Grid>
                </Grid>
                <Box mt={5}>
                  <Copyright />
                </Box>
              </form>
            </div>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

SignUpComponent.propTypes = {
  userReducer: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    user: PropTypes.objectOf(PropTypes.object()).isRequired,
  }).isRequired,

  signUserUp: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  userReducer: state.userReducer,
});

const mapDispatchToProps = dispatch => ({
  signUserUp: userInfo => dispatch(signUserUp(userInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpComponent);
