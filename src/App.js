import './App.css';
import { Outlet} from "react-router-dom";
import { useState } from 'react';
// import './sass/header.scss'
import Footer from './components/Footer';
import FormContact from './components/FormContact';
// import { Button } from 'bootstrap';
import Header from './components/Header';

/**
 * Gère l'affichage du composant App
 * App appelle ici le composant Title avec deux arguments sous la forme de clés/valeurs 
 * en utilisant la syntaxe des balises HTML et de leurs attributs
 * @returns JSX
 */
function App()
{
  const [isLoggedIn, setIsLoggedIn] = useState(false);



return (
  <div className="App">
      <Header isLoggedIn={isLoggedIn} />
    <main>
      <Outlet context={[isLoggedIn, setIsLoggedIn]} />
      <FormContact />
      
    </main>

    <Footer />
  </div>
);


};

export default App;
