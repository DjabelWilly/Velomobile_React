import { Button } from "bootstrap";

const FormContact = () => {
  return (
    <div className="container-form my-5">
      <form
        id="form-contact"
        className="d-flex flex-column d-inline-flex col-md-3">
        <label htmlFor="lastname">Prénom</label>
        <input type="text" id="lastname" />
        <label htmlFor="firstname">Nom</label>
        <input type="text" id="firstname" />
        <label htmlFor="textarea">Votre message</label>
        <textarea id="message" name="" rows="6"></textarea>
        <button className= "form-button btn btn-primary" typre="submit">Envoyer</button>
       
      </form>
    </div>
  );
};

export default FormContact;
