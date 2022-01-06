import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Nav } from './styles';

export default function header(params) {
  return (
    <Nav>
      <a href="/">
        <FaHome size={24} />
      </a>
      <a href="/">
        <FaUserAlt size={24} />
      </a>
      <a href="/">
        <FaSignInAlt size={24} />
      </a>
    </Nav>
  );
}
