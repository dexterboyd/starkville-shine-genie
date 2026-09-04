import { Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Window Cleaning",
    price: "$99",
    period: "starting at",
    description: "Crystal-clear windows for your home or small business.",
    features: [
      "Screen cleaning included",
      "Track & sill cleaning",
      "Hard water stain removal",
      "Storm window & skylight cleaning",
    ],
  },
  {
    name: "House Washing",
    price: "$150",
    period: "starting at",
    description: "Soft washing that restores your home's exterior.",
    features: [
      "Vinyl & brick safe",
      "Mold & mildew removal",
      "Algae & moss removal",
      "Gentle soft wash methods",
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="py-10 bg-soft-gray">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-lg">
            Starting prices for our most popular services. Final quotes depend on property size and condition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-card rounded-2xl p-8 shadow-card border border-border flex flex-col"
            >
              <h3 className="font-heading text-2xl text-foreground mb-2">
                {plan.name}
              </h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-muted-foreground mr-2">{plan.period}</span>
                <span className="font-heading text-4xl md:text-5xl text-foreground">
                  {plan.price}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-foreground">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-button text-lg font-semibold"
              >
                <a href="tel:+16622420663">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for a Quote
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
