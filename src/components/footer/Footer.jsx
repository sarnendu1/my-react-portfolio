import React from "react";
import "./footer.css";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = ({
  home,
  about,
  skills,
  services,
  qualification,
  portfolio,
  contact,
  scrollToSection,
}) => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Sarnendu Das</h1>
        <ul className="footer__list">
          <li>
            <a onClick={() => scrollToSection(about)} className="footer__link">
              About
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection(skills)} className="footer__link">
              Skills
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollToSection(services)}
              className="footer__link"
            >
              Services
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollToSection(qualification)}
              className="footer__link"
            >
              Experiences
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollToSection(portfolio)}
              className="footer__link"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollToSection(contact)}
              className="footer__link"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="footer__social">
          {/* <a href="https://twitter.com/cyphrsylph" className="home__social-icon" target="_blank" rel="noreferrer">
                    <FiTwitter />
                </a> */}
          <a
            href="https://github.com/sarnendu1"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sarnendudas/"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin />
          </a>
        </div>
        <span className="footer__copy">
          Copyright ©2023Sarnendu All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
