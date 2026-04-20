import { createFileRoute, notFound } from "@tanstack/react-router";
import { type ComponentType } from "react";
import { toolsSEO } from "@/lib/seoData";

/**
 * Helper to build a TanStack file route for a tool page using its slug.
 * Pulls SEO title/description/keywords from src/lib/seoData.ts so the same
 * data drives both the per-route head() (for SSR) and the in-page SEO
 * component.
 */
export function createToolRoute<TPath extends string>(
  path: TPath,
  slug: string,
  Component: ComponentType
) {
  const seo = toolsSEO[slug];
  if (!seo) {
    throw notFound();
  }

  return createFileRoute(path as never)({
    head: () => ({
      meta: [
        { title: `${seo.title} | ToolsKit.tech` },
        { name: "description", content: seo.description },
        { name: "keywords", content: seo.keywords },
        { property: "og:title", content: seo.title },
        { property: "og:description", content: seo.description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `https://toolskit.tech/tools/${slug}` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: seo.title },
        { name: "twitter:description", content: seo.description },
      ],
      links: [
        { rel: "canonical", href: `https://toolskit.tech/tools/${slug}` },
      ],
    }),
    component: Component,
  });
}
