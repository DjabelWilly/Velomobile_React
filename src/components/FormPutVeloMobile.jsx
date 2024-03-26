import { useState } from "react";

const FormPutVeloMobile = ({veloMobile,handleSubmitFormPutVeloMobile }) => {
console.log(`veloMobile dans FormPutVeloMobile`, veloMobile);

const [checked, setChecked] =useState(true)
const toogleCheck = () =>{
  setChecked(!checked)
}
  return (
    <form className="formPut"
      onSubmit={(event) => {
        handleSubmitFormPutVeloMobile(event, veloMobile.id)
      }}
      action="">
      <fieldset className="fieldsetput"> 
        <legend className="legendput">Modification</legend>
            <label htmlFor="model" className="form-label">Modèle</label>
            <input type="text" id="model" name="model" defaultValue={veloMobile.model} />
            <label htmlFor="description" className="form-label">Description</label>
            <textarea name="description" id="description" >{veloMobile.description}</textarea>
            <label htmlFor="weight" className="form-label">Poids</label>
            <input type="text" name="weight" id="weight" defaultValue={veloMobile.weight}/>
            <label htmlFor="photo" className="form-label">Photo</label>
            <input type="text" id="photo" name="photo" defaultValue={veloMobile.photo} />
            <button type="submit">Envoyer</button>
      </fieldset> 
      <button  disabled = {!checked} id="retour">Retour</button>
    </form>
  );
}

export default FormPutVeloMobile;