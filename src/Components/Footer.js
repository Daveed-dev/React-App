import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className='card text-center'>
        <div className='card-body py-4 bg-dark text-light footer'>
          <h5 className='card-title'>Built by David</h5>
          <p className='card-text'>I built this Project Brick by Brick</p>
          <Link to='/'>
            <button className='btn btn-primary'>Home Page</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
