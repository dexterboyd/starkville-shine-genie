import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import PricingSection from "@/components/PricingSection";
import { Check, Home, Sparkles, Shield } from "lucide-react";
import windowImage from "@/assets/window-cleaning.jpg";
import houseImage from "@/assets/house-washing.jpg";
import heroImage from "@/assets/hero-window.jpg";

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center pt-32 pb-10 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Professional window cleaning"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-hero-gradient opacity-80" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
                Our <span className="text-accent">Services</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                From crystal-clear windows to spotless siding, Pressure Pros delivers 
                exceptional results for homeowners and small businesses.
              </p>
            </div>
          </div>
        </section>


        {/* Window Cleaning Section */}
        <section id="window-cleaning" className="py-10 bg-background scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Content */}
              <div>
                <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                  Primary Service
                </span>
                <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                  Window Cleaning
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Let the sunshine in with our professional window cleaning services. 
                  We deliver crystal-clear results that make your home shine. 
                  Our solutions are safe for your family, pets, and landscaping.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">
                        Includes Cleaning Screens & Window Tracks
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        We use professional-grade equipment and techniques for flawless windows every time.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">
                        Safe for All Property Types
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Residential homes, commercial buildings, storefronts, and rental properties.
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Screen cleaning included",
                    "Track & sill cleaning",
                    "Hard water stain removal",
                    "Storm window cleaning",
                    "Skylight cleaning",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-foreground">
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src={windowImage}
                    alt="Professional window cleaning service"
                    className="w-full h-[350px] lg:h-[450px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="container mx-auto px-4 bg-background">
          <div className="h-px bg-border" />
        </div>

        {/* House Washing Section */}
        <section id="house-washing" className="py-10 bg-soft-gray scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Content */}
              <div>
                <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                  Secondary Service
                </span>
                <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                  House Washing Services
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Restore your home's curb appeal with our professional house washing services. 
                  We safely remove years of built-up dirt, mold, mildew, and algae using 
                  soft washing techniques that protect your siding.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Home className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">
                        Safe for Vinyl & Brick
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Our soft washing technique is gentle on all siding materials while delivering powerful results.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">
                        Mold & Mildew Removal
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Eliminate harmful growth that can damage your home's exterior and affect air quality.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">
                        Protect Property Value
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Regular house washing maintains your home's appearance and prevents costly repairs.
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Vinyl siding cleaning",
                    "Brick & stone washing",
                    "Algae & moss removal",
                    "Dirt & grime removal",
                    "Gentle soft wash methods",
                    "Curb appeal restoration",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-foreground">
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src={houseImage}
                    alt="Professional house washing service"
                    className="w-full h-[350px] lg:h-[450px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>


        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;