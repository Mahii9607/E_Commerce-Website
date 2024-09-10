import React from 'react';
import './Footer.css';  // Import the CSS file for footer styles

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/images/footer.png" alt="Logo" className="footer-logo-img" />
        </div>
        <div className="footer-bottom">
        <p>&copy; 2024 Trend_Corner🥯. All Rights Reserved.</p>
      </div>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/facebook-icon.png" alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/twitter-icon.png" alt="Twitter" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/instagram-icon.png" alt="Instagram" />
          </a>
        </div>
      </div>
    
    </footer>
  );
}

export default Footer;
