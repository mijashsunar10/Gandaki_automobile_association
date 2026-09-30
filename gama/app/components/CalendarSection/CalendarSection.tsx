"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Download,
  Printer,
  Grid,
  Layers,
  X,
  Eye,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import styles from "./CalendarSection.module.css";

export interface MonthData {
  id: number;
  nepaliNumber: string;
  nameNepali: string;
  nameEnglish: string;
  dateRange: string;
  sambhatYear: string;
  image: string;
  description: string;
}

export const calendarMonths: MonthData[] = [
  {
    id: 1,
    nepaliNumber: "०१",
    nameNepali: "बैशाख",
    nameEnglish: "Baisakh",
    dateRange: "APR - MAY 2026",
    sambhatYear: "वि.सं. २०८३",
    image: "/calender/1.jpeg",
    description: "नयाँ वर्ष २०८३ को सुरुवात, शुभकामना तथा एसोसिएसनका नियमित कार्यक्रम तालिका।",
  },
  {
    id: 2,
    nepaliNumber: "०२",
    nameNepali: "जेठ",
    nameEnglish: "Jestha",
    dateRange: "MAY - JUN 2026",
    sambhatYear: "वि.सं. २०८३",
    image: "/calender/2.jpeg",
    description: "१३६औं अन्तर्राष्ट्रिय मजदुर दिवस, विमोचन कार्यक्रम तथा स्वास्थ्य शिविर तालिका।",
  },
  {
    id: 3,
    nepaliNumber: "०३",
    nameNepali: "असार",
    nameEnglish: "Ashadh",
    dateRange: "JUN - JUL 2026",
    sambhatYear: "वि.सं. २०८३",
    image: "/calender/3.jpeg",
    description: "असार महिनाको कार्यतालिका तथा अटो मेकानिकल व्यवसायी दक्षता तालिम।",
  },
  {
    id: 4,
    nepaliNumber: "०४",
    nameNepali: "साउन",
    nameEnglish: "Shrawan",
    dateRange: "JUL - AUG 2026",
    sambhatYear: "वि.सं. २०८३",
    image: "/calender/4.jpeg",
    description: "साउन महिनाका धार्मिक तथा सामाजिक कार्यतालिका एवं एसोसिएसन बैठक।",
  },
  {
    id: 5,
    nepaliNumber: "०५",
    nameNepali: "भदौ",
    nameEnglish: "Bhadra",
    dateRange: "AUG - SEP 2026",
    sambhatYear: "वि.सं. २०८३",
    image: "/calender/5.jpeg",
    description: "हरितालिका तीज, जनैपूर्णिमा, कृष्ण जन्माष्टमी तथा चाडपर्व तालिका।",
  },
  {
    id: 6,
    nepaliNumber: "०६",
    nameNepali: "असोज",
    nameEnglish: "Ashwin",
    dateRange: "SEP - OCT 2026",
    sambhatYear: "वि.सं. २०८३",
    image: "/calender/6.jpeg",
    description: "हिन्दूहरूको महान चाड बडा दशैं, घटस्थापना, विजया दशमी तथा शुभकामना।",
  },
  {
    id: 7,
    nepaliNumber: "०७",
    nameNepali: "कात्तिक",
    nameEnglish: "Kartik",
    dateRange: "OCT - NOV 2026",
    sambhatYear: "वि.सं. २०८३",
    image: "/calender/7.jpeg",
    description: "शुभ दीपावली (तिहार), यमपञ्चक, छठ पर्व तथा भाइटीका तालिका।",
  },
  {
    id: 8,
    nepaliNumber: "०८",
    nameNepali: "मंसिर",
    nameEnglish: "Mangsir",
    dateRange: "NOV - DEC 2026",
    sambhatYear: "वि.सं. २०८३",
    image: "/calender/8.jpeg",
    description: "मंसिर महिनाका कार्यक्रम, विवाह लगन तथा कार्यसमिति बैठक कार्यतालिका।",
  },
  {
    id: 9,
    nepaliNumber: "०९",
    nameNepali: "पुस",
    nameEnglish: "Poush",
    dateRange: "DEC - JAN 2027",
    sambhatYear: "वि.सं. २०८३",
    image: "/calender/9.jpeg",
    description: "तमु ल्होसार, क्रिसमस, अंग्रेजी नयाँ वर्ष तथा हिउँदे कार्यक्रमहरू।",
  },
  {
    id: 10,
    nepaliNumber: "१०",
    nameNepali: "माघ",
    nameEnglish: "Magh",
    dateRange: "JAN - FEB 2027",
    sambhatYear: "वि.सं. २०८३",
    image: "/calender/10.jpeg",
    description: "माघे संक्रान्ति, सोनाम ल्होसार, शहिद दिवस तथा वार्षिक समीक्षा।",
  },
  {
    id: 11,
    nepaliNumber: "११",
    nameNepali: "फागुन",
    nameEnglish: "Falgun",
    dateRange: "FEB - MAR 2027",
    sambhatYear: "वि.सं. २०८३",
    image: "/calender/11.jpeg",
    description: "महाशिवरात्रि, ग्याल्पो ल्होसार, राष्ट्रिय प्रजातन्त्र दिवस तथा फागु पूर्णिमा (होली)।",
  },
  {
    id: 12,
    nepaliNumber: "१२",
    nameNepali: "चैत",
    nameEnglish: "Chaitra",
    dateRange: "MAR - APR 2027",
    sambhatYear: "वि.सं. २०८३",
    image: "/calender/12.jpeg",
    description: "घोडेजात्रा, चैते दशैं, रामनवमी तथा वर्ष २०८३ को समापन एवं वि.सं. २०८४ स्वागत तयारी।",
  },
];

interface CalendarSectionProps {
  isHomepage?: boolean;
}

const CalendarSection: React.FC<CalendarSectionProps> = ({ isHomepage = false }) => {
  const [activeMonthIdx, setActiveMonthIdx] = useState(0);
  const [viewMode, setViewMode] = useState<"single" | "grid">("single");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  const activeMonth = calendarMonths[activeMonthIdx];

  const handlePrev = useCallback(() => {
    setActiveMonthIdx((prev) => (prev === 0 ? calendarMonths.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setActiveMonthIdx((prev) => (prev === calendarMonths.length - 1 ? 0 : prev + 1));
  }, []);

  const openLightbox = (index: number) => {
    setLightboxIdx(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const handleLightboxPrev = useCallback(() => {
    setLightboxIdx((prev) => (prev === 0 ? calendarMonths.length - 1 : prev - 1));
  }, []);

  const handleLightboxNext = useCallback(() => {
    setLightboxIdx((prev) => (prev === calendarMonths.length - 1 ? 0 : prev + 1));
  }, []);

  // Keyboard navigation for lightbox & single mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLightboxOpen) {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") handleLightboxPrev();
        if (e.key === "ArrowRight") handleLightboxNext();
      } else if (viewMode === "single") {
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "ArrowRight") handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, handleLightboxPrev, handleLightboxNext, viewMode, handlePrev, handleNext]);

  const handlePrint = (imageSrc: string) => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${activeMonth.nameNepali} २०८३ क्यालेन्डर - GAMA Pokhara</title>
          <style>
            body {
              margin: 0;
              padding: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              background: #fff;
            }
            img {
              max-width: 100%;
              max-height: 100vh;
              object-fit: contain;
            }
            @media print {
              body { margin: 0; padding: 0; }
              img { width: 100%; height: 100%; }
            }
          </style>
        </head>
        <body>
          <img src="${imageSrc}" onload="window.print();window.close();" />
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <section id="calendar" className={styles.calendarSection}>
      <div className={styles.container}>
        {/* SECTION HEADER */}
        <div className={styles.header}>
          <div className={styles.tag}>
            <Sparkles size={14} className={styles.sparkleIcon} />
            <span>आधिकारिक भित्ते पात्रो २०८३</span>
          </div>

          <h2 className={styles.title}>
            गण्डकी अटो मेकानिकल वर्क्स एसोसिएसन <strong>वार्षिक क्यालेन्डर</strong>
          </h2>

          <p className={styles.description}>
            नेपाल संवत् ११४६ तथा वि.सं. २०८३ (सन् २०२६–२०२७) का सम्पूर्ण १२ महिनाहरूको आधिकारिक भित्ते पात्रो। 
            यहाँबाट प्रत्येक महिनाको क्यालेन्डर स्पष्ट रूपमा हेर्न, जुम गर्न तथा डाउनलोड गर्न सक्नुहुन्छ।
          </p>

          {/* VIEW MODE TOGGLE BUTTONS */}
          <div className={styles.viewModeToggle}>
            <button
              onClick={() => setViewMode("single")}
              className={`${styles.toggleBtn} ${viewMode === "single" ? styles.toggleActive : ""}`}
              aria-label="महिना अनुसार हेर्नुहोस्"
            >
              <Layers size={18} />
              <span>महिना अनुसार (Single View)</span>
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`${styles.toggleBtn} ${viewMode === "grid" ? styles.toggleActive : ""}`}
              aria-label="सबै १२ महिना हेर्नुहोस्"
            >
              <Grid size={18} />
              <span>सबै १२ महिना (Grid View)</span>
            </button>
          </div>
        </div>

        {/* -------------------- SINGLE MONTH VIEW -------------------- */}
        {viewMode === "single" && (
          <div className={styles.singleViewWrapper}>
            {/* 12 MONTH SELECTOR PILL TABS */}
            <div className={styles.monthTabsContainer}>
              <div className={styles.monthTabsList}>
                {calendarMonths.map((m, index) => {
                  const isActive = index === activeMonthIdx;
                  return (
                    <button
                      key={m.id}
                      onClick={() => setActiveMonthIdx(index)}
                      className={`${styles.monthTab} ${isActive ? styles.monthTabActive : ""}`}
                    >
                      <span className={styles.monthTabNum}>{m.nepaliNumber}</span>
                      <span className={styles.monthTabName}>{m.nameNepali}</span>
                      <span className={styles.monthTabEng}>{m.nameEnglish.slice(0, 3)}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* SPOTLIGHT SHOWCASE CARD */}
            <div className={styles.spotlightCard}>
              {/* IMAGE PREVIEW FRAME */}
              <div className={styles.previewFrame}>
                <div
                  className={styles.imageInteractiveWrapper}
                  onClick={() => openLightbox(activeMonthIdx)}
                >
                  <Image
                    src={activeMonth.image}
                    alt={`${activeMonth.nameNepali} ${activeMonth.sambhatYear} क्यालेन्डर`}
                    width={951}
                    height={1280}
                    className={styles.calendarImg}
                    priority
                  />
                  <div className={styles.hoverOverlay}>
                    <div className={styles.hoverContent}>
                      <Maximize2 size={32} />
                      <span>ठूलो बनाएर हेर्न क्लिक गर्नुहोस्</span>
                    </div>
                  </div>
                </div>

                {/* NAVIGATION ARROWS ON IMAGE */}
                <button
                  className={`${styles.navArrow} ${styles.navArrowLeft}`}
                  onClick={handlePrev}
                  aria-label="अघिल्लो महिना"
                  title="अघिल्लो महिना"
                >
                  <ChevronLeft size={26} />
                </button>
                <button
                  className={`${styles.navArrow} ${styles.navArrowRight}`}
                  onClick={handleNext}
                  aria-label="पछिल्लो महिना"
                  title="पछिल्लो महिना"
                >
                  <ChevronRight size={26} />
                </button>
              </div>

              {/* MONTH DETAILS & ACTION SIDEBAR */}
              <div className={styles.detailsPanel}>
                <div className={styles.monthBadge}>
                  <CalendarIcon size={18} />
                  <span>महिना {activeMonth.nepaliNumber} / १२</span>
                </div>

                <h3 className={styles.monthHeadline}>
                  {activeMonth.nameNepali} <span>{activeMonth.sambhatYear}</span>
                </h3>

                <div className={styles.subHeadline}>
                  <span className={styles.engRange}>{activeMonth.dateRange}</span>
                  <span className={styles.bulletDot}>•</span>
                  <span className={styles.sambatBadge}>नेपाल संवत् ११४६</span>
                </div>

                <p className={styles.monthDescription}>
                  {activeMonth.description}
                </p>

                <div className={styles.highlightList}>
                  <div className={styles.highlightItem}>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    <span>एसोसिएसनको आधिकारिक बैठक: प्रत्येक महिनाको पहिलो शनिबार विहान ०८:०० बजे</span>
                  </div>
                  <div className={styles.highlightItem}>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    <span>सम्पूर्ण कार्यसमिति, उपसमिति संयोजक तथा आधिकारिक अटो वर्कसपहरूको विवरण समेटिएको</span>
                  </div>
                  <div className={styles.highlightItem}>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    <span>दैनिक शुभ-अशुभ साइत, एकादशी, पूर्णिमा, औँसी तथा सार्वजनिक बिदाहरू उल्लेख</span>
                  </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className={styles.actionButtonsGroup}>
                  <button
                    onClick={() => openLightbox(activeMonthIdx)}
                    className={styles.btnPrimary}
                  >
                    <Maximize2 size={18} />
                    <span>पूर्ण आकारमा हेर्नुहोस् (Zoom)</span>
                  </button>

                  <a
                    href={activeMonth.image}
                    download={`GAMA_Calendar_2083_${activeMonth.nameEnglish}.jpeg`}
                    className={styles.btnSecondary}
                  >
                    <Download size={18} />
                    <span>डाउनलोड (HD)</span>
                  </a>

                  <button
                    onClick={() => handlePrint(activeMonth.image)}
                    className={styles.btnOutline}
                    title="प्रिन्ट गर्नुहोस्"
                  >
                    <Printer size={18} />
                    <span>प्रिन्ट</span>
                  </button>
                </div>

                {/* MONTH NAVIGATION THUMBNAILS */}
                <div className={styles.miniNavigator}>
                  <p className={styles.miniNavTitle}>छिटो महिना छान्नुहोस्:</p>
                  <div className={styles.miniThumbnails}>
                    {calendarMonths.map((m, idx) => (
                      <button
                        key={m.id}
                        onClick={() => setActiveMonthIdx(idx)}
                        className={`${styles.miniThumbBtn} ${idx === activeMonthIdx ? styles.miniThumbActive : ""}`}
                        title={`${m.nameNepali} (${m.dateRange})`}
                      >
                        {m.nameNepali}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* -------------------- 12 MONTHS GRID VIEW -------------------- */}
        {viewMode === "grid" && (
          <div className={styles.gridViewWrapper}>
            <div className={styles.grid}>
              {calendarMonths.map((m, idx) => (
                <div key={m.id} className={styles.gridCard}>
                  <div
                    className={styles.gridImageWrapper}
                    onClick={() => openLightbox(idx)}
                  >
                    <Image
                      src={m.image}
                      alt={`${m.nameNepali} ${m.sambhatYear} क्यालेन्डर`}
                      width={450}
                      height={600}
                      className={styles.gridImage}
                      loading="lazy"
                    />
                    <div className={styles.gridImageOverlay}>
                      <Eye size={28} />
                      <span>विस्तृत हेर्नुहोस्</span>
                    </div>
                    <span className={styles.gridMonthBadge}>
                      {m.nepaliNumber}
                    </span>
                  </div>

                  <div className={styles.gridCardContent}>
                    <div className={styles.gridCardHeader}>
                      <h4 className={styles.gridCardTitle}>{m.nameNepali} २०८३</h4>
                      <span className={styles.gridDateRange}>{m.dateRange}</span>
                    </div>

                    <div className={styles.gridCardActions}>
                      <button
                        onClick={() => {
                          setActiveMonthIdx(idx);
                          setViewMode("single");
                        }}
                        className={styles.gridActionBtn}
                        title="एकल महिना दृश्यमा हेर्नुहोस्"
                      >
                        <Layers size={14} />
                        <span>हेर्नुहोस्</span>
                      </button>

                      <button
                        onClick={() => openLightbox(idx)}
                        className={styles.gridActionBtn}
                        title="जुम गर्नुहोस्"
                      >
                        <Maximize2 size={14} />
                        <span>जुम</span>
                      </button>

                      <a
                        href={m.image}
                        download={`GAMA_Calendar_2083_${m.nameEnglish}.jpeg`}
                        className={styles.gridDownloadBtn}
                        title="डाउनलोड गर्नुहोस्"
                      >
                        <Download size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* BOTTOM CALL TO ACTION IF ON HOMEPAGE */}
        {isHomepage && (
          <div className={styles.bottomCtaSection}>
            <Link href="/calendar" className={styles.viewAllPageBtn}>
              <CalendarIcon size={20} />
              <span>क्यालेन्डरको छुट्टै विस्तृत पृष्ठ हेर्नुहोस् &rarr;</span>
            </Link>
          </div>
        )}
      </div>

      {/* -------------------- FULLSCREEN LIGHTBOX MODAL -------------------- */}
      {isLightboxOpen && (
        <div className={styles.lightboxBackdrop} onClick={closeLightbox}>
          <div
            className={styles.lightboxContainer}
            onClick={(e) => e.stopPropagation()}
          >
            {/* LIGHTBOX TOP BAR */}
            <div className={styles.lightboxHeader}>
              <div className={styles.lightboxTitleBox}>
                <CalendarIcon size={20} className={styles.lightboxCalendarIcon} />
                <span className={styles.lightboxMonthName}>
                  {calendarMonths[lightboxIdx].nameNepali} २०८३ ({calendarMonths[lightboxIdx].dateRange})
                </span>
                <span className={styles.lightboxIndexBadge}>
                  {lightboxIdx + 1} / १२ महिना
                </span>
              </div>

              <div className={styles.lightboxActions}>
                <a
                  href={calendarMonths[lightboxIdx].image}
                  download={`GAMA_Calendar_2083_${calendarMonths[lightboxIdx].nameEnglish}.jpeg`}
                  className={styles.lightboxDownloadBtn}
                  title="डाउनलोड गर्नुहोस्"
                >
                  <Download size={18} />
                  <span>डाउनलोड</span>
                </a>

                <button
                  onClick={() => handlePrint(calendarMonths[lightboxIdx].image)}
                  className={styles.lightboxPrintBtn}
                  title="प्रिन्ट गर्नुहोस्"
                >
                  <Printer size={18} />
                </button>

                <button
                  onClick={closeLightbox}
                  className={styles.lightboxCloseBtn}
                  title="बन्द गर्नुहोस् (Esc)"
                  aria-label="बन्द गर्नुहोस्"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* LIGHTBOX CONTENT WITH HIGH RESOLUTION IMAGE */}
            <div className={styles.lightboxBody}>
              <button
                onClick={handleLightboxPrev}
                className={`${styles.lbNavBtn} ${styles.lbNavBtnLeft}`}
                title="अघिल्लो महिना (Arrow Left)"
                aria-label="अघिल्लो महिना"
              >
                <ChevronLeft size={36} />
              </button>

              <div className={styles.lightboxImageWrapper}>
                <Image
                  src={calendarMonths[lightboxIdx].image}
                  alt={`${calendarMonths[lightboxIdx].nameNepali} क्यालेन्डर`}
                  width={1100}
                  height={1480}
                  className={styles.lightboxImage}
                  priority
                />
              </div>

              <button
                onClick={handleLightboxNext}
                className={`${styles.lbNavBtn} ${styles.lbNavBtnRight}`}
                title="पछिल्लो महिना (Arrow Right)"
                aria-label="पछिल्लो महिना"
              >
                <ChevronRight size={36} />
              </button>
            </div>

            {/* LIGHTBOX BOTTOM BAR - MONTH SELECTOR */}
            <div className={styles.lightboxFooter}>
              <div className={styles.lbFooterScroll}>
                {calendarMonths.map((m, idx) => (
                  <button
                    key={m.id}
                    onClick={() => setLightboxIdx(idx)}
                    className={`${styles.lbFooterPill} ${idx === lightboxIdx ? styles.lbFooterPillActive : ""}`}
                  >
                    {m.nepaliNumber}. {m.nameNepali}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CalendarSection;
