"use client";

import React, { useState } from 'react';
import styles from './ContactSection.module.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy submit action
    alert('तपाईंको सन्देश सफलतापूर्वक पठाइयो। हामी चाँडै नै सम्पर्क गर्नेछौं।');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section className={styles.contactSection} id="contact">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      
      <div className={styles.container}>
        
        {/* Left Side: Contact Info */}
        <div className={styles.infoColumn}>
          <div className={styles.tag}>
            <span></span>
            सम्पर्क विवरण
          </div>
          <h2 className={styles.title}>हामीलाई <strong>सम्पर्क गर्नुहोस्</strong></h2>
          <p className={styles.description}>
            गण्डकी अटो मेकानिकल वर्क्स एसोसिएसनमा आबद्ध हुन, कुनै सुझाव दिन वा थप जानकारीका लागि हामीलाई सम्पर्क गर्न सक्नुहुन्छ। हामी तपाईंका जिज्ञासाहरू समाधान गर्न सदैव तत्पर छौं।
          </p>

          <div className={styles.contactList}>
            <div className={styles.contactItem}>
              <div className={styles.iconBox}>
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className={styles.itemText}>
                <h4>हाम्रो कार्यालय</h4>
                <p>पोखरा ८, नयाँबजार, गण्डकी प्रदेश, नेपाल</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.iconBox}>
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className={styles.itemText}>
                <h4>सम्पर्क नम्बर</h4>
                <p>०६१-५७७२३२, ९८५६०८२२३०</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.iconBox}>
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className={styles.itemText}>
                <h4>ईमेल ठेगाना</h4>
                <p>gamapokhara@gmail.com</p>
              </div>
            </div>
          </div>

          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialIcon}><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className={styles.socialIcon}><i className="fa-brands fa-whatsapp"></i></a>
            <a href="#" className={styles.socialIcon}><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className={styles.formColumn}>
          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>सन्देश पठाउनुहोस्</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">पूरा नाम</label>
                <div className={styles.inputWrapper}>
                  <i className="fa-regular fa-user"></i>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="तपाईंको नाम" 
                    required 
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label htmlFor="phone">सम्पर्क नम्बर</label>
                  <div className={styles.inputWrapper}>
                    <i className="fa-solid fa-mobile-screen-button"></i>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="मोबाइल नम्बर" 
                      required 
                    />
                  </div>
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="email">ईमेल (वैकल्पिक)</label>
                  <div className={styles.inputWrapper}>
                    <i className="fa-regular fa-envelope"></i>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="तपाईंको ईमेल" 
                    />
                  </div>
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message">सन्देश</label>
                <div className={styles.textareaWrapper}>
                  <i className="fa-regular fa-comment-dots"></i>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="तपाईंको सन्देश यहाँ लेख्नुहोस्..." 
                    rows={4} 
                    required 
                  ></textarea>
                </div>
              </div>

              <button type="submit" className={styles.submitBtn}>
                सन्देश पठाउनुहोस् <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
