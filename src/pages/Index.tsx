import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";

import CTASection from "@/components/CTASection";
import LocalPride from "@/components/LocalPride";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <LocalPride />
        <ServicesOverview />
        
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
