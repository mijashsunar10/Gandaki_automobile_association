import React from "react";
import CalendarSection from "../components/CalendarSection/CalendarSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "आधिकारिक क्यालेन्डर २०८३ | गण्डकी अटो मेकानिकल वर्क्स एसोसिएसन",
  description: "गण्डकी अटो मेकानिकल वर्क्स एसोसिएसन (GAMA) को आधिकारिक भित्ते पात्रो २०८३ (नेपाल संवत् ११४६ / २०२६-२०२७) का १२ महिनाहरू।",
  keywords: [
    "GAMA Calendar",
    "GAMA Pokhara Calendar 2083",
    "Gandaki Auto Mechanical Works Association Calendar",
    "गण्डकी अटो मेकानिकल वर्क्स एसोसिएसन क्यालेन्डर",
    "नेपाली पात्रो २०८३",
    "Pokhara auto workshop calendar"
  ]
};

export default function CalendarPage() {
  return (
    <main>
      <CalendarSection isHomepage={false} />
    </main>
  );
}
