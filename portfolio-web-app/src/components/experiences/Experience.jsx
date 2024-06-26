import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon'  />
            <div>
              <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            
            <article className='experience__details'>
            <BsFillPatchCheckFill  className='experience__details-icon' />
           <div> 
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>JavaScript</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Typescript</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>React.js</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Bootstrap</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            
           
          </div>

        </div>
        <div className="experience__backend">
       
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>Java</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            
            <article className='experience__details'>
            <BsFillPatchCheckFill  className='experience__details-icon' />
            <div>
            <h4>Microservice</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>Spring Framework</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>SpringSecurity</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
           <div>
           <h4>Database SQL/NoSQL</h4>
            <small className='text-light'>Experienced</small>
           </div>
            </article>

            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>Docker</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>Git Version Control</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>Test-Driven Development</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            </div>
            
           
          </div>
      </div>

  
    </section>
  )
}

export default Experience