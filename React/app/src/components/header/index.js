import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Nav } from './styles';

const Header = function header(params) {
  const botãoClicado = useSelector((state) => state.exemple.botãoClicado);
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
      {botãoClicado ? 'clicado' : 'não clicado'}
    </Nav>
  );
};

export default Header;
