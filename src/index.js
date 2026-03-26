import React, { createContext } from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDom.createRoot(document.querySelector('#root'));

root.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
);
