import React from 'react';
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
  } from "react-router-dom";
import Main from '../layout/Main/Main';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import LoginLayout from '../layout/LoginLayout/LoginLayout';
import Register from '../pages/Register/Register';
import RegisterLayout from '../layout/RegisteriLayout/RegisterLayout';
import Chefs from '../share/Chefs/Chefs';

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginLayout></LoginLayout>,
      children: [
        {
          path: '/login',
          element: <Login></Login>
        }
      ]
    },
    {
      path: '/register',
      element: <RegisterLayout></RegisterLayout>,
      children: [
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch(`http://localhost:5000/chefs`)
        }
      ]
    },
  ]);

export default router;