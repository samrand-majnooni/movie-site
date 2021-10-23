import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Card } from "antd";
import imageSrc from '../image';
const {Meta}=Card

export default function MoviesSlider({movies}) {
    return (
        <div>
   
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          
          >
            {movies.map((movie)=>
            (<SwiperSlide>
               <Card
        hoverable
        
        cover={<img alt={movie.original_title} src={imageSrc(movie.poster_path,'w500')} />}
        />
      <Meta title={movie.original_title}/>
    
    <Card/>
     
         </SwiperSlide>
              ))}
        </Swiper>
      </div>
    )
}
