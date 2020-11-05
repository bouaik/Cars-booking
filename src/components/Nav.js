import React from 'react';
import { Link } from 'react-router-dom';
import SignOut from './SignOut';

const Nav = () => {
  return (
    <div>
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/appointements">
        <h4>Appointements</h4>
      </Link>
      <SignOut />
    </div>
  );
};

export default Nav;
