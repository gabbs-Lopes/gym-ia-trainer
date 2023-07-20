import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react' 
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/scss' 
import 'swiper/scss/autoplay' 
import styles from './Sobrenos.module.scss'

export default function Carrousel() {
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
                className={styles.swiper}
            >
                <SwiperSlide >

                </SwiperSlide>
                <SwiperSlide >
                </SwiperSlide>
                <SwiperSlide >
                </SwiperSlide>
            </Swiper>
        </>
    )
}
