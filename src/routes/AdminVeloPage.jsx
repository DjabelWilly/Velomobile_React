import { useEffect, useState } from "react";
import VeloMobile from "../components/VeloMobile";
import RemoteData from "../services/RemoteData";
import { useOutletContext } from "react-router-dom";
import FormPostVeloMobile from "../components/FormPostVeloMobile";

import { Link } from "react-router-dom";
// import "../App.css";
// import React from "react";
import { RiHome2Line } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";


/**
 * Composant fonction
 * @returns JSX
 */
const AdminVeloPage = () => {
  // Création d'un état (velosMobiles), création d'un setter correspondant
  // Assignation d'une valeur par défaut
  const [velosMobiles, setVelosMobiles] = useState([]);
  const [veloMobileToUp, setVelosMobilesToUp] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [addingVeloMobile, setAddingVeloMobile] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useOutletContext();

  // Programmation asynchrone : le code suivant ne va s'exécuter qu'après le premier chargement (render) du composant (ici ProductsPage)
  useEffect(() => {
    console.log(`Appel du service qui va aller charger les données`);
    if (errorMsg !== undefined) {
      RemoteData.loadVelosMobiles()
        .then((remoteVelosMobiles) => {
          console.log(`remoteVelosMobiles : `, remoteVelosMobiles);
          // Modification du state qui va impliquer un rechargement de la vue
          // c'est à dire le rappel de render
          setVelosMobiles(remoteVelosMobiles);
        })
        .catch((error) => {
          console.log(`Erreur attrapée dans useEffect : `, error);
          setErrorMsg(error.toString());
        });
    }
  }, [errorMsg]);
  console.log(`dans ProductsPage`);

  //Function Add of buttonClick
  function handleClickBtnAddVeloMobile(veloMobileToUp) {
    console.log(`Dans handleClickBtnAddVelomobile`);
    setAddingVeloMobile((currentValue) => {
      return !currentValue;
    });
  }

  /**
   * Function delete of buttonclick
   * @param {} veloMobileToDelete
   */
  function handleClickDeleteVeloMobile(veloMobileToDelete) {
    console.log(
      `Dans DeleteVeloMobile- vélomobile à supprimer :`,
      veloMobileToDelete
    );
    setVelosMobiles(velosMobiles.filter((vm) => vm !== veloMobileToDelete));

    // Appel du service "RemoteData" pour exécuter une requête http avec le verbe DELETE
    RemoteData.deleteVeloMobile(veloMobileToDelete.id);
  }

  /**
   * Function update of buttonClick
   * @param {} veloMobileToUp
   */
  function handleClickBtnUpdateVeloMobile(veloMobileToUpdate) {
    console.log(`Dans handleUpdateVeloMobile:`, veloMobileToUpdate);
    setVelosMobilesToUp(veloMobileToUpdate.id);
  }

  /**
   * Function update velomobile
   */
  function handleSubmitFormPutVeloMobile(event, veloMobileId) {
    event.preventDefault();
    console.log(
      `Formulaire de modification soumis un vélomobile par son Id :`,
      veloMobileId
    );
    //Create a FormData object from th Form - event.target est une référence vers le formulaire

    const formData = new FormData(event.target);
    const updatedVeloMobile = {
      id: veloMobileId,
      model: formData.get("model"),
      description: formData.get("description"),
      weight: formData.get("weight"),
      photo: formData.get("photo"),
    };

    setVelosMobiles((currentVelosMobiles) => {
      return currentVelosMobiles.map((vm) => {
        if (vm.id === veloMobileId) {
          vm.model = formData.get("model");
          vm.description = formData.get("description");
          vm.weight = formData.get("weigh");
          vm.photo = formData.get("photo");
          console.log(`vm :`, vm);
        }
        return vm;
      });
    });
    setVelosMobilesToUp(0);

    RemoteData.putVeloMobile(updatedVeloMobile)
      .then((data) => {
        console.log(`dans AdminVeloPage`, data);
      })
      .catch((error) => {
        console.error(error);

        //Affichage de l'erreur
        setErrorMsg(
          "Une erreur est apparue lors de la modification du vélomobile"
        );

        //Suppression du message d'erreur lors de 5 secondes
        setTimeout(() => {
          setErrorMsg(undefined);
        }, 5000);
      });
  }
  /**
   * Function post velomobile
   * @param {*} event
   */
  function handleSubmitFormPostVeloMobile(event) {
    event.preventDefault();
    console.log(`Formulaire d'ajout soumis`);
    setAddingVeloMobile(false);
    // Create a FormData object from the form - event.target est une référence vers le formulaire
    const formData = new FormData(event.target);
    const newVeloMobile = {
      id: -1,
      model: formData.get("model"),
      description: formData.get("description"),
      weight: formData.get("weight"),
      photo: formData.get("photo"),
    };
    // il faut maintenant ajouter un object au state velosMobiles
    setVelosMobiles((currentVelosMobiles) => {
      return [...currentVelosMobiles, newVeloMobile];
    });

    event.target.reset();

    // Ajout de ce nouvel objet veloMobile via une requête http POST
    RemoteData.postVeloMobile(newVeloMobile)
      .then((data) => {
        console.log(`data dans productsPage`, data);
        setVelosMobiles((currentVelosMobiles) => {
          return currentVelosMobiles.map((vm) => {
            if (vm.id === -1) vm.id = data.id;
            return vm;
          });
        });
      })
      .catch((error) => {
        console.error(error);
        // Affichage de l'erreur
        setErrorMsg(
          "Une erreur s'est produite lors de l'ajout d'un vélomobile"
        );
        // Suppression du message d'erreur au bout de 5 secondes
        setTimeout(() => {
          setErrorMsg(undefined);
        }, 5000);
      });
  }

  return (
    <>
       {/**
        * Affichage NavBar Administrateur
        */
       }
      <div className="nav-admin">
        <div className="title">
          <h2>Back Office Velomobile</h2>
        </div>
        <div>
          <Link to={"/logout"}>
            <CiLogout size={24} />
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
        {/**
         * Affichage des vélomobiles et bouton
         */}
        <div className="adminTitle col-10">
          <h2 className="produitTitle">Produits</h2>
                          <div className="modeles">
            <div>
              {errorMsg}
              {isLoggedIn && (
                <button
                  onClick={handleClickBtnAddVeloMobile}
                  className="btn btn-success mb-5"
                  id="add-velomobile"> Ajouter un vélomobile
                </button>
              )}
              {isLoggedIn && addingVeloMobile && (
                <FormPostVeloMobile
                  handleSubmitFormPostVeloMobile={handleSubmitFormPostVeloMobile}
                />
              )}
            </div>
            <div className="formImage">
              {velosMobiles &&
                !addingVeloMobile &&
                velosMobiles.map((veloMobile) => (
                  <VeloMobile
                    key={veloMobile.id}
                    veloMobile={veloMobile}
                    handleClickDeleteVeloMobile={handleClickDeleteVeloMobile}
                    handleClickBtnUpdateVeloMobile={handleClickBtnUpdateVeloMobile}
                    handleSubmitFormPutVeloMobile={handleSubmitFormPutVeloMobile}
                    upVeloMobile={veloMobile.id == veloMobileToUp}
                  />
                ))}
            </div>
          </div>
  </div>    
  
      </div>
    
 
    </>
  
  );
};

export default AdminVeloPage;
