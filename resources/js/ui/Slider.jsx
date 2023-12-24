import React, { useEffect, useRef, useState } from 'react';
import slider1 from '@/assets/images/slider-image/background.jpg';
import slider2 from '@/assets/images/slider-image/ladies.jpg';
import slider3 from '@/assets/images/slider-image/office.jpg';


let count = 0;
const Slider = () => {
const [currentIndex, setCurrentIndex] = useState(0);
const timeRef = useRef(null);

useEffect(()=>{
timeRef.current = setTimeout(()=>{
  handleNext();
},3000);
});

  const sliderData = [
    {
      image: slider1,
   
    },
    {
      image: slider2
    },
    {
      image: slider3,
    },
  ]
  
    const sliderImg = sliderData.map(slider => slider.image )
    console.log('array', sliderImg);

      const handleNext = ()=>{
        count = (count + 1) % sliderImg.length;
        setCurrentIndex(count);
    };

    const handlePrev = ()=>{
      const serviceLength = sliderImg.length;
      count = (currentIndex + serviceLength - 1) % serviceLength
      setCurrentIndex(count);
    };

    return (
      
        <div className="carousel lg:h-96 sm:h-52 w-full">
          <div id="" className="carousel-item relative w-full">
          <img src= {sliderImg[currentIndex]} alt="" className="w-full" />
          <div className="absolute flex justify-between left-5 right-5 place-self-center">
            <button onClick={handlePrev} className="btn btn-circle">❮</button> 
            <button onClick={handleNext} className="btn btn-circle">❯</button>
          </div>
        </div>
      </div>
    );
};

export default Slider;