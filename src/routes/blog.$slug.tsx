import { createFileRoute } from "@tanstack/react-router";
import BlogPost from "@/pages/BlogPost";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const slug = params.slug;
    const titleFromSlug = slug
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
    return {
      meta: [
        { title: `${titleFromSlug} | ToolsKit.tech Blog` },
        {
          name: "description",
          content: `Read "${titleFromSlug}" on the ToolsKit.tech blog — tutorials, tips and guides for using free online tools.`,
        },
        { property: "og:title", content: titleFromSlug },
        {
          property: "og:description",
          content: `Read "${titleFromSlug}" on the ToolsKit.tech blog.`,
        },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `https://toolskit.tech/blog/${slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `https://toolskit.tech/blog/${slug}` }],
    };
  },
  component: BlogPost,
});
