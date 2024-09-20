import Slider from "react-slick";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from "./Reviews.module.css";

import user1 from "./users/user1.png";
import user2 from "./users/user2.png";
import user3 from "./users/user3.png";
import user4 from "./users/user4.png";
import user5 from "./users/user5.png";

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
        right: "5px",
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
        left: "5px",
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

export const Reviews = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1158,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "0px",
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
    <div className="sliderCard-container">
      <Slider {...settings}>
        <div className={css.card}>
          <img className={css.cardUser} src={user1} alt="user1" />
          <h3 className={css.cardName}>GardenGuru</h3>
          <span>⭐⭐⭐⭐⭐</span>
          <p className={css.cardText}>
            Gardenscapes is a gem for puzzle and garden lovers! Every level is a
            fun challenge, and creating a beautiful garden is so satisfying.
            Highly recommend!
          </p>
        </div>

        <div className={css.card}>
          <img className={css.cardUser} src={user2} alt="user2" />
          <h3 className={css.cardName}>FloraWizard</h3>
          <span>⭐⭐⭐⭐</span>
          <p className={css.cardText}>
            Gardenscapes is exactly what I was looking for! Fun, relaxing, and
            visually stunning. It's a great way to spend your free time!
          </p>
        </div>

        <div className={css.card}>
          <img className={css.cardUser} src={user3} alt="user3" />
          <h3 className={css.cardName}>FlowerFrenzy</h3>
          <span>⭐⭐⭐⭐⭐</span>
          <p className={css.cardText}>
            Amazing game! Gardenscapes blends garden design with engaging
            puzzles perfectly. It's a delightful way to unwind and create
            something beautiful
          </p>
        </div>

        <div className={css.card}>
          <img className={css.cardUser} src={user4} alt="user4" />
          <h3 className={css.cardName}>LeafyLegend</h3>
          <span>⭐⭐⭐⭐⭐</span>
          <p className={css.cardText}>
            Gardenscapes is an adventure! Combining puzzle levels with garden
            design is so enjoyable. The game keeps getting better with each
            update!
          </p>
        </div>

        <div className={css.card}>
          <img className={css.cardUser} src={user5} alt="user5" />
          <h3 className={css.cardName}>PetalPioneer</h3>
          <span>⭐⭐⭐⭐</span>
          <p className={css.cardText}>
            I love Gardenscapes! The graphics are gorgeous, and decorating the
            garden is a blast. It’s a fantastic game for anyone who enjoys
            creativity and puzzles.
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default Reviews;
