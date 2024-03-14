import { useState } from "react";
import RemoteData from "../services/RemoteData";
import { useOutletContext, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useOutletContext();
  const [errorMsg, setErrorMsg] = useState(false);
  const navigate = useNavigate();
  return (
    <section>
      <br />
      <h2>Identification</h2>
      
      <form className="form"
        onSubmit={(event) => {
          console.log(`Formulaire soumis`);
          event.preventDefault();
          // Create a FormData object from the form
          const formData = new FormData(event.target);
          console.log(`formData`, formData.entries());

          const login = formData.get("login");
          const pwd = formData.get("pwd");
          console.log(`login`, login, "pwd", pwd);
          //event.target.reset();
          // Vérification du l'utilisateur via un service
          RemoteData.isLogged(login, pwd)
            .then((data) => {
              console.log(`data ?`, data);
              setIsLoggedIn(data);
              if (data) {
                console.log(`redirection vers la page d'accueil`);
                setErrorMsg(false);
                navigate('/admin/');
              }else setErrorMsg(true);
            });

        }}
      >
      <div>
        <label htmlFor="login" className="form-label">Identifiant</label>
        <input type="text" id="login" name="login" className="form-control" />
      </div> 
      <div>
        <label htmlFor="pwd">Mot de passe</label>
        <input type="password" id="pwd" name="pwd" className="form-control"/>
      </div>
        <button type="submit">Envoyer</button>
      </form>
        {errorMsg && (
        <p className="text-danger h3 align-center">Identifiant et/ou mots de passe erronés. Veuillez resaisir à nouveau</p>
      )}
    </section>


  );
}

export default LoginPage;