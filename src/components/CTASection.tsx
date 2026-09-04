import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-hero-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
            Ready for{" "}
            <span className="text-accent">Sparkling Clean</span>{" "}
            Windows?
          </h2>

          <p className="text-xl text-primary-foreground/90 mb-2 max-w-2xl mx-auto">
            Contact us today for your home or business.
          </p>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Our friendly team is ready to help you see the difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-gold-dark shadow-button text-lg px-8 py-6 font-semibold"
            >
              <a href="tel:+16622420663">
                <Phone className="w-5 h-5 mr-2" />
                Call (662) 242-0663
              </a>
            </Button>
          </div>

          <p className="mt-8 text-primary-foreground/70 text-sm">
            Serving Starkville, MS and surrounding Oktibbeha County areas
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;