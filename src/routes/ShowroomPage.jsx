const ShowroomPage = () => {
    return (
      <>
        <h1 className=" d-flex justify-content-center mx-5 mt-5">
          Le Velomobile Français
        </h1>
        <br />
        <h2>Nos Showrooms</h2>
        <br />
        <br />

        <div className="container" id="containerShowroom">
          <img id="agde" src={`/images/velosmobiles/agde.png`} alt="agde" />
          <br />
          <strong>Agde:</strong>
          13 rue Toto <br />
          34300 Agde <br />
          +33 934 132 455 <br />
          info-agde@levelomobile.fr
          <br />
          <br />
          <br />
          <br />
          <img id="salon" src={`/images/velosmobiles/salon.png`} alt="salon" />
          <br />
          <strong>Salon de Provence:</strong>
          4 rue de tonton <br />
          13300 Salon de Provence <br />
          +33 934 134 445 <br />
          info-salon@levelomobile.fr
          <br />
          <br />
          <br />
          <br />
          <img id="salon" src={`/images/velosmobiles/cass.png`} alt="cassis" />
          <br />
          <strong>Cassis:</strong>
          4 rue de Tata <br />
          13260 Cassis <br />
          +33 944 152 755 <br />
          info-cassis@levelomobile.fr
          <br />
          <br />
          <br />
          <br />
          <img
            id="stnazaire"
            src={`/images/velosmobiles/stnazaire.png`}
            alt="stnazaire"
          />
          <br />
          <strong>Saint Nazaire:</strong>
          7 rue des nazes <br />
          44600 Saint-Nazaire <br />
          +33 434 032 455 <br />
          info-stnazaire@levelomobile.fr
          <br />
          <br />
          <br />
          <br />
        </div>
      </>
    );
}

export default ShowroomPage;