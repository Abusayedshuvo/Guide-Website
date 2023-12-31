import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./Pages/ErrorPage.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Registration from "./Pages/Registration.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import PrivateRoutes from "./Routes/PrivateRoutes.jsx";
import("preline");

// tanstack Query

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AllServices from "./Pages/AllServices.jsx";
import ServiceDetails from "./Pages/ServiceDetails.jsx";
import AddServices from "./Pages/AddServices.jsx";
import ManageServices from "./Pages/ManageServices.jsx";
import Update from "./Pages/Update.jsx";
import MySchedules from "./Pages/MySchedules.jsx";
import Contact from "./Pages/Contact.jsx";
// Create a client
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App> </App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/services",
        element: <AllServices></AllServices>,
      },
      {
        path: "/add-services",
        element: (
          <PrivateRoutes>
            <AddServices></AddServices>
          </PrivateRoutes>
        ),
      },
      {
        path: "/manage-services",
        element: (
          <PrivateRoutes>
            <ManageServices></ManageServices>
          </PrivateRoutes>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoutes>
            <Update></Update>
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-schedules",
        element: (
          <PrivateRoutes>
            <MySchedules></MySchedules>
          </PrivateRoutes>
        ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoutes>
            <ServiceDetails></ServiceDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://assignment11-theta.vercel.app/services/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
