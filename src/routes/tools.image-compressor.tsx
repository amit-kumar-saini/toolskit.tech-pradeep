import { createFileRoute } from "@tanstack/react-router";
import ImageCompressor from "@/pages/tools/ImageCompressor";
import { toolsSEO } from "@/lib/seoData";

const seo = toolsSEO["image-compressor"];

export const Route = createFileRoute("/tools/image-compressor")({
  head: () => ({
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { name: "keywords", content: seo.keywords },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
      { property: "og:url", content: "https://toolskit.tech/tools/image-compressor" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://toolskit.tech/tools/image-compressor" }],
  }),
  component: ImageCompressor,
});
