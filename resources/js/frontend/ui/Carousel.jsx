import React, { useState, useEffect, useRef } from "react";

const Carousel = ({ sliders }) => {
    const [current, setCurrent] = useState(0);
    const [uiColor, setUiColor] = useState("#ffffff");
    const [gradient, setGradient] = useState("rgba(0,0,0,0.4)");
    const imgRef = useRef(null);

    // Auto Slide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) =>
                prev === sliders.length - 1 ? 0 : prev + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [sliders.length]);

    // 🎨 Image Color Analysis
    const analyzeImage = () => {
        const img = imgRef.current;
        if (!img) return;

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;

        ctx.drawImage(img, 0, 0);

        const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);

        let r = 0,
            g = 0,
            b = 0,
            count = 0;

        // Fast sampling
        for (let i = 0; i < data.length; i += 80) {
            r += data[i];
            g += data[i + 1];
            b += data[i + 2];
            count++;
        }

        r = Math.floor(r / count);
        g = Math.floor(g / count);
        b = Math.floor(b / count);

        const brightness = 0.299 * r + 0.587 * g + 0.114 * b;

        const textColor = brightness > 140 ? "#000000" : "#ffffff";

        setUiColor(textColor);

        setGradient(
            `linear-gradient(to top, rgba(${r},${g},${b},0.8), rgba(0,0,0,0.2))`
        );
    };

    const nextSlide = () => {
        setCurrent(current === sliders.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? sliders.length - 1 : current - 1);
    };

    return (
        <div className="relative z-0 w-full overflow-hidden">

            {/* Slides */}
            <div className="relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
                {sliders.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-700 ${index === current
                            ? "opacity-100 z-10"
                            : "opacity-0 z-0"
                            }`}
                    >
                        <img
                            ref={index === current ? imgRef : null}
                            src={`/images/slider_images/${slide.image}`}
                            alt={slide.slider_name}
                            onLoad={index === current ? analyzeImage : null}
                            className="w-full h-full object-cover"
                        />

                        {/* 🔥 Gradient Overlay */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.2), rgba(0,0,0,0.1))",
                            }}
                        ></div>

                        {/* Text */}
                        <div
                            className="
        absolute top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2

        text-center text-white

        w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%]
        px-3 sm:px-4 md:px-6

        flex flex-col items-center justify-center
        gap-2 sm:gap-3 md:gap-4
    "
                        >

                            {/* 🔥 HEADER */}
                            <h1
                                className="
            font-bold leading-tight drop-shadow-lg

            text-2xl sm:text-2xl md:text-3xl lg:text-4xl

            max-w-[95%] md:max-w-[80%]
        "
                            >
                                {slide.slider_name}
                            </h1>

                            {/* 📄 DESCRIPTION */}
                            {slide.title && (
                                <p
                                    className="
                font-normal opacity-90 leading-relaxed

                text-xs sm:text-sm md:text-base lg:text-lg p-4

                max-w-[90%] md:max-w-[75%]
            "
                                >
                                    {slide.title}
                                </p>
                            )}

                        </div>
                    </div>
                ))}
            </div>

            {/* 🔥 Buttons (Always Visible) */}
            <button
                onClick={prevSlide}
                style={{
                    backgroundColor: uiColor,
                    color: uiColor === "#ffffff" ? "#000" : "#fff",
                }}
                className="absolute z-10 left-3 top-1/2 -translate-y-1/2 p-2 rounded-full z-50 shadow-lg"
            >
                ❮
            </button>

            <button
                onClick={nextSlide}
                style={{
                    backgroundColor: uiColor,
                    color: uiColor === "#ffffff" ? "#000" : "#fff",
                }}
                className="absolute z-10 right-3 top-1/2 -translate-y-1/2 p-2 rounded-full z-50 shadow-lg"
            >
                ❯
            </button>

            {/* 🔥 Indicators (Always Visible) */}
            <div className="absolute z-10 bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-50">
                {sliders.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => setCurrent(index)}
                        style={{
                            backgroundColor:
                                index === current ? uiColor : "#aaa",
                        }}
                        className={`cursor-pointer rounded-full transition-all duration-300 ${index === current
                            ? "w-4 h-4"
                            : "w-2 h-2"
                            }`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Carousel;