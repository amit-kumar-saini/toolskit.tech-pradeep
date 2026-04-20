import { createFileRoute } from "@tanstack/react-router";
import ColorPicker from "@/pages/tools/ColorPicker";
import { toolsSEO } from "@/lib/seoData";

const seo = toolsSEO["color-picker"];

export const Route = createFileRoute("/tools/color-picker")({
  head: () => ({
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { name: "keywords", content: seo.keywords },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
      { property: "og:url", content: "https://toolskit.tech/tools/color-picker" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://toolskit.tech/tools/color-picker" }],
  }),
  component: ColorPicker,
});
