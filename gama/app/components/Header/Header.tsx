"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, ChevronDown, Menu, X } from "lucide-react";
import styles from "./Header.module.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        {/* TOP BAR (Logo + Contact Cards) */}
        <div className={styles.topBar}>
          <div className={styles.topBarInner}>
          
          <Link href="/" className={styles.logoSection}>
            <Image
              src="/logo/image.png"
              alt="GAMA Logo"
              width={75}
              height={75}
              className={styles.logoImage}
              priority
            />
            <div className={styles.logoTextContainer}>
              <h1 className={styles.logoTitle}>गण्डकी अटो मेकानिकल वर्क्स एसोसिएसन</h1>
              <p className={styles.logoSubtitle}>गण्डकी अटो मेकानिकल वर्क्स एसोसिएसन</p>
            </div>
          </Link>

          <div className={styles.contactCards}>
            <div className={styles.contactCard}>
              <MapPin size={20} className={styles.contactIcon} strokeWidth={2} />
              <div className={styles.contactText}>
                <span className={styles.contactLabel}>Location</span>
                <span className={styles.contactValue}>पोखरा ८, नयाँबजार</span>
              </div>
            </div>

            <div className={styles.contactCard}>
              <Phone size={20} className={styles.contactIcon} strokeWidth={2} />
              <div className={styles.contactText}>
                <span className={styles.contactLabel}>Call Us</span>
                <span className={styles.contactValue}>061-577232</span>
              </div>
            </div>

            <div className={styles.contactCard}>
              <Mail size={20} className={styles.contactIcon} strokeWidth={2} />
              <div className={styles.contactText}>
                <span className={styles.contactLabel}>Mail Us At</span>
                <span className={styles.contactValue}>gamapokhara@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </header>

      {/* BOTTOM NAV BAR */}
      <div className={styles.stickyNavWrapper}>
        <nav className={styles.navBar}>
        <div className={styles.navBarInner}>
          
          <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileNavLinks : ''}`}>
            <li className={styles.navItem}><Link href="/" className={styles.navLink}>गृहपृष्ठ</Link></li>
            <li className={styles.navItem}><Link href="/about" className={styles.navLink}>हाम्रो बारेमा</Link></li>
            <li className={styles.navItem}><Link href="/services" className={styles.navLink}>सेवाहरु</Link></li>
            <li className={styles.navItem}><Link href="/members" className={styles.navLink}>कार्यसमिति सदस्य</Link></li>
            <li className={styles.navItem}><Link href="/programs" className={styles.navLink}>कार्यक्रमहरु</Link></li>
            <li className={`${styles.navItem} ${styles.dropdownContainer}`}>
              <span className={styles.navLink} style={{cursor: 'pointer'}}>
                सन्देश <ChevronDown size={14} strokeWidth={2.5} className={styles.dropdownIcon} />
              </span>
              <ul className={styles.dropdownMenu}>
                <li>
                  <Link href="/chairman-message" className={styles.dropdownItem}>
                    अध्यक्षको सन्देश
                  </Link>
                </li>
              </ul>
            </li>
            <li className={styles.navItem}><Link href="/certificate" className={styles.navLink}>दर्ता भएको प्रमाण पत्र</Link></li>
          </ul>

          <button className={styles.ctaButton}>GET STARTED</button>

          <button
            className={styles.mobileMenuBtn}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>
      </div>
    </>
  );
};

export default Header;
