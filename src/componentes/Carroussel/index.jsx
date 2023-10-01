import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/autoplay'

import styles from './Carrousel.module.scss'

export default function Carroussel() {
    return (
        <>
            <Swiper
                modules={[Pagination, Autoplay]}
                autoplay={
                    {
                        delay: 3000,
                        disableOnInteraction: false
                    }
                }
                className={styles.carrousel}
            >

                <SwiperSlide 
                    className={styles.carrousel__slide}
                >Slide 1
                </SwiperSlide>
                
                <SwiperSlide className={styles.carrousel__slide}>Slide 2</SwiperSlide>
                <SwiperSlide className={styles.carrousel__slide}>Slide 3</SwiperSlide>
                <SwiperSlide className={styles.carrousel__slide}>Slide 4</SwiperSlide>
            </Swiper>
            {/* <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            ...
          </Swiper> */}
        </>
    )
}
