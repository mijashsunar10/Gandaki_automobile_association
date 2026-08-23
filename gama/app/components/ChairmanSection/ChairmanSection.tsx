import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ChairmanSection.module.css';

const ChairmanSection = () => {
  return (
    <section className={styles.homeChairmanSection}>
      <div className={styles.homeChairmanContainer}>
        {/* Left: Image */}
        <div className={styles.homeChairmanImage}>
          <div className={styles.homeChairmanAccent}></div>
          <Image
            src="/person.png"
            alt="अध्यक्ष - विष्णु प्रसाद अधिकारी"
            width={330}
            height={400}
            className={styles.image}
          />
        </div>

        {/* Right: Content */}
        <div className={styles.homeChairmanContent}>
          <span className={styles.homeChairmanLabel}>अध्यक्षको भनाई</span>
          <h2>श्री विष्णु प्रसाद अधिकारी</h2>
          <h4>अध्यक्ष, गण्डकी अटो मेकानिकल वर्क्स एसोसिएसन</h4>
          <div className={styles.homeChairmanLine}></div>

          <p>
            गण्डकी अटो मेकानिकल वर्क्स एसोसिएसनको अध्यक्षको रूपमा सम्पूर्ण सदस्य,
            मेकानिक्स व्यवसायी तथा यस क्षेत्रसँग सम्बन्धित सम्पूर्ण महानुभावहरूको
            हकहित, सीप विकास र व्यवसायिक उन्नतिका लागि निरन्तर काम गर्ने प्रतिबद्धता
            व्यक्त गर्दछु।
          </p>
          <p>
            अटो मेकानिक्स क्षेत्रलाई आधुनिक, व्यवस्थित र प्रविधिमैत्री बनाउँदै
            दक्ष जनशक्ति निर्माण, सीप तथा तालिमको विस्तार र व्यवसायीहरूको
            समग्र विकासका लागि संस्था सदैव सक्रिय रहनेछ।
          </p>

          {/* Quote */}
          <div className={styles.homeChairmanQuote}>
            “अटो मेकानिक्सको व्यवस्थापन बिना विकास सम्भव छैन। अटो व्यवसाय राष्ट्रको मेरुदण्ड हो।”
          </div>

          {/* Button */}
          <Link href="/chairman-message" className={styles.homeChairmanButton}>
            पूरा भनाई हेर्नुहोस्
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ChairmanSection;
