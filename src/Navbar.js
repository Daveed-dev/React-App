import React from 'react';
import { NavLink } from 'react-router-dom';

const activeLink = ({ isActive }) => (isActive ? 'active_Styles' : 'navlink');

const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink className={activeLink} to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={activeLink} to='/about'>
            About
          </NavLink>
        </li>
        <li>
          <NavLink className={activeLink} to='/service'>
            Service
          </NavLink>
        </li>
        <li>
          <NavLink className={activeLink} to='/contact'>
            Contact
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
