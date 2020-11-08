import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './containers/Dashboard';
import Nav from './containers/Nav';
import { autoLogin } from './redux/actions/userActions';
import Car from './containers/Car';
import Appointements from './containers/Appointements';
import LoginComponent from './containers/LoginComponent';
import SignUpComponent from './containers/SignUpComponent';
import PropTypes from 'prop-types';

const App = ({ userReducer, autoLogin }) => {
  useEffect(() => {
    autoLogin();
  }, [autoLogin]);

  return (
    <div className="App">
      <BrowserRouter>
        {userReducer.loading ? (
          <h1>Loading ...</h1>
        ) : (
          <div>
            {userReducer.user.token ? <Nav /> : null}
            <Switch>
              <Route exact path="/">
                <LoginComponent />
              </Route>
              <Route exact path="/signup">
                <SignUpComponent />
              </Route>
              <Route exact path="/dashboard">
                <Dashboard userReducer={userReducer} />
              </Route>
              <Route exact path="/car/:id">
                <Car />
              </Route>
              <Route exact path="/appointements">
                <Appointements />
              </Route>
            </Switch>
          </div>
        )}
      </BrowserRouter>
    </div>
  );
};

App.propTypes = {
  userReducer: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
  }).isRequired,
  autoLogin: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
  };
};

const mapDispatchToProps = {
  autoLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
