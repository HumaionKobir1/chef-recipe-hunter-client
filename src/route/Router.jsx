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
import Blog from '../pages/Blog';
import BlogLayout from '../layout/BlogLayout/BlogLayout';
import AboutLayout from '../layout/AboutLayout/AboutLayout';
import About from '../pages/About/About';
import RecipeLayout from '../layout/RecipeLayout/RecipeLayout';

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
      path: '/chefs/:id',
      element: <RecipeLayout></RecipeLayout>,
      children: [
        {
          path: '/chefs/:id',
          element: 
          <PrivateRoute>
            <ChefRecipe></ChefRecipe>
            </PrivateRoute> ,
          loader: ({params}) => fetch(`https://chef-recipe-hunter-server-humaionkobir341-gmailcom.vercel.app/chefs/${params.id}`)
        }
      ]
    },
    {
      path: '/blog',
      element: <BlogLayout></BlogLayout>,
      children: [
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    },
    {
      path: '/about',
      element: <AboutLayout></AboutLayout>,
      children: [
        {
          path: '/about',
          element: <About></About>
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
            loader: () => fetch(`https://chef-recipe-hunter-server-humaionkobir341-gmailcom.vercel.app/chefs`)
        },
        
        
      ]
    },
  ]);

export default router;