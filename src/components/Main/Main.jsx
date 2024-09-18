import css from "./Main.module.css";
import play from "../../images/playMarket.png";

export const Main = () => {
  return (
    <header className={css.main}>
      <section className={css.hero}>
        <div className="container">
          <h1 className={css.title}>
            Make “three in a row” combinations and create coziness in every
            corner of your garden!
          </h1>

          <a className={css.btnPlay} href="#">
            <img
              className={css.btnPlayImg}
              src={play}
              alt="Download on Google Play"
            />
          </a>
        </div>
      </section>

      <section className={css.about}>
        <div className="container"></div>
      </section>

      <section className={css.features}>
        <div className="container"></div>
      </section>

      <section className={css.gallery}>
        <div className="container"></div>
      </section>

      <section className={css.reviews}>
        <div className="container"></div>
      </section>
    </header>
  );
};
