import { useOutletContext } from "react-router-dom";
import FormPutVeloMobile from "./FormPutVeloMobile";

// const VeloMobile = (props) => {
//   const [isLoggedIn, setIsLoggedIn] = useOutletContext();

//   return (
//     <section>
//       <h3>Modèle : {props.veloMobile.model}</h3>
//       {isLoggedIn &&
//         (
//           <>         
//           {props.upVelosMobile && <FormPutVeloMobile veloMobile={props.veloMobile} handleSubmitFormPutVeloMobile={props.handleSubmitFormPutVeloMobile}/>}
//           {!props.upVeloMobile && (
//           <>
          
//           <button
//           onClick={() => {
//             props.handleClickDeleteVeloMobile(props.veloMobile);
//           }}
//           className="btn btn-danger mx-5">Supprimer</button> 
//           <button
//           onClick={() => {
//             props.handleClickBtnUpdateVeloMobile(props.veloMobile);
//           }}
//           className="btn btn-warning mx-5">Modifier</button>
//           </>
//         )} 
//       </>
//         )}  
//       <img id="vm2" src={`/images/velosmobiles/${props.veloMobile.photo}`} alt="" />
//       <p>{props.veloMobile.description}</p>
//     </section>
//   );
// }

const VeloMobile = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useOutletContext();
  return (
    <section className="section-velomobile d-flex justify-content-between gap-1">
      <h3 className="h2">{props.veloMobile.model}</h3>
      {isLoggedIn &&
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
        )}
      {!isLoggedIn && (<>
        <img id="vm2"  src={`/images/velosmobiles/${props.veloMobile.photo}`} alt="" className="mb-5" />
        <p className="mb-2" >{props.veloMobile.description}</p>
        
        <p className="mb-2">{props.veloMobile.weight}</p>
      </>)
      }

    </section >
  );
}
export default VeloMobile;