import React from "react";
import './footer.styles.scss';

function Footer() {
  let cDate = new Date();
  let year = cDate.getFullYear();
  return (
    <footer>
      <span className="note">CA Do Not Sell My Personal Information</span>
      <span>Privacy Policy</span>
      <span>Terms Of Use</span>
      <span>Offer Terms</span>
      <small>&copy;1986-{year} Crown Clothing</small>
      <div className="Social">
        <div className="socialIcon">
          <i class="fab fa-pinterest-square"></i>
        </div>
        <div className="socialIcon">
          <i class="fab fa-twitter-square"></i>
        </div>
        <div className="socialIcon">
          <i class="fab fa-youtube-square"></i>
        </div>
        <div className="socialIcon">
          <i class="fab fa-facebook-square"></i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;