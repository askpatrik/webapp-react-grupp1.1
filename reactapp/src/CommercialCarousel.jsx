import React from 'react';
import Bild from './Images/svtbild.png';

function Carousel() {
    return (
    
        <div className="col">
            <div className="ad-carousel">
                <div id="adContainer" className="ad-container">
                    <a href="http://www.cocacola.com"><img src={Bild} alt={Bild} /> </a>
                    <a href="http://www.cocacola.com"><img src={Bild} alt={Bild} /> </a>
                    <a href="http://www.cocacola.com"><img src={Bild} alt={Bild} /> </a>
                    <a href="http://www.cocacola.com"><img src={Bild} alt={Bild} /> </a>
                  
                </div>
            </div>
        </div>

    )
}

export default Carousel;