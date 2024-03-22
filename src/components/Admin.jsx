import { Link } from "react-router-dom";
import React from "react";
import { RiHome2Line } from "react-icons/ri";
import "../App.css";
import { CiLogout } from "react-icons/ci";
import FormPostVeloMobile from "./FormPostVeloMobile";


function Admin() {

  return (
    <>
      <div className="nav-admin">
        <div className="title">
          <h2>Back Office Velomobile</h2>
        </div>
        <div>
          <Link to={"/"}>
            <CiLogout  size={24} />
          </Link>
        </div>
      </div>

      <div className="container-fluid d-flex mx-0 px-0">
        <div className="sidebar col-2">
          <div className="container d-flex row mt-5">
            <Link to={"/admin/velo"}>Vélomobile</Link>
            <Link to={"/admin/users"}>Utilisateurs</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
