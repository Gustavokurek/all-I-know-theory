import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Nav } from './styles';

const Header = function header(params) {
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/home">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/quit">
        <FaSignInAlt size={24} />
      </Link>
    </Nav>
  );
};

export default Header;
