import React, { useState } from "react";
import '../../src/App.css'


const Slider = ({images}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () =>{
        setCurrentIndex((prevIndex)=>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };
    const prevSlide = ()=>{
        setCurrentIndex((prevIndex)=>
        prevIndex === 0 ? images.length - 1 : prevIndex -1
        );
    };
    const slideStyle = {
      transform: `translateX(-${currentIndex * 400}px)`, 
    };

    return(
    <div className="slider">
    <button className="btn" onClick={prevSlide}>{'<'}</button>
    <div className="slider-container">
        <div className="slider-content" style={slideStyle}>
          {images.map((image, index) => (
            <div className="slide" key={index}>
              <img width={400} src={image} alt={`Slide ${index + 1}`}  />
              
            </div>
          ))}
          
        </div>
      </div>
    <button className="btn" onClick={nextSlide}>{'>'}</button>
  </div>
 );
};
export default Slider;