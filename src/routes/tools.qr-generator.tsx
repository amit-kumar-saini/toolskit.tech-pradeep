import { createFileRoute } from "@tanstack/react-router";
import QRGenerator from "@/pages/tools/QRGenerator";
import { toolsSEO } from "@/lib/seoData";

const seo = toolsSEO["qr-generator"];

export const Route = createFileRoute("/tools/qr-generator")({
  head: () => ({
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { name: "keywords", content: seo.keywords },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
      { property: "og:url", content: "https://toolskit.tech/tools/qr-generator" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://toolskit.tech/tools/qr-generator" }],
  }),
  component: QRGenerator,
});
