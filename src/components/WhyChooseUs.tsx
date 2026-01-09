import { MapPin, Award, Leaf, ThumbsUp, Users, Clock } from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "Local Starkville Business",
    description:
      "We're your neighbors, proudly serving the Mississippi State community and surrounding areas.",
  },
  {
    icon: Award,
    title: "Professional & Insured",
    description:
      "Fully licensed and insured for your complete peace of mind. Quality work, guaranteed.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Solutions",
    description:
      "Safe cleaning products that protect your family, pets, and landscaping.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description:
      "We're not happy until you're happy. Our work speaks for itself.",
  },
  {
    icon: Users,
    title: "Trusted by Homeowners",
    description:
      "Join hundreds of satisfied Starkville residents who trust us with their homes.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "We work around your schedule. Same-week appointments often available.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="pt-4 pb-16 bg-soft-gray">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Starkville's Most Trusted{" "}
            <span className="text-primary">Window Cleaners</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            When you choose Pressure Pros, you're choosing a local team that cares 
            about your home as much as you do.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="bg-card rounded-xl p-8 shadow-soft hover:shadow-card transition-shadow duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <reason.icon className="w-7 h-7 text-primary group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
