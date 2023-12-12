import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import { ErrorPage } from "./pages/errors/ErrorPage.jsx";
import { Login } from "./pages/login/login.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
