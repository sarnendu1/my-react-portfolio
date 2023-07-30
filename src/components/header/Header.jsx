import React, { useState } from "react";
import "./header.css";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineBadgeCheck,
  HiOutlineClipboardList,
  HiOutlinePhotograph,
  HiOutlineMail,
  HiX,
  HiOutlineMenu,
} from "react-icons/hi";

const Header = ({
  home,
  about,
  skills,
  services,
  qualification,
  portfolio,
  contact,
  scrollToSection,
}) => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo"></a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                onClick={() => scrollToSection(home)}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <HiOutlineHome className="nav__icon" />
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                onClick={() => scrollToSection(about)}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <HiOutlineUser className="nav__icon" />
                About
              </a>
            </li>
            <li className="nav__item">
              <a
                onClick={() => scrollToSection(skills)}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <HiOutlineBadgeCheck className="nav__icon" />
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                onClick={() => scrollToSection(services)}
                className={
                  activeNav === "#services"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <HiOutlineClipboardList className="nav__icon" />
                Services
              </a>
            </li>
            <li className="nav__item">
              <a
                onClick={() => scrollToSection(qualification)}
                className={
                  activeNav === "#experiences"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <HiOutlineBadgeCheck className="nav__icon" />
                Experiences
              </a>
            </li>

            <li className="nav__item">
              <a
                onClick={() => scrollToSection(portfolio)}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <HiOutlinePhotograph className="nav__icon" />
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a
                onClick={() => scrollToSection(contact)}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <HiOutlineMail className="nav__icon" />
                Contact
              </a>
            </li>
          </ul>
          <HiX className="nav__close" onClick={() => showMenu(!Toggle)} />
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <HiOutlineMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
