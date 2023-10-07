import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/autoplay'

import exImg1 from 'assets/imagens/exercicios/supinoRetoBarra2.jpg'
import exImg2 from 'assets/imagens/exercicios/supinoRetoBarra3.jpg'
import exImg3 from 'assets/imagens/exercicios/roscaDiretaComBarra.png'

import styles from './Carrousel.module.scss'

export default function Carroussel(img1, img2, img3, img4, img5) {
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

                <SwiperSlide className={styles.carrousel__slide}>
                    <img
                        className={styles.imgExercicio}
                        src={exImg1}
                        alt="execução supino reto"
                    />
                </SwiperSlide>

                <SwiperSlide className={styles.carrousel__slide}>
                    <img
                        className={styles.imgExercicio}
                        src={exImg2}
                        alt="execução supino reto"
                    />
                </SwiperSlide>

                <SwiperSlide className={styles.carrousel__slide}>
                    <img
                        className={styles.imgExercicio}
                        src={exImg3}
                        alt="execução supino reto"
                    />
                </SwiperSlide>

                <SwiperSlide className={styles.carrousel__slide}>
                    <img
                        className={styles.imgExercicio}
                        src={exImg2}
                        alt="execução supino reto"
                    />
                </SwiperSlide>
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
