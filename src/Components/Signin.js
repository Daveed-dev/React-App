import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const Signin = () => {
  const { username } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <h1>my user name is {username}</h1>
      <h1>
        {location.pathname !== '/signin/david' ? (
          <button className='btn btn-danger'>Get Premiem</button>
        ) : (
          ''
        )}
      </h1>
    </div>
  );
};

export default Signin;
