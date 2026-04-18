/**
 * SEO helper for TanStack Router.
 * Use the `seoMeta()` function inside a route's `head()` definition.
 *
 * Example:
 *   export const Route = createFileRoute("/about")({
 *     head: () => ({ meta: seoMeta({ title: "About", description: "..." }) }),
 *     component: AboutPage,
 *   });
 */
export interface SEOInput {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
}

const SITE_URL = "https://toolskit.tech";
const DEFAULT_OG = "/og-logo.png";

export function seoMeta(input: SEOInput) {
  const fullTitle = input.title.includes("ToolsKit")
    ? input.title
    : `${input.title} | ToolsKit.tech - Free Online Tool`;
  const fullUrl = input.canonicalUrl ? `${SITE_URL}${input.canonicalUrl}` : SITE_URL;
  const ogImage = input.ogImage ?? DEFAULT_OG;
  const ogType = input.ogType ?? "website";

  const meta: Array<Record<string, string>> = [
    { title: fullTitle },
    { name: "description", content: input.description },
    {
      name: "robots",
      content: input.noindex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    { property: "og:type", content: ogType },
    { property: "og:url", content: fullUrl },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: input.description },
    { property: "og:image", content: ogImage },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:site_name", content: "ToolsKit.tech" },
    { property: "og:locale", content: "en_US" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@AmitSaini184544" },
    { name: "twitter:creator", content: "@AmitSaini184544" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: input.description },
    { name: "twitter:image", content: ogImage },
  ];

  if (input.keywords) meta.push({ name: "keywords", content: input.keywords });
  if (input.articlePublishedTime)
    meta.push({ property: "article:published_time", content: input.articlePublishedTime });
  if (input.articleModifiedTime)
    meta.push({ property: "article:modified_time", content: input.articleModifiedTime });

  return meta;
}

export function seoLinks(canonicalUrl?: string) {
  return [
    { rel: "canonical", href: canonicalUrl ? `${SITE_URL}${canonicalUrl}` : SITE_URL },
  ];
}

/** JSON-LD <script> as a React node — render anywhere in the page body. */
export function StructuredData({ data }: { data: object | object[] }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }}
        />
      ))}
    </>
  );
}
