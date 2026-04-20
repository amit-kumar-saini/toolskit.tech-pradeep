import { createFileRoute } from "@tanstack/react-router";
import TextOnPhoto from "@/pages/tools/TextOnPhoto";
import { toolsSEO } from "@/lib/seoData";

const seo = toolsSEO["text-on-photo"];

export const Route = createFileRoute("/tools/text-on-photo")({
  head: () => ({
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { name: "keywords", content: seo.keywords },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
      { property: "og:url", content: "https://toolskit.tech/tools/text-on-photo" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://toolskit.tech/tools/text-on-photo" }],
  }),
  component: TextOnPhoto,
});
