import React from "react";
import "./Footer.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col">
          <h2 className="footer-logo">EShop</h2>
          <p className="footer-text">
            Powering Your World with the Best in Electronics.
          </p>
          <p className="footer-text">
            123 Electronics St, Sydney, NY 10001 <br />
            Email: support@zaptro.com <br />
            Phone: (123) 456-7890
          </p>
        </div>
        <div className="footer-col">
          <h3>Customer Service</h3>
          <ul>
            <li>Contact Us</li>
            <li>Shipping & Returns</li>
            <li>FAQs</li>
            <li>Order Tracking</li>
            <li>Size Guide</li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div className="footer-col">
          <h3>Stay in the Loop</h3>
          <p>Subscribe to get special offers, free giveaways, and more.</p>
          <div className="subscribe-box">
            <input type="email" placeholder="Your email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 <span>EShop</span>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
