import React from 'react';
import ContactSection from '../components/ContactSection/ContactSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'सम्पर्क | गण्डकी अटो मेकानिकल वर्क्स एसोसिएसन',
  description: 'गण्डकी अटो मेकानिकल वर्क्स एसोसिएसनसँग सम्पर्क गर्नुहोस्।',
};

export default function ContactPage() {
  return (
    <main>
      <ContactSection />
    </main>
  );
}
