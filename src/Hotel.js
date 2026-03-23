import React from 'react';

const Hotel = (props) => {
  return (
    <>
      <div className='hotelcards'>
        <img src={props.img} className='img' alt='' />
        <h2>{props.title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quas
          labore impedit harum quisquam culpa ducimus deserunt, sunt
          consectetur! Consequuntur?
        </p>
        <div>
          <button className='btn'>{props.btn}</button>
        </div>
      </div>
    </>
  );
};
export default Hotel;
