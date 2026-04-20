import { createFileRoute } from "@tanstack/react-router";
import CryptoConverter from "@/pages/tools/CryptoConverter";
import { toolsSEO } from "@/lib/seoData";

const seo = toolsSEO["crypto-converter"];

export const Route = createFileRoute("/tools/crypto-converter")({
  head: () => ({
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { name: "keywords", content: seo.keywords },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
      { property: "og:url", content: "https://toolskit.tech/tools/crypto-converter" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://toolskit.tech/tools/crypto-converter" }],
  }),
  component: CryptoConverter,
});
