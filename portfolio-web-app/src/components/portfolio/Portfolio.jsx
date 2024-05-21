import React from 'react'
import './portfolio.css'
import IMG1 from '../../assest/portfolio1.png'
import IMG2 from '../../assest/portfolio2.png'
import IMG3 from '../../assest/portfolio3.png'
import IMG4 from '../../assest/portfolio4.png'


const data = [
  {id: 1,
    image: IMG1,
    title: 'LogiTrack – Logistics Management Web Application',
    github: 'https://github.com/Maurice-tech/LogiTrack_Backend',
    frontend: 'https://github.com/Maurice-tech/LogiTrack_FrontEnd'
  },

  {id: 2,
    image: IMG2,
    title: 'Fintech Application',
    github: 'https://github.com/Maurice-tech/Fintech-Application',
    frontend: 'https://github.com/Maurice-tech/Fintech-Application'
  },

  {id: 3,
    image: IMG3,
    title: 'FundFlow Web Application',
    github: 'https://github.com/Maurice-tech/Fintech-Application',
    frontend: 'https://github.com/Maurice-tech/Fintech-Application'
  },

  {id: 4,
    image: IMG4,
    title: 'CoutureConnect fashion blog',
    github: 'https://github.com/Maurice-tech/CoutureConnect-API-main-',
    frontend: 'https://github.com/Maurice-tech/CoutureConnect-API-main-'
  },
  
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, frontend})=> {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
             <h3>{title}</h3>
             <div className="portfolio__item-cta">
                <a href= {github} className='btn'>Github</a>
                <a href= {frontend}  className='btn'>FrontEnd</a>
             </div>
            </article>
            )
          })
        }
      

        
      </div>
    </section>
  )
}

export default Portfolio