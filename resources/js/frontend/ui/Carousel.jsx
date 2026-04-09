import React, { useState, useEffect, useRef } from "react";

const Carousel = ({ sliders = [] }) => {
  const [current, setCurrent] = useState(0);
  const imgRef = useRef(null);

  // 🔄 Auto Slide
  useEffect(() => {
    if (!sliders.length) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === sliders.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [sliders]);

  // ▶ Next / Prev
  const nextSlide = () => {
    setCurrent((prev) => (prev === sliders.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? sliders.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slides */}
      <div className="relative h-[220px] sm:h-[320px] md:h-[420px] lg:h-[520px]">
        {sliders.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Image */}
            <img
              ref={index === current ? imgRef : null}
              src={`/public/images/slider_images/${slide.image}`}
            //   src={`/images/slider_images/${slide.image}`}
              alt={slide.slider_name}
              className="w-full h-full object-cover"
            />

            {/* 🔥 Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            {/* 🔥 Text Content */}
            <div className="absolute top-1/2 left-1/2 flex w-[90%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 px-3 text-center text-white sm:w-[80%] md:w-[70%] lg:w-[60%] sm:gap-3 md:gap-4">

              {/* Header */}
              <h1 className="max-w-[95%] text-2xl font-bold leading-tight drop-shadow-lg sm:text-3xl md:max-w-[80%] md:text-5xl lg:text-4xl">
                {slide.title}
              </h1>

              {/* Description */}
              {slide.description && (
                <p className="max-w-[90%] text-xs leading-relaxed opacity-90 sm:text-sm md:max-w-[75%] md:text-base lg:text-lg font-serif">
                  {slide.description}
                </p>
              )}

              {/* ✅ Button Added Here */}

                <a
                  href={slide.button_link || "#"}
                  className="mt-3 inline-block bg-indigo-600 text-white px-5 py-2 text-xs sm:text-sm md:text-base font-medium rounded-full shadow-lg hover:bg-indigo-700 transition"
                >
                  For More Details
                </a>

            </div>
          </div>
        ))}
      </div>

      {/* 🔥 Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/80 p-2 text-black shadow-lg hover:bg-white"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/80 p-2 text-black shadow-lg hover:bg-white"
      >
        ❯
      </button>

      {/* 🔥 Indicators */}
      <div className="absolute bottom-4 left-1/2 z-50 flex -translate-x-1/2 gap-2">
        {sliders.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`cursor-pointer rounded-full transition-all duration-300 ${
              index === current ? "h-3 w-3 bg-white" : "h-2 w-2 bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
