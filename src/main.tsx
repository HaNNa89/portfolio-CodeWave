import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import InformationPage from "./components/InformationPage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Homepage from "./Homepage";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Homepage />} />
      <Route path="/team/:name" element={<InformationPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
