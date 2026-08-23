"use client";

import React from 'react';
import Image from 'next/image';
import styles from './PartnersSection.module.css';

const partnersData = Array.from({ length: 7 }, (_, i) => ({
  id: i + 1,
  title: `साझेदार ${i + 1}`,
  image: '/landing/freinds.png',
}));

const PartnersSection = () => {
  return (
    <section className={styles.partnersSection}>
      <div className={styles.header}>
        <div className={styles.tag}>
          <span></span>
          हाम्रा सहयात्रीहरू
          <span></span>
        </div>
        <h2 className={styles.title}>सहकार्य तथा <strong>साझेदार</strong></h2>
      </div>

      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {/* Group 1 */}
          <div className={styles.marqueeGroup}>
            {partnersData.map((partner) => (
              <div className={styles.card} key={`g1-${partner.id}`}>
                <div className={styles.imageWrapper}>
                  <Image 
                    src={partner.image} 
                    alt={partner.title} 
                    fill 
                    className={styles.image}
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Group 2 (Duplicate for seamless scroll) */}
          <div className={styles.marqueeGroup}>
            {partnersData.map((partner) => (
              <div className={styles.card} key={`g2-${partner.id}`}>
                <div className={styles.imageWrapper}>
                  <Image 
                    src={partner.image} 
                    alt={partner.title} 
                    fill 
                    className={styles.image}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
