import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { fetchUser } from '../redux/actions/userActions';
import { Link } from 'react-router-dom';

const LoginComponent = ({ fetchUser, userReducer }) => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    fetchUser(user);
    setUser({
      username: '',
      password: '',
    });
  };

  return (
    <div>
      {userReducer.user.token ? (
        <Redirect to="/dashboard" />
      ) : (
        <div>
          <h1>Login Form</h1>
          {userReducer.user.error ? <h4>{userReducer.user.error}</h4> : null}

          <form onSubmit={handleOnSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={user.username}
              onChange={handleOnChange}
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleOnChange}
            />
            <br />
            <input type="submit" value="Login" />
          </form>
          <Link to="/signup">Signup</Link>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.userReducer);
  return {
    userReducer: state.userReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (userInfo) => dispatch(fetchUser(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
