import { Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import type { ReactNode } from "react";
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

/** Every real page, used for build-time pre-rendering. */
export const prerenderRoutes = [
  "/",
  ...services.map((s) => `/${s.slug}`),
  ...cities.map((c) => `/${c.slug}`),
  "/service-area",
  "/contact",
  "/about",
];

export const AppRoutes = () => (
  <>
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
  </>
);

interface AppProps {
  router: (children: ReactNode) => ReactNode;
  helmetContext?: object;
}

const App = ({ router, helmetContext }: AppProps) => {
  return (
    <HelmetProvider context={helmetContext}>
      {router(<AppRoutes />)}
    </HelmetProvider>
  );
};

export default App;
