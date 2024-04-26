import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layout/Root.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path:'/',
        element: <Home />
      },
      {
        path:'/login',
        element: <Login />
      },
      {
        path:'/register',
        element: <Register />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
