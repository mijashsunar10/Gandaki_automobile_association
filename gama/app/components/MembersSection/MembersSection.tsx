"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './MembersSection.module.css';

interface MembersSectionProps {
  isHomepage?: boolean;
}

export const presidentPages = [
  { id: '०१', title: 'श्री सन्तोष कुमार मिश्र (अध्यक्ष)', tenure: 'वि. सं. २०७७-२०७९, २०७९-२०८१', image: '/pdf/presidents/president_page-01.png' },
  { id: '०२', title: 'श्री सनत कुमार भट्टराई (अध्यक्ष)', tenure: 'वि. सं. २०५८-२०६१, २०७३-२०७५', image: '/pdf/presidents/president_page-02.png' },
  { id: '०३', title: 'संस्थाका अध्यक्ष तथा कार्यसमिति', tenure: 'ऐतिहासिक अभिलेख', image: '/pdf/presidents/president_page-03.png' },
  { id: '०४', title: 'संस्थाका अध्यक्ष तथा कार्यसमिति', tenure: 'ऐतिहासिक अभिलेख', image: '/pdf/presidents/president_page-04.png' },
  { id: '०५', title: 'संस्थाका अध्यक्ष तथा कार्यसमिति', tenure: 'ऐतिहासिक अभिलेख', image: '/pdf/presidents/president_page-05.png' },
  { id: '०६', title: 'संस्थाका अध्यक्ष तथा कार्यसमिति', tenure: 'ऐतिहासिक अभिलेख', image: '/pdf/presidents/president_page-06.png' },
  { id: '०७', title: 'संस्थाका अध्यक्ष तथा कार्यसमिति', tenure: 'ऐतिहासिक अभिलेख', image: '/pdf/presidents/president_page-07.png' },
  { id: '०८', title: 'संस्थाका अध्यक्ष तथा कार्यसमिति', tenure: 'ऐतिहासिक अभिलेख', image: '/pdf/presidents/president_page-08.png' },
  { id: '०९', title: 'संस्थाका अध्यक्ष तथा कार्यसमिति', tenure: 'ऐतिहासिक अभिलेख', image: '/pdf/presidents/president_page-09.png' },
  { id: '१०', title: 'संस्थाका अध्यक्ष तथा कार्यसमिति', tenure: 'ऐतिहासिक अभिलेख', image: '/pdf/presidents/president_page-10.png' },
  { id: '११', title: 'संस्थाका अध्यक्ष तथा कार्यसमिति', tenure: 'ऐतिहासिक अभिलेख', image: '/pdf/presidents/president_page-11.png' },
];

const MembersSection: React.FC<MembersSectionProps> = ({ isHomepage = false }) => {
  const [activeTab, setActiveTab] = useState('executive');
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [modalViewMode, setModalViewMode] = useState<'pdf' | 'pages'>('pdf');
  const [selectedPageIndex, setSelectedPageIndex] = useState(0);

  // Check URL hash or query param on load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      const params = new URLSearchParams(window.location.search);
      if (hash === '#presidents' || params.get('tab') === 'presidents') {
        setActiveTab('presidents');
      }
    }
  }, []);

  // Keyboard navigation for full-screen modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isPdfModalOpen) return;
      if (e.key === 'Escape') closeModal();
      if (modalViewMode === 'pages') {
        if (e.key === 'ArrowLeft') {
          setSelectedPageIndex((prev) => (prev === 0 ? presidentPages.length - 1 : prev - 1));
        }
        if (e.key === 'ArrowRight') {
          setSelectedPageIndex((prev) => (prev === presidentPages.length - 1 ? 0 : prev + 1));
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPdfModalOpen, modalViewMode]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const openPdfModal = () => {
    setModalViewMode('pdf');
    setIsPdfModalOpen(true);
  };

  const openModalToPage = (index: number) => {
    setSelectedPageIndex(index);
    setModalViewMode('pages');
    setIsPdfModalOpen(true);
  };

  const closeModal = () => {
    setIsPdfModalOpen(false);
  };

  interface MemberItem {
    id: string;
    role: string;
    name: string;
    phone: string;
    image?: string;
  }

  const executiveMembers: MemberItem[] = [
    { id: '०१', role: 'अध्यक्ष', name: 'श्री विष्णु प्रसाद अधिकारी', phone: 'मो: ९८५६०१४८७२', image: '/karesamitisadashe/Screenshot from 2026-09-10 13-11-47.png' },
    { id: '०२', role: 'निवर्तमान अध्यक्ष', name: 'श्री सन्तोष कुमार मिश्र', phone: 'मो: ९८५६०२२७०८', image: '/karesamitisadashe/Screenshot from 2026-09-10 13-12-08.png' },
    { id: '०३', role: 'वरिष्ठ उपाध्यक्ष', name: 'श्री नवराज सुनार', phone: 'मो: ९८०४१०८२७४', image: '/karesamitisadashe/Screenshot from 2026-09-10 13-12-23.png' },
    { id: '०४', role: 'उपाध्यक्ष', name: 'श्री जगनाथ गर्तौला', phone: 'मो: ९८५६०२७५६४', image: '/karesamitisadashe/Screenshot from 2026-09-10 13-12-31.png' },
    { id: '०५', role: 'महासचिव', name: 'श्री विजेन्द्र चौधरी', phone: 'मो: ९८५६०२९०५७', image: '/karesamitisadashe/Screenshot from 2026-09-10 13-12-39.png' },
    { id: '०६', role: 'कोषाध्यक्ष', name: 'श्री निहाल अन्सारी', phone: 'मो: ९८४६४८०८५४', image: '/karesamitisadashe/Screenshot from 2026-09-10 13-12-47.png' },
    { id: '०७', role: 'सचिव', name: 'श्री सन्तोष कुमार राउत कुर्मी', phone: 'मो: ९८०६७५१५३७', image: '/karesamitisadashe/Screenshot from 2026-09-10 13-13-13.png' },
    { id: '०८', role: 'सह-कोषाध्यक्ष', name: 'श्री प्रकाश गिरी', phone: 'मो: ९८५६०४७१२४', image: '/karesamitisadashe/Screenshot from 2026-09-10 13-13-21.png' },
    { id: '०९', role: 'कार्यसमिति सदस्य', name: 'श्री एक बहादुर बानियाँ', phone: 'मो: ९८४६०४४९३८', image: '/karesamitisadashe/Screenshot from 2026-09-10 13-13-32.png' },
    { id: '१०', role: 'कार्यसमिति सदस्य', name: 'श्री विन्दु पावे', phone: 'मो: ९८१७११३५५२', image: '/karesamitisadashe/Screenshot from 2026-09-10 13-13-42.png' },
    { id: '११', role: 'कार्यसमिति सदस्य', name: 'श्री उमेश साह कानु', phone: 'मो: ९८५६०५१६५१', image: '/karesamitisadashe/Screenshot from 2026-09-10 13-13-57.png' },
    { id: '१२', role: 'कार्यसमिति सदस्य', name: 'श्री डिल बहादुर तुलाधर', phone: 'मो: ९८५६०३३५७१', image: '/karesamitisadashe/Screenshot from 2026-09-10 13-14-27.png' },
    { id: '१३', role: 'कार्यसमिति सदस्य', name: 'श्री गंगा बहादुर कुँवर क्षेत्री', phone: 'मो: ९८०६५४३४२२', image: '/karesamitisadashe/Screenshot from 2026-09-10 13-14-35.png' },
    { id: '१४', role: 'कार्यसमिति सदस्य', name: 'श्री भिमसेन विश्वकर्मा', phone: 'मो: ९८०२८०१९४१', image: '/karesamitisadashe/Screenshot from 2026-09-10 13-14-42.png' },
    { id: '१५', role: 'मनोनित सदस्य', name: 'श्री सोमबहादुर पुलामी राई', phone: 'मो: ९८४६०८१०५३', image: '/karesamitisadashe/Screenshot from 2026-09-10 13-14-55.png' },
    { id: '१६', role: 'मनोनित सदस्य', name: 'श्री सञ्जय तिमिल्सिना', phone: 'मो: ९८५६००९४९३', image: '/karesamitisadashe/Screenshot from 2026-09-10 13-15-03.png' },
    { id: '१७', role: 'सल्लाहकार', name: 'श्री सानुमान जलारी', phone: 'मो: ९८५६०२६४२३', image: '/karesamitisadashe/Screenshot from 2026-09-10 13-15-20.png' },
    { id: '१८', role: 'कानुनी सल्लाहकार', name: 'ब. अधिवक्ता माधवराज बाँस्तोला', phone: 'मो: ९८४६०२२३६३', image: '/karesamitisadashe/Screenshot from 2026-09-10 13-15-30.png' },
    { id: '१९', role: 'प्रेस-सल्लाहकार', name: 'श्री कृष्ण बहादुर थापा', phone: 'मो: ९८५६०३३६६२', image: '/karesamitisadashe/Screenshot from 2026-09-10 13-17-27.png' },
    { id: '२०', role: 'स्वास्थ्य सल्लाहकार', name: 'डा. रबिन्द्र प्रसाद श्रेष्ठ', phone: 'मो: ९८५६०२०७४०', image: '/karesamitisadashe/Screenshot from 2026-09-10 13-17-36.png' },
    { id: '२१', role: 'सल्लाहकार', name: 'श्री पवन कुमार प्रजापती', phone: 'मो: ९८५६०२४५५५', image: '/karesamitisadashe/Screenshot from 2026-09-10 13-17-44.png' },
    { id: '२२', role: 'कार्यालय प्रमुख', name: 'श्री पार्वती बराल', phone: '', image: '/karesamitisadashe/Screenshot from 2026-09-10 13-18-05.png' },
  ];

  const coordinators: MemberItem[] = [
    { id: '०१', role: 'संयोजक', name: 'श्री बसन्त थापा', phone: 'मो: ९८४६०६२८२४', image: '/samjoyakharu/Screenshot from 2026-09-10 13-30-45.png' },
    { id: '०२', role: 'संयोजक', name: 'श्री श्रीप्रसाद कलवार', phone: 'मो: ९८५६०३२०८९', image: '/samjoyakharu/Screenshot from 2026-09-10 13-30-59.png' },
    { id: '०३', role: 'संयोजक', name: 'श्री गोविन्द अधिकारी', phone: 'मो: ९८४१४३९२४३', image: '/samjoyakharu/Screenshot from 2026-09-10 13-31-08.png' },
    { id: '०४', role: 'संयोजक', name: 'श्री राम बहादुर नेपाली', phone: 'मो: ९८६९०८३०२६', image: '/samjoyakharu/Screenshot from 2026-09-10 13-31-19.png' },
    { id: '०५', role: 'संयोजक', name: 'श्री भुषण शाह', phone: 'मो: ९८५६०६५४७४', image: '/samjoyakharu/Screenshot from 2026-09-10 13-32-20.png' },
    { id: '०६', role: 'संयोजक', name: 'श्री शिव अधिकारी', phone: 'मो: ९८५६०२१६७४', image: '/samjoyakharu/Screenshot from 2026-09-10 13-32-30.png' },
    { id: '०७', role: 'संयोजक', name: 'श्री विधान बास्कोटा', phone: 'मो: ९८५६०३६१२८', image: '/samjoyakharu/Screenshot from 2026-09-10 13-32-40.png' },
    { id: '०८', role: 'संयोजक', name: 'श्री मुकेश महतो', phone: 'मो: ९८६१०४६५१०', image: '/samjoyakharu/Screenshot from 2026-09-10 13-32-49.png' },
    { id: '०९', role: 'संयोजक', name: 'श्री यम बहादुर पुर्जा', phone: 'मो: ९८५६०३७७७२', image: '/samjoyakharu/Screenshot from 2026-09-10 13-33-08.png' },
    { id: '१०', role: 'संयोजक', name: 'श्री अमृत तिमिल्सिना', phone: 'मो: ९८४६५८३६२४', image: '/samjoyakharu/Screenshot from 2026-09-10 13-33-17.png' },
    { id: '११', role: 'संयोजक', name: 'सूर्य सिकारू (ताल बाराही मिडिया पार्टनर)', phone: 'मो: ९८५६०१०८६०', image: '/samjoyakharu/xxx.png' },
  ];

  // If on homepage, show top 4 grid members with photos; if on members page, show all executive members
  const displayExecutives = isHomepage ? executiveMembers.slice(0, 4) : executiveMembers;

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
              केन्द्रीय कार्यसमिति, पदाधिकारी तथा ऐतिहासिक अध्यक्षहरूको विवरण।
            </p>
            <div className={styles.accentDivider}>
              <span className={styles.accentBar}></span>
            </div>
          </div>

          {/* CATEGORY TABS - 3 Switcher Buttons */}
          {!isHomepage && (
            <div className={styles.gamaTabsWrapper}>
              <div className={styles.gamaTabs}>
                <button
                  className={`${styles.gamaTab} ${activeTab === 'executive' ? styles.active : ''}`}
                  onClick={() => handleTabClick('executive')}
                >
                  <i className="fa-solid fa-users"></i>
                  <span>कार्यसमिति सदस्य</span>
                </button>
                <button
                  className={`${styles.gamaTab} ${activeTab === 'coordinators' ? styles.active : ''}`}
                  onClick={() => handleTabClick('coordinators')}
                >
                  <i className="fa-solid fa-user-tie"></i>
                  <span>संयोजकहरू</span>
                </button>
                <button
                  className={`${styles.gamaTab} ${activeTab === 'presidents' ? styles.active : ''}`}
                  onClick={() => handleTabClick('presidents')}
                >
                  <i className="fa-solid fa-award"></i>
                  <span>अध्यक्षहरू (PDF)</span>
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
                        src="/karesamitisadashe/Screenshot from 2026-09-10 13-11-47.png"
                        alt="अध्यक्ष - श्री विष्णु प्रसाद अधिकारी"
                        width={230}
                        height={280}
                        className={styles.presidentImg}
                      />
                      <div className={styles.gamaPresidentBadge}>
                        <i className="fa-solid fa-star"></i>
                        अध्यक्ष
                      </div>
                    </div>

                    <div className={styles.gamaPresidentInfo}>
                      <span className={styles.gamaSmallLabel}>केन्द्रीय कार्यसमिति</span>
                      <h2>श्री विष्णु प्रसाद अधिकारी</h2>
                      <div className={styles.gamaPresidentLine}></div>
                      <p>
                        संस्थाको नेतृत्व गर्दै संगठनको उद्देश्य,
                        नीति तथा कार्यक्रमहरूलाई प्रभावकारी रूपमा
                        अगाडि बढाउने प्रमुख जिम्मेवारी।
                      </p>
                      <div className={styles.gamaProfileMeta}>
                        <span>
                          <i className="fa-solid fa-phone"></i>
                          मो: ९८५६०१४८७२
                        </span>
                        <span>
                          <i className="fa-solid fa-location-dot"></i>
                          पोखरा
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
                          src={member.image || "/placeholder-member.svg"}
                          alt={member.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className={styles.memberImg}
                        />
                      </div>
                      <div className={styles.gamaMemberInfo}>
                        <h3 className={styles.memberName}>{member.name}</h3>
                        <span className={styles.memberRole}>{member.role}</span>
                        {member.phone && (
                          <p className={styles.memberPhone}>
                            <i className="fa-solid fa-phone"></i> {member.phone}
                          </p>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* COORDINATORS (संयोजकहरू) */}
            {activeTab === 'coordinators' && !isHomepage && (
              <div className={`${styles.gamaPanel} ${styles.active}`}>
                <div className={styles.gamaPanelHeading}>
                  <span>०२</span>
                  <div>
                    <h2>संयोजकहरू (उपसमिति संयोजकहरू)</h2>
                    <p>संस्थाका विभिन्न कार्यक्रम, गतिविधि तथा विषयगत उपसमितिहरूको नेतृत्व गर्ने संयोजकहरू।</p>
                  </div>
                </div>
                <div className={styles.gamaMembersGrid}>
                  {coordinators.map((member, index) => (
                    <article className={styles.gamaMemberCard} key={index}>
                      <div className={styles.gamaMemberImage}>
                        <Image
                          src={member.image || "/placeholder-member.svg"}
                          alt={member.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className={styles.memberImg}
                        />
                      </div>
                      <div className={styles.gamaMemberInfo}>
                        <h3 className={styles.memberName}>{member.name}</h3>
                        <span className={styles.memberRole}>{member.role}</span>
                        {member.phone && (
                          <p className={styles.memberPhone}>
                            <i className="fa-solid fa-phone"></i> {member.phone}
                          </p>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* PRESIDENTS (अध्यक्षहरू) */}
            {activeTab === 'presidents' && !isHomepage && (
              <div className={`${styles.gamaPanel} ${styles.active}`}>
                <div className={styles.gamaPanelHeading}>
                  <span>०३</span>
                  <div>
                    <h2>संस्थाका अध्यक्षहरू तथा पूर्व कार्यसमिति अभिलेख</h2>
                    <p>स्थापना कालदेखि हालसम्मका सम्पूर्ण अध्यक्षहरू तथा कार्यसमिति पदाधिकारीहरूको ऐतिहासिक विवरण (PDF)।</p>
                  </div>
                </div>

                {/* PDF SHOWCASE HERO CARD */}
                <div className={styles.pdfShowcaseCard}>
                  <div className={styles.pdfCoverWrapper} onClick={openPdfModal}>
                    <div className={styles.pdfCoverBadge}>
                      <i className="fa-solid fa-file-pdf"></i>
                      <span>आधिकारिक दस्तावेज (PDF)</span>
                    </div>
                    <Image
                      src="/pdf/presidents/president_page-01.png"
                      alt="अध्यक्षहरू तथा पूर्व कार्यसमिति दस्तावेज"
                      width={500}
                      height={700}
                      className={styles.pdfCoverImg}
                      priority
                    />
                    <div className={styles.pdfCoverOverlay}>
                      <i className="fa-solid fa-magnifying-glass-plus"></i>
                      <span>ठूलो बनाएर PDF खोल्नुहोस्</span>
                    </div>
                  </div>

                  <div className={styles.pdfDetails}>
                    <div className={styles.pdfDocTag}>
                      <i className="fa-solid fa-award"></i>
                      <span>ऐतिहासिक अभिलेख • ११ पृष्ठहरू</span>
                    </div>

                    <h3 className={styles.pdfTitle}>
                      गण्डकी अटो मेकानिकल वर्क्स एसोसिएसनका <strong>अध्यक्षहरू तथा कार्यसमिति विवरण</strong>
                    </h3>

                    <p className={styles.pdfDesc}>
                      एसोसिएसनको स्थापनादेखि हालसम्म संस्थालाई सफल नेतृत्व प्रदान गर्नुभएका श्रद्धेय अध्यक्षहरू,
                      पदाधिकारीहरू तथा ऐतिहासिक कार्यसमितिहरूको नामावली र तस्वीरसहितको आधिकारिक अभिलेख दस्तावेज।
                    </p>

                    <div className={styles.pdfFeaturesList}>
                      <div className={styles.pdfFeatureItem}>
                        <i className="fa-solid fa-circle-check"></i>
                        <span>सम्पूर्ण ११ वटा ऐतिहासिक फ्रेम तथा कार्यसमितिहरूको पूर्ण विवरण</span>
                      </div>
                      <div className={styles.pdfFeatureItem}>
                        <i className="fa-solid fa-circle-check"></i>
                        <span>कार्यकाल अनुसार अध्यक्ष, पदाधिकारी, सल्लाहकार तथा सदस्यहरूको आधिकारिक नामावली</span>
                      </div>
                      <div className={styles.pdfFeatureItem}>
                        <i className="fa-solid fa-circle-check"></i>
                        <span>उच्च गुणस्तरीय (HD) फुलस्क्रिन भ्यू, जुम तथा डाउनलोड सुविधा</span>
                      </div>
                    </div>

                    <div className={styles.pdfActionButtons}>
                      <button onClick={openPdfModal} className={styles.btnPdfPrimary}>
                        <i className="fa-solid fa-expand"></i>
                        <span>ठूलो बनाएर हेर्नुहोस् (Full Screen)</span>
                      </button>

                      <a
                        href="/pdf/Untitled design.pdf"
                        download="GAMA_Presidents_History.pdf"
                        className={styles.btnPdfSecondary}
                      >
                        <i className="fa-solid fa-download"></i>
                        <span>PDF डाउनलोड गर्नुहोस्</span>
                      </a>

                      <a
                        href="/pdf/Untitled design.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.btnPdfOutline}
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        <span>नयाँ ट्याबमा खोल्नुहोस्</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* 11 PAGES GALLERY GRID */}
                <div className={styles.pagesGallerySection}>
                  <div className={styles.galleryHeader}>
                    <h4>दस्तावेजका पृष्ठहरू (११ वटा ऐतिहासिक फ्रेमहरू):</h4>
                    <p>कुनै पनि पृष्ठमा क्लिक गरेर ठूलो आकारमा हेर्नुहोस्:</p>
                  </div>

                  <div className={styles.pagesGrid}>
                    {presidentPages.map((page, idx) => (
                      <div
                        key={page.id}
                        className={styles.pageGridCard}
                        onClick={() => openModalToPage(idx)}
                      >
                        <div className={styles.pageGridImgWrapper}>
                          <Image
                            src={page.image}
                            alt={page.title}
                            width={320}
                            height={440}
                            className={styles.pageGridImg}
                            loading="lazy"
                          />
                          <div className={styles.pageGridOverlay}>
                            <i className="fa-solid fa-magnifying-glass-plus"></i>
                            <span>ठूलो हेर्नुहोस्</span>
                          </div>
                          <span className={styles.pageNumberBadge}>पृष्ठ {page.id}</span>
                        </div>
                        <div className={styles.pageGridMeta}>
                          <h5>{page.title}</h5>
                          <p>{page.tenure}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

          </div>

          {/* HOMEPAGE SPECIAL SECTIONS */}
          {isHomepage && (
            <>
              {/* HOMEPAGE PRESIDENTS ARCHIVE CARD */}
              <div className={styles.hpPresidentsBanner}>
                <div className={styles.hpPresidentsContent}>
                  <div className={styles.hpPresidentsTag}>
                    <i className="fa-solid fa-award"></i>
                    <span>ऐतिहासिक अभिलेख</span>
                  </div>
                  <h3>संस्थाका पूर्व अध्यक्षहरू तथा कार्यसमिति विवरण (PDF)</h3>
                  <p>
                    स्थापना कालदेखि हालसम्मका सम्पूर्ण अध्यक्षहरू तथा पूर्व कार्यसमिति पदाधिकारीहरूको आधिकारिक विवरण।
                  </p>
                </div>
                <div className={styles.hpPresidentsActions}>
                  <button
                    onClick={openPdfModal}
                    className={styles.hpPdfOpenBtn}
                  >
                    <i className="fa-solid fa-file-pdf"></i>
                    <span>अध्यक्षहरू (PDF) ठूलो हेर्नुहोस्</span>
                  </button>
                  <Link href="/members?tab=presidents" className={styles.hpPdfExploreBtn}>
                    <span>सबै ११ पृष्ठ हेर्नुहोस् &rarr;</span>
                  </Link>
                </div>
              </div>

              {/* VIEW ALL BUTTON (HOMEPAGE ONLY) */}
              <div className={styles.viewAllContainer}>
                <Link href="/members" className={styles.viewAllButton}>
                  View All Members
                </Link>
              </div>
            </>
          )}

        </div>
      </section>

      {/* FULLSCREEN PDF MODAL */}
      {isPdfModalOpen && (
        <div className={styles.modalBackdrop} onClick={closeModal}>
          <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
            {/* MODAL HEADER */}
            <div className={styles.modalHeader}>
              <div className={styles.modalTitleBlock}>
                <i className="fa-solid fa-file-pdf"></i>
                <div>
                  <h3>संस्थाका अध्यक्षहरू तथा पूर्व कार्यसमिति अभिलेख</h3>
                  <span>गण्डकी अटो मेकानिकल वर्क्स एसोसिएसन (११ पृष्ठहरू)</span>
                </div>
              </div>

              {/* VIEW SWITCHER */}
              <div className={styles.modalViewSwitcher}>
                <button
                  onClick={() => setModalViewMode('pdf')}
                  className={`${styles.modalSwitchBtn} ${modalViewMode === 'pdf' ? styles.switchActive : ''}`}
                >
                  <i className="fa-solid fa-file-lines"></i>
                  <span>PDF Viewer</span>
                </button>
                <button
                  onClick={() => setModalViewMode('pages')}
                  className={`${styles.modalSwitchBtn} ${modalViewMode === 'pages' ? styles.switchActive : ''}`}
                >
                  <i className="fa-solid fa-images"></i>
                  <span>पृष्ठ ग्यालरी ({selectedPageIndex + 1}/११)</span>
                </button>
              </div>

              {/* MODAL ACTIONS */}
              <div className={styles.modalActions}>
                <a
                  href="/pdf/Untitled design.pdf"
                  download="GAMA_Presidents_History.pdf"
                  className={styles.modalDownloadBtn}
                  title="PDF डाउनलोड गर्नुहोस्"
                >
                  <i className="fa-solid fa-download"></i>
                  <span>डाउनलोड</span>
                </a>
                <a
                  href="/pdf/Untitled design.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.modalNewTabBtn}
                  title="नयाँ ट्याबमा खोल्नुहोस्"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
                <button
                  onClick={closeModal}
                  className={styles.modalCloseBtn}
                  title="बन्द गर्नुहोस् (Esc)"
                  aria-label="बन्द गर्नुहोस्"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>

            {/* MODAL BODY */}
            <div className={styles.modalBody}>
              {modalViewMode === 'pdf' ? (
                <div className={styles.pdfIframeWrapper}>
                  <iframe
                    src="/pdf/Untitled design.pdf#toolbar=1&navpanes=1"
                    className={styles.pdfIframe}
                    title="Presidents History PDF"
                  />
                </div>
              ) : (
                <div className={styles.pageViewerWrapper}>
                  <button
                    onClick={() =>
                      setSelectedPageIndex((prev) =>
                        prev === 0 ? presidentPages.length - 1 : prev - 1
                      )
                    }
                    className={`${styles.pageNavBtn} ${styles.pageNavBtnLeft}`}
                    title="अघिल्लो पृष्ठ (Arrow Left)"
                    aria-label="अघिल्लो पृष्ठ"
                  >
                    <i className="fa-solid fa-chevron-left"></i>
                  </button>

                  <div className={styles.pageViewerCenter}>
                    <Image
                      src={presidentPages[selectedPageIndex].image}
                      alt={presidentPages[selectedPageIndex].title}
                      width={900}
                      height={1250}
                      className={styles.pageViewerImg}
                      priority
                    />
                  </div>

                  <button
                    onClick={() =>
                      setSelectedPageIndex((prev) =>
                        prev === presidentPages.length - 1 ? 0 : prev + 1
                      )
                    }
                    className={`${styles.pageNavBtn} ${styles.pageNavBtnRight}`}
                    title="पछिल्लो पृष्ठ (Arrow Right)"
                    aria-label="पछिल्लो पृष्ठ"
                  >
                    <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              )}
            </div>

            {/* MODAL FOOTER */}
            {modalViewMode === 'pages' && (
              <div className={styles.modalFooter}>
                <div className={styles.pageThumbnailsScroll}>
                  {presidentPages.map((page, idx) => (
                    <button
                      key={page.id}
                      onClick={() => setSelectedPageIndex(idx)}
                      className={`${styles.pageThumbBtn} ${idx === selectedPageIndex ? styles.thumbActive : ''}`}
                    >
                      <span>पृष्ठ {page.id}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MembersSection;
