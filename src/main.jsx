import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import HomePage from "./pages/HomePages/HomePage/HomePage";
import LoggedInUserHomePage from "./pages/HomePages/LoggedInUserHomePage/LoggedInUserHomePage";
import Login from "./pages/Join/Login/Login";
import Signup from "./pages/Join/Signup/Signup";
import Cart from "./pages/Cart/Cart";
import CoursePage from "./pages/CoursePage/CoursePage";
import NotFound from "./pages/NotFound/NotFound";
import "./index.css";
import Test from "./pages/Test/Test";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <HomePage />,
    element: <LoggedInUserHomePage />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/join/login",
    element: <Login />,
  },
  {
    path: "/join/signup",
    element: <Signup />,
  },
  {
    path: "/course/:id",
    element: <CoursePage />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
