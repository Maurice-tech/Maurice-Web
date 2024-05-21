import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoLogoDribbble } from "react-icons/io5";

const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="https://www.linkedin.com/in/maurice-irene" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/Maurice-tech" target="_blank"><FaGithub /></a>
        <a href="https://dribble.com" target="_blank"><IoLogoDribbble /></a>

    </div>
  )
}

export default HeaderSocial