import './App.css';
import { Outlet} from "react-router-dom";
import { useState } from 'react';
// import './sass/header.scss'
import Footer from './components/Footer';
import FormContact from './components/FormContact';
// import { Button } from 'bootstrap';
import Header from './components/Header';
import Slider from './components/Slider';

/**
 * Gère l'affichage du composant App
 * App appelle ici le composant Title avec deux arguments sous la forme de clés/valeurs 
 * en utilisant la syntaxe des balises HTML et de leurs attributs
 * @returns JSX
 */
function App()
{
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [modeSombre, setModeSombre] = useState("clair");

function toggleMode(){
  if(modeSombre === "clair") setModeSombre("sombre");
  else setModeSombre ("clair");
  console.log('dans tooglemode')
}

return (
<div className={modeSombre}> 
  <div className='App'>
      <Header isLoggedIn={isLoggedIn} toggleMode={toggleMode} modeSombre={modeSombre}/>
    <main>
      
      <Outlet context={[isLoggedIn, setIsLoggedIn]} />
      <FormContact />
      
    </main>

    <Footer />
  </div>
</div> 
);


};

export default App;
