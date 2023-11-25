import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-6xl mx-auto">
    <RouterProvider router={Routes}></RouterProvider>
    </div>
  </React.StrictMode>
);
