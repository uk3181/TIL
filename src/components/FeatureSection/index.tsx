import React from 'react';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import clsx from 'clsx';

export interface FeatureSectionProps {
  id: string;
  title: React.ReactNode;
  subtitle?: string;
  description: React.ReactNode;
  imageUrl: string;
  links: { label: string; href: string }[];
  size: 'small' | 'big';
  contentAlign?: 
    | 'top-left' | 'top-center' | 'top-right'
    | 'center-left' | 'center' | 'center-right'
    | 'bottom-left' | 'bottom-center' | 'bottom-right';
  isDark?: boolean;
}

export default function FeatureSection({
  id,
  title,
  subtitle,
  description,
  imageUrl,
  links,
  size,
  contentAlign = 'center',
  isDark = false,
}: FeatureSectionProps) {

  return (
    <section
      id={id}
      className={clsx(
        styles.heroSection,
        styles[size],
        isDark ? styles.darkSection : styles.lightSection
      )}
    >
      <img src={imageUrl} alt={id} className={styles.backgroundImage} />
      <div className={styles.overlay}></div>
      <div className={clsx(styles.heroContent, styles[`align-${contentAlign}`])}>
        {subtitle && <h2 className={styles.heroSubtitle}>{subtitle}</h2>}
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroDescription}>{description}</p>
        <div className={styles.heroLinks}>
          {links.map((link, idx) => (
            <Link key={idx} className={styles.heroLink} to={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
