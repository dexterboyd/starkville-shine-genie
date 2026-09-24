import { Link } from "react-router-dom";
import PageLayout, { Prose } from "@/components/PageLayout";
import Seo from "@/components/Seo";
import { getCity, cities } from "@/data/cities";
import { services } from "@/data/services";

const CityPage = ({ slug }: { slug: string }) => {
  const c = getCity(slug);
  return (
    <PageLayout h1={c.h1} intro={c.intro}>
      <Seo title={c.title} description={c.description} path={`/${c.slug}`} />
      <Prose>
        {c.sections.map((sec) => (
          <div key={sec.h2} className="space-y-4">
            <h2>{sec.h2}</h2>
            {sec.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        ))}
        <h2>Our services in {c.name}</h2>
        <ul className="list-disc pl-5">
          {services.map((s) => (
            <li key={s.slug}>
              <Link to={`/${s.slug}`}>{s.name} in {c.name}</Link>
              {s.price && <> (<strong className="uppercase">Starting at</strong> {s.price})</>}
            </li>
          ))}
        </ul>
        <h3>Nearby areas we serve</h3>
        <p>
          {cities.filter((o) => o.slug !== c.slug).map((o, i, arr) => (
            <span key={o.slug}>
              <Link to={`/${o.slug}`}>{o.name}</Link>{i < arr.length - 1 ? " · " : ""}
            </span>
          ))}
          {" · "}<Link to="/service-area">Full service area</Link>
        </p>
      </Prose>
    </PageLayout>
  );
};

export default CityPage;
