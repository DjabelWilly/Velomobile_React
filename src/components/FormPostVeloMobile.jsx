const FormPostVeloMobile = ({ handleSubmitFormPostVeloMobile }) => {
  return (
    
    <form class="formPost"
      onSubmit={(event) => {
        handleSubmitFormPostVeloMobile(event)
      }}
      
      action="">
      <fieldset>
        <legend>Ajouter un produit</legend>
          <label htmlFor="model">Modèle</label>
          <input type="text" id="model" name="model" />
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" cols="60" rows="5"></textarea>
          <label htmlFor="weight">Poids</label>
          <input type="text" name="weight" id="weight" />
          <label htmlFor="photo">Photo</label>
          <input type="text" id="photo" name="photo" />
          <button type="submit">Envoyer</button>
      </fieldset>
    </form>
    
  );
}

export default FormPostVeloMobile;