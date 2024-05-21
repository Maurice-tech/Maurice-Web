import React from 'react'
import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Maurice-tech</a>
    <ul className='permalinks'>
    <li><a href="#">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#service">Services</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><a href="#testimonials">Testimonials</a></li>
    <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__socials">
      <a href="https://www.facebook.com/maurice.irene.5?mibextid=LQQJ4d"><FaFacebook/></a>
      <a href="https://x.com/Mau_rene_code"><FaSquareXTwitter/></a>
      <a href="https://www.instagram.com/wizmaurice"><FaSquareInstagram /></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; Maurice Osekhuemen Irene. All rights reserved</small>
    </div>
    </footer>
  )
}

export default Footer