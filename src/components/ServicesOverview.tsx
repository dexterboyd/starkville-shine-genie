import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import windowImage from "@/assets/window-cleaning.jpg";
import houseImage from "@/assets/house-washing.jpg";

const services = [
  {
    icon: Droplets,
    title: "Window Cleaning",
    description:
      "Crystal-clear, streak-free windows that let the sunshine in. We use eco-friendly solutions safe for your family and pets.",
    image: windowImage,
    features: ["Streak-free guarantee", "Eco-friendly solutions", "Interior & exterior"],
  },
  {
    icon: Home,
    title: "House Washing",
    description:
      "Restore your home's curb appeal with professional soft washing. We safely remove dirt, mold, mildew, and algae.",
    image: houseImage,
    features: ["Vinyl & brick safe", "Mold & mildew removal", "Curb appeal boost"],
  },
];

const ServicesOverview = () => {
  return (
    <section className="pt-12 pb-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-base uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Professional Exterior Cleaning in{" "}
            <span className="text-primary">Starkville, MS</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From sparkling windows to spotless siding, we have you covered. 
            Our local team delivers exceptional results every time.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} service in Starkville, MS`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-heading text-2xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant="outline"
                  className="group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Link to="/services">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
