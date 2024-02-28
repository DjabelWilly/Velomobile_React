const FormContact = () => {
  return (
    <div className="container-form my-5">
      <h2 className="fst-italic py-3">
        Envie d'en savoir plus? <br /> Contactez-nous!
      </h2>
      <form
        id="form-contact"
        className="d-flex flex-column d-inline-flex col-md-3"
      >
        <label htmlFor="firstname">Prénom</label>
        <input type="text" id="firstname" />
        <label htmlFor="lastname">Nom</label>
        <input type="text" id="lastname" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="message">Votre message</label>
        <textarea id="message" name="" rows="6"></textarea>
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
    </div>
  );
};

export default FormContact;
