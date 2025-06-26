import React, { useEffect } from 'react';
import Link from '@docusaurus/Link';
import Swiper from 'swiper';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import styles from './index.module.css';

interface CarouselItem {
  imageUrl: string;
  link: string;
  buttonText: string;
  title: string;
  subtitle: string;
}

interface CenteredCarouselProps {
  items: CarouselItem[];
}

export default function CenteredCarousel({ items }: CenteredCarouselProps) {
  useEffect(() => {
    const swiper = new Swiper('.centered-swiper-container', {
      modules: [Navigation, Pagination, EffectCoverflow, Autoplay],
      effect: 'coverflow', // Coverflow 효과를 사용하여 2D Flow 느낌을 구현합니다.
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      coverflowEffect: {
        rotate: 10, // 회전 효과 제거
        stretch: 2, // 슬라이드 간 간격
        depth: 2, // 깊이감
        modifier: 2, // 효과 배수
        slideShadows: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className={styles.carouselWrapper}>
      <div className={`swiper-container centered-swiper-container ${styles.swiperContainer}`}>
        <div className="swiper-wrapper">
          {items.map((item, idx) => (
            <div key={idx} className={`swiper-slide ${styles.swiperSlide}`}>
              <img src={item.imageUrl} alt={item.title} />
              <div className={styles.slideContent}>
                <div className={styles.textContainer}>
                    <div className={styles.subtitle}>{item.subtitle}</div>
                    <div className={styles.title}>{item.title}</div>
                </div>
                <Link to={item.link} className={styles.actionButton}>
                  {item.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}
