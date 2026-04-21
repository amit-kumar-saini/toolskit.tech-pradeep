/**
 * Legacy SEO component. SEO meta tags are now managed exclusively by
 * TanStack Router route `head()` functions (see src/lib/toolHead.ts and
 * each route file under src/routes/). This component is now a no-op so
 * existing imports do not break, but it never injects anything.
 *
 * Do NOT add new usages — set meta in the route's head() instead.
 */
interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
  noindex?: boolean;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
}

const SEO = (_props: SEOProps) => null;

export default SEO;
