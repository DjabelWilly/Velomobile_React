import './App.css';
import { Outlet, Link} from "react-router-dom";
import logo from './assets/logovelomobile.png';
import { useState } from 'react';
import './sass/header.scss'
import Footer from './components/Footer';
import FormContact from './components/FormContact';
// import { Button } from 'bootstrap';
import Button from './components/Button';


/**
 * Gère l'affichage du composant App
 * App appelle ici le composant Title avec deux arguments sous la forme de clés/valeurs 
 * en utilisant la syntaxe des balises HTML et de leurs attributs
 * @returns JSX
 */
function App()
{
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleClick = () => {
    alert('message envoyé!')
  };


return (
  <div className="App">
    <header>
      <div className="wrap-nav">
        <Link to={"/"}>
          <img src={logo} id="logo" alt="Logo vélomobile - retour accueil" />
        </Link>
      </div>
      <nav className='container'>
        <ul className="row justify-content-around my-2 mb-5">
          <li className="col">
            <Link to={"/"}>Accueil</Link>
          </li>
          <li className="col">
            <Link to={`/products`}>Produits</Link>
          </li>
          <li className="col">
            <Link to={`/histoire`}>Histoire</Link>
          </li>
          <li className="col">
            <Link to={`/presentation`}>made in Lozère</Link>
          </li>
          <li className="col">
            <Link to={`/Showroom`}>Showroom</Link>
          </li>
        </ul>
      </nav>

      <h1>La meilleure alternative à la voiture !</h1>
    </header>

    <main>
      <Outlet context={[isLoggedIn, setIsLoggedIn]} />
      <FormContact />
      <Button onClick={handleClick}></Button>
    </main>

    <Footer />
  </div>
);


};

export default App;
