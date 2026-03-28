import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const activeClass = ({ isActive }) =>
  isActive ? 'nav-link active' : 'nav-link';

const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          <Link to='/' className='logo'>
            <img
              src='https://images.unsplash.com/photo-1562783912-21ad31ee2a83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxvZ298ZW58MHx8MHx8fDA%3D'
              alt='image'
            />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <NavLink to='/' end className={activeClass}>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/about' className={activeClass}>
                  About
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/service' className={activeClass}>
                  Services
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/contact' className={activeClass}>
                  Contact
                </NavLink>
              </li>
              <button className='btn btn-success ms-2 nav-item'>
                <Link to='/signin' className={activeClass}>
                  SignIn
                </Link>
              </button>
            </ul>
            <form className='d-flex' role='search'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button className='btn btn-outline-success' type='submit'>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
