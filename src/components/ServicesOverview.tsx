import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import windowImage from "@/assets/window-cleaning.jpg";
import houseImage from "@/assets/house-washing.jpg";

const services = [
  {
    title: "Window Cleaning",
    description:
      "Crystal-clear windows that let the sunshine in. We use solutions safe for your family and pets.",
    image: windowImage,
    features: [
      "Includes cleaning screens and window tracks",
      "Hard water stain removal",
      "Skylight & storm window cleaning",
    ],
  },
  {
    title: "House Washing",
    description:
      "Restore your home's curb appeal with professional soft washing. We safely remove dirt, mold, mildew, and algae.",
    image: houseImage,
    features: ["Vinyl & brick safe", "Mold & mildew removal", "Curb appeal restoration"],
  },
];

const ServicesOverview = () => {
  return (
    <section className="pt-8 pb-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg">
            From sparkling windows to spotless siding, we have you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service) => (
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