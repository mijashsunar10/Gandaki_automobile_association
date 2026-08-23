"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      
      {/* Wave shape or top border if desired, but we'll use clean borders */}
      <div className={styles.footerTop}>
        <div className={styles.container}>
          
          {/* Column 1: About & Logo */}
          <div className={styles.footerCol}>
            <Link href="/" className={styles.logoWrapper}>
              <div className={styles.logoBg}>
                <Image 
                  src="/logo/image.webp" 
                  alt="GAMA Logo" 
                  width={60} 
                  height={60} 
                  className={styles.logoImg}
                />
              </div>
              <div className={styles.logoText}>
                <h3>गण्डकी अटो मेकानिकल</h3>
                <p>वर्क्स एसोसिएसन</p>
              </div>
            </Link>
            <p className={styles.aboutText}>
              गण्डकी अटो मेकानिकल वर्क्स एसोसिएसन (GAMA) अटोमोबाइल क्षेत्रको विकास, व्यवसायीहरूको हकहित र दक्ष जनशक्ति उत्पादनमा समर्पित आधिकारिक संस्था हो।
            </p>
            <div className={styles.socialLinks}>
              <a href="https://www.facebook.com/profile.php?id=61593467009034" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><i className="fa-brands fa-facebook-f"></i></a>
              <a href="https://wa.me/9779856082230" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><i className="fa-brands fa-whatsapp"></i></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.footerCol}>
            <h4 className={styles.colTitle}>महत्त्वपूर्ण लिङ्कहरू</h4>
            <ul className={styles.linksList}>
              <li><Link href="/about"><i className="fa-solid fa-chevron-right"></i> हाम्रो बारेमा</Link></li>
              <li><Link href="/services"><i className="fa-solid fa-chevron-right"></i> हाम्रा सेवाहरू</Link></li>
              <li><Link href="/programs"><i className="fa-solid fa-chevron-right"></i> कार्यक्रमहरू</Link></li>
              <li><Link href="/members"><i className="fa-solid fa-chevron-right"></i> कार्यसमिति सदस्यहरू</Link></li>
              <li><Link href="/certificate"><i className="fa-solid fa-chevron-right"></i> दर्ता प्रमाणपत्र</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className={styles.footerCol}>
            <h4 className={styles.colTitle}>सम्पर्क विवरण</h4>
            <ul className={styles.contactList}>
              <li>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <strong>कार्यालय:</strong>
                  <span>पोखरा ८, नयाँबजार, गण्डकी प्रदेश</span>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <div>
                  <strong>सम्पर्क नम्बर:</strong>
                  <span>०६१-५७७२३२, ९८५६०८२२३०</span>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <div>
                  <strong>ईमेल:</strong>
                  <span>gamapokhara@gmail.com</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter / Hours */}
          <div className={styles.footerCol}>
            <h4 className={styles.colTitle}>कार्यालय समय</h4>
            <ul className={styles.hoursList}>
              <li>
                <span>आइतबार - बिहीबार:</span>
                <span>१०:०० - ५:००</span>
              </li>
              <li>
                <span>शुक्रबार:</span>
                <span>१०:०० - ३:००</span>
              </li>
              <li>
                <span>शनिबार:</span>
                <span className={styles.closed}>बन्द</span>
              </li>
            </ul>
            <div className={styles.ctaBox}>
              <p>थप जानकारीको लागि हामीलाई सिधै सम्पर्क गर्नुहोस्।</p>
              <Link href="/contact" className={styles.btn}>सम्पर्क गर्नुहोस् <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
          </div>

        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.bottomContainer}>
          <p>&copy; {new Date().getFullYear()} गण्डकी अटो मेकानिकल वर्क्स एसोसिएसन (GAMA). सर्वाधिकार सुरक्षित।</p>
          <div className={styles.bottomLinks}>
            <Link href="#">गोपनीयता नीति</Link>
            <Link href="#">नियम तथा सर्तहरू</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
