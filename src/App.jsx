import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProfileSection from "./components/ProfileSection";
import GetItSoldSection from "./components/GetItSoldSection";
import FindYourHomeSection from "./components/FindYourHomeSection";
import GallerySection from "./components/GallerySection";
import OurServicesSection from "./components/OurServicesSection";
import ContactUsSection from "./components/ContactUsSection";
import FooterSection from "./components/FooterSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProfileSection />
      <GetItSoldSection />
      <FindYourHomeSection />
      <GallerySection />
      <OurServicesSection />
      <ContactUsSection />
      <FooterSection />
    </div>
  );
}

export default App;
