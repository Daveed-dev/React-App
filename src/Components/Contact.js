import React from 'react';

const Contact = () => {
  return (
    <>
      <h1 className='text-center text-success my-3'>Contact Us</h1>
      <div className='container mb-3'>
        <div className='mb-3'>
          <label className='form-label'>Name</label>
          <input
            type='name'
            className='form-control'
            placeholder='Enter your name'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Email address</label>
          <input
            type='email'
            className='form-control'
            placeholder='name@example.com'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Mobile Number</label>
          <input
            type='text'
            className='form-control'
            placeholder='moblie number'
          />
        </div>
        <div className='mb-3'>
          <label for='exampleFormControlTextarea1' className='form-label'>
            Example textarea
          </label>
          <textarea
            className='form-control'
            id='exampleFormControlTextarea1'
            rows='3'
          ></textarea>
        </div>
        <button className='btn btn-primary'>Submit FeedBack</button>
      </div>
    </>
  );
};

export default Contact;
