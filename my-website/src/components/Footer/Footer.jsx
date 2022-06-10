import React from 'react';
import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">KolEvg</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiance">Experiance</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/evgeniy.koluschinskiy" target="_blank" rel="noreferrer">
          <FaFacebookF />

        </a>
        <a href="https://instagram.com/skippy.43" target="_blank" rel="noreferrer">
          <FiInstagram />

        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <IoLogoTwitter />

        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Created By Evgeniy Koluschinskiy</small>
      </div>
    </footer>
  );
}

export default Footer;
