import React, { useState } from "react";

const FormContact = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMsg, setsuccessMsg] = useState(false);

  // Regex pour la validation
  const letterRegex = /^[a-zA-Z]+$/; // Autorise uniquement les lettres
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Caractères standards autorisés pour email
  const messageRegex = /^[a-zA-Z\s]+$/;

  const handleSubmit = (event) => {
    event.preventDefault();

    // Fonctions de validation
    const validations = {
      letters: () => {
        if (!letterRegex.test(firstname) || !letterRegex.test(lastname)) {
          alert(
            "Les champs prénom, nom et message doivent contenir uniquement des lettres sans espaces."
          );
          return false;
        }
        return true;
      },
      message: () => {
        if (!messageRegex.test(message)) {
          alert("Ce champ doit contenir uniquement des lettres et des espaces");
          return false;
        }
        return true;
      },
      email: () => {
        if (!emailRegex.test(email)) {
          alert("Veuillez entrer une adresse email valide.");
          return false;
        }
        return true;
      },
      emptyFields: () => {
        if (
          firstname === "null" ||
          firstname === "undefined" ||
          firstname === "" ||
          lastname === "null" ||
          lastname === "undefined" ||
          lastname === "" ||
          email === "null" ||
          email === "undefined" ||
          email === "" ||
          message === "null" ||
          message === "undefined" ||
          message === ""
        ) {
          alert("Tous les champs doivent être remplis.");
          return false;
        }
        return true;
      },
    };

    // Exécuter les validations
    for (const key in validations) {
      if (!validations[key]()) {
        return; // Si une validation échoue, arrêtez l'exécution
      }
    }

    // Si toutes les validations passent, passez à la soumission du formulaire
  };

  return (
    <div className="container-form py-5">
      <h2 className="fst-italic py-3">
        Envie d'en savoir plus? <br /> Contactez-nous!
      </h2>
      <form
        id="form-contact"
        className="d-flex flex-column d-inline-flex col-md-3 my-5"
        onSubmit={() => {
          if (handleSubmit) {
            //  console.log(`redirection vers la page d'accueil`);
            setsuccessMsg(false);
            //  navigate("/");
          } else setsuccessMsg(true);
          //  alert("votre message à bien été envoyé");

          //  successMsg && (
          //    <p className="text-danger h3 align-center">
          //      votre message à bien été envoyé
          //    </p>
          //  );
        }}
      >
        <label htmlFor="firstname">Prénom</label>
        <input
          type="text"
          id="firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <label htmlFor="lastname">Nom</label>
        <input
          type="text"
          id="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="message">Votre message</label>
        <textarea
          id="message"
          name=""
          rows="6"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
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

      {successMsg && (
        <p className="text-danger h3 align-center">
          Identifiant et/ou mots de passe erronés. Veuillez resaisir à nouveau
        </p>
      )}
    </div>
  );
};

export default FormContact;
