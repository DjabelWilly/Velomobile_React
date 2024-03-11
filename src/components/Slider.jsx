import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function Slider() {
    const pictures = [
        {
            id:"1",
            model:"Modèle : LVF",
            description:"Le vélo mobile français qui a fait ses preuves",
            photo:"./images/velosmobiles/vm1.png"	

        },
        {
            id:"2",
            model:"Modèle : LVF",
            description:"Le vélo mobile sportif aux performances incroyables",
            photo:"./images/velosmobiles/vm2.png"
        },
        {
            id:"3",
            model:"",
            description:"Se déplacer sous la pluie n'est plus un problème grâce au vélomobile",
            photo:"./images/velosmobiles/velopluie.jpg"
        },
        {
            id:"4",
            model:"",
            description:"Son design innovant lui offre la possibilité d'être utilisé comme support publicitaire",
            photo:"./images/velosmobiles/vm1logo.png"
        }
    ]

    
    return <Carousel id="slider-carousel"
             autoPlay
             centreMode
             interval={4000} 
             infiniteLoop 
             thumbWidth={120}
             showIndicators={false}
             showStatus={false}

            >
              {pictures.map(slide=>(
                <div className="imgs-container" key={slide.id}>
                    <img src={slide.photo} className="imgs-slider" alt="le velomobile made in lozere"/>
                    <div className="overlay">
                        <h2 className="overlay_title">{slide.description}</h2>
                        <p className="overlay_description">{slide.model}</p>
                    </div>
                
                </div>
              )
              )}  
              

           </Carousel>
}
export default Slider