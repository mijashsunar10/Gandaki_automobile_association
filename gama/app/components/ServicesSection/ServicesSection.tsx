'use client';
import React from 'react';
import Image from 'next/image';
import styles from './ServicesSection.module.css';

const ServicesSection = () => {
    return (
        <section className={styles.servicesSection}>
            <div className={styles.servicesContainer}>
                {/* Header */}
                <div className={styles.sectionHeader}>
                    <div className={styles.eyebrow}>हाम्रो सेवा</div>
                    <h2 className={styles.sectionTitle}>तपाईंको लागि उत्कृष्ट सेवा प्रदान गर्दै</h2>
                </div>

                {/* Services */}
                <div className={styles.servicesGrid}>
                    {/* CARD 1 */}
                    <article className={styles.serviceCard}>
                        <div className={styles.cardTop}></div>
                        <div className={styles.logoWrapper}>
                            <Image
                                src="https://gamapokhara.org.np/wp-content/uploads/2026/01/cropped-cropped-gamalogo.jpg"
                                alt="गण्डकी अटो मेकानिकल वर्क्स एसोसिएसन"
                                width={72}
                                height={72}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.serviceCategory}>सीप</div>
                            <h3 className={styles.serviceTitle}>सीप अभिवृद्धि<br/>तालिम र वर्कशप</h3>
                            <p className={styles.serviceDescription}>
                                देशभरका प्राविधिकहरूको दक्षता वृद्धि गर्न व्यावहारिक
                                तालिम र वर्कशपहरू सञ्चालन गर्दै उनीहरूलाई आधुनिक
                                प्रविधि र नयाँ सीपमा सक्षम बनाउँछौं।
                            </p>
                        </div>
                    </article>

                    {/* CARD 2 */}
                    <article className={styles.serviceCard}>
                        <div className={styles.cardTop}></div>
                        <div className={styles.logoWrapper}>
                            <Image
                                src="https://gamapokhara.org.np/wp-content/uploads/2026/01/cropped-cropped-gamalogo.jpg"
                                alt="गण्डकी अटो मेकानिकल वर्क्स एसोसिएसन"
                                width={72}
                                height={72}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.serviceCategory}>पेशा</div>
                            <h3 className={styles.serviceTitle}>पेशागत अधिकार र<br/>सुरक्षा</h3>
                            <p className={styles.serviceDescription}>
                                देशभरका प्राविधिकहरूको दक्षता वृद्धि गर्न तालिम र
                                वर्कशप सञ्चालन गर्दै उनीहरूलाई आधुनिक प्रविधि र
                                नयाँ सीपमा सक्षम बनाउँछौं।
                            </p>
                        </div>
                    </article>

                    {/* CARD 3 */}
                    <article className={styles.serviceCard}>
                        <div className={styles.cardTop}></div>
                        <div className={styles.logoWrapper}>
                            <Image
                                src="https://gamapokhara.org.np/wp-content/uploads/2026/01/cropped-cropped-gamalogo.jpg"
                                alt="गण्डकी अटो मेकानिकल वर्क्स एसोसिएसन"
                                width={72}
                                height={72}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.serviceCategory}>पेशा</div>
                            <h3 className={styles.serviceTitle}>व्यवसाय प्रवर्द्धन तथा<br/>वर्कशप व्यवस्थापन</h3>
                            <p className={styles.serviceDescription}>
                                वर्कशपको प्रभावकारी सञ्चालन, ग्राहक सेवा,
                                व्यवसाय प्रवर्द्धन र व्यवस्थापन सुधारमा केन्द्रित
                                कार्यक्रम।
                            </p>
                        </div>
                    </article>

                    {/* CARD 4 */}
                    <article className={styles.serviceCard}>
                        <div className={styles.cardTop}></div>
                        <div className={styles.logoWrapper}>
                            <Image
                                src="https://gamapokhara.org.np/wp-content/uploads/2026/01/cropped-cropped-gamalogo.jpg"
                                alt="गण्डकी अटो मेकानिकल वर्क्स एसोसिएसन"
                                width={72}
                                height={72}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.serviceCategory}>पेशा</div>
                            <h3 className={styles.serviceTitle}>आधुनिक प्रविधि<br/>प्रवर्द्धन</h3>
                            <p className={styles.serviceDescription}>
                                महिला र युवा प्राविधिकलाई पेशामा आकर्षित गर्न विशेष
                                अवसरहरू उपलब्ध गराउँदै, स्मार्ट डायग्नोस्टिक
                                प्रविधिमा दक्षता विकास गर्न प्रोत्साहन।
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
