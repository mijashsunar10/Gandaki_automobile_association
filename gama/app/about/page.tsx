import React from 'react';
import Image from 'next/image';
import { Target, Lightbulb, Users, CheckCircle2 } from 'lucide-react';
import styles from './page.module.css';

export default function AboutPage() {
  return (
    <main className={styles.main}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className={styles.headerContent}>
          <h1>हाम्रो बारेमा</h1>
          <p>गण्डकी अटो मेकानिकल वर्क्स एसोसिएसनको विस्तृत जानकारी</p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          
          <div className={styles.grid}>
            {/* Left: Detailed Text */}
            <div className={styles.textContent}>
              <h2 className={styles.sectionTitle}>संस्थाको परिचय र इतिहास</h2>
              <p className={styles.paragraph}>
                गण्डकी अटो मेकानिकल वर्क्स एसोसिएसन (GAMA) २०४९ सालमा स्थापना भएको एक विशुद्ध व्यावसायिक र 
                पेशागत छाता संगठन हो। गण्डकी प्रदेशभित्र सञ्चालनमा रहेका सम्पूर्ण अटो मेकानिकल वर्क्स, 
                सर्भिस सेन्टर र यस क्षेत्रमा आबद्ध प्राविधिकहरूलाई एकताबद्ध गर्दै उनीहरूको पेशागत हकहित 
                संरक्षण गर्ने मुख्य ध्येयका साथ यसको जन्म भएको हो।
              </p>
              <p className={styles.paragraph}>
                "म बाट हामी बन्न चाहनेहरूका लागि दुःख–सुखको चौतारी" भन्ने मूल मर्मलाई आत्मसाथ गर्दै 
                यस संस्थाले विगत १८ वर्षभन्दा बढी समयदेखि निरन्तर रूपमा अटोमोबाइल क्षेत्रको विकास, 
                अत्याधुनिक प्रविधिको प्रयोग र जनशक्ति उत्पादनमा महत्त्वपूर्ण भूमिका खेल्दै आइरहेको छ।
              </p>

              <h3 className={styles.subTitle}>हाम्रा प्रमुख लक्ष्यहरू</h3>
              <ul className={styles.bulletList}>
                <li><CheckCircle2 size={20} className={styles.checkIcon} /> सदस्यहरूको पेशागत सुरक्षा र हकहितको ग्यारेन्टी गर्ने।</li>
                <li><CheckCircle2 size={20} className={styles.checkIcon} /> अटोमोबाइल क्षेत्रमा भित्रिएका नयाँ प्रविधिहरूबारे तालिम प्रदान गर्ने।</li>
                <li><CheckCircle2 size={20} className={styles.checkIcon} /> सरकारी तथा गैर-सरकारी निकायहरूसँग समन्वय गरी नीति निर्माणमा सघाउ पुर्‍याउने।</li>
                <li><CheckCircle2 size={20} className={styles.checkIcon} /> समाज र राष्ट्र निर्माणमा अटोमोबाइल क्षेत्रको योगदानलाई स्थापित गर्ने।</li>
              </ul>
            </div>

            {/* Right: Images */}
            <div className={styles.imageGrid}>
              <Image src="/landing/image copy 3.png" alt="GAMA Event" width={500} height={400} className={styles.gridImage} />
              <Image src="/landing/image copy 5.png" alt="GAMA Training" width={500} height={400} className={styles.gridImage} />
            </div>
          </div>

        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className={styles.missionSection}>
        <div className={styles.container}>
          <div className={styles.cardsContainer}>
            
            <div className={styles.card}>
              <div className={styles.cardIcon}><Lightbulb size={32} /></div>
              <h3>हाम्रो परिकल्पना (Vision)</h3>
              <p>गण्डकी प्रदेशलाई नेपालकै उत्कृष्ट र व्यवस्थित अटोमोबाइल सेवा केन्द्रको रूपमा विकास गर्ने र पेशाकर्मीहरूलाई सम्मानित दर्जा दिलाउने।</p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}><Target size={32} /></div>
              <h3>हाम्रो ध्येय (Mission)</h3>
              <p>अटो मेकानिक्स पेशालाई मर्यादित, सुरक्षित र प्रविधिमैत्री बनाउँदै निरन्तर तालिम तथा सीप विकासमार्फत स्वरोजगार सिर्जना गर्ने।</p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}><Users size={32} /></div>
              <h3>हाम्रो मूल्य मान्यता (Values)</h3>
              <p>एकता, पारदर्शिता, व्यावसायिक उत्तरदायित्व, र निरन्तर सिकाइ हाम्रो संस्थाको मुख्य आधारस्तम्भ हुन्।</p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
