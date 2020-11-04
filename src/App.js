import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Nav from './components/Nav';
import { autoLogin } from './redux/actions/userActions';
import { fetchCars } from './redux/actions/carActions';
import Car from './components/Car';

const App = ({ userReducer, autoLogin, fetchCars, carReducer }) => {
  useEffect(() => {
    autoLogin();
    fetchCars();
  }, [fetchCars]);

  return (
    <div className="App">
      <BrowserRouter>
        {userReducer.loading ? (
          <h1>Loading ...</h1>
        ) : (
          <div>
            <Nav />
            <Switch>
              <Route exact path="/">
                <Home userReducer={userReducer} />
              </Route>
              <Route exact path="/dashboard">
                <Dashboard userReducer={userReducer} carReducer={carReducer} />
              </Route>
              <Route exact path="/car/:id">
                <Car />
              </Route>
            </Switch>
          </div>
        )}
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    userReducer: state.userReducer,
    carReducer: state.carReducer,
  };
};

const mapDispatchToProps = {
  autoLogin,
  fetchCars,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
