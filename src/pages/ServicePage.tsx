import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import PageLayout, { Prose } from "@/components/PageLayout";
import Seo, { SITE_URL, SERVICE_AREA } from "@/components/Seo";
import { getService, services } from "@/data/services";
import { cities } from "@/data/cities";

const ServicePage = ({ slug }: { slug: string }) => {
  const s = getService(slug);
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: s.name,
      serviceType: s.name,
      url: `${SITE_URL}/${s.slug}`,
      provider: { "@type": "HomeAndConstructionBusiness", name: "Pressure Pros", telephone: "+1-662-242-0663", url: SITE_URL },
      areaServed: SERVICE_AREA.map((n) => ({ "@type": "City", name: `${n}, MS` })),
      ...(s.price && { offers: { "@type": "Offer", price: s.price.replace("$", ""), priceCurrency: "USD" } }),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: s.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];

  return (
    <PageLayout h1={s.h1} intro={s.intro}>
      <Seo title={s.title} description={s.description} path={`/${s.slug}`} schema={schema} />
      <Prose>
        <img src={s.image} alt={s.alt} loading="lazy" className="w-full h-72 object-cover rounded-2xl" />
        {s.price && (
          <p className="text-foreground text-lg">
            <strong className="uppercase">Starting at</strong> {s.price}
          </p>
        )}
        {s.sections.map((sec) => (
          <div key={sec.h2} className="space-y-4">
            <h2>{sec.h2}</h2>
            {sec.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            {sec.bullets && (
              <ul className="grid sm:grid-cols-2 gap-2">
                {sec.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-foreground"><Check className="w-5 h-5 text-accent flex-shrink-0" />{b}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <h2>Frequently asked questions</h2>
        {s.faqs.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}

        <h2>Where we offer {s.name.toLowerCase()}</h2>
        <p>
          Pressure Pros offers {s.name.toLowerCase()} in{" "}
          {cities.map((c, i) => (
            <span key={c.slug}>
              <Link to={`/${c.slug}`}>{c.name}</Link>
              {i < cities.length - 2 ? ", " : i === cities.length - 2 ? " and " : ""}
            </span>
          ))}
          . See our full <Link to="/service-area">service area</Link>.
        </p>
        <h3>Related services</h3>
        <ul className="list-disc pl-5">
          {services.filter((o) => o.slug !== s.slug).map((o) => (
            <li key={o.slug}><Link to={`/${o.slug}`}>{o.name}</Link></li>
          ))}
        </ul>
      </Prose>
    </PageLayout>
  );
};

export default ServicePage;
