import React from "react";
import {LoggedStatus} from "../helpers/authHelper";
import Forgot from "../pages/Auth/Forgot";
import Signup from "../pages/Auth/Signup";
import Login from "../pages/Auth/Login";
import Reset from "../pages/Auth/Reset";
import Dash from "../pages/Dash/Dash";
import Home from "../pages/Dash/Home";

export const RoutesArray = [
  {
    path: "/",

    element: (
      <LoggedStatus>
        <Home />
      </LoggedStatus>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forgot",
    element: <Forgot />,
  },
  {
    path: "/reset",
    element: <Reset />,
  },
 {
  path: "/report",
  element: <Dash />

 },
];
