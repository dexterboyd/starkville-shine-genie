import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Check, Droplets, Home, Sparkles, Shield, Leaf, Zap } from "lucide-react";
import windowImage from "@/assets/window-cleaning.jpg";
import houseImage from "@/assets/house-washing.jpg";
import pressureImage from "@/assets/pressure-washing.jpg";
import bulldogIcon from "@/assets/bulldog-icon.png";
import yellowjacketIcon from "@/assets/yellowjacket-icon.png";

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
        <section className="pt-32 pb-12 bg-hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
                Our <span className="text-accent">Services</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                From crystal-clear windows to spotless siding, Pressure Pros delivers 
                exceptional results for Starkville, MS homeowners and businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Window Cleaning Section */}
        <section id="window-cleaning" className="py-10 bg-background scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Image */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src={windowImage}
                    alt="Professional window cleaning service in Starkville, MS"
                    className="w-full h-[350px] lg:h-[450px] object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                  Primary Service
                </span>
                <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                  Window Cleaning in{" "}
                  <span className="text-primary">Starkville, MS</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Let the sunshine in with our professional window cleaning services. 
                  We deliver streak-free, crystal-clear results that make your home shine. 
                  Our eco-friendly solutions are safe for your family, pets, and landscaping.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">
                        Streak-Free Results Guaranteed
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        We use professional-grade equipment and techniques for flawless windows every time.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Leaf className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">
                        Eco-Friendly Solutions
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Safe for children, pets, and your landscaping. Gentle on glass, tough on dirt.
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
                    "Interior & exterior cleaning",
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
              <div className="order-2 lg:order-1">
                <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                  Secondary Service
                </span>
                <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                  House Washing Services for{" "}
                  <span className="text-primary">Starkville Homes</span>
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
                    "Safe pressure techniques",
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
              <div className="relative order-1 lg:order-2">
                <div className="rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src={houseImage}
                    alt="Professional house washing service in Starkville, MS"
                    className="w-full h-[350px] lg:h-[450px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="container mx-auto px-4 bg-soft-gray">
          <div className="h-px bg-border" />
        </div>

        {/* Pressure Washing Section */}
        <section id="pressure-washing" className="py-10 bg-background scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Image */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src={pressureImage}
                    alt="Professional pressure washing service in Starkville, MS"
                    className="w-full h-[350px] lg:h-[450px] object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                  Additional Service
                </span>
                <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                  Pressure Washing in{" "}
                  <span className="text-primary">Starkville, MS</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Power through tough stains on driveways, patios, decks, and more. 
                  Our professional pressure washing services restore surfaces to their 
                  original beauty while protecting your investment.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">
                        High-Power Cleaning
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Commercial-grade equipment removes years of built-up grime, oil stains, and discoloration.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">
                        Surface Safe Techniques
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        We adjust pressure levels for each surface to clean effectively without causing damage.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">
                        Like-New Results
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Transform weathered concrete, wood, and stone back to their original appearance.
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Driveway cleaning",
                    "Patio & deck washing",
                    "Sidewalk cleaning",
                    "Fence restoration",
                    "Concrete stain removal",
                    "Outdoor furniture cleaning",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-foreground">
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-12 bg-card border-y border-border">
          <div className="container mx-auto px-4 text-center">
            <h3 className="font-heading text-2xl text-foreground mb-4">
              Proudly Serving Starkville & Surrounding Areas
            </h3>
            
            {/* Mascot Icons */}
            <div className="flex items-center justify-center gap-8 mb-4">
              <img 
                src={bulldogIcon} 
                alt="Mississippi State Bulldogs" 
                className="w-16 h-16 object-contain opacity-70 hover:opacity-100 transition-opacity mix-blend-multiply" 
              />
              <img 
                src={yellowjacketIcon} 
                alt="Starkville High Yellow Jackets" 
                className="w-16 h-16 object-contain opacity-70 hover:opacity-100 transition-opacity mix-blend-multiply" 
              />
            </div>
            
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide professional window cleaning, house washing, and pressure washing services throughout 
              Starkville, MS, and the greater Oktibbeha County area, including Columbus, 
              West Point, Louisville, and surrounding communities.
            </p>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;