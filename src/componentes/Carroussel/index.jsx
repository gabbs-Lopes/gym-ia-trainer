import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/autoplay'

/* import exImg2 from 'assets/imagens/exercicios/supinoRetoBarra3.jpg'
import exImg3 from 'assets/imagens/exercicios/roscaDiretaComBarra.png' */
import imgDestaques1 from 'assets/imgDestaques1.png'
import imgDestaques2 from 'assets/imgDestaques2.png'
import imgDestaques3 from 'assets/imgDestaques3.png'

import styles from './Carrousel.module.scss'

export default function Carroussel({ homePage }) {

    console.log("img1.img1")
    return (
        <>
            {homePage ?
                <Swiper
                    modules={[Pagination, Autoplay]}
                    autoplay={
                        {
                            delay: 3000,
                            disableOnInteraction: false
                        }
                    }
                    className={styles.carrouselDestaques}
                >


                    <SwiperSlide className={styles.carrouselDestaques__slide}>
                        <img
                            className={styles.img}
                            src={imgDestaques3}
                            alt={"execução agachamento livre"}
                        />
                    </SwiperSlide>

                    <SwiperSlide className={styles.carrouselDestaques__slide}>
                        <img
                            className={styles.img}
                            src={imgDestaques2}
                            alt={"execução remada maquina com triângulo"}
                        />
                    </SwiperSlide>

                    <SwiperSlide className={styles.carrouselDestaques__slide}>
                        <img
                            className={styles.img}
                            src={imgDestaques1}
                            alt={"homem na academia com pescoço inclinado"}
                        />
                    </SwiperSlide>

                </Swiper>
            :
                <Swiper
                    modules={[Pagination, Autoplay]}
                    autoplay={
                        {
                            delay: 3000,
                            disableOnInteraction: false
                        }
                    }
                    className={styles.carrouselExercicio}
                >


                    <SwiperSlide className={styles.carrouselExercicio__slide}>
                        <img
                            className={styles.img}
                            src={imgDestaques3}
                            alt={"execução agachamento livre"}
                        />
                    </SwiperSlide>

                    <SwiperSlide className={styles.carrouselExercicio__slide}>
                        <img
                            className={styles.img}
                            src={imgDestaques2}
                            alt={"execução remada maquina com triângulo"}
                        />
                    </SwiperSlide>

                    <SwiperSlide className={styles.carrouselExercicio__slide}>
                        <img
                            className={styles.img}
                            src={imgDestaques1}
                            alt={"homem na academia com pescoço inclinado"}
                        />
                    </SwiperSlide>

                </Swiper>

            }





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
