import FormContact from "../components/FormContact";
import Footer from "../components/Footer";

const LandingPagePub = () => {
    return (
      <>
        <h1 className=" d-flex justify-content-center mx-5 mt-5 my-4">
          Le Velomobile Français
        </h1>

        <h2 className="my-4">Choisir le velomobile par temps de pluie</h2>

        <img id="vm1logo" src={`/images/velosmobiles/velopluie.jpg`} alt="" />
        <div className="container my-4" id="containerDesign">
          
            <h3 className="my-4">Les 5 atouts sous la pluie : </h3>
            <p><strong>
              Lorsque la pluie menace de compromettre nos déplacements, le
              velomobile se présente comme une solution ingénieuse et efficace.
              Équipé d'une capote protectrice, ce véhicule offre une protection
              supérieure contre les intempéries, offrant ainsi une expérience de
              conduite agréable et sécurisée, même par temps humide. Voici
              pourquoi le velomobile est idéal sous la pluie grâce à sa capote :
            </strong></p>
          
            <img id="vm1logo" className ="my-4"src={`/images/velosmobiles/capote.jpg`} alt="" />
           
            <p><strong>1-Protection complète:</strong> La capote du velomobile
            enveloppe entièrement l'habitacle, protégeant le conducteur et les
            passagers des précipitations. Contrairement aux vélos traditionnels
            ou aux scooters, où les vêtements peuvent être rapidement trempés,
            la capote du velomobile crée une barrière imperméable qui maintient
            les occupants au sec et à l'abri du vent.
            </p>
            <p><strong>2- Confort accru: </strong>Conduire un velomobile sous la
            pluie est une expérience confortable, même pendant les averses les
            plus intenses. La capote permet de rester au chaud et au sec, créant
            un environnement intérieur agréable et préservant une température
            confortable, même lorsque les conditions météorologiques sont peu
            clémentes.
           </p>
            <p><strong>3-Visibilité améliorée: </strong>La capote du velomobile est
            souvent équipée de fenêtres transparentes, offrant une visibilité
            panoramique sur l'environnement extérieur. Contrairement aux capes
            de pluie ou aux parapluies qui peuvent obstruer la vue, la capote du
            velomobile garantit une vision dégagée, ce qui améliore la sécurité
            du conducteur et des autres usagers de la route.
           </p>
            <p><strong>4-Stabilité et sécurité: </strong> La capote du velomobile
            contribue également à la stabilité et à la sécurité de l'ensemble du
            véhicule. En maintenant une forme aérodynamique, elle réduit la
            prise au vent, ce qui minimise les risques de déstabilisation,
            surtout en cas de rafales de vent associées aux averses.
            </p>
            <p><strong>5-Protection des bagages </strong> : En plus de protéger les
            occupants, la capote du velomobile offre également une protection
            efficace aux bagages ou aux marchandises transportées à l'arrière du
            véhicule. Cela permet aux utilisateurs de transporter leurs effets
            personnels en toute sécurité, sans craindre qu'ils ne soient
            endommagés par la pluie.
            </p>
            <p><b>En conclusion,</b> la capote du velomobile constitue un
            atout indéniable sous la pluie, offrant une protection complète, un
            confort accru, une visibilité améliorée, ainsi qu'une stabilité et
            une sécurité renforcées. Grâce à cette caractéristique distinctive,
            le velomobile se présente comme une option de transport attrayante,
            même lorsque les conditions météorologiques sont défavorables.
          </p>
        </div>

      </>
    );
};

export default LandingPagePub;

