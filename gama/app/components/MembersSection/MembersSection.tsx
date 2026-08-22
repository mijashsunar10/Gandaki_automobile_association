"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './MembersSection.module.css';

interface MembersSectionProps {
  isHomepage?: boolean;
}

const MembersSection: React.FC<MembersSectionProps> = ({ isHomepage = false }) => {
  const [activeTab, setActiveTab] = useState('executive');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const executiveMembers = [
    { id: '02', role: 'उपाध्यक्ष', name: 'सदस्यको नाम', type: 'केन्द्रीय कार्यसमिति' },
    { id: '03', role: 'महासचिव', name: 'सदस्यको नाम', type: 'केन्द्रीय कार्यसमिति' },
    { id: '04', role: 'सचिव', name: 'सदस्यको नाम', type: 'केन्द्रीय कार्यसमिति' },
    { id: '05', role: 'कोषाध्यक्ष', name: 'सदस्यको नाम', type: 'केन्द्रीय कार्यसमिति' },
  ];

  const officeBearers = [
    { id: '01', role: 'उपाध्यक्ष', name: 'सदस्यको नाम', type: 'केन्द्रीय पदाधिकारी' },
    { id: '02', role: 'महासचिव', name: 'सदस्यको नाम', type: 'केन्द्रीय पदाधिकारी' },
    { id: '03', role: 'सचिव', name: 'सदस्यको नाम', type: 'केन्द्रीय पदाधिकारी' },
  ];

  const advisors = [
    { id: '01', role: 'प्रमुख सल्लाहकार', name: 'सल्लाहकारको नाम', type: 'सल्लाहकार समिति' },
    { id: '02', role: 'सल्लाहकार', name: 'सल्लाहकारको नाम', type: 'सल्लाहकार समिति' },
  ];

  const generalMembers = [
    { id: '01', role: 'सदस्य', name: 'सदस्यको नाम', type: 'केन्द्रीय सदस्य' },
    { id: '02', role: 'सदस्य', name: 'सदस्यको नाम', type: 'केन्द्रीय सदस्य' },
    { id: '03', role: 'सदस्य', name: 'सदस्यको नाम', type: 'केन्द्रीय सदस्य' },
    { id: '04', role: 'सदस्य', name: 'सदस्यको नाम', type: 'केन्द्रीय सदस्य' },
  ];

  // If on homepage, show 4 grid members without the large president block
  const displayExecutives = executiveMembers;

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

      <section className={styles.gamaMembersSection}>
        {/* BACKGROUND DECORATION */}
        <div className={`${styles.gamaBgShape} ${styles.gamaBgBlue}`}></div>
        <div className={`${styles.gamaBgShape} ${styles.gamaBgRed}`}></div>

        <div className={styles.gamaMembersContainer}>
          {/* SECTION HEADER */}
          <div className={styles.gamaMembersHeader}>
            <div className={styles.gamaSectionTag}>
              <span></span>
              गण्डकी अटो मेकानिकल वर्क्स एसोसिएसन
              <span></span>
            </div>
            <h1>हाम्रो <strong>नेतृत्व</strong></h1>
            <p>
              संस्थालाई मार्गदर्शन गर्ने तथा नेतृत्व प्रदान गर्ने
              केन्द्रीय कार्यसमिति र सदस्यहरूको विवरण।
            </p>
          </div>

          {/* CATEGORY TABS - Hide on Homepage */}
          {!isHomepage && (
            <div className={styles.gamaTabsWrapper}>
              <div className={styles.gamaTabs}>
                <button
                  className={`${styles.gamaTab} ${activeTab === 'executive' ? styles.active : ''}`}
                  onClick={() => handleTabClick('executive')}
                >
                  <i className="fa-solid fa-users"></i>
                  <span>केन्द्रीय कार्यसमिति</span>
                </button>
                <button
                  className={`${styles.gamaTab} ${activeTab === 'office' ? styles.active : ''}`}
                  onClick={() => handleTabClick('office')}
                >
                  <i className="fa-solid fa-user-tie"></i>
                  <span>पदाधिकारी</span>
                </button>
                <button
                  className={`${styles.gamaTab} ${activeTab === 'advisors' ? styles.active : ''}`}
                  onClick={() => handleTabClick('advisors')}
                >
                  <i className="fa-solid fa-user-group"></i>
                  <span>सल्लाहकार</span>
                </button>
                <button
                  className={`${styles.gamaTab} ${activeTab === 'members' ? styles.active : ''}`}
                  onClick={() => handleTabClick('members')}
                >
                  <i className="fa-solid fa-people-group"></i>
                  <span>सदस्यहरू</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB CONTENT */}
          <div className={styles.gamaTabContent}>

            {/* EXECUTIVE COMMITTEE */}
            {(activeTab === 'executive' || isHomepage) && (
              <div className={`${styles.gamaPanel} ${styles.active}`}>
                
                {/* FEATURED PRESIDENT - Hide on Homepage */}
                {!isHomepage && (
                  <div className={styles.gamaPresident}>
                  <div className={styles.gamaPresidentImage}>
                    <div className={styles.gamaImageRing}></div>
                    <Image
                      src="https://gamapokhara.org.np/wp-content/uploads/2026/08/businessman-with-smiling-face-vector_1190219-37918.avif"
                      alt="अध्यक्ष"
                      width={205}
                      height={205}
                      className={styles.presidentImg}
                    />
                    <div className={styles.gamaPresidentBadge}>
                      <i className="fa-solid fa-star"></i>
                      अध्यक्ष
                    </div>
                  </div>

                  <div className={styles.gamaPresidentInfo}>
                    <span className={styles.gamaSmallLabel}>केन्द्रीय कार्यसमिति</span>
                    <h2>अध्यक्ष</h2>
                    <div className={styles.gamaPresidentLine}></div>
                    <p>
                      संस्थाको नेतृत्व गर्दै संगठनको उद्देश्य,
                      नीति तथा कार्यक्रमहरूलाई प्रभावकारी रूपमा
                      अगाडि बढाउने प्रमुख जिम्मेवारी।
                    </p>
                    <div className={styles.gamaProfileMeta}>
                      <span>
                        <i className="fa-solid fa-building"></i>
                        केन्द्रीय कार्यसमिति
                      </span>
                      <span>
                        <i className="fa-solid fa-location-dot"></i>
                        नेपाल
                      </span>
                    </div>
                  </div>
                </div>
                )}

                {/* MEMBERS GRID */}
                <div className={styles.gamaMembersGrid}>
                  {displayExecutives.map((member, index) => (
                    <article className={styles.gamaMemberCard} key={index}>
                      <div className={styles.gamaMemberImage}>
                        <Image
                          src="https://gamapokhara.org.np/wp-content/uploads/2026/08/businessman-with-smiling-face-vector_1190219-37918.avif"
                          alt="कार्यसमिति सदस्य"
                          width={205}
                          height={205}
                          className={styles.memberImg}
                        />
                        <div className={styles.gamaMemberNumber}>{member.id}</div>
                      </div>
                      <div className={styles.gamaMemberInfo}>
                        <span>{member.role}</span>
                        <h3>{member.name}</h3>
                        <p>{member.type}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* OFFICE BEARERS */}
            {activeTab === 'office' && !isHomepage && (
              <div className={`${styles.gamaPanel} ${styles.active}`}>
                <div className={styles.gamaPanelHeading}>
                  <span>०२</span>
                  <div>
                    <h2>पदाधिकारी</h2>
                    <p>संस्थाका प्रमुख पदाधिकारीहरूको विवरण।</p>
                  </div>
                </div>
                <div className={styles.gamaMembersGrid}>
                  {officeBearers.map((member, index) => (
                    <article className={styles.gamaMemberCard} key={index}>
                      <div className={styles.gamaMemberImage}>
                        <Image
                          src="https://gamapokhara.org.np/wp-content/uploads/2026/08/businessman-with-smiling-face-vector_1190219-37918.avif"
                          alt="पदाधिकारी"
                          width={205}
                          height={205}
                          className={styles.memberImg}
                        />
                        <div className={styles.gamaMemberNumber}>{member.id}</div>
                      </div>
                      <div className={styles.gamaMemberInfo}>
                        <span>{member.role}</span>
                        <h3>{member.name}</h3>
                        <p>{member.type}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* ADVISORS */}
            {activeTab === 'advisors' && !isHomepage && (
              <div className={`${styles.gamaPanel} ${styles.active}`}>
                <div className={styles.gamaPanelHeading}>
                  <span>०३</span>
                  <div>
                    <h2>सल्लाहकार</h2>
                    <p>संस्थालाई आवश्यक मार्गदर्शन र सुझाव प्रदान गर्ने सल्लाहकारहरूको विवरण।</p>
                  </div>
                </div>
                <div className={styles.gamaMembersGrid}>
                  {advisors.map((member, index) => (
                    <article className={styles.gamaMemberCard} key={index}>
                      <div className={styles.gamaMemberImage}>
                        <Image
                          src="https://gamapokhara.org.np/wp-content/uploads/2026/08/businessman-with-smiling-face-vector_1190219-37918.avif"
                          alt="सल्लाहकार"
                          width={205}
                          height={205}
                          className={styles.memberImg}
                        />
                        <div className={styles.gamaMemberNumber}>{member.id}</div>
                      </div>
                      <div className={styles.gamaMemberInfo}>
                        <span>{member.role}</span>
                        <h3>{member.name}</h3>
                        <p>{member.type}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* MEMBERS */}
            {activeTab === 'members' && !isHomepage && (
              <div className={`${styles.gamaPanel} ${styles.active}`}>
                <div className={styles.gamaPanelHeading}>
                  <span>०४</span>
                  <div>
                    <h2>सदस्यहरू</h2>
                    <p>संस्थासँग आबद्ध सदस्यहरूको विवरण।</p>
                  </div>
                </div>
                <div className={styles.gamaMembersGrid}>
                  {generalMembers.map((member, index) => (
                    <article className={styles.gamaMemberCard} key={index}>
                      <div className={styles.gamaMemberImage}>
                        <Image
                          src="https://gamapokhara.org.np/wp-content/uploads/2026/08/businessman-with-smiling-face-vector_1190219-37918.avif"
                          alt="सदस्य"
                          width={205}
                          height={205}
                          className={styles.memberImg}
                        />
                        <div className={styles.gamaMemberNumber}>{member.id}</div>
                      </div>
                      <div className={styles.gamaMemberInfo}>
                        <span>{member.role}</span>
                        <h3>{member.name}</h3>
                        <p>{member.type}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* VIEW ALL BUTTON (HOMEPAGE ONLY) */}
          {isHomepage && (
            <div className={styles.viewAllContainer}>
              <Link href="/members" className={styles.viewAllButton}>
                सबै सदस्यहरू हेर्नुहोस् <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          )}

        </div>
      </section>
    </>
  );
};

export default MembersSection;
