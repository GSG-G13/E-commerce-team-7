/* eslint-disable import/prefer-default-export */
import React from 'react';
import '../assets/styles/footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li><a href="#1">about us</a></li>
              <li><a href="#1">our services</a></li>
              <li><a href="#1">privacy policy</a></li>
              <li><a href="#1">affiliate program</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li><a href="#1">FAQ</a></li>
              <li><a href="#1">shipping</a></li>
              <li><a href="#1">returns</a></li>
              <li><a href="#1">order status</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>online shop</h4>
            <ul>
              <li><a href="#1">watch</a></li>
              <li><a href="#1">bag</a></li>
              <li><a href="#1">shoes</a></li>
              <li><a href="#1">dress</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="#1"><i className="fab fa-facebook-f" /></a>
              <a href="#1"><i className="fab fa-twitter" /></a>
              <a href="#1"><i className="fab fa-instagram" /></a>
              <a href="#1"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
