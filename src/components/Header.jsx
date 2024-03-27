
 import { IoMoonSharp } from "react-icons/io5";
 import { GoSun } from "react-icons/go";
 import { CiLogin } from "react-icons/ci";


import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import logo from "../assets/logovelomobile.png";
import { CiLogout } from "react-icons/ci";
import { useState } from "react";

const Header = ({ isLoggedIn, toggleMode, modeSombre }) => {
  const [openCloseMenuBurger, setOpenCloseMenuBurger] = useState("inactive");
  let pathLogged = isLoggedIn ? "/logout" : "/login";

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

  function openCloseMenuBurgerClass() {
    setOpenCloseMenuBurger(
      openCloseMenuBurger === "inactive" ? "active" : "inactive"
    );
  }

  return (
    <header>
      <div className="wrap-nav" id="">
        <div className="logo_container">
          <Link to={"/"} id="logo_link">
            <img
              id="logo_img"
              src={logo}
              alt="Logo vélomobile - retour accueil"
            />
          </Link>
          <div className="burger_container">
            <div id="icons" onClick={openCloseMenuBurgerClass}></div>
          </div>
        </div>
        <ul className="nav_links">
          <li className="" onClick={openCloseMenuBurgerClass}>
            <Link to={`/`}>
              <span>Accueil</span>
            </Link>
          </li>
          <li className="products-link" onClick={openCloseMenuBurgerClass}>
            <Link to={`/products`}>
              <span>Modèles</span>
            </Link>
          </li>
          <li className="made-in-lozere" onClick={openCloseMenuBurgerClass}>
            <Link to={`/madeinlozere`}>
              <span>Made in Lozère</span>
            </Link>
          </li>
          <li className="histoire" onClick={openCloseMenuBurgerClass}>
            <Link to={`/histoire`}>
              <span>Histoire</span>
            </Link>
          </li>
          <li className="showroom" onClick={openCloseMenuBurgerClass}>
            <Link to={`/showroom`}>
              <span>Showroom</span>
            </Link>
          </li>
          <div className="nav_button">
            <li className="login-out-link" onClick={openCloseMenuBurgerClass}>
              <Link to={pathLogged}>
                {isLoggedIn ? logInOutLink(true) : logInOutLink(false)}
              </Link>
            </li>
            <li>
              {modeSombre === "sombre" ? (
                <GoSun className="sun-icon" onClick={toggleMode} />
              ) : (
                <IoMoonSharp className="moon-icon" onClick={toggleMode} />
              )}
            </li>
          </div>
        </ul>
      </div>

      <nav id="nav" className={openCloseMenuBurger}>
        <ul className="">
          <li className="" onClick={openCloseMenuBurgerClass}>
            <Link to={`/`}>
              <span>Accueil</span>
            </Link>
          </li>
          <li className="products-link" onClick={openCloseMenuBurgerClass}>
            <Link to={`/products`}>
              <span>Modèles</span>
            </Link>
          </li>
          <li className="made-in-lozere" onClick={openCloseMenuBurgerClass}>
            <Link to={`/madeinlozere`}>
              <span>Made in Lozère</span>
            </Link>
          </li>
          <li className="histoire" onClick={openCloseMenuBurgerClass}>
            <Link to={`/histoire`}>
              <span>Histoire</span>
            </Link>
          </li>
          <li className="showroom" onClick={openCloseMenuBurgerClass}>
            <Link to={`/showroom`}>
              <span>Showroom</span>
            </Link>
          </li>

          <div className="nav_button">
            <li className="login-out-link" onClick={openCloseMenuBurgerClass}>
              <Link to={pathLogged}>
                {isLoggedIn ? logInOutLink(true) : logInOutLink(false)}
              </Link>
            </li>
            <li>
              {modeSombre === "sombre" ? (
                <GoSun className="sun-icon" onClick={toggleMode} />
              ) : (
                <IoMoonSharp className="moon-icon" onClick={toggleMode} />
              )}
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
