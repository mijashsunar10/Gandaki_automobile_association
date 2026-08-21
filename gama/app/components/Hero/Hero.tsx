"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./Hero.module.css";

const GAMA_IMAGES = [
  "/landing/image.png",
  "/landing/image copy.png",
  "/landing/image copy 3.png",
  "/landing/image copy 4.png",
  "/landing/image copy 6.png"
];

const GAMA_DURATION = 6000;

const Hero = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Reset states slightly before the next image to allow re-triggering of animations
    let moveTimer: NodeJS.Timeout;
    let progressTimer: NodeJS.Timeout;

    // Start animations slightly after index change
    moveTimer = setTimeout(() => {
      setIsMoving(true);
    }, 100);

    progressTimer = setTimeout(() => {
      setProgress(100);
    }, 100);

    const interval = setInterval(() => {
      setIsMoving(false);
      setProgress(0);
      setCurrentIdx((prev) => (prev + 1) % GAMA_IMAGES.length);
    }, GAMA_DURATION);

    return () => {
      clearTimeout(moveTimer);
      clearTimeout(progressTimer);
      clearInterval(interval);
    };
  }, [currentIdx]);

  return (
    <section className={styles.hero} id="gamaHero">
      {/* BACKGROUND */}
      <div 
        className={`${styles.bg} ${isMoving ? styles.moving : ""}`} 
        style={{ backgroundImage: `url("${GAMA_IMAGES[currentIdx]}")` }}
      />

      {/* UNIFORM DARK OVERLAY */}
      <div className={styles.overlay} />

      {/* BLUE / RED LIGHT */}
      <div className={styles.blueLight} />
      <div className={styles.redLight} />

      {/* CENTER CONTENT */}
      <div className={styles.center}>
        <div className={styles.established}>
          <span />
          २०४९ सालमा स्थापित
          <span />
        </div>

        <div className={styles.location}>
          <span>GAMA</span>
          <i />
          <span>पोखरा, नेपाल</span>
        </div>

        <p className={styles.quote}>
          “म बाट हामी बन्न चाहनेहरूका लागि दुःख–सुखको चौतारी”
        </p>

        <h1>
          गण्डकी अटो मेकानिकल<br />
          <strong>वर्क्स एसोसिएसन</strong>
        </h1>

        <div className={styles.buttons}>
          <Link href="/about" className={`${styles.btn} ${styles.btnPrimary}`}>
            हाम्रो बारेमा
            <ArrowRight size={14} strokeWidth={3} className={styles.iconRight} />
          </Link>

          <Link href="/contact" className={`${styles.btn} ${styles.btnSecondary}`}>
            सम्पर्क गर्नुहोस्
          </Link>
        </div>
      </div>

      {/* SLIDE INDICATOR */}
      <div className={styles.sliderIndicator}>
        <span>{String(currentIdx + 1).padStart(2, "0")}</span>

        <div className={styles.line}>
          <div 
            className={styles.progress} 
            style={{ 
              width: `${progress}%`,
              transition: progress === 100 ? `width ${GAMA_DURATION}ms linear` : 'none'
            }} 
          />
        </div>

        <span>{String(GAMA_IMAGES.length).padStart(2, "0")}</span>
      </div>

      {/* SCROLL INDICATOR */}
      <div className={styles.scroll}>
        <span>SCROLL</span>
        <div />
      </div>
    </section>
  );
};

export default Hero;
