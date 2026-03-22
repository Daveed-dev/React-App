import React from 'react';

const Main = () => {
  return (
    <>
      <div className='container-h text-center'>
        <h2>Welcome Everyone</h2>
        <h3>My First ReactJs Project</h3>
      </div>
      <div className='Container my-5'>
        <div className='row '>
          <div className='col-lg-3 '>
            <div className='card' style={{ width: '18rem' }}>
              <img
                src='/images/image1.avif'
                className='card-img-top'
                alt='image.png'
              />
              <div className='card-body'>
                <h5 className='card-title'>Title 1</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card’s content.
                </p>
                <a href='#' className='btn btn-dark'>
                  know More
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-3 '>
            <div className='card' style={{ width: '18rem' }}>
              <img
                src='/images/image2.avif'
                className='card-img-top'
                alt='image.png'
              />
              <div className='card-body'>
                <h5 className='card-title'>Title 2</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card’s content.
                </p>
                <a href='#' className='btn btn-dark'>
                  know More
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-3 '>
            <div className='card' style={{ width: '18rem' }}>
              <img
                src='/images/image3.avif'
                className='card-img-top'
                alt='image.png'
              />
              <div className='card-body'>
                <h5 className='card-title'>Title 3</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card’s content.
                </p>
                <a href='#' className='btn btn-dark'>
                  know More
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-3 '>
            <div className='card' style={{ width: '18rem' }}>
              <img
                src='/images/image4.avif'
                className='card-img-top'
                alt='image.png'
              />
              <div className='card-body'>
                <h5 className='card-title'>Title 4</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card’s content.
                </p>
                <a href='#' className='btn btn-dark'>
                  know More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Main;
