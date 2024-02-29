import React from "react";
import { Link } from "react-router-dom";
import "../App.css";


const AdminUsersPage = () => {
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
                  <th scope="row">1 </th>
                  <td>toto </td>
                  <td>test</td>
                  <td> 35 </td>
                  <td> </td>
                  <div className="d-flex justify-content-end">
                    <button className="btn btn-primary mx-2">Modifier</button>
                    <button className="btn btn-danger">Supprimer</button>
                  </div>
                </tr>
                <tr>
                  <th scope="row"> 2</th>
                  <td>titi </td>
                  <td>x </td>
                  <td>x</td>
                  <td>x</td>
                </tr>
                <tr>
                  <th scope="row"> n</th>
                  <td>x</td>
                  <td>x</td>
                  <td>x</td>
                  <td>x</td>
                </tr>
              </tbody>
            </table>
            <div className="d-flex justify-content-end">
              <Link to={"/admin/form/users"}>
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