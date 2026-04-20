import { createFileRoute } from "@tanstack/react-router";
import Blog from "@/pages/Blog";
import { blogPostsList } from "@/lib/blogMeta";

const blogStructuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "ToolsKit.tech Blog",
  description:
    "Tips, tutorials, and guides for using free online tools effectively.",
  url: "https://toolskit.tech/blog",
  publisher: {
    "@type": "Organization",
    name: "ToolsKit.tech",
    logo: {
      "@type": "ImageObject",
      url: "https://storage.googleapis.com/gpt-engineer-file-uploads/di7j8UAQsIVOsCbK58eG1NP3xrh2/uploads/1765097322356-mast logo.png",
    },
  },
  blogPost: blogPostsList.slice(0, 10).map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `https://toolskit.tech/blog/${post.slug}`,
    datePublished: `${post.date}T00:00:00+05:30`,
    image: post.image.replace("w=600&h=400", "w=1200&h=630"),
  })),
};

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      {
        title:
          "Blog – Tips & Tutorials for Free Online Tools | ToolsKit.tech",
      },
      {
        name: "description",
        content:
          "Read the ToolsKit.tech blog for tips, tutorials, and guides on image compression, QR codes, PDF conversion, calculators, and more free online tools.",
      },
      {
        name: "keywords",
        content:
          "online tools blog, image compression tips, qr code guide, pdf converter tutorial, free tools tips",
      },
      {
        name: "robots",
        content:
          "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "ToolsKit.tech Blog" },
      {
        property: "og:description",
        content:
          "Tips, tutorials and guides for getting the most out of free online tools.",
      },
      { property: "og:url", content: "https://toolskit.tech/blog" },
      { property: "og:site_name", content: "ToolsKit.tech" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ToolsKit.tech Blog" },
      {
        name: "twitter:description",
        content:
          "Tips, tutorials and guides for getting the most out of free online tools.",
      },
    ],
    links: [{ rel: "canonical", href: "https://toolskit.tech/blog" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(blogStructuredData),
      },
    ],
  }),
  component: Blog,
});
