import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import ProductsPage from "./routes/ProductsPage";
import HomePage from "./routes/HomePage";
import ErrorPage from "./routes/ErrorPage";
import LoginPage from "./routes/LoginPage";
import LogoutPage from "./routes/LogoutPage";
import HistoirePage from "./routes/HistoirePage";
import MadeInLozerePage from "./routes/MadeInLozerePage";
import LandingPagePub from "./routes/LandingPagePub";
import LandingPagePluie from "./routes/LandingPagePluie";
import ShowroomPage from "./routes/ShowroomPage";
import AdminVeloPage from "./routes/AdminVeloPage";
import AdminPage from "./AdminPage";
import AdminUsersPage from "./routes/AdminUsersPage";
import AdminFormVeloPage from "./routes/AdminFormVeloPage";
import AdminFormUsersPage from "./routes/AdminFormUsersPage";
import "bootstrap/dist/css/bootstrap.css";
import "./sass/custom.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "histoire",
        element: <HistoirePage />,
      },
      {
        path: "madeinlozere",
        element: <MadeInLozerePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "design_innovant",
        element: <LandingPagePub />,
      },

      {
        path: "velomobile_pluie",
        element: <LandingPagePluie />,
      },
      {
        path: "showroom",
        element: <ShowroomPage />,
      },
      {
        path: "logout",
        element: <LogoutPage />,
      },
       {
        path: "admin",
        element: <AdminPage />,
       },
      {
        path: "admin/velo",
        element: <AdminVeloPage />,
      },
      {
        path: "admin/users",
        element: <AdminUsersPage />,
      },
      // {
      //   path: "admin/velo/createForm",
      //   element: <AdminFormVeloPage />,
      // },
      // {
      //   path: "admin/velo/putForm",
      //   element: <AdminFormVeloPage />,
      // },
      // {
      //   path: "admin/users/form",
      //   element: <AdminFormUsersPage />,
      // },
    
    ],
  },
 
  // {
  //   path: "/",
  //   element: <Navigate to="/public/" replace />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
