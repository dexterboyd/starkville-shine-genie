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
          alt="Professional window cleaning in Starkville, MS"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-overlay-gradient" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-3xl">
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

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-sm text-lg px-8 py-6"
            >
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-3 text-primary-foreground/90">
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="font-semibold">Streak-Free</p>
                <p className="text-sm text-primary-foreground/70">Guaranteed results</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/90">
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="font-semibold">Same Week</p>
                <p className="text-sm text-primary-foreground/70">Fast scheduling</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;