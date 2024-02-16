const HistoirePage = () => {
  return (
    <>
      <h1 className=" d-flex justify-content-center mx-5 mt-5">
        Le Velomobile Français
      </h1>
      <h2 className="mt-5">L'histoire du vélomobile</h2>
      <br />

      <div className="containerhistoire" id="containerhistoire">
        <div className="image">
          <div>
            <img
              id="usine"
              src={`/images/velosmobiles/velomobile.png`}
              alt=""
            />
          </div>
          <div>
            <img
              id="usine"
              src={`/images/velosmobiles/velomobile2.png`}
              alt=""
            />
          </div>
        </div>

        <div className="" id="histoireTexte">
          <p>
            {" "}
            L'histoire du vélo mobile remonte au 19e siècle avec le
            développement des premiers véhicules à propulsion humaine.
          </p>
          <p>
            {" "}
            Voici une chronologie simplifiée des étapes clés de cette évolution
            :
          </p>
          <p>
            (1817-1860) : Les premières idées de véhicules à propulsion humaine
            remontent au début du 19e siècle. En 1817, Karl Drais, un inventeur
            allemand, a créé le premier véhicule à deux roues appelé la
            "Draisienne" ou "Laufmaschine". C'était un véhicule à pédales que
            les gens propulsaient en poussant avec leurs pieds.
          </p>
          <p>
            (1860-1870) : En 1861, un Écossais du nom de Gavin Dalzell améliore
            la Draisienne en ajoutant un pédalier et des pédales aux roues
            avant, créant ainsi un véritable mécanisme de propulsion à pédales.
            Le terme "vélocipède" est ensuite utilisé pour décrire ces nouvelles
            machines.
          </p>
          <p>
            (1870-1880) : Dans les années 1870, les "Grand-Bi" ou "Bicyclettes à
            grande roue" deviennent populaires. Ces vélos avaient une grande
            roue avant et une petite roue arrière. Ils étaient difficiles à
            manœuvrer et dangereux en raison de leur hauteur.
          </p>
          <p>
            (1880-1890) : Pour résoudre les problèmes de sécurité des Grand-Bi,
            la "bicyclette de sécurité" émerge dans les années 1880. Elle avait
            des roues de taille plus égale et un cadre plus bas, rendant la
            conduite plus stable et accessible.
          </p>
          <p>
            (1880-1900) : En parallèle, le tricycle se développe comme une
            alternative plus stable aux bicyclettes. Les tricycles offraient une
            option plus sûre, particulièrement pour les femmes de l'époque.
          </p>
          <p>
            (1900-1970) : Au début du 20e siècle, le concept du vélo pliant
            commence à apparaître. Les vélos pliants étaient compacts et
            pratiques pour le stockage et le transport. Ils gagnent en
            popularité, surtout pendant les périodes de guerre.
          </p>
          <p>
            (1970-présent) : À partir des années 1970, le concept de vélo couché
            devient plus répandu. Les cyclistes adoptent des positions plus
            aérodynamiques pour améliorer l'efficacité. Certains modèles de
            vélos couchés sont conçus de manière à être couverts, créant ainsi
            une version plus protégée appelée "vélo mobile". Véhicules à
            propulsion électrique{" "}
          </p>
          <p>
            (2000-présent) : Avec les avancées technologiques, des véhicules à
            propulsion électrique, y compris des vélos mobiles électriques, ont
            gagné en popularité. Ces véhicules offrent une alternative durable
            et écologique pour les déplacements urbains.
          </p>
        </div>
      </div>
    </>
  );
};

export default HistoirePage;
