import { Phone, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-hero-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Professional Service • Quality Results</span>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
            Ready for{" "}
            <span className="text-accent">Sparkling Clean</span>{" "}
            Windows?
          </h2>

          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Contact us today for your Starkville home. 
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
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm text-lg px-8 py-6"
            >
              <a href="mailto:info@pressureprosms.com">
                <Calendar className="w-5 h-5 mr-2" />
                Contact Us Online
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
