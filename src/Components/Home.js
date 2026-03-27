import React from 'react';
import Card from './Card';
import Data from './Api';

const Home = () => {
  return (
    <div>
      {/* Caroisekl */}
      <div id='carouselExampleIndicators' className='carousel slide'>
        <div className='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='0'
            className='active'
            aria-current='true'
            aria-label='Slide 1'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='1'
            aria-label='Slide 2'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='2'
            aria-label='Slide 3'
          ></button>
        </div>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img
              src='https://plus.unsplash.com/premium_photo-1739910428166-931743a1ce9d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              className='d-block w-100'
              alt='...'
            />
          </div>
          <div className='carousel-item'>
            <img
              src='https://images.unsplash.com/photo-1722906777382-1c00ad2c9cbd?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              className='d-block w-100'
              alt='...'
            />
          </div>
          <div className='carousel-item'>
            <img
              src='https://images.unsplash.com/photo-1651313742972-c7d8f8218dc0?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              className='d-block w-100'
              alt='...'
            />
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
      {/* Pakage Section */}
      <h1 className='text-center text-info my-3'>Our Package</h1>
      <div className='container'>
        <div className='row'>
          {Data.map((value, index) => (
            <Card key={index} title={value.title} img={value.image} />
          ))}
        </div>
      </div>
      {/* Questions */}
      <h1 className='text-center text-danger my-4'>Questions Asked</h1>
      <div className='container mb-4'>
        <div className='accordion accordion-flush' id='accordionFlushExample'>
          <div className='accordion-item'>
            <h2 className='accordion-header'>
              <button
                className='accordion-button collapsed text-success'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#flush-collapseOne'
                aria-expanded='false'
                aria-controls='flush-collapseOne'
              >
                Question 1
              </button>
            </h2>
            <div
              id='flush-collapseOne'
              className='accordion-collapse collapse'
              data-bs-parent='#accordionFlushExample'
            >
              <div className='accordion-body'>
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> className. This is
                the first item’s accordion body.
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header'>
              <button
                className='accordion-button collapsed text-success'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#flush-collapseTwo'
                aria-expanded='false'
                aria-controls='flush-collapseTwo'
              >
                Question 2
              </button>
            </h2>
            <div
              id='flush-collapseTwo'
              className='accordion-collapse collapse'
              data-bs-parent='#accordionFlushExample'
            >
              <div className='accordion-body'>
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> className. This is
                the second item’s accordion body. Let’s imagine this being
                filled with some actual content.
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header'>
              <button
                className='accordion-button collapsed text-success'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#flush-collapseThree'
                aria-expanded='false'
                aria-controls='flush-collapseThree'
              >
                Question 3
              </button>
            </h2>
            <div
              id='flush-collapseThree'
              className='accordion-collapse collapse'
              data-bs-parent='#accordionFlushExample'
            >
              <div className='accordion-body'>
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> className. This is
                the third item’s accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
