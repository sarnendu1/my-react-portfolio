import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            {/* <a href="" className="home__social-icon" target="_blank">
                <FiTwitter />
            </a> */}
            <a href="https://github.com/sarnendu1" className="home__social-icon" target="_blank">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/sarnendudas/" className="home__social-icon" target="_blank">
                <FiLinkedin />
            </a>
        </div> 
    ); 
}

export default Social;