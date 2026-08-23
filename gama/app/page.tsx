import Hero from "./components/Hero/Hero";
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
      <AboutSection />
      <ChairmanSection />
      <BulletinSection />
      <MembersSection isHomepage={true} />
      <ProgramsSection isHomepage={true} />
      <ServicesSection />
    </>
  );
}
