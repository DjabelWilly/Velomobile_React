import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import FormPostVeloMobile from "../components/FormPostVeloMobile";

const AdminFormVeloPage = () => {
  return (
    <>
      <div className="nav-admin">
        <Link to={"/"}>retour à l'accueil</Link>
      </div>
      <div className="container-fluid d-flex mx-0 px-0">
        <div className="sidebar col-2">
          <div className="container d-flex row mt-5">
            <Link to={"/admin/velo"}>Vélomobile</Link>
            <Link to={"/admin/users"}>Utilisateurs</Link>
          </div>
        </div>
        <div>
          <FormPostVeloMobile />
        </div>
      </div>
    </>
  );
};

export default AdminFormVeloPage;
