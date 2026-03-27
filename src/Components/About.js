import React from 'react';
import Card from './Card';
import Data from './Api';

const About = () => {
  return (
    <>
      <div className='container about'>
        <div className='row my-4 d-flex align-items-center'>
          <div className='col-xs-12 col-md-6'>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              excepturi voluptates magni officiis harum totam deserunt pariatur
              cumque similique temporibus?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam, fugiat necessitatibus voluptates inventore soluta
              accusantium deleniti recusandae ut magni ex nisi a pariatur atque.
              Numquam?
            </p>
          </div>
          <div className='col-xs-12 col-md-6'>
            <img
              src='https://images.unsplash.com/photo-1587080413959-06b859fb107d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZmZlZSUyMGN1cHxlbnwwfHwwfHx8MA%3D%3D'
              alt=''
            />
          </div>
        </div>
        {/* Meet our Team */}
        <h1 className='text-center text-info mt-5'>Meet Our Team</h1>
        <div className='container'>
          <div className='row'>
            {Data.map((value, index) => (
              <Card key={index} title={value.title} img={value.image} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
