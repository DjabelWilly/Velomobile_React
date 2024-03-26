import React, { useState } from 'react';

const FormContact = () => {
 const [firstname, setFirstname] = useState('');
 const [lastname, setLastname] = useState('');
 const [email, setEmail] = useState('');
 const [message, setMessage] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour traiter les données du formulaire
    console.log('Formulaire soumis');
 };

 const validate = (e) => {
    // Regex pour la validation
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (e.target.name === 'firstname' || e.target.name === 'lastname') {
      if (!nameRegex.test(e.target.value)) {
        alert('Veuillez entrer un nom valide');
        return false;
      }
    }

    if (e.target.name === 'email') {
      if (!emailRegex.test(e.target.value)) {
        alert('Veuillez entrer un email valide');
        return false;
      }
    }

    if (e.target.name === 'message') {
      if (e.target.value.trim() === '') {
        alert('Veuillez entrer un message');
        return false;
      }
    }

    return true;
 };

 return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstname">Prénom</label>
      <input
        type="text"
        id="firstname"
        name="firstname"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
       
      />

      <label htmlFor="lastname">Nom</label>
      <input
        type="text"
        id="lastname"
        name="lastname"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
       
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        
      />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        
      ></textarea>

      <button type="submit">Envoyer</button>
    </form>
 );
};

export default FormContact;

      // <div className="container-form my-5">
      //   <h2 className="fst-italic py-3">
      //     Envie d'en savoir plus? <br /> Contactez-nous!
      //   </h2>
      //   <form
      //     id="form-contact"
      //     className="d-flex flex-column d-inline-flex col-md-3"
      //     onSubmit={handleSubmit}
      //   >
      //     <label htmlFor="firstname">Prénom</label>
      //     <input
      //       type="text"
      //       id="firstname"
      //       value={firstname}
      //       onChange={(e) => setFirstname(e.target.value)}
      //     />
      //     <label htmlFor="lastname">Nom</label>
      //     <input
      //       type="text"
      //       id="lastname"
      //       value={lastname}
      //       onChange={(e) => setLastname(e.target.value)}
      //     />
      //     <label htmlFor="email">email</label>
      //     <input
      //       type="email"
      //       id="email"
      //       value={email}
      //       onChange={(e) => setEmail(e.target.value)}
      //     />
      //     <label htmlFor="message">Votre message</label>
      //     <textarea
      //       id="message"
      //       name=""
      //       rows="6"
      //       value={message}
      //       onChange={(e) => setMessage(e.target.value)}
      //     ></textarea>
      //     <button
      //       className="form-button btn btn-light mx-auto my-3"
      //       type="submit"
      //       style={{
      //         width: "auto",
      //         border: "1px solid grey",
      //       }}
      //     >
      //       Envoyer
      //     </button>
      //   </form>
      // </div>
   
