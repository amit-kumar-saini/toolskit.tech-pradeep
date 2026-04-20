import { createFileRoute } from "@tanstack/react-router";
import ImageCropper from "@/pages/tools/ImageCropper";
import { toolsSEO } from "@/lib/seoData";

const seo = toolsSEO["image-cropper"];

export const Route = createFileRoute("/tools/image-cropper")({
  head: () => ({
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { name: "keywords", content: seo.keywords },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
      { property: "og:url", content: "https://toolskit.tech/tools/image-cropper" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://toolskit.tech/tools/image-cropper" }],
  }),
  component: ImageCropper,
});
