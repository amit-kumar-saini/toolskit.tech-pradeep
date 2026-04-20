import { createFileRoute } from "@tanstack/react-router";
import BMICalculator from "@/pages/tools/BMICalculator";
import { toolsSEO } from "@/lib/seoData";

const seo = toolsSEO["bmi-calculator"];

export const Route = createFileRoute("/tools/bmi-calculator")({
  head: () => ({
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { name: "keywords", content: seo.keywords },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
      { property: "og:url", content: "https://toolskit.tech/tools/bmi-calculator" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://toolskit.tech/tools/bmi-calculator" }],
  }),
  component: BMICalculator,
});
