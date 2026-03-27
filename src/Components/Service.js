import React from 'react';
import Data from './Api';
import Card from './Card';

const Service = () => {
  return (
    <>
      <h1 className='text-center text-info mt-2'>Our Services</h1>
      <div className='container'>
        <div className='row'>
          {Data.map((value, index) => (
            <Card key={index} title={value.title} img={value.image} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
