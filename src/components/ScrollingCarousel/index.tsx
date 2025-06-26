import React from 'react';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

interface CarouselItem {
  imageUrl: string;
  link: string;
  buttonText: string;
}

interface ScrollingCarouselProps {
  items: CarouselItem[];
  speed?: string;
}

export default function ScrollingCarousel({ items, speed = '30s' }: ScrollingCarouselProps) {
  const extendedItems = [...items, ...items];

  return (
    <div className={styles.scrollingWrapper}>
      <div className={styles.scrollingContainer}>
        <div className={styles.scrollingTrack} style={{ animationDuration: speed }}>
          {extendedItems.map((item, idx) => (
            <div key={idx} className={styles.scrollingItem}>
              <img src={item.imageUrl} alt="" />
              <Link to={item.link} className={styles.itemOverlay}>
                <span className={styles.actionButton}>{item.buttonText}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
