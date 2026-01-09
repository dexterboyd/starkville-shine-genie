import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { MapPin, Heart, Award, Users, Target, Shield } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                About Us
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
                Your Local{" "}
                <span className="text-accent">Starkville</span>{" "}
                Cleaning Experts
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                We're more than just a cleaning company—we're your neighbors, 
                committed to helping Starkville homes shine.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                    <Heart className="w-4 h-4" />
                    Our Story
                  </span>
                  <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                    Born & Raised in{" "}
                    <span className="text-primary">Starkville, MS</span>
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Pressure Pros Exterior Cleaning Solutions was founded with a simple mission: 
                    to provide Starkville homeowners with honest, reliable, and professional 
                    exterior cleaning services they can trust.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    As a locally owned and operated business, we understand what makes our 
                    community special. From the beautiful homes near the Mississippi State campus 
                    to the charming neighborhoods throughout town, we take pride in helping our 
                    neighbors maintain their properties with the same care and attention we'd 
                    give our own homes.
                  </p>
                </div>
                <div className="bg-soft-gray rounded-2xl p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground">Local Owned</h4>
                        <p className="text-muted-foreground text-sm">Starkville, Mississippi</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                        <Shield className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground">Fully Insured</h4>
                        <p className="text-muted-foreground text-sm">For your peace of mind</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-sky flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground">Community First</h4>
                        <p className="text-muted-foreground text-sm">Serving our neighbors</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="container mx-auto px-4">
          <div className="h-px bg-border" />
        </div>

        {/* Our Values */}
        <section className="py-12 bg-soft-gray">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Our Values
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                What We Stand For
              </h2>
              <p className="text-muted-foreground text-lg">
                Every job we do is guided by the principles that matter most to us.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="bg-card rounded-xl p-6 text-center shadow-soft hover:shadow-card transition-shadow">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Honesty
                </h3>
                <p className="text-muted-foreground text-sm">
                  Fair pricing, transparent communication, no hidden fees.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 text-center shadow-soft hover:shadow-card transition-shadow">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Reliability
                </h3>
                <p className="text-muted-foreground text-sm">
                  We show up on time and do what we say we'll do.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 text-center shadow-soft hover:shadow-card transition-shadow">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Attention to Detail
                </h3>
                <p className="text-muted-foreground text-sm">
                  We treat every home like it's our own.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 text-center shadow-soft hover:shadow-card transition-shadow">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Customer First
                </h3>
                <p className="text-muted-foreground text-sm">
                  Your satisfaction is our top priority, always.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mississippi State Community */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h3 className="font-heading text-2xl md:text-3xl text-primary-foreground mb-4">
              Proud to Serve the Mississippi State Community
            </h3>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              From game day weekends to everyday life, we're here for our Bulldog family. 
              Whether you're a longtime Starkville resident, a Mississippi State student, 
              or a faculty member, we'd be honored to help keep your property looking its best.
            </p>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
