import React, { useState } from 'react';

const Carousel = () => {
    const [animationPaused, setAnimationPaused] = useState(false);

    const handleMouseEnter = () => {
        setAnimationPaused(true);
    };

    const handleMouseLeave = () => {
        setAnimationPaused(false);
    };

    return (
        <div
            id="adContainer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ animationPlayState: animationPaused ? 'paused' : 'running' }}
        >
            {/* Content */}
        </div>
    );
};

export default Carousel;