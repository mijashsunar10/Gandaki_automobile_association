"use client";

import React from 'react';
import Image from 'next/image';
import styles from './CertificateSection.module.css';

const certificates = [
  {
    id: 1,
    title: 'संस्था दर्ता प्रमाणपत्र',
    image: '/dartavayekoprmadpatra.webp',
  },
  {
    id: 2,
    title: 'प्यान (PAN) दर्ता प्रमाणपत्र',
    image: '/dartavayekoprmadpatra.webp',
  },
  {
    id: 3,
    title: 'नवीकरण प्रमाणपत्र',
    image: '/dartavayekoprmadpatra.webp',
  },
  {
    id: 4,
    title: 'आबद्धता प्रमाणपत्र',
    image: '/dartavayekoprmadpatra.webp',
  }
];

const CertificateSection = () => {
  return (
    <section className={styles.certificateSection}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <div className={styles.tag}>
            <span></span>
            कानूनी मान्यता
            <span></span>
          </div>
          <h2 className={styles.title}>
            संस्था दर्ता तथा <strong>प्रमाणपत्रहरू</strong>
          </h2>
          <p className={styles.description}>
            गण्डकी अटो मेकानिकल वर्क्स एसोसिएसन नेपाल सरकारको सम्बन्धित निकायमा विधिवत रूपमा दर्ता भई सञ्चालनमा रहेको एक वैधानिक तथा आधिकारिक संस्था हो। हाम्रो संस्थाका सम्पूर्ण कानूनी तथा आधिकारिक प्रमाणपत्रहरू तल प्रस्तुत गरिएको छ।
          </p>
        </div>

        <div className={styles.grid}>
          {certificates.map((cert) => (
            <div className={styles.certCard} key={cert.id}>
              <div className={styles.imageFrame}>
                <div className={styles.imageWrapper}>
                  <Image 
                    src={cert.image} 
                    alt={cert.title} 
                    fill 
                    className={styles.image}
                  />
                </div>
                <div className={styles.downloadOverlay}>
                  <a href={cert.image} target="_blank" rel="noopener noreferrer" className={styles.downloadBtn}>
                    <i className="fa-solid fa-magnifying-glass-plus"></i> ठूलो हेर्नुहोस्
                  </a>
                </div>
              </div>
              <h3 className={styles.certTitle}>{cert.title}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CertificateSection;
