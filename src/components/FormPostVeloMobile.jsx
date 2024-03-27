

const FormPostVeloMobile = ({ handleSubmitFormPostVeloMobile }) => {

  
  return (
    <form
      className="formPost rounded mx-auto d-block"
      onSubmit={(event) => {
        handleSubmitFormPostVeloMobile(event);
      }}
      action=""
    >
      <fieldset className="fieldsetpost">
        <legend className="legendpost">Ajouter un produit</legend>
        <label htmlFor="model">Modèle</label>
        <input type="text" id="model" name="model" />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          // cols="60"
          // rows="5"
        ></textarea>
        <label htmlFor="weight">Poids</label>
        <input type="text" name="weight" id="weight" />
        <label htmlFor="photo">Photo</label>
        <input type="text" id="photo" name="photo" />
        <button type="submit">Envoyer</button>
      </fieldset>
      <button  id="retour">
        Retour
      </button>
    </form>
  );
}

export default FormPostVeloMobile;