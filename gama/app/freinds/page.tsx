import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function FreindsPage() {
  const cards = [
    { src: '/freinds/friend.png', alt: 'Card 1' },
    { src: '/freinds/image.png', alt: 'Card 2' },
    { src: '/freinds/WhatsApp Image 2026-08-30 at 3.09.30 PM.jpeg', alt: 'Card 3' },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Friends / Business Cards</h1>
      <div className={styles.grid}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image 
                src={card.src} 
                alt={card.alt} 
                fill 
                className={styles.image}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
