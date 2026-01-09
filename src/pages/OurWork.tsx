import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import windowImage from "@/assets/window-cleaning.jpg";
import pressureImage from "@/assets/pressure-washing.jpg";
import houseImage from "@/assets/house-washing.jpg";
import heroWindow from "@/assets/hero-window.jpg";

const workImages = [
  { src: windowImage, alt: "Window cleaning service", category: "Window Cleaning" },
  { src: pressureImage, alt: "Pressure washing service", category: "Pressure Washing" },
  { src: houseImage, alt: "House washing service", category: "House Washing" },
  { src: heroWindow, alt: "Professional window cleaning", category: "Window Cleaning" },
];

const OurWork = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Work
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See the quality results we deliver for our customers in Starkville and the Golden Triangle area.
            </p>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {workImages.map((image, index) => (
                <div key={index} className="group relative rounded-xl overflow-hidden shadow-card">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OurWork;
