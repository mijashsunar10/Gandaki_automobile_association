import Hero from "./components/Hero/Hero";
import PartnersSection from "./components/PartnersSection/PartnersSection";
import AboutSection from "./components/AboutSection/AboutSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import ChairmanSection from "./components/ChairmanSection/ChairmanSection";
import BulletinSection from "./components/BulletinSection/BulletinSection";
import MembersSection from "./components/MembersSection/MembersSection";
import ProgramsSection from "./components/ProgramsSection/ProgramsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <PartnersSection />
      <AboutSection />
       <ServicesSection />
      <ChairmanSection />
      <BulletinSection />
      <MembersSection isHomepage={true} />
      <ProgramsSection isHomepage={true} />
     
    </>
  );
}
