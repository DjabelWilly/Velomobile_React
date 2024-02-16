import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProductsPage from './routes/ProductsPage';
import HomePage from './routes/HomePage';
import ErrorPage from './routes/ErrorPage';
import LoginPage from './routes/LoginPage';
import LogoutPage from './routes/LogoutPage';
import HistoirePage from './routes/HistoirePage';
import MadeInLozerePage from './routes/MadeInLozerePage';
import 'bootstrap/dist/css/bootstrap.css';
import './sass/custom.scss';


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
        path: "logout",
        element: <LogoutPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);