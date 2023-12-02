import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./Pages/SignUp/AuthProvider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import "react-datepicker/dist/react-datepicker.css"; //datepicker react

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { HelmetProvider } from "react-helmet-async";
// ..
AOS.init();

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-6xl mx-auto">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <HelmetProvider>
            <RouterProvider router={Routes}></RouterProvider>
          </HelmetProvider>
          <Toaster />
        </AuthProvider>
      </QueryClientProvider>
    </div>
  </React.StrictMode>
);
