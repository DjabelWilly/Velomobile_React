 //import React from "react";
// import "../App.css";
// import { useState } from "react";
 //import { Link } from "react-router-dom";
// import { IoIosLogIn } from "react-icons/io";
// import { CiLogout } from "react-icons/ci";
// // import logo from "../assets/logovelomobile.png";
 import { IoMoonSharp } from "react-icons/io5";
 import { GoSun } from "react-icons/go";
 import { CiLogin } from "react-icons/ci";
// // import { CiLogout } from "react-icons/ci";

// const Header = ({ isLoggedIn, modeSombre, toggleMode }) => {
//   //Function useSate () Etat initial "inactive"
//   const [switchMenuBurger, setSwitchMenuBurger] = useState("inactive");
//   let pathLogged = isLoggedIn ? "/logout" : "/login";

//   /**
//    * Function qui modifie l'état login et a un impact sur l'attribut
//    * @param {*} login
//    * @returns
//    */
//   function logInOutLink(login) {
//     if (login) {
//       return (
//         <>
//           <CiLogout />
//         </>
//       );
//     } else
//       return (
//         <>
//           <CiLogin />
//         </>
//       );
//   }

//   /**
//    * Function qui modifie l'état switchMenuBurger et a un impact sur l'attribut className de Nav
//    */
//   function switchMenuBurgerClass() {
//     const classAction = switchMenuBurger === "inactive" ? "active" : "inactive";
//     console.log(`dans switchMenuBurgerClass`, classAction);
//     setSwitchMenuBurger(classAction);
//     if (switchMenuBurger === "active") setSwitchMenuBurger("slider-responsive");
//     else setSwitchMenuBurger("active");
//   }

//   return (
//     <header>
//       <div className="wrap-nav">
//         <Link to={"/"}>
//           <img src={logo} alt="Logo vélomobile - retour accueil" />
//         </Link>
//       </div>
//       <div id="icons" onClick={switchMenuBurgerClass}></div>


//       <nav id="nav" className={switchMenuBurger}>
//         <ul className="col-9 mt-4">
//           {/*------------- Lien à définir pour la navigation --------*/}
//           <li className="navbar-item" onClick={switchMenuBurgerClass}>
//             <Link to={"/"}>Accueil</Link>
//           </li>
//           <li className="navbar-item" onClick={switchMenuBurgerClass}>
//             <Link to={`/products`}>Modèles</Link>
//           </li>
//           <li className="navbar-item" onClick={switchMenuBurgerClass}>
//             <Link to={`/madeinlozere`}>Made in Lozère</Link>
//           </li>
//           <li className="navbar-item" onClick={switchMenuBurgerClass}>
//             <Link to={`/histoire`}>Histoire</Link>
//           </li>
//           <li className="navbar-item" onClick={switchMenuBurgerClass}>
//             <Link to={`/showroom`}>Showroom</Link>
//           </li>
//         </ul>
//         {/*------------- Liens définis pour la navigation --------*/}
//         {/* icons dark mode */}
//         <div className="d-flex justify-content-end">
//         <ul className="col-3 nav-option d-flex justify-content-center mt-4 mx-2">
//           <li>
//             {modeSombre === "sombre" ? (
//               <GoSun className="sun-icon" onClick={toggleMode} />
//             ) : (
//               <IoMoonSharp className="moon-icon" onClick={toggleMode} />
//             )}
//           </li>
//           {/* icons login/logout */}
//           <li className="login-out-link" onClick={switchMenuBurgerClass}>
//             <Link to={pathLogged}>
//               {isLoggedIn ? logInOutLink(true) : logInOutLink(false)}
//             </Link>
//           </li>
//         </ul>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;


import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { IoIosLogIn } from "react-icons/io";
import logo from '../assets/logovelomobile.png';
import { CiHospital1, CiLogout } from "react-icons/ci";
import { PiPersonSimpleBike } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
import { PiContactlessPaymentThin } from "react-icons/pi";
import { useState } from 'react';

const Header = ({ isLoggedIn, toggleMode, modeSombre }) => {
  const [openCloseMenuBurger, setOpenCloseMenuBurger] = useState("inactive");
  let pathLogged = isLoggedIn ? '/logout' : '/login';

  function logInOutLink(login) {
    if (login) {
      return (<><CiLogout /></>);
    } else return (<><CiLogin /></>);
  }

  function openCloseMenuBurgerClass() {
    setOpenCloseMenuBurger(openCloseMenuBurger === "inactive" ? "active" : "inactive");
  }



  return (
    <header>
      <div className="wrap-nav" id="">
          <div className="logo_container">
            <Link to={'/'} id="logo_link"><img id="logo_img" src={logo} alt="Logo vélomobile - retour accueil" /></Link>
            <div className="burger_container">
              <div id="icons" onClick={openCloseMenuBurgerClass}></div>
            </div>
          </div>
           <ul className='nav_links'>
            <li className=''
              onClick={openCloseMenuBurgerClass}>
              <Link to={`/`}><span>Accueil</span></Link>
            </li>
            <li className='products-link'
              onClick={openCloseMenuBurgerClass}>
              <Link to={`/products`}><span>Modèles</span></Link>
            </li>
            <li className='made-in-lozere' onClick={openCloseMenuBurgerClass}>
              <Link to={`/madeinlozere`}><span>Made in Lozère</span></Link>
            </li>
            <li className='histoire' onClick={openCloseMenuBurgerClass}>
              <Link to={`/histoire`}><span>Histoire</span></Link>
            </li>
            <li className="showroom" onClick={openCloseMenuBurgerClass}>
              <Link to={`/showroom`}><span>Showroom</span></Link>
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
        
        <ul className=''>

            <li className=''
              onClick={openCloseMenuBurgerClass}>
              <Link to={`/`}><span>Accueil</span></Link>
            </li>
            <li className='products-link'
              onClick={openCloseMenuBurgerClass}>
              <Link to={`/products`}><span>Modèles</span></Link>
            </li>
            <li className='made-in-lozere' onClick={openCloseMenuBurgerClass}>
              <Link to={`/madeinlozere`}><span>Made in Lozère</span></Link>
            </li>
            <li className='histoire' onClick={openCloseMenuBurgerClass}>
              <Link to={`/histoire`}><span>Histoire</span></Link>
            </li>
            <li className="showroom" onClick={openCloseMenuBurgerClass}>
              <Link to={`/showroom`}><span>Showroom</span></Link>
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
}

export default Header;
