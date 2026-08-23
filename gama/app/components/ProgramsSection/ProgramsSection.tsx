"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProgramsSection.module.css';

interface ProgramsSectionProps {
  isHomepage?: boolean;
}

import { programsData } from './programsData';

const ProgramsSection: React.FC<ProgramsSectionProps> = ({ isHomepage = false }) => {
  const displayPrograms = isHomepage ? programsData.slice(0, 4) : programsData;

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      
      <section className={styles.gamaProgramsSection}>
        <div className={styles.gamaBgShape + ' ' + styles.gamaBgBlue}></div>
        <div className={styles.gamaBgShape + ' ' + styles.gamaBgRed}></div>

        <div className={styles.gamaProgramsContainer}>
          
          <div className={styles.gamaProgramsHeader}>
            <div className={styles.gamaSectionTag}>
              <span></span>
              गण्डकी अटो मेकानिकल वर्क्स एसोसिएसन
              <span></span>
            </div>
            <h2>हाम्रा <strong>कार्यक्रमहरू</strong></h2>
            <p>
              संस्थाले अटोमोबाइल क्षेत्रको विकास र सदस्यहरूको सीप अभिवृद्धिका लागि
              आयोजना गरेका विभिन्न कार्यक्रम तथा गतिविधिहरू।
            </p>
          </div>

          <div className={styles.gamaProgramsGrid}>
            {displayPrograms.map((program) => (
              <article className={styles.gamaProgramCard} key={program.id}>
                
                <div className={styles.cardImageWrapper}>
                  <div className={styles.cardBadge}>{program.status}</div>
                  <Image 
                    src={program.image}
                    alt={program.title}
                    width={400}
                    height={250}
                    className={styles.cardImage}
                  />
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.cardMeta}>
                    <span className={styles.metaItem}>
                      <i className="fa-solid fa-calendar-days"></i>
                      {program.date}
                    </span>
                    <span className={styles.metaItem}>
                      <i className="fa-solid fa-location-dot"></i>
                      {program.location}
                    </span>
                  </div>
                  
                  <h3 className={styles.cardTitle}>{program.title}</h3>
                  <p className={styles.cardDesc}>{program.desc}</p>
                  
                  <Link href={`/programs/${program.id}`} className={styles.cardButton}>
                    थप विवरण हेर्नुहोस् <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>

              </article>
            ))}
          </div>

          {isHomepage && (
            <div className={styles.viewAllContainer}>
              <Link href="/programs" className={styles.viewAllButton}>
                सबै कार्यक्रमहरू हेर्नुहोस् <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          )}

        </div>
      </section>
    </>
  );
};

export default ProgramsSection;
