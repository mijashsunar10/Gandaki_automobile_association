import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Phone, User } from 'lucide-react';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        
        {/* Left Side: Image Collage */}
        <div className={styles.collage}>
          <Image 
            src="/landing/image copy 4.webp" 
            alt="GAMA Event" 
            width={600} 
            height={400} 
            className={styles.image1} 
          />
          <Image 
            src="/landing/image copy 6.webp" 
            alt="GAMA Team" 
            width={400} 
            height={300} 
            className={styles.image2} 
          />
          <Image 
            src="/landing/image.webp" 
            alt="GAMA Activity" 
            width={300} 
            height={300} 
            className={styles.image3} 
          />
          
          <div className={styles.badge}>
            <span className={styles.badgeNumber}>18+</span>
            <span className={styles.badgeText}>YEARS OF<br/>EXPERIENCE</span>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className={styles.content}>
          <div className={styles.subtitle}>
            <span className={styles.line}></span> हाम्रो परिचय
          </div>
          <h2 className={styles.title}>गण्डकी अटो मेकानिकल वर्क्स एसोसिएसन</h2>
          
          <p className={styles.description}>
            गण्डकी अटो मेकानिकल वर्क्स एसोसिएसन गण्डकी प्रदेशअन्तर्गत सञ्चालनमा रहेका अटो मेकानिकल वर्क्स, 
            सर्भिस सेन्टर तथा प्राविधिकहरूलाई एउटै संस्थागत छातामुनि एकीकृत गर्ने उद्देश्यले स्थापना गरिएको 
            एक पेशागत संस्था हो। मुख्य उद्देश्यहरू :
          </p>

          <ul className={styles.bulletList}>
            <li>
              <CheckCircle2 className={styles.checkIcon} />
              <span>गण्डकी प्रदेशका अटो मेकानिकल वर्क्स, सर्भिस सेन्टर तथा प्राविधिकहरूलाई एउटै छातामुनि संगठित गर्ने।</span>
            </li>
            <li>
              <CheckCircle2 className={styles.checkIcon} />
              <span>अटो मेकानिक्स पेशालाई व्यवस्थित, आधुनिक र सम्मानजनक बनाउँदै सीप विकास तथा तालिमलाई प्रोत्साहन गर्ने।</span>
            </li>
            <li>
              <CheckCircle2 className={styles.checkIcon} />
              <span>सदस्यहरूको हकहित संरक्षण गर्दै सरकार र सम्बन्धित निकायसँग समन्वय गरी व्यवसायको दिगो विकास गर्ने।</span>
            </li>
          </ul>

          <div className={styles.contactBox}>
            <span className={styles.contactLabel}>सम्पर्क नम्बर</span>
            <Phone size={18} className={styles.phoneIcon} />
            <span className={styles.contactNumber}>९८५६०८२२३०</span>
          </div>

          <div className={styles.actionRow}>
            <Link href="/about" className={styles.button}>
              हाम्रो<br/>बारेमा थप<br/>जानकारी
            </Link>
            
            <div className={styles.profile}>
              <div className={styles.profileIconBox}>
                <User size={32} color="#fff" />
              </div>
              <div className={styles.profileText}>
                <h4 className={styles.profileName}>विष्णु प्रसाद अधिकारी</h4>
                <p className={styles.profileRole}>अध्यक्ष</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
