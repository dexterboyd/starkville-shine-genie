import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import CTASection from "@/components/CTASection";
import Seo from "@/components/Seo";
import { Prose } from "@/components/PageLayout";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="Pressure Pros | Window Cleaning & House Washing in Starkville, MS"
        description="Window cleaning, house washing, soft washing and gutter cleaning in Starkville, MS and nearby towns. Call Pressure Pros at 662-242-0663."
        path="/"
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Pressure Pros Exterior Cleaning Solutions",
          telephone: "+1-662-242-0663",
          url: "https://www.pressureproscleaningsolutions.com",
          image: "https://www.pressureproscleaningsolutions.com/og-image.png",
          description:
            "Locally owned window cleaning, house washing, soft washing and gutter cleaning serving Starkville, Columbus, West Point, Mississippi State and Louisville, MS.",
          priceRange: "$$",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "07:00",
              closes: "17:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "07:00",
              closes: "12:30",
            },
          ],
          areaServed: ["Starkville", "Columbus", "West Point", "Mississippi State", "Louisville"].map((c) => ({
            "@type": "City",
            name: `${c}, MS`,
          })),
        }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesOverview />
        <Prose>
          <h2>Local exterior cleaning for the Golden Triangle</h2>
          <p>
            Pressure Pros Exterior Cleaning Solutions is a locally owned exterior cleaning company based in Starkville. We help homeowners, landlords
            and small businesses keep windows, siding and gutters clean through every North Mississippi season, from the
            yellow pollen of early spring to the humid summers that feed mildew and green algae.
          </p>
          <p>
            Our <Link to="/window-cleaning/">window cleaning</Link> includes screens and tracks on every job.{" "}
            <Link to="/house-washing/">House washing and soft washing</Link> use low pressure to safely clear mildew, algae
            and red clay stains from vinyl, brick and painted siding. <Link to="/gutter-cleaning/">Gutter cleaning</Link>{" "}
            removes pine straw and leaves so rainwater drains away from your home instead of spilling onto it.
          </p>
          <p>
            Every job is done by our own local team, and we give you a clear price before any work starts. We'll call or
            text when we're on the way and again when we're finished.
          </p>
          <h3>Towns we serve</h3>
          <p>
            We work in <Link to="/starkville-ms/">Starkville</Link>, <Link to="/columbus-ms/">Columbus</Link>,{" "}
            <Link to="/west-point-ms/">West Point</Link>, <Link to="/mississippi-state-ms/">Mississippi State</Link> and{" "}
            <Link to="/louisville-ms/">Louisville</Link>. See our <Link to="/service-area/">service area</Link> or{" "}
            <Link to="/contact/">contact us</Link> to schedule.
          </p>
        </Prose>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
