import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { RiHome2Line } from "react-icons/ri";

const AdminPage = () => {
  
  return (
    <>
      <div className="nav-admin">
        <Link to={"/"}>
          <RiHome2Line size={24} />
        </Link>
      </div>
      <div className="container d-flex justify-content-center my-4">
        <h2>bienvenue dans le back office</h2>
      </div>

      <div className="container admin-home d-flex justify-content-evenly align-items-center">
        <Link to={"/admin/velo"}>
          <button className="btn btn-primary btn-lg">Vélomobile</button>
        </Link>
        <Link to={"/admin/users"}>
          <button className="btn btn-primary btn-lg">Utilisateurs</button>
        </Link>
      </div>
    </>
  );
};

export default AdminPage;

