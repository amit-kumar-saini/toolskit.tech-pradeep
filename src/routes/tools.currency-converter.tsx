import { createFileRoute } from "@tanstack/react-router";
import CurrencyConverter from "@/pages/tools/CurrencyConverter";
import { toolsSEO } from "@/lib/seoData";

const seo = toolsSEO["currency-converter"];

export const Route = createFileRoute("/tools/currency-converter")({
  head: () => ({
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { name: "keywords", content: seo.keywords },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
      { property: "og:url", content: "https://toolskit.tech/tools/currency-converter" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://toolskit.tech/tools/currency-converter" }],
  }),
  component: CurrencyConverter,
});
