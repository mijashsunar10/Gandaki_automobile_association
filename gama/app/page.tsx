import Hero from "./components/Hero/Hero";
import AboutSection from "./components/AboutSection/AboutSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import ChairmanSection from "./components/ChairmanSection/ChairmanSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ChairmanSection />
      <ServicesSection />
    </>
  );
}
