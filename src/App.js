import './App.css';
import { Outlet, Link } from "react-router-dom";
import logo from './assets/logovelomobile.png';
import { useState } from 'react';
import './sass/header.scss'
import Footer from './components/Footer';



/**
 * Gère l'affichage du composant App
 * App appelle ici le composant Title avec deux arguments sous la forme de clés/valeurs 
 * en utilisant la syntaxe des balises HTML et de leurs attributs
 * @returns JSX
 */
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <header>
        <div className="wrap-nav">
          <Link to={"/"}>
            {" "}
            <img src={logo} id="logo" alt="Logo vélomobile - retour accueil" />
          </Link>
        </div>
        <nav className='container'>
          <ul className="container d-flex justify-content-around my-2 mb-5">
            <li>
              <Link to={"/"}>Accueil</Link>
            </li>
            <li>
              <Link to={`/products`}>Produits</Link>
            </li>
            <li>
              <Link to={`/histoire`}>Histoire</Link>
            </li>
            <li>
              <Link to={`/presentation`}>made in Lozère</Link>
            </li>
            <li>
              <Link to={`/Showroom`}>Showroom</Link>
            </li>
          </ul>
        </nav>

        <h1>La meilleure alternative à la voiture !</h1>
      </header>

      <main>

        {/* Outlet indique l'endroit où vont s'afficher les composants définis dans les routes enfants */}
        <Outlet context={[isLoggedIn, setIsLoggedIn]} />

      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
