import { useOutletContext } from "react-router-dom";
import FormPutVeloMobile from "./FormPutVeloMobile";



const VeloMobile = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useOutletContext();
  return (
    <section className="section-velomobile ">
      <div className="adminTitle">
        <h3 className="h2">Modèle : {props.veloMobile.model}</h3>
      </div>
      
      {/* {isLoggedIn &&
        (
          <>
            {props.upVeloMobile && <FormPutVeloMobile veloMobile={props.veloMobile} handleSubmitFormPutVeloMobile={props.handleSubmitFormPutVeloMobile} />}
            {!props.upVeloMobile && (
              <>
                <img id="vm2" className="mb-5" src={`/images/velosmobiles/${props.veloMobile.photo}`} alt="" />
                <p className="mb-2">{props.veloMobile.description}</p>
                <section className="admin-bar w-25">
                  <button
                    onClick={() => {
                      props.handleClickDeleteVeloMobile(props.veloMobile);
                    }}
                    className="btn btn-danger mx-2">Supprimer</button>
                  <button
                    onClick={() => {
                      props.handleClickBtnUpdateVeloMobile(props.veloMobile);
                    }}
                    className="btn btn-warning">Modifier</button>
                </section>
              </>)}
          </>
        )} */}
      {!isLoggedIn && (<>
      <table class="table table-striped">
            <thead>
              <tr> 
                <th scope="col">Image </th> 
                <th scope="col">Description</th>
                <th scope="col">Poids(kg)</th>
              </tr>
           </thead>
            <tbody>
              <tr>
                <th scope="column"> 
                
                  <img id="vm2"  src={`/images/velosmobiles/${props.veloMobile.photo}`} alt="foto de velomobile"  />
                </th>
                <td>
                  <p className="mb-2" >{props.veloMobile.description}</p>
                </td>
                <td> 
                  <p className="mb-2">{props.veloMobile.weight}</p>
                </td>
              </tr>
            </tbody>
      </table>  
            
                  <button
                    onClick={() => {
                      props.handleClickDeleteVeloMobile(props.veloMobile);
                    }}
                    className="btn btn-danger mx-2">Supprimer
                  </button>
                  <button
                    onClick={() => {
                      props.handleClickBtnUpdateVeloMobile(props.veloMobile);
                    }}
                    className="btn btn-warning">Modifier
                  </button>
                         
      </>)
      
      }

    </section >
  );
}
export default VeloMobile;