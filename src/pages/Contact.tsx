import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import PageLayout, { Prose } from "@/components/PageLayout";
import Seo, { PHONE_DISPLAY, PHONE_TEL } from "@/components/Seo";
import { cities } from "@/data/cities";
import { services } from "@/data/services";

const Contact = () => (
  <PageLayout
    h1="Contact Pressure Pros in Starkville, MS"
    intro="Call or email us to schedule window cleaning, house washing, soft washing or gutter cleaning anywhere in our service area."
  >
    <Seo
      title="Contact Pressure Pros | Starkville, MS Exterior Cleaning"
      description="Call Pressure Pros at 662-242-0663 to schedule window cleaning, soft washing or gutter cleaning in Starkville, MS and nearby towns."
      path="/contact"
    />
    <Prose>
      <h2>Get in touch</h2>
      <ul className="space-y-3 text-foreground not-prose">
        <li className="flex gap-3"><Phone className="w-5 h-5 text-primary" /><a href={PHONE_TEL}>{PHONE_DISPLAY}</a></li>
        <li className="flex gap-3"><Mail className="w-5 h-5 text-primary" /><a href="mailto:info@pressureprosms.com">info@pressureprosms.com</a></li>
        <li className="flex gap-3"><MapPin className="w-5 h-5 text-primary" />Starkville, MS 39759</li>
      </ul>
      <p>
        The fastest way to reach us is by phone. Call or text {PHONE_DISPLAY} and tell us what you need cleaned, where the
        property is and roughly how big it is. We'll give you a clear price and find a time that fits your schedule. If we
        miss your call, leave a message and we'll get back to you the same day whenever possible.
      </p>
      <h2>What to tell us when you call</h2>
      <p>
        To give you an accurate price, it helps to know the number of stories, the approximate number of windows, the type
        of siding (vinyl, brick, painted wood or stucco) and anything unusual, like heavy mildew, red clay staining, hard
        water spots or gutters that haven't been cleaned in a while. Photos sent by text are always welcome.
      </p>
      <h2>Services we can schedule</h2>
      <ul className="list-disc pl-5">
        {services.map((s) => (
          <li key={s.slug}><Link to={`/${s.slug}`}>{s.name}</Link>{s.price && <> (<strong className="uppercase">Starting at</strong> {s.price})</>}</li>
        ))}
      </ul>
      <h2>Areas we serve</h2>
      <p>
        We're based in Starkville and work throughout the Golden Triangle, including{" "}
        {cities.map((c, i) => (
          <span key={c.slug}><Link to={`/${c.slug}`}>{c.name}</Link>{i < cities.length - 1 ? ", " : ""}</span>
        ))}
        . See the full <Link to="/service-area">service area</Link> page for details.
      </p>
      <h3>Do I need to be home?</h3>
      <p>
        No. All of our work happens outside, so you don't need to be home. Just leave gates unlocked and an outdoor water
        spigot available, and we'll let you know when we're finished.
      </p>
    </Prose>
  </PageLayout>
);

export default Contact;
