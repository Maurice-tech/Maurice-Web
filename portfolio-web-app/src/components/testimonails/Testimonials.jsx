import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assest/decagon.png'
import AVTR2 from '../../assest/about-banner.jpg'
import AVTR3 from '../../assest/south.jpg'
import AVTR4 from '../../assest/nebotv.jpg'

import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const data = [
  {
    avatar: AVTR1,
    name: 'Decagon',
    review: 'A robust congratulations to Maurice and his team for a job well done. We have been trying to put together a functional website since I began my practice in April of 2012. I am happy to say we finally hired your team and they have worked closely with us throughout the process, staying on task, on target, and on budget. I also appreciate their quick and courteous responses. I highly recommend their service!'
  },
  {
    avatar: AVTR2,
    name: 'CodeAlpha',
    review: ' I wanted to take a moment to thank you for the services your team has provided.Your team has been a pleasure to work with, professional and timely. The only delay in work that we have experienced has been due to our own lack of organization managingour projects, not yours. Job well done and I hope we can continue to grow together.'
  },
  {
    avatar: AVTR3,
    name: 'SouthVille Energy',
    review: 'I just checked the app. WELL DONE guys - you made my day!!! Looks really good!'
  },
  {
    avatar: AVTR4,
    name: 'NeboTv',
    review: 'Thank you so much, you guys are the best software devs I have ever dealt with.'
  },

]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
      >
       {
        data.map(({avatar, name, review}, index)=> {
          return (
             <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>

            </SwiperSlide>
          )
        })
       }
      </Swiper>

    
    </section>
  )
}

export default Testimonials