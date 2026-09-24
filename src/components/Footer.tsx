import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Droplets, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                <Droplets className="w-7 h-7 text-accent-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-tight">
                  Pressure Pros
                </span>
                <span className="text-xs text-primary-foreground/70">
                  Exterior Cleaning Solutions
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Starkville's trusted local window cleaning and house washing professionals. 
              Proudly serving the Mississippi State community since day one.
            </p>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mt-3">
              Serving Starkville, MS since 2015.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-heading font-semibold text-lg mb-6">Quick Links</p>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/service-area/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Service Area
                </Link>
              </li>
              <li>
                <Link to="/contact/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/about/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="font-heading font-semibold text-lg mb-6">Our Services</p>
            <ul className="space-y-3">
              <li>
                <Link to="/window-cleaning/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Window Cleaning
                </Link>
              </li>
              <li>
                <Link to="/house-washing/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  House Washing &amp; Soft Washing
                </Link>
              </li>
              <li>
                <Link to="/gutter-cleaning/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Gutter Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-heading font-semibold text-lg mb-6">Contact Us</p>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+16622420663"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>(662) 242-0663</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@pressureprosms.com"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>info@pressureprosms.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Starkville, MS 39759</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Pressure Pros Exterior Cleaning Solutions. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Serving Starkville, Columbus, West Point, Mississippi State and Louisville, MS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
