import React, { useEffect } from 'react';
import './App.css';
import { autoLogin } from './redux/actions/userActions';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Nav from './components/Nav';

const App = ({ userReducer, autoLogin }) => {
  useEffect(() => {
    autoLogin();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {userReducer.loading ? (
          <h1>Loading ...</h1>
        ) : (
          <div>
            <Nav />
            <Switch>
              <Route exact path="/dashboard">
                <Dashboard userReducer={userReducer} />
              </Route>
              <Route exact path="/">
                <Home userReducer={userReducer} />
              </Route>
            </Switch>
          </div>
        )}
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.userReducer);
  return {
    userReducer: state.userReducer,
  };
};

const mapDispatchToProps = {
  autoLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
