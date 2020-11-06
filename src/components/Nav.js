import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignOut from './SignOut';
import ArrowLeftTwoToneIcon from '@material-ui/icons/ArrowLeftTwoTone';

const Nav = () => {
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => setSidebar(!sidebar);

  return (
    <div className={sidebar ? 'sidebar active' : 'sidebar'}>
      <div className="togller_cover">
        <ArrowLeftTwoToneIcon onClick={handleSidebar} className="arrow" />
      </div>
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
