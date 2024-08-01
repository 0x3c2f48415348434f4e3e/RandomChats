import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//react router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './component/routes/Home';
import About from './component/routes/About';
import Blog from './component/routes/Blog';
import Contact from './component/routes/Contact';
import Login from './component/routes/Login';
import Register from './component/routes/Register';
import { useState } from 'react';

import { ThemeProvider } from './component/MyContext';
import { router } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  /*<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>*/
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
  
);
//<App />
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
