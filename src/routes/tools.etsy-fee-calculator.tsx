import { createFileRoute } from "@tanstack/react-router";
import EtsyFeeCalculator from "@/pages/tools/EtsyFeeCalculator";

export const Route = createFileRoute("/tools/etsy-fee-calculator")({
  head: () => ({
    meta: [
      { title: "Etsy Fee Calculator – Calculate Etsy Fees & Profit | ToolsKit.tech" },
      {
        name: "description",
        content:
          "Free Etsy Fee Calculator: instantly calculate Etsy listing, transaction, and payment processing fees, and see your true profit per sale.",
      },
      {
        name: "keywords",
        content:
          "etsy fee calculator, etsy seller fees, etsy profit calculator, etsy listing fee, etsy transaction fee",
      },
      { property: "og:title", content: "Etsy Fee Calculator – Calculate Fees & Profit" },
      {
        property: "og:description",
        content: "Calculate Etsy fees and profit per sale instantly with our free Etsy fee calculator.",
      },
      { property: "og:url", content: "https://toolskit.tech/tools/etsy-fee-calculator" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://toolskit.tech/tools/etsy-fee-calculator" }],
  }),
  component: EtsyFeeCalculator,
});
