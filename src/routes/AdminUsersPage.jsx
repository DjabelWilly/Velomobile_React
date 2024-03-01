import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { RiHome2Line } from "react-icons/ri";


const AdminUsersPage = () => {
    return (
      <>
        <div className="nav-admin">
          <div className="title">
            <h2>back office Utilisateurs</h2>
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

          <div className="col align-items-center mx-3 py-5">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Nom</th>
                  <th scope="col">prenom</th>
                  <th scope="col">email</th>
                  <th scope="col">roles</th>
                  <th scope="col">mdp</th>
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
                    <button className="btn btn-primary mx-2">Modifier</button>
                    <button className="btn btn-danger">Supprimer</button>
                  </div>
                </tr>
              </tbody>
            </table>
            <div className="d-flex justify-content-end">
              <Link to={"/admin/users/form"}>
                <button className="btn btn-secondary my-5 mx-2">
                  Ajouter utilisateur
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
};




export default AdminUsersPage;