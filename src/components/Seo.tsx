import { Helmet } from "react-helmet-async";

export const SITE_URL = "https://www.pressureproscleaningsolutions.com";
export const BRAND = "Pressure Pros";
export const PHONE_DISPLAY = "(662) 242-0663";
export const PHONE_TEL = "tel:6622420663";
export const SERVICE_AREA = ["Starkville", "Columbus", "West Point", "Mississippi State", "Louisville"];

interface SeoProps {
  title: string;
  description: string;
  path: string;
  schema?: object | object[];
}

const Seo = ({ title, description, path, schema }: SeoProps) => {
  const url = `${SITE_URL}${path === "/" ? "/" : path.replace(/\/?$/, "/")}`;
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${SITE_URL}/og-image.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}/og-image.png`} />
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;
