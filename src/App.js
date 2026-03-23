import React from 'react';
import Hotel from './Hotel';
import Data from './HotelData';

const App = () => {
  return (
    <>
      <div className='container'>
        <h1>Hotel Rooms</h1>
        {Data.map((values, index) => {
          return (
            <Hotel
              key={index}
              id={values.id}
              img={values.imgSrc}
              title={values.title}
              btn={values.btn}
            />
          );
        })}
      </div>
    </>
  );
};
export default App;
