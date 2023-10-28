import React from "react";
import { Route, Routes, useRoutes } from "react-router-dom";
import { RoutesArray } from "./routes/routesArray";
import "./input.css"

function App() {
  const allRoutes = useRoutes(RoutesArray)
  return allRoutes;
}

export default App;
