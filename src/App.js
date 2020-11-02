import React, { useEffect } from 'react';
import './App.css';
import { autoLogin } from './redux/actions/userActions';
import { connect } from 'react-redux';
import LoginComponent from './components/LoginComponent';
import SignUpComponent from './components/SignUpComponent';
import SignOut from './components/SignOut';

const App = ({ userReducer, autoLogin }) => {
  useEffect(() => {
    autoLogin();
  }, []);

  return (
    <div className="App">
      <SignUpComponent />
      <LoginComponent />
      <SignOut />
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.userReducer.user);
  return {
    userReducer: state.userReducer,
  };
};

const mapDispatchToProps = {
  autoLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
