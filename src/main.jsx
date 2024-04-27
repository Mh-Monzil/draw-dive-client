import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layout/Root.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import AllArtCraft from './pages/AllArtCraft.jsx';
import AddCraftItem from './pages/AddCraftItem.jsx';
import MyArtCraftList from './pages/MyArtCraftList.jsx';
import AuthProvider from "./provider/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/all_art_craft",
        element: <AllArtCraft />,
      },
      {
        path: "/add-craft_item",
        element: <AddCraftItem />,
      },
      {
        path: "/my_art_craft_list",
        element: <MyArtCraftList />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer className='mt-20' theme="colored" />
    </AuthProvider>
  </React.StrictMode>
);
