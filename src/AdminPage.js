import './AdminPage.css';
import React from "react";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Admin from "./components/Admin"
import AdminVeloPage from "./routes/AdminVeloPage";
const AdminPage = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
      <Admin isLoggedIn={isLoggedIn} />
  );
};

export default AdminPage;
