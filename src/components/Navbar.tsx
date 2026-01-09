import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center group-hover:scale-105 transition-transform">
              <Droplets className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg text-foreground leading-tight">
                Pressure Pros
              </span>
              <span className="text-xs text-muted-foreground">
                Exterior Cleaning Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors relative py-2 ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Phone */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">(662) 123-4567</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium py-2 px-4 rounded-lg transition-colors ${
                    isActive(link.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-2 text-foreground py-2 px-4"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">(662) 123-4567</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
