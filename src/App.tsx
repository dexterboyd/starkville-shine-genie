import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServiceArea from "./pages/ServiceArea";
import ServicePage from "./pages/ServicePage";
import CityPage from "./pages/CityPage";
import NotFound from "./pages/NotFound";
import { services } from "./data/services";
import { cities } from "./data/cities";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            {services.map((s) => (
              <Route key={s.slug} path={`/${s.slug}`} element={<ServicePage slug={s.slug} />} />
            ))}
            {cities.map((c) => (
              <Route key={c.slug} path={`/${c.slug}`} element={<CityPage slug={c.slug} />} />
            ))}
            <Route path="/service-area" element={<ServiceArea />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Navigate to="/window-cleaning" replace />} />
            <Route path="/soft-washing" element={<Navigate to="/house-washing" replace />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
