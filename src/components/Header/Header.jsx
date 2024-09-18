import { useState, useEffect, useRef } from "react";
import css from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/gardenLogo.png";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Using useRef to track clicks outside the menu
  const menuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Close menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false); // Close menu
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.wrapper}>
          <NavLink to="/" className={css.logo}>
            <img className={css.logoImg} src={logo} alt="Logo" />
          </NavLink>

          {/* Burger btn */}
          <div className={css.burger} onClick={toggleMobileMenu}>
            <span className={css.burgerLine}></span>
            <span className={css.burgerLine}></span>
            <span className={css.burgerLine}></span>
          </div>

          {/* MobileNav */}
          <nav
            ref={menuRef}
            className={`${css.nav} ${isMobileMenuOpen ? css.navOpen : ""}`}
          >
            {/* Close btn */}
            <button className={css.closeButton} onClick={toggleMobileMenu}>
              &times;
            </button>
            <ul className={css.navList}>
              <li className={css.navListItem}>
                <a href="#">Home</a>
              </li>
              <li className={css.navListItem}>
                <a href="#">About</a>
              </li>
              <li className={css.navListItem}>
                <a href="#">Features</a>
              </li>
              <li className={css.navListItem}>
                <a href="#">Gallery</a>
              </li>
              <li className={css.navListItem}>
                <a href="#">Reviews</a>
              </li>
            </ul>
          </nav>

          {/* DesktopNav*/}
          <nav className={css.desktopNav}>
            <ul className={css.navList}>
              <li className={css.navListItem}>
                <a href="#">Home</a>
              </li>
              <li className={css.navListItem}>
                <a href="#">About</a>
              </li>
              <li className={css.navListItem}>
                <a href="#">Features</a>
              </li>
              <li className={css.navListItem}>
                <a href="#">Gallery</a>
              </li>
              <li className={css.navListItem}>
                <a href="#">Reviews</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
