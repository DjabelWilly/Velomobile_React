import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { RiHome2Line } from "react-icons/ri";


const AdminUsersPage = () => {
    return (
      <>
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
    {/* {isLoggedIn && (
                <FormPostVeloMobile handleSubmitFormPostVeloMobile={handleSubmitFormPostVeloMobile} />
              )}
              {errorMsg && (
                <h3 className="text-danger">{errorMsg}</h3>
              )} */}

                    <button className="btn btn-danger">Supprimer</button>
                  </div>
                </tr>
              </tbody>
            </table>
            <div className="d-flex justify-content-end">
              <Link to={"/users/form"}>
                <button className="btn btn-secondary my-5 mx-2">
                  Ajouter utilisateur
                </button>
              </Link>
            </div>
          </div>
      </>
    );
};




export default AdminUsersPage;