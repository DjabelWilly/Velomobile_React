import React from "react";
import '../App.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
// import { IoIosLogIn } from "react-icons/io";
// import { CiLogout } from "react-icons/ci";
import logo from '../assets/logovelomobile.png';
const Header = ({ isLoggedIn }) => {

//Function useSate () Etat initial "inactive"
  const [switchMenuBurger, setSwitchMenuBurger] = useState("inactive");
  let pathLogged = isLoggedIn ? '/logout' : '/login'

/**
 * Function qui modifie l'état login et a un impact sur l'attribut 
 * @param {*} login 
 * @returns 
 */  
  function logInOutLink(login) {
    if (login) {
        return (<>Déconnexion</>);
        } else return (<>Connexion</>);
     }

/**
 * Function qui modifie l'état switchMenuBurger et a un impact sur l'attribut className de Nav
 */
function switchMenuBurgerClass(){
  const classAction = switchMenuBurger === "inactive" ? "active" : "inactive";
  console.log(`dans switchMenuBurgerClass`, classAction);
  setSwitchMenuBurger(classAction);
}

    return (
      <header>
        <div className="wrap-nav">
          <Link to={"/"}>
            <img src={logo} alt="Logo vélomobile - retour accueil" />
          </Link>
        </div>
        <div id="icons" onClick={switchMenuBurgerClass}></div>

        <nav id="nav" className={switchMenuBurger}>
          <ul className="mt-4">
            {/*------------- Lien à définir pour la navigation --------*/}
            <li className="navbar-item" onClick={switchMenuBurgerClass}>
              <Link to={`/home`}>Accueil</Link>
            </li>
            <li className="navbar-item" onClick={switchMenuBurgerClass}>
              <Link to={`/products`}>Modèles</Link>
            </li>
            <li className="navbar-item" onClick={switchMenuBurgerClass}>
              <Link to={`/madeinlozere`}>Made in Lozère</Link>
            </li>
            <li className="navbar-item" onClick={switchMenuBurgerClass}>
              <Link to={`/histoire`}>Histoire</Link>
            </li>
            <li className="navbar-item" onClick={switchMenuBurgerClass}>
              <Link to={`/showroom`}>Showroom</Link>
            </li>

            {/*------------- Liens définis pour la navigation --------*/}

            <li className="login-out-link" onClick={switchMenuBurgerClass}>
              <Link to={pathLogged}>
                {isLoggedIn ? logInOutLink(true) : logInOutLink(false)}
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Header;