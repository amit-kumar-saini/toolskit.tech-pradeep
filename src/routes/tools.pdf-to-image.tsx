import { createFileRoute } from "@tanstack/react-router";
import PDFToImage from "@/pages/tools/PDFToImage";
import { toolsSEO } from "@/lib/seoData";

const seo = toolsSEO["pdf-to-image"];

export const Route = createFileRoute("/tools/pdf-to-image")({
  head: () => ({
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { name: "keywords", content: seo.keywords },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
      { property: "og:url", content: "https://toolskit.tech/tools/pdf-to-image" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://toolskit.tech/tools/pdf-to-image" }],
  }),
  component: PDFToImage,
});
