import React from 'react'
import './about.css'
import ME from '../../assest/IMG_7242.jpg';
import { FaAward } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>

          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>

              <FaAward className=''about_icon/>

              <h5>Experience</h5>
              <small>4 Years Working</small>
            </article>
            <article className='about__card'>

              <FaUsers className=''about_icon/>

              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>
            <article className='about__card'>

              <FaFolderOpen className=''about_icon/>

              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
          I am a results-driven and highly skilled Software Developer driven by a passion for pushing technology boundaries. 
          With a proven track record of crafting high-performance, 
          scalable, and user friendly applications. 
          I have years of experience building and collaborating with teams 
          from diverse backgrounds in developing software applications from conception to production. 
          I love learning and adapting quickly to new technologies.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>
    
    </section>
  )
}

export default About