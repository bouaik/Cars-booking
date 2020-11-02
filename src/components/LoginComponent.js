import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../redux/actions/userActions';

const LoginComponent = ({ fetchUser }) => {
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
      <h1>Login Form</h1>
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
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (userInfo) => dispatch(fetchUser(userInfo)),
  };
};

export default connect(null, mapDispatchToProps)(LoginComponent);
