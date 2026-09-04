import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://video.wixstatic.com/video/84770f_0512b95c6bd44398a825e832e08a47a5/1080p/mp4/file.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-overlay-gradient" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Crystal Clear Windows.{" "}
            <span className="text-accent block">Spotless Exteriors.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Professional window cleaning and house washing services for homeowners and small businesses.
            <br className="hidden md:block" />
            Experience the difference that attention to detail makes.
          </p>

          {/* CTA */}
          <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-button text-lg px-10 py-6 font-semibold"
            >
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;