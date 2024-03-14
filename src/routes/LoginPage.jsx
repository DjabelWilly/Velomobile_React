import { useState } from "react";
import RemoteData from "../services/RemoteData";
import { useOutletContext, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useOutletContext();
  const [errorMsg, setErrorMsg] = useState(false);
  const navigate = useNavigate();
  return (
    <section className="container col-7 col-sm-4 col-md-4 col-lg-3">
      <br />
      <h2>Identification</h2>

      <form
        className="form"
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
          RemoteData.isLogged(login, pwd).then((data) => {
            console.log(`data ?`, data);
            setIsLoggedIn(data);
            if (data) {
              console.log(`redirection vers la page d'accueil`);
              setErrorMsg(false);
              navigate("/admin/");
            } else setErrorMsg(true);
          });
        }}
      >
        <div className="mb-4">
          <label htmlFor="login" className="form-label">
            Identifiant
          </label>
          <input type="text" id="login" name="login" className="form-control" />
        </div>
        <div className="mt-3">
          <label className="mb-2" htmlFor="pwd">
            Mot de passe
          </label>
          <input type="password" id="pwd" name="pwd" className="form-control" />
        </div>
        <button
          className="form-button btn btn-light mx-auto my-3"
          type="submit"
          style={{
            width: "auto",
            border: "1px solid grey",
          }}
        >
          Envoyer
        </button>
      </form>
      {errorMsg && (
        <p className="text-danger h3 align-center">
          Identifiant et/ou mots de passe erronés. Veuillez resaisir à nouveau
        </p>
      )}
    </section>
  );
};

export default LoginPage;
