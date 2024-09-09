import React, { useState, useEffect } from "react";
import "../../../css/carousel.css";

const Carousel = ({ sliders }) => {
    console.log("sliders", sliders); // Log sliders to ensure data is being passed correctly
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        // Auto-slide every 5 seconds (adjust the timing as needed)
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) =>
                prevSlide === sliders.length - 1 ? 0 : prevSlide + 1
            );
        }, 5000);

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [sliders.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === sliders.length - 1 ? 0 : prevSlide + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? sliders.length - 1 : prevSlide - 1
        );
    };

    return (
        <div className="carousel-container">
            <div className="carousel">
                {sliders.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={
                            index === currentSlide ? "slide active" : "slide"
                        }
                    >
                        <img
                            src={`/${slide.image}`} // Assuming the image is stored in the "storage" folder
                            alt={slide.slider_name}
                            className="w-full h-auto object-cover"
                        />
                        <h3>{slide.slider_name}</h3>
                    </div>
                ))}
                <button className="prev" onClick={prevSlide}>
                    &#10094;
                </button>
                <button className="next" onClick={nextSlide}>
                    &#10095;
                </button>
            </div>
            <div className="indicators">
                {sliders.map((_, index) => (
                    <span
                        key={index}
                        className={
                            index === currentSlide
                                ? "indicator active"
                                : "indicator"
                        }
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
