import { Link } from "react-router-dom";
import PageLayout, { Prose } from "@/components/PageLayout";
import Seo from "@/components/Seo";
import { cities } from "@/data/cities";
import { services } from "@/data/services";

const ServiceArea = () => (
  <PageLayout
    h1="Exterior Cleaning Service Area Around Starkville, MS"
    intro="Pressure Pros serves Starkville, Columbus, West Point, Mississippi State and Louisville with window cleaning, house washing, soft washing and gutter cleaning."
  >
    <Seo
      title="Service Area: Starkville & Golden Triangle | Pressure Pros"
      description="Pressure Pros serves Starkville, Columbus, West Point, Mississippi State and Louisville, MS. Window cleaning, soft washing and gutters."
      path="/service-area"
    />
    <Prose>
      <h2>Based in Starkville, serving the Golden Triangle</h2>
      <p>
        We're a local, Starkville-based exterior cleaning company. From our home base in Oktibbeha County, we travel
        regularly to Columbus in Lowndes County, West Point in Clay County, the Mississippi State University area and
        Louisville in Winston County. If you're somewhere in between, like a rural property off Highway 12, 25, 45 Alt or
        82, give us a call. There's a good chance we already work near you.
      </p>
      <p>
        Every town in our area has its own challenges. Heavy spring pollen coats windows everywhere in North Mississippi.
        Humid summers let mildew and green algae grow on shaded siding. Red clay splashes onto brick and vinyl after hard
        rains, and tall pines and oaks fill gutters with straw and leaves. We deal with these problems every week, and our
        methods are chosen for local conditions.
      </p>
      <h2>Towns we serve</h2>
      <ul className="space-y-3">
        {cities.map((c) => (
          <li key={c.slug}>
            <h3><Link to={`/${c.slug}/`}>{c.name}, MS</Link></h3>
            <p>{c.intro}</p>
          </li>
        ))}
      </ul>
      <h2>Services available across our area</h2>
      <p>
        Every service is available in every town we serve. Homeowners, landlords and small businesses can book one
        service or combine several in a single visit.
      </p>
      <ul className="list-disc pl-5">
        {services.map((s) => (
          <li key={s.slug}><Link to={`/${s.slug}/`}>{s.name}</Link></li>
        ))}
      </ul>
      <h2>Not sure if we come to you?</h2>
      <p>
        Call us at (662) 242-0663 and tell us where you are. We'll let you know right away whether you're in our area and
        when we can get you on the schedule. You can also visit our <Link to="/contact/">contact page</Link>.
      </p>
    </Prose>
  </PageLayout>
);

export default ServiceArea;
