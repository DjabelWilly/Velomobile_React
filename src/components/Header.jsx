import React from "react";
import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logovelomobile.png";
import { IoMoonSharp } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";

const Header = ({ isLoggedIn, modeSombre, toggleMode }) => {
  //Function useSate () Etat initial "inactive"
  const [switchMenuBurger, setSwitchMenuBurger] = useState("inactive");
  let pathLogged = isLoggedIn ? "/logout" : "/login";

  /**
   * Function qui modifie l'état login et a un impact sur l'attribut
   * @param {*} login
   * @returns
   */
  function logInOutLink(login) {
    if (login) {
      return (
        <>
          <CiLogout />
        </>
      );
    } else
      return (
        <>
          <CiLogin />
        </>
      );
  }

  /**
   * Function qui modifie l'état switchMenuBurger et a un impact sur l'attribut className de Nav
   */
  function switchMenuBurgerClass() {
    const classAction = switchMenuBurger === "inactive" ? "active" : "inactive";
    console.log(`dans switchMenuBurgerClass`, classAction);
    setSwitchMenuBurger(classAction);
    if (switchMenuBurger === "active") setSwitchMenuBurger("slider-responsive");
    else setSwitchMenuBurger("active");
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
        <ul className="col-9 mt-4">
          {/*------------- Lien à définir pour la navigation --------*/}
          <li className="navbar-item" onClick={switchMenuBurgerClass}>
            <Link to={"/"}>Accueil</Link>
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
        </ul>
        {/*------------- Liens définis pour la navigation --------*/}
        {/* icons dark mode */}
        <div className="d-flex justify-content-end">
          <ul className="col-3 nav-option d-flex justify-content-center mt-4 mx-2">
            <li>
              {modeSombre === "sombre" ? (
                <GoSun className="sun-icon" onClick={toggleMode} />
              ) : (
                <IoMoonSharp
                  style={{ fontSize: "20px" }}
                  className="moon-icon"
                  onClick={toggleMode}
                />
              )}
            </li>
            {/* icons login/logout */}
            <li className="login-out-link" onClick={switchMenuBurgerClass}>
              <Link to={pathLogged}>
                {isLoggedIn ? logInOutLink(true) : logInOutLink(false)}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
