import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Nav from './components/Nav';
import { autoLogin } from './redux/actions/userActions';
import Car from './components/Car';
import Appointements from './components/Appointements';
import LoginComponent from './components/LoginComponent';
import SignUpComponent from './components/SignUpComponent';

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

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
  };
};

const mapDispatchToProps = {
  autoLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
