import React, { useState } from 'react';

import arrowNext from '../../assets/icons/arrowNext.png';
import arrowPrev from '../../assets/icons/arrowPrevious.png';

import "./banner.scss";

function Banner({ image, alt, text }) {
    const [current, setCurrent] = useState(0);
    const length = Array.isArray(image) ? image.length : 1; // Si image est un tableau, length = nombre d'images, sinon length = 1

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <div className="banner">
            {Array.isArray(image) ? (
                // Si image est un tableau, afficher les images en utilisant map()
                image.map((slide, index) => (
                    <div
                        className={
                            index === current
                                ? "banner_slide active"
                                : "banner_slide inactive"
                        }
                        key={index}
                    >
                        {index === current && (
                            <img className="banner_slide_image" src={slide} alt={alt} />
                        )}
                    </div>
                ))
            ) : (
                // Si image est une seule image, afficher cette seule image
                <div className="banner_slide">
                    <img className="banner_slide_image" src={image} alt={alt} />
                </div>
            )}

            {length > 1 && (
                <>
                    <img
                        className="banner_arrowPrev"
                        src={arrowPrev}
                        alt="précédente"
                        onClick={prevSlide}
                    />
                    <img
                        className="banner_arrowNext"
                        src={arrowNext}
                        alt="suivante"
                        onClick={nextSlide}
                    />
                    <span className="banner_counter">
                        {current + 1}/{length}
                    </span>
                </>
            )}
        <span className="banner_text">{text}</span>
        </div>
    );
}

export default Banner;
