import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom' //always use this for routing react apps
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

//browser router is than under ReactStrictMode
//our <App /> is than rapped using BrowserRouter, because the router will effect the whole app
reportWebVitals();
