import AdminPage from "../AdminPage";
import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { RiHome2Line } from "react-icons/ri";
import "../App.css";
import { Outlet } from "react-router-dom";


function Admin({isLoggedIn}) {

  return (
    <>
      <div className="nav-admin">
        <div className="title">
          <h2>back office Velomobile</h2>
        </div>
        <div>
          <Link to={"/"}>
            <RiHome2Line size={24} />
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
        <Outlet context={[isLoggedIn,]} />

        {/* <div className="col align-items-center mx-3 py-5">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Nom</th>
                <th scope="col">Description</th>
                <th scope="col">poids</th>
                <th scope="col">image </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"> </th>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <div className="d-flex justify-content-end">
                  <Link to={"/velo/putForm"}>
                    <button className="btn btn-primary mx-2">Modifier</button>
                  </Link>
                  <button className="btn btn-danger">Supprimer</button>
                </div>
              </tr>
            </tbody>
          </table>
          <div className="d-flex justify-content-end">
            <Link to={"/admin/velo/form"}>
              <button className="btn btn-secondary my-5 mx-2">
                Ajouter vélomobile
              </button>
            </Link>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Admin;
