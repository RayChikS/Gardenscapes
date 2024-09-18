import React, { useState } from "react";
import css from "./Gallery.module.css";
import slide1 from "./slides/slide1.png";
import slide2 from "./slides/slide2.png";
import slide3 from "./slides/slide3.png";
import slide4 from "./slides/slide4.png";
import slide5 from "./slides/slide5.png";

const slides = [slide1, slide2, slide3, slide4, slide5];

export const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className={css.slider}>
      <div className={css.slideContainer}>
        <div
          className={css.slidesWrapper}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className={css.slide}>
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className={css.slideImage}
              />
            </div>
          ))}
        </div>
        <button className={css.navButton} onClick={prevSlide}>
          &lt;
        </button>
        <button className={css.navButton} onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
};
