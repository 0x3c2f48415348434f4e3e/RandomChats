import React, {useState} from 'react';
import Home from './component/routes/Home';
import About from './component/routes/About';
import Blog from './component/routes/Blog';
import Contact from './component/routes/Contact';
import Login from './component/routes/Login';
import Register from './component/routes/Register';
//react router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ThemeProvider } from './component/MyContext';



export const router = createBrowserRouter([

  {
    path:"/",
    element: <Home />,
  },
  {
    path:"/about",
    element: <About />,
  },
  {
    path:"/contact",
    element: <Contact />,
  },
  {
    path:"/blog",
    element: <Blog />,
  },
  {
    path:"/login",
    element: <Login />,
  },
  {
    path:"/register",
    element: <Register />,
  }
]);

