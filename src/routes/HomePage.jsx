import Slider from "../components/Slider";

const HomePage = () => {
  return (
    <>
      <div className="container col-10">
        <br />
        <h1 className=" d-flex justify-content-center mt-4">
          Le Velomobile Français
        </h1>
        <br />
        <h2>Le Choix Écologique et Pratique</h2>
        <br />  
           <div id="slider-carousel"><Slider /></div>   
              {/* <div className="d-flex justify-content-center mb-5">
                <img
                  id="vm1"
                  src={`/images/velosmobiles/vm1.png`}
                  alt=""
                  className="img-fluid d-block"
                />
              </div> */}
        <div className="row justify-content-center">
          <div className="text-homePage col-md-6 col-sm-10 col-xs-10 py-3">
            <h2>Durabilité et Écologie</h2>
            Dans notre monde de plus en plus conscient de l'impact
            environnemental, de nombreuses personnes cherchent des moyens de
            réduire leur empreinte carbone tout en restant pratiques et
            confortables.
          </div>

          <div className="text-homePage col-md-6 col-sm-10 col-xs-10 py-3">
            <br />
            Nous avons développé un moyen de locomotion alternatif et durable,
            pour remplacer la voiture... Le vélomobile offre pour vos trajets
            domicile-travail une solution écologique et efficace. <br />
            <a href="velomobile_pluie">
              <strong>
                Se déplacer sous la pluie n'est plus un problème grâce au
                vélomobile
              </strong>
            </a>
          </div>
          <br />
        </div>  
        <div className="row justify-content-center">
          <div className="text-homePage col-md-6 col-sm-10 col-xs-10 py-3">
            <h2>Visibilité et Accessibilité</h2>
            Le vélomobile combine les avantages d'un vélo et d'une voiture. Il
            est conçu pour être efficace en termes d'énergie et offre un moyen
            de transport pratique et confortable pour les trajets quotidiens.
            <br />
            <a href="design_innovant">
              <strong>
                Son design innovant lui offre la possibilité d'être
                utilisé comme support publicitaire.
              </strong>
            </a>
          </div>

          <div className="text-homePage col-md-6 col-sm-10 col-xs-10 py-3">
            <br />
            En tant que véhicule mobile, le vélomobile offre une visibilité et
            une accessibilité sans précédent. Il peut être positionné dans des
            endroits stratégiques pour maximiser l'exposition aux passants et
            aux conducteurs. De plus, sa capacité à se déplacer facilement le
            rend idéal pour les événements publicitaires mobiles, comme les
            promotions de rue ou les défilés.
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
