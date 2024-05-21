import React from 'react'
import './service.css'
import { BsCheckLg } from "react-icons/bs";

const Service = () => {
  return (
    <section id='service'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
        <article className='service'>
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Conduct interviews, surveys, and usability testing</p>
            </li>

            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Wireframing and Prototyping</p>
            </li>

            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Information Architecture</p>
            </li>

            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Interaction Design</p>
            </li>

            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Documentation and Design Guidelines</p>
            </li>

            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Collaboration and Communication</p>
            </li>


          </ul>

        </article>
        {/* END OF UI/UX */}

        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Website Design and Development</p>
            </li>

            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Frontend Development</p>
            </li>

            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Backend Development</p>
            </li>

            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Database Management</p>
            </li>

    
            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>API Development and Integration</p>
            </li>

            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Web Hosting and Maintenance</p>
            </li>

            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>User Experience (UX) and Usability Testing</p>
            </li>

            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Implementing Security best practices</p>
            </li>


          </ul>

        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className='service'>
          <div className="service_head">
            <h3>Soft Skills</h3>
          </div>
          <ul className='service_list'>
            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Agile methodologies</p>
            </li>

            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Problem-solving</p>
            </li>

            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Excellent communication</p>
            </li>

            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Project management</p>
            </li>

            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Excellent collaborator</p>
            </li>

            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Collaboration and Communication</p>
            </li>


            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Adaptability and Creativity</p>
            </li>
            

          </ul>

        </article>
        {/* END SOFT SKILLS */}

      </div>

    </section>
  )
}

export default Service