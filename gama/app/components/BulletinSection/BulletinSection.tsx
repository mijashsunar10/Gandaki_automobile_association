"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './BulletinSection.module.css';

const BulletinSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalContentRef = useRef<HTMLDivElement>(null);

  const pdfUrl = "/karekram.pdf";

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "";
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(err => console.log(err));
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (modalContentRef.current?.requestFullscreen) {
        modalContentRef.current.requestFullscreen().catch(err => console.log(err));
      }
    } else {
      document.exitFullscreen().catch(err => console.log(err));
    }
  };

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  // Close when clicking outside the modal content
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      {/* FontAwesome Link */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

      <section className={styles.gamaBulletinSection}>
        <div className={styles.gamaBulletinContainer}>

          {/* SECTION HEADER */}
          <div className={styles.gamaBulletinHeading}>
            <div className={styles.gamaBulletinTag}>
              <span></span>
              गण्डकी अटो मेकानिकल वर्क्स एसोसिएसन
              <span></span>
            </div>
            <h2>
              २०८२ सालका <strong>काम तथा कार्यक्रमहरू</strong>
            </h2>
            <p>
              संस्थाले २०८२ सालमा सम्पन्न गरेका विभिन्न काम,
              कार्यक्रम तथा गतिविधिहरूको विवरण एकै ठाउँमा हेर्नुहोस्।
            </p>
          </div>

          {/* FEATURED REPORT */}
          <div className={styles.gamaFeaturedBulletin} onClick={openModal}>
            
            {/* LEFT PREVIEW */}
            <div className={styles.gamaBulletinPreview}>
              <div className={styles.gamaPreviewGlow}></div>
              <div className={styles.gamaDocument}>
                <Image
                  src="/landing/image copy 5.png"
                  alt="२०८२ सालका काम तथा कार्यक्रमहरू"
                  width={430}
                  height={360}
                  className={styles.image}
                />
                <div className={styles.gamaDocumentOverlay}>
                  <i className="fa-regular fa-file-pdf"></i>
                  <span>२०८२ सालका काम तथा कार्यक्रम</span>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className={styles.gamaBulletinInfo}>
              <div className={styles.gamaBulletinNumber}>
                <span>०१</span>
                <div></div>
                काम तथा कार्यक्रम
              </div>
              
              <h3>
                २०८२ सालका
                <span>काम तथा कार्यक्रम</span>
              </h3>
              
              <p className={styles.gamaBulletinDescription}>
                यसमा २०८२ सालमा गण्डकी अटो मेकानिकल वर्क्स
                एसोसिएसनद्वारा सम्पन्न गरिएका विभिन्न काम,
                कार्यक्रम तथा संस्थागत गतिविधिहरूको विवरण
                प्रस्तुत गरिएको छ।
              </p>
              
              <div className={styles.gamaBulletinMeta}>
                <div>
                  <i className="fa-regular fa-calendar"></i>
                  <span>वर्ष २०८२</span>
                </div>
                <div>
                  <i className="fa-regular fa-file-pdf"></i>
                  <span>PDF विवरण</span>
                </div>
              </div>
              
              <button className={styles.gamaViewBulletin} type="button" onClick={(e) => { e.stopPropagation(); openModal(); }}>
                <span>काम तथा कार्यक्रम हेर्नुहोस्</span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PDF MODAL */}
      <div 
        className={`${styles.gamaPdfModal} ${isModalOpen ? styles.gamaModalOpen : ''}`}
        aria-hidden={!isModalOpen}
        onClick={handleModalClick}
      >
        <div className={styles.gamaModalContent} ref={modalContentRef}>
          {/* MODAL HEADER */}
          <div className={styles.gamaModalHeader}>
            <div className={styles.gamaModalTitle}>
              <i className="fa-regular fa-file-pdf"></i>
              <h3>२०८२ सालका काम तथा कार्यक्रमहरू</h3>
            </div>
            
            <div className={styles.gamaModalActions}>
              <button
                title="पूर्ण स्क्रिन"
                type="button"
                aria-label="पूर्ण स्क्रिन"
                onClick={toggleFullscreen}
              >
                <i className="fa-solid fa-expand"></i>
              </button>
              
              <button
                className={styles.gamaCloseBtn}
                title="बन्द गर्नुहोस्"
                type="button"
                aria-label="बन्द गर्नुहोस्"
                onClick={closeModal}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
          
          {/* PDF VIEWER */}
          {isModalOpen && (
            <iframe
              className={styles.gamaPdfViewer}
              src={pdfUrl}
              title="२०८२ सालका काम तथा कार्यक्रमहरू"
              loading="lazy"
            ></iframe>
          )}
        </div>
      </div>
    </>
  );
};

export default BulletinSection;
