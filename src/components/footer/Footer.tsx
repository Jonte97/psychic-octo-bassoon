import React from "react";
import facebookIcon from "../../assets/icons/facebook.svg";
import instagramIcon from "../../assets/icons/instagram.svg";

const Footer: React.FC = () => {
  return (
    <footer className="footer-component">
      <ul className="social-media-list">
        <li>
          <a href="linktoinstagram.com">
            <img className="svg-icon" src={facebookIcon} alt="icon" />
          </a>
        </li>
        <li>
					<img className="svg-icon" src={instagramIcon} alt="icon" />

				</li>
      </ul>
    </footer>
  );
};

export default Footer;
