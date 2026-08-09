import { Link } from "react-router-dom";
import { Sparkles, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-window.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional window cleaning"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-overlay-gradient" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm text-accent px-4 py-2 rounded-full mb-6 animate-fade-up">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Starkville's Trusted Local Pros</span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Crystal Clear Windows.{" "}
            <span className="text-accent block">Spotless Exteriors.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Professional window cleaning and house washing services for homeowners and businesses.
            <br className="hidden md:block" />
            Experience the difference that attention to detail makes.
          </p>

          {/* CTA */}
          <div className="mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-button text-lg px-10 py-6 font-semibold"
            >
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Sparkles className="w-5 h-5 text-accent" />
              <div className="text-left">
                <p className="font-semibold text-primary-foreground text-sm">Streak-Free</p>
                <p className="text-xs text-primary-foreground/70">Guaranteed results</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Clock className="w-5 h-5 text-accent" />
              <div className="text-left">
                <p className="font-semibold text-primary-foreground text-sm">Same Week</p>
                <p className="text-xs text-primary-foreground/70">Fast scheduling</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;