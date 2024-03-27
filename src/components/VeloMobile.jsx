import { useOutletContext } from "react-router-dom";
import FormPutVeloMobile from "./FormPutVeloMobile";

const VeloMobile = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useOutletContext();
  return (
    <section className="section-velomobile">
      <div className="adminTitle">
        <h3 className="h2">Modèle : {props.veloMobile.model}</h3>
      </div>

      {/* fonctionnalité pour la page "admin/velo" */}

      {!isLoggedIn && (
        <>
          <div className="d-flex justify-content-center">
            <div className="d-flex justify-content-center">
              {/* <div>Image </div>
              <div>Description</div>
              <div>Poids(kg)</div> */}
            </div>

            <div>
              <div>
                <div className="img-thumbnail col-9 rounded mx-auto d-block">
                  <img 
                    id="vm2"
                    src={`/images/velosmobiles/${props.veloMobile.photo}`}
                    alt="foto de velomobile"
                  />
                </div>
                <div className="description-column img-thumbnail col-9 rounded mx-auto d-block">
                  <p>{props.veloMobile.description}</p>
                </div>
                <div >
                  <p>{'Poids : '}{props.veloMobile.weight} {'kg'}</p>
                </div>
              </div>
            </div>
          </div>

         
        </>
      )}

      {/* fonctionnalité pour la page "Modèles" */}

      {isLoggedIn && (
        <>
         
            <table className="table table-striped">
              <thead className="table-thead">
                <tr className="table-tr">
                  <th className="event-image">Image </th>
                  <th className="event-desc">Description</th>
                  <th className="event-poids">Poids</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-tr">
                  <td>
                    <img
                      id="vm2"
                      src={`/images/velosmobiles/${props.veloMobile.photo}`}
                      alt="foto de velomobile"
                    />
                  </td>

                  <td className="table-td">
                    <p>{props.veloMobile.description}</p>
                  </td>
                  <td className="table-td ">
                    <p>{props.veloMobile.weight}Kg</p>
                  </td>
                </tr>
              </tbody>
            </table>
           {props.upVeloMobile && (
            <FormPutVeloMobile
              veloMobile={props.veloMobile}
              handleSubmitFormPutVeloMobile={
                props.handleSubmitFormPutVeloMobile
              }
            />
            )}
            {!props.upVeloMobile && (
              <>
                <button 
                  onClick={() => {
                    props.handleClickDeleteVeloMobile(props.veloMobile);
                  }}
                  className="btn btn-danger mx-2 "
                >
                  Supprimer
                </button>
                <button
                  onClick={() => {
                    props.handleClickBtnUpdateVeloMobile(props.veloMobile);
                  }}
                  className="btn btn-warning"
                >
                  Modifier
                </button>
              </>
            )}
        </>
      )}
    </section>
  );
};
export default VeloMobile;
