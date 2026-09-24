import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App, { prerenderRoutes } from "./App";

export { prerenderRoutes };

export function render(url: string) {
  const helmetContext: { helmet?: Record<string, { toString(): string }> } = {};
  const html = renderToString(
    <App
      helmetContext={helmetContext}
      router={(children) => <StaticRouter location={url}>{children}</StaticRouter>}
    />,
  );
  const h = helmetContext.helmet;
  const head = h
    ? ["title", "meta", "link", "script"].map((k) => h[k]?.toString() ?? "").join("\n")
    : "";
  return { html, head };
}
