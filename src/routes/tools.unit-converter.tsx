import { createFileRoute } from "@tanstack/react-router";
import UnitConverter from "@/pages/tools/UnitConverter";
import { toolsSEO } from "@/lib/seoData";

const seo = toolsSEO["unit-converter"];

export const Route = createFileRoute("/tools/unit-converter")({
  head: () => ({
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { name: "keywords", content: seo.keywords },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
      { property: "og:url", content: "https://toolskit.tech/tools/unit-converter" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://toolskit.tech/tools/unit-converter" }],
  }),
  component: UnitConverter,
});
