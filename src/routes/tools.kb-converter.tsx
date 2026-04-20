import { createFileRoute } from "@tanstack/react-router";
import KBConverter from "@/pages/tools/KBConverter";
import { toolsSEO } from "@/lib/seoData";

const seo = toolsSEO["kb-converter"];

export const Route = createFileRoute("/tools/kb-converter")({
  head: () => ({
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { name: "keywords", content: seo.keywords },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
      { property: "og:url", content: "https://toolskit.tech/tools/kb-converter" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://toolskit.tech/tools/kb-converter" }],
  }),
  component: KBConverter,
});
