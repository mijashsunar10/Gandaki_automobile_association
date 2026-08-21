"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Map, Phone, Mail, ChevronDown, Menu, X } from "lucide-react";
import styles from "./Header.module.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.logoSection}>
          <Image
            src="/logo/image.png"
            alt="GAMA Logo"
            width={70}
            height={70}
            className={styles.logoImage}
            priority
          />
          <div className={styles.logoTextContainer}>
            <h1 className={styles.logoTitle}>गण्डकी अटो मेकानिकल वर्क्स एसोसिएसन</h1>
            <p className={styles.logoSubtitle}>गण्डकी अटो मेकानिकल वर्क्स एसोसिएसन</p>
          </div>
        </div>

        <div className={styles.contactInfoContainer}>
          <div className={styles.contactItem}>
            <div className={styles.iconWrapper}>
              <Map size={20} />
            </div>
            <div className={styles.contactText}>
              <span className={styles.contactTitle}>पोखरा ८, नयाँबजार</span>
              <span className={styles.contactSubtitle}>गण्डकी, नेपाल</span>
            </div>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.iconWrapper}>
              <Phone size={20} />
            </div>
            <div className={styles.contactText}>
              <span className={styles.contactTitle}>061-577232</span>
              <span className={styles.contactSubtitle}>सोम-शुक्र</span>
            </div>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.iconWrapper}>
              <Mail size={20} />
            </div>
            <div className={styles.contactText}>
              <span className={styles.contactTitle}>gamapokhara@gmail.com</span>
              <span className={styles.contactSubtitle}>24सै घण्टा अनलाइन सहायता</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className={styles.navBar}>
        <button
          className={styles.mobileMenuBtn}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileNavLinks : ''}`}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>गृहपृष्ठ</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about" className={styles.navLink}>हाम्रो बारेमा</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/programs" className={styles.navLink}>कार्यक्रमहरु</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/services" className={styles.navLink}>सेवाहरु</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/members" className={styles.navLink}>कार्यसमिति सदस्य</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/messages" className={styles.navLink}>
              सन्देश <ChevronDown className={styles.dropdownIcon} />
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/certificate" className={styles.navLink}>दर्ता भएको प्रमाण पत्र</Link>
          </li>
        </ul>

        <button className={styles.navButton}>GET STARTED</button>
      </nav>
    </header>
  );
};

export default Header;
