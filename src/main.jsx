import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/layout/Layout';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './components/providers/AuthProvider';
import Orders from './components/Orders/Orders';
import PrivetRoutes from './components/routes/PrivetRoutes';
import Profile from './components/Profile/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/profile',
        element:<PrivetRoutes><Profile></Profile> </PrivetRoutes>
      },
      {
        path:'/orders',
        element:<PrivetRoutes> <Orders></Orders></PrivetRoutes>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>

  </React.StrictMode>,
)
