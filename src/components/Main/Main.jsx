import css from "./Main.module.css";
import play from "../../images/playMarket.png";
import { Gallery } from "../Gallery/Gallery";
import Reviews from "../Reviews/Reviews";

export const Main = () => {
  return (
    <main className={css.main}>
      <section id="hero" className={css.hero}>
        <div className="container">
          <h1 className={css.title}>
            Make “three in a row” combinations and create coziness in every
            corner of your garden!
          </h1>

          <a
            className={css.btnPlay}
            href="https://play.google.com/store/apps/details?id=com.playrix.gardenscapes&hl=en_US"
            target="_blank"
          >
            <img
              className={css.btnPlayImg}
              src={play}
              alt="Download on Google Play"
            />
          </a>
        </div>
      </section>

      <section id="about" className={css.about}>
        <div className="container">
          <h2 className={css.aboutTitle}>ABOUT</h2>
          <p className={css.aboutText}>
            Solve puzzles to restore the garden and move from plot to plot,
            finding new friends in each chapter of the amazing story. Butler
            Austin is ready to open the gates to the world of amazing adventures
            for you!
          </p>
        </div>
      </section>

      <section id="features" className={css.features}>
        <div className="container">
          <h2 className={css.titleFeatures}>GAME FEATURES</h2>
          <ul className={css.featuresList}>
            <li className={css.featuresListItem}>
              <h3 className={css.featuresH3}>DOWNLOADS:</h3>
              <p className={css.featuresItemText}>
                Avilable on the Google Play
              </p>
            </li>
            <li className={css.featuresListItem}>
              <h3 className={css.featuresH3}>RATING:</h3>
              <p className={css.featuresItemText}>4.8 out of 12.8m. ratings</p>
            </li>
            <li className={css.featuresListItem}>
              <h3 className={css.featuresH3}>PRICE:</h3>
              <p className={css.featuresItemText}>Free with in-app purchases</p>
            </li>
            <li className={css.featuresListItem}>
              <h3 className={css.featuresH3}>DEVICES:</h3>
              <p className={css.featuresItemText}>
                Android, iOS, Microsoft Store
              </p>
            </li>
            <li className={css.featuresListItem}>
              <h3 className={css.featuresH3}>AGE:</h3>
              <p className={css.featuresItemText}>
                Suitable for ages 12 and up
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section id="gallery" className={css.gallery}>
        <div className="container">
          <h2 className={css.galleryTitle}>GALLERY</h2>
          <Gallery />
        </div>
      </section>

      <section id="reviews" className={css.reviews}>
        <div className="container">
          <h2 className={css.reviewsTitle}>REVIEWS</h2>
          <Reviews />
        </div>
      </section>
    </main>
  );
};
