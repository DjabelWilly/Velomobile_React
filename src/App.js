import './App.css';
import { Outlet, useLocation} from "react-router-dom";
import { useState } from 'react';
import './sass/header.scss'
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
  const [modeSombre, setModeSombre] = useState("clair");


  function toggleMode() {
    modeSombre === "clair" ? setModeSombre("sombre") : setModeSombre("clair")  
  console.log('dans tooglemode')
}

// une conditionnelle qui check si l'utilisateur est sur la page admin
// si oui on désactive le composant header
// si non on le laisse afficher
let url = useLocation();
let isOnAdminPage = false
  

if (url.pathname.includes("admin")) {
   isOnAdminPage =true
}

return (
<div className={modeSombre}> 
  <div className='App'>
    {/** une conditionelle ou ternaire pour avoir le composant header en optionnel */}
    {
      isOnAdminPage ? null : <Header isLoggedIn={isLoggedIn} toggleMode={toggleMode} modeSombre={modeSombre}/>
    }
    <main>
      
      <Outlet context={[isLoggedIn, setIsLoggedIn]} isLoggedIn={isLoggedIn} toggleMode={toggleMode} modeSombre={modeSombre}/>    
    
    {
      isOnAdminPage ? null : <FormContact/>
    }
    </main>
     {
      isOnAdminPage ? null : <Footer />
    }
    
  </div>
</div> 
);


};

export default App;



