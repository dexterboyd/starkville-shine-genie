import { MapPin, Heart } from "lucide-react";

const LocalPride = () => {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center md:text-left">
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-accent" />
            <span className="font-heading text-xl text-foreground">
              Proudly Serving <span className="text-primary font-bold">Starkville, MS</span>
            </span>
          </div>
          
          <div className="hidden md:block w-px h-12 bg-border" />
          
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6 text-accent" />
            <span className="font-heading text-xl text-foreground">
              Home of the <span className="text-primary font-bold">Mississippi State Bulldogs</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalPride;
