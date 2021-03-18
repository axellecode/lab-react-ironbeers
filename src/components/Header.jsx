import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props => {
  return (

    <nav >
        <Link to='/' className="navbar-brand"> <small> Home </small> </Link>
    </nav>
  );
});

export default Header;


