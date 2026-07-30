import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";
import Stats from "../components/landing/stats";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <Stats />
      <HowItWorks />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;