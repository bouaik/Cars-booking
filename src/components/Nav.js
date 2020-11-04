import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/appointements">
        <h4>Appointements</h4>
      </Link>
    </div>
  );
};

export default Nav;
