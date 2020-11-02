import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signUserUp } from '../redux/actions/userActions';

const SignUpComponent = ({ signUserUp }) => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    signUserUp(user);
    setUser({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <h1>SignUp Form</h1>
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
          type="text"
          name="email"
          placeholder="email"
          value={user.email}
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

        <br />
        <input type="submit" value="Sign up" />
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUserUp: (userInfo) => dispatch(signUserUp(userInfo)),
  };
};

export default connect(null, mapDispatchToProps)(SignUpComponent);
