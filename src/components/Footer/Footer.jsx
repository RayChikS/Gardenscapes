import { NavLink } from "react-router-dom";
import css from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className="container">
        <div className={css.wrapper}>
          <p className={css.disclaimer}>
            <span className={css.span}>DISCLAIMER:</span> GARDENSCAPES.COM IS A
            PLATFORM FOR HAVING FUN. THE PROBABILITY OF WINNING PLAYING THIS APP
            CANNOT BE CONSIDERED THE SAME AS WINNING IN REAL LIFE GAMES. APP IS
            AVAILABLE TO ADULT AUDIENCES OVER 18 YEARS OF AGE. ENJOY PLAYING
            THIS FREE APP!
          </p>
          <NavLink to="/Policy" className={css.links}>
            Privacy Policy
          </NavLink>
          <NavLink to="/Terms" className={css.links}>
            Terms and Conditions
          </NavLink>
          <p className={css.copy}>
            All rights reserved gardenscapes.com | 2024
          </p>
        </div>
      </div>
    </footer>
  );
};
