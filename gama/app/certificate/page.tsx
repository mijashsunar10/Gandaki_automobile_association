import React from 'react';
import CertificateSection from '../components/CertificateSection/CertificateSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'प्रमाणपत्रहरू | गण्डकी अटो मेकानिकल वर्क्स एसोसिएसन',
  description: 'गण्डकी अटो मेकानिकल वर्क्स एसोसिएसनका आधिकारिक दर्ता तथा नवीकरण प्रमाणपत्रहरू।',
};

export default function CertificatesPage() {
  return (
    <main>
      <CertificateSection />
    </main>
  );
}
