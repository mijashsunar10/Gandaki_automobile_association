import React from 'react';
import ProgramsSection from '../components/ProgramsSection/ProgramsSection';

export const metadata = {
  title: 'कार्यक्रमहरू | गण्डकी अटो मेकानिकल वर्क्स एसोसिएसन',
  description: 'गण्डकी अटो मेकानिकल वर्क्स एसोसिएसनले आयोजना गरेका सम्पूर्ण कार्यक्रमहरू',
};

export default function ProgramsPage() {
  return (
    <main>
      <ProgramsSection isHomepage={false} />
    </main>
  );
}
