import { createFileRoute } from "@tanstack/react-router";
import LoanEMICalculator from "@/pages/tools/LoanEMICalculator";
import { toolsSEO } from "@/lib/seoData";

const seo = toolsSEO["loan-emi-calculator"];

export const Route = createFileRoute("/tools/loan-emi-calculator")({
  head: () => ({
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { name: "keywords", content: seo.keywords },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
      { property: "og:url", content: "https://toolskit.tech/tools/loan-emi-calculator" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://toolskit.tech/tools/loan-emi-calculator" }],
  }),
  component: LoanEMICalculator,
});
