const MadeInLozerePage = () => {
  return (
    <>
      <h1 className=" d-flex justify-content-center mx-5 mt-5">
        Le Velomobile Français
      </h1>
      <h2 className="mt-5 ">Notre usine en Lozere</h2>

      <div
        className="container d-inline justify-content-center"
        id="containerUsine"
      >
        <img
          id="usine"
          className="my-4"
          src={`/images/velosmobiles/usine1.jpg`}
          alt=""
        />
        <p className="container justify-content-center py-4 px-5">
          Bienvenue à l'Usine "Le Vélomobile Français", un établissement
          révolutionnaire situé au cœur des paysages préservés de la Lozère.
          Ici, nous combinons l'artisanat traditionnel avec les dernières
          avancées technologiques pour créer des véhicules de mobilité
          personnelle aussi écologiques que performants. Dans notre usine,
          chaque étape de fabrication est minutieusement pensée pour minimiser
          notre empreinte carbone et maximiser notre contribution à la
          préservation de l'environnement. Nous utilisons des matériaux durables
          et recyclables, et notre processus de production est alimenté par des
          sources d'énergie renouvelable telles que le solaire et l'éolien. Nos
          vélocouchés, ou velomobiles, sont bien plus que de simples moyens de
          transport. Ils incarnent une vision d'un avenir où la mobilité urbaine
          est à la fois pratique, respectueuse de l'environnement et agréable.
          Conçus pour offrir un confort inégalé tout en réduisant l'empreinte
          carbone, nos vélos Vélomobile Français sont le choix parfait pour ceux
          qui souhaitent se déplacer de manière écologique sans compromis sur la
          qualité et la performance. En tant qu'entreprise ancrée dans notre
          communauté locale, nous sommes également dévoués à promouvoir un mode
          de vie actif et respectueux de l'environnement. Nous organisons
          régulièrement des événements et des initiatives visant à sensibiliser
          à l'importance du vélo et à encourager son utilisation comme moyen de
          transport quotidien. Choisir un vélo "Le Vélomobile Français", c'est
          non seulement opter pour un moyen de transport écologique et efficace,
          mais c'est aussi rejoindre une communauté engagée pour un avenir plus
          durable. Rejoignez-nous dans notre mission de pédaler vers un avenir
          meilleur, un coup de pédale à la fois.
        </p>
      </div>
    </>
  );
};

export default MadeInLozerePage;
