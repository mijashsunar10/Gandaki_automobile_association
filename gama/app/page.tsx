import Hero from "./components/Hero/Hero";
import AboutSection from "./components/AboutSection/AboutSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import ChairmanSection from "./components/ChairmanSection/ChairmanSection";
import BulletinSection from "./components/BulletinSection/BulletinSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ChairmanSection />
      <BulletinSection />
      <ServicesSection />
    </>
  );
}
