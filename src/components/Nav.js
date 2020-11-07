import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignOut from './SignOut';
import ArrowLeftTwoToneIcon from '@material-ui/icons/ArrowLeftTwoTone';
// import { useLocation } from 'react-router-dom';

const Nav = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => setSidebar(!sidebar);

  // const location = useLocation();
  // console.log(location.pathname);

  return (
    <div className={sidebar ? 'sidebar active' : 'sidebar'}>
      <div className="togller_cover">
        <ArrowLeftTwoToneIcon onClick={handleSidebar} className="arrow" />
      </div>
      <Link to="/">
        <h4 className="logo">Elcaro</h4>
      </Link>
      <Link to="/">
        <h4 className="menu_items active">Cars</h4>
      </Link>
      <Link to="/appointements">
        <h4 className="menu_items active">Appointements</h4>
      </Link>
      <SignOut />
    </div>
  );
};

export default Nav;
