import React from 'react'
import './acheivements.css'
import AcheivementData from './AcheivementData'


// import Swiper core and required modules
import {Pagination, Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import "swiper/modules/navigation/navigation.min.css";

const Acheivements = () => {
  return (
    <section id='acheivements'>
      <h5>My Acheivements</h5>
      <h2>Certificates</h2>
      <Swiper className="container acheivements_container"
            // install Swiper modules
            modules={[ Pagination, Navigation]}
            spaceBetween={5}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={true}
      > 
      {
        AcheivementData.map(({id,image})=>{
          return(                 
                <SwiperSlide key={id} className='acheivements'>
                    <div className="acheivements_photo">
                          <img src= {image} alt='Cetrificate Photo'/>
                    </div>
                </SwiperSlide>
                )
              })
        }
      </Swiper>
    </section>
  )
}

export default Acheivements