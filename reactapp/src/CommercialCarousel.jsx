import React, { useState } from 'react';
import Bild from './Images/svtbild.png';

const Carousel = () => {
    const [animationPaused, setAnimationPaused] = useState(false);

    const handleMouseEnter = () => {
        setAnimationPaused(true);
    };

    const handleMouseLeave = () => {
        setAnimationPaused(false);
    };

    return (
        <div className="col">
            <div className="ad-carousel">
                <div
                    id="adContainer"
                    className="ad-container"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{ animationPlayState: animationPaused ? 'paused' : 'running' }}
                >
                    <a href="http://www.cocacola.com">
                        <img src={Bild} alt="Image 1" />
                    </a>
                    <a href="http://www.cocacola.com">
                        <img src={Bild} alt="Image 2" />
                    </a>
                    <a href="http://www.cocacola.com">
                        <img src={Bild} alt="Image 3" />
                    </a>
                    <a href="http://www.cocacola.com">
                        <img src={Bild} alt="Image 4" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
