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
import ErrorPage from '../pages/Error/ErrorPage';
import ChefRecipe from '../pages/ChefRecipe/ChefRecipe';
import PrivateRoute from './PrivateRoute';

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
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch(`http://localhost:5000/chefs`)
        },
        {
          path: '/chefs/:id',
          element: 
          <PrivateRoute>
            <ChefRecipe></ChefRecipe>
            </PrivateRoute> ,
          loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
        }
      ]
    },
  ]);

export default router;