import { createFileRoute } from "@tanstack/react-router";
import PincodeLookup from "@/pages/tools/PincodeLookup";
import { toolsSEO } from "@/lib/seoData";

const seo = toolsSEO["pincode-lookup"];

export const Route = createFileRoute("/tools/pincode-lookup")({
  head: () => ({
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { name: "keywords", content: seo.keywords },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
      { property: "og:url", content: "https://toolskit.tech/tools/pincode-lookup" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://toolskit.tech/tools/pincode-lookup" }],
  }),
  component: PincodeLookup,
});
