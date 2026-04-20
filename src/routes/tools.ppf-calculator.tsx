import { createFileRoute } from "@tanstack/react-router";
import PPFCalculator from "@/pages/tools/PPFCalculator";

export const Route = createFileRoute("/tools/ppf-calculator")({
  head: () => ({
    meta: [
      { title: "PPF Calculator – Public Provident Fund Maturity Calculator | ToolsKit.tech" },
      {
        name: "description",
        content:
          "Free PPF Calculator: estimate your Public Provident Fund maturity amount, total interest earned, and yearly breakdown for any deposit and tenure.",
      },
      {
        name: "keywords",
        content:
          "ppf calculator, public provident fund calculator, ppf maturity calculator, ppf interest calculator",
      },
      {
        property: "og:title",
        content: "PPF Calculator – Public Provident Fund Maturity Calculator",
      },
      {
        property: "og:description",
        content:
          "Estimate PPF maturity and total interest earned with our free Public Provident Fund calculator.",
      },
      { property: "og:url", content: "https://toolskit.tech/tools/ppf-calculator" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://toolskit.tech/tools/ppf-calculator" }],
  }),
  component: PPFCalculator,
});
