import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PHONE_DISPLAY, PHONE_TEL } from "@/components/Seo";

export const CallButtons = ({ light = false }: { light?: boolean }) => (
  <div className="flex flex-col sm:flex-row gap-3 justify-center">
    <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-gold-dark font-semibold">
      <a href={PHONE_TEL}>
        <Phone className="w-5 h-5 mr-2" />
        Call {PHONE_DISPLAY}
      </a>
    </Button>
    <Button
      asChild
      size="lg"
      variant="outline"
      className={light ? "bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" : "border-primary text-primary"}
    >
      <Link to="/contact">Contact Us</Link>
    </Button>
  </div>
);

interface PageLayoutProps {
  h1: string;
  intro: string;
  children: ReactNode;
}

const PageLayout = ({ h1, intro, children }: PageLayoutProps) => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      <section className="pt-32 pb-12 bg-hero-gradient">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-5">{h1}</h1>
          <p className="text-lg text-primary-foreground/90 mb-8">{intro}</p>
          <CallButtons light />
        </div>
      </section>
      {children}
      <section className="py-12 bg-hero-gradient">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-primary-foreground mb-3">Ready to get started?</h2>
          <p className="text-primary-foreground/90 mb-6">Contact us today for your home or business.</p>
          <CallButtons light />
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export const Prose = ({ children }: { children: ReactNode }) => (
  <section className="py-12 bg-background">
    <div className="container mx-auto px-4 max-w-3xl space-y-5 text-muted-foreground leading-relaxed [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:text-foreground [&_h2]:pt-4 [&_h3]:font-heading [&_h3]:text-xl [&_h3]:text-foreground [&_a]:text-primary [&_a]:underline">
      {children}
    </div>
  </section>
);

export default PageLayout;
