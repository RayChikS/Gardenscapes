import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import css from "./Gallery.module.css";
import slide1 from "./slides/slide1.png";
import slide2 from "./slides/slide2.png";
import slide3 from "./slides/slide3.png";
import slide4 from "./slides/slide4.png";
import slide5 from "./slides/slide5.png";

const slides = [slide1, slide2, slide3, slide4, slide5];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "40px",
        height: "50px",
        right: "30px",
        zIndex: 10,
        cursor: "pointer",
        borderRadius: "5px",
      }}
      onClick={onClick}
    >
      <IoIosArrowForward size={40} color="black" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "40px",
        height: "50px",
        left: "30px",
        zIndex: 10,
        cursor: "pointer",
        borderRadius: "5px",
      }}
      onClick={onClick}
    >
      <IoIosArrowBack size={40} color="black" />
    </div>
  );
}

export const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoscroll: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1158,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 428,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={css.sliderContainer}>
      <Slider {...settings} className={css.sliderMob}>
        {slides.map((slide, idx) => (
          <div className={css.slide} key={idx}>
            <img className={css.slideImage} src={slide} alt={`slide-${idx}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
