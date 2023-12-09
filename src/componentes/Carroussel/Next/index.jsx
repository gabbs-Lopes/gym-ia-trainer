import { React } from 'react';
import { useSwiper } from 'swiper/react';

import styles from './Next.module.scss'

import iconeNext from 'assets/icones/next.png'

export default function Next() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideNext()} className={styles.btn}>
        <img src={iconeNext} alt="" />
    </button>
  );
}