"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, Phone, Mail, ChevronDown, Menu, X } from "lucide-react";
import styles from "./Header.module.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className={styles.header}>
        {/* TOP BAR (Logo + Contact Cards) */}
        <div className={styles.topBar}>
          <div className={styles.topBarInner}>
          
          <Link href="/" className={styles.logoSection}>
            <Image
              src="/logo/image.webp"
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
                <span className={styles.contactValue}>०६१-५७७२३२, ९८५६०८२२३०</span>
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
          
          <div className={styles.mobileNavLogo}>
            <Image src="/logo/image.webp" alt="GAMA Logo" width={32} height={32} className={styles.mobileLogoImgMini} />
            <span>GAMA Pokhara</span>
          </div>

          <ul className={styles.navLinks}>
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

          <Link href="/contact" className={styles.ctaButton}>सम्पर्क गर्नुहोस्</Link>

          <button
            className={styles.mobileMenuBtn}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`${styles.mobileMenuOverlay} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
        <div className={styles.mobileMenuHeader}>
          <div className={styles.mobileMenuLogo}>
            <Image src="/logo/image.webp" alt="GAMA Logo" width={36} height={36} className={styles.mobileLogoImg} />
            <span>GAMA Pokhara</span>
          </div>
          <button className={styles.mobileMenuCloseBtn} onClick={() => setIsMobileMenuOpen(false)}>
            <X size={28} />
          </button>
        </div>
        
        <ul className={styles.mobileNavList}>
          <li className={pathname === '/' ? styles.mobileActiveItem : ''}><Link href="/" onClick={() => setIsMobileMenuOpen(false)}>गृहपृष्ठ</Link></li>
          <li className={pathname === '/about' || pathname === '/about/' ? styles.mobileActiveItem : ''}><Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>हाम्रो बारेमा</Link></li>
          <li className={pathname === '/services' || pathname === '/services/' ? styles.mobileActiveItem : ''}><Link href="/services" onClick={() => setIsMobileMenuOpen(false)}>सेवाहरु</Link></li>
          <li className={pathname === '/members' || pathname === '/members/' ? styles.mobileActiveItem : ''}><Link href="/members" onClick={() => setIsMobileMenuOpen(false)}>कार्यसमिति सदस्य</Link></li>
          <li className={pathname === '/programs' || pathname === '/programs/' ? styles.mobileActiveItem : ''}><Link href="/programs" onClick={() => setIsMobileMenuOpen(false)}>कार्यक्रमहरु</Link></li>
          <li className={pathname === '/chairman-message' || pathname === '/chairman-message/' ? styles.mobileActiveItem : ''}><Link href="/chairman-message" onClick={() => setIsMobileMenuOpen(false)}>अध्यक्षको सन्देश</Link></li>
          <li className={pathname === '/certificate' || pathname === '/certificate/' ? styles.mobileActiveItem : ''}><Link href="/certificate" onClick={() => setIsMobileMenuOpen(false)}>दर्ता भएको प्रमाण पत्र</Link></li>
          <li className={pathname === '/contact' || pathname === '/contact/' ? styles.mobileActiveItem : ''}><Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>सम्पर्क गर्नुहोस्</Link></li>
        </ul>

        <div className={styles.mobileMenuFooter}>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className={styles.mobileJoinBtn}>
            हामीसँग जोडिनुहोस् &rarr;
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
