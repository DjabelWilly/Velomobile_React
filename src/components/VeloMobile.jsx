import { useOutletContext } from "react-router-dom";
import FormPutVeloMobile from "./FormPutVeloMobile";

const VeloMobile = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useOutletContext();

  return (
    <section>
      <h3>Modèle : {props.veloMobile.model}</h3>
      {isLoggedIn &&
        (
          <>         
          {props.velosMobilesToUpdate && <FormPutVeloMobile veloMobile={props.veloMobile} handleSubmitFormPutVeloMobile={props.handleSubmitFormPutVeloMobile}/>}
          
          <button
          onClick={() => {
            props.handleClickDeleteVeloMobile(props.veloMobile);
          }}
          className="btn btn-danger mx-5">Supprimer</button> 
          <button
          onClick={() => {
            props.handleClickBtnUpdateVeloMobile(props.veloMobile);
          }}
          className="btn btn-warning mx-5">Modifier</button>
          </>
        )
      } 

        
      <img id="vm2" src={`/images/velosmobiles/${props.veloMobile.photo}`} alt="" />
      <p>{props.veloMobile.description}</p>
    </section>
  );
}

export default VeloMobile;