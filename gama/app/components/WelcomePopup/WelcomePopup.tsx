"use client";

import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import styles from './WelcomePopup.module.css';

const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="वार्षिक उत्सव तथा रक्तदान कार्यक्रम"
      onClick={() => setIsOpen(false)}
    >
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={styles.closeButton}
          aria-label="Close"
          onClick={() => setIsOpen(false)}
        >
          <X size={22} strokeWidth={2.5} />
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/popup/popup.jpeg"
          alt="३३औं वार्षिक उत्सव - रक्तदान कार्यक्रम हार्दिक निमन्त्रणा"
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default WelcomePopup;
