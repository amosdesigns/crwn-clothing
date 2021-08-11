import React from "react";
import { Link } from "react-router-dom";
import './footer.styles.scss';

function Footer() {
  let cDate = new Date();
  let year = cDate.getFullYear();
  return (
    <footer>
      <span className="note">CA Do Not Sell My Personal Information</span>
      <span>
        <Link to="#"></Link>
        Privacy Policy
      </span>
      <span>
        <Link to="#"></Link>
        Terms Of Use
      </span>
      <span>
        <Link to="#"></Link>
        Offer Terms
      </span>
      <small>&copy;1986-{year} Crown Clothing</small>
      <div className="Social">
        <div className="socialIcon">
          <a href="https://www.patreon.com/BFAMCooking">
             <i className="fab fa-pinterest-square"></i>
          </a>
        </div>
        <div className="socialIcon">
          <a href="https://twitter.com/bfam_cooking">
          <i className="fab fa-twitter-square"></i>
          </a>
        </div>
        <div className="socialIcon">
          <a href="https://youtube.com/c/bfamcooking?
sub_confirmation=1">
         
          <i className="fab fa-youtube-square"></i>
          </a>
        </div>
        <div className="socialIcon">
          <a href="https://www.facebook.com/BFAMCOOKING"> 
          <i className="fab fa-facebook-square"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;