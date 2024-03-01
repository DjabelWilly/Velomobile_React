import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import FormPutVeloMobile from "../components/FormPutVeloMobile";


const AdminFormUsersPage = () => {
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
        <form
          id="form-contact"
          className="d-flex flex-column d-inline-flex col-md-3"
        >
          <label htmlFor="firstname">Prénom</label>
          <input type="text" id="firstname" />
          <label htmlFor="lastname">Nom</label>
          <input type="text" id="lastname" />
          <label htmlFor="email">email</label>
          <input type="email" id="email" />
          <label htmlFor="roles">roles</label>
          <input type="text" id="roles" />
          
          <button
            className="form-button btn btn-light mx-auto my-3"
            type="submit"
            style={{
              width: "auto",
              border: "1px solid grey",
            }}
          >
            Envoyer
          </button>
        </form>
      </div>
    </>
  );
};

export default AdminFormUsersPage;
