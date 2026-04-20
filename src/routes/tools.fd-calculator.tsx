import { createFileRoute } from "@tanstack/react-router";
import FDCalculator from "@/pages/tools/FDCalculator";
import { toolsSEO } from "@/lib/seoData";

const seo = toolsSEO["fd-calculator"];

export const Route = createFileRoute("/tools/fd-calculator")({
  head: () => ({
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { name: "keywords", content: seo.keywords },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
      { property: "og:url", content: "https://toolskit.tech/tools/fd-calculator" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://toolskit.tech/tools/fd-calculator" }],
  }),
  component: FDCalculator,
});
