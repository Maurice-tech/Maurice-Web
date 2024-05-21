import React from 'react'
import './nav.css'
import { FaHome } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { RiBook2Fill } from "react-icons/ri";
import { RiServiceFill } from "react-icons/ri";
import { RiMessage2Fill } from "react-icons/ri";
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')}className={activeNav === '#' ? 'active' : ''}><FaHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserEdit/></a>
      <a href="#experience"onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><RiBook2Fill/></a>
      <a href="#service"onClick={() => setActiveNav('#service')} className={activeNav === '#service' ? 'active' : ''}><RiServiceFill/></a>
      <a href="#contact"onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiMessage2Fill/></a>
       

    </nav>
  )
}

export default Nav