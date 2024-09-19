import Slider from "react-slick";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from "./Reviews.module.css";

export const Reviews = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className={css.card}>
          <h3 className={css.cardName}>1</h3>
          <span>⭐⭐⭐⭐⭐</span>
          <p className={css.cardText}></p>
        </div>
        <div className={css.card}>
          <h3 className={css.cardName}>2</h3>
          <span>⭐⭐⭐⭐</span>
          <p className={css.cardText}></p>
        </div>
        <div className={css.card}>
          <h3 className={css.cardName}>3</h3>
          <span>⭐⭐⭐⭐⭐</span>
          <p className={css.cardText}></p>
        </div>
        <div className={css.card}>
          <h3 className={css.cardName}>4</h3>
          <span>⭐⭐⭐⭐⭐</span>
          <p className={css.cardText}></p>
        </div>
        <div className={css.card}>
          <h3 className={css.cardName}>5</h3>
          <span>⭐⭐⭐⭐</span>
          <p className={css.cardText}></p>
        </div>
      </Slider>
    </div>
  );
};

export default Reviews;
