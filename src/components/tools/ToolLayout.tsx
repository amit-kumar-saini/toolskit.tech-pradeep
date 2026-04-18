import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, type LucideIcon, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AdBanner from "@/components/AdBanner";
import { toolsSEO, getToolStructuredData, type ToolArticle } from "@/lib/seoData";
import { StructuredData } from "@/components/SEO";
import donateQr from "@/assets/donate-qr.png";

interface ToolLayoutProps {
  title: string;
  description: string;
  icon: LucideIcon;
  children: ReactNode;
  toolSlug?: string;
}

const ToolArticleSection = ({ article, toolName }: { article: ToolArticle; toolName: string }) => {
  return (
    <div className="glass-card rounded-2xl p-6 space-y-8">
      <div className="border-b-2 border-primary pb-4">
        <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">i</div>
          Complete Guide: {toolName}
        </h2>
      </div>

      <div className="border border-border rounded-lg overflow-hidden">
        <div className="bg-muted/50 px-4 py-3 border-b border-border">
          <h3 className="font-bold flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">1</span>
            Introduction
          </h3>
        </div>
        <div className="p-4">
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{article.introduction}</p>
        </div>
      </div>

      <div className="border border-border rounded-lg overflow-hidden">
        <div className="bg-muted/50 px-4 py-3 border-b border-border">
          <h3 className="font-bold flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">2</span>
            How to Use
          </h3>
        </div>
        <div className="p-4">
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base whitespace-pre-line">{article.howToUse}</p>
        </div>
      </div>

      <div className="border border-border rounded-lg overflow-hidden">
        <div className="bg-muted/50 px-4 py-3 border-b border-border">
          <h3 className="font-bold flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">3</span>
            Key Features
          </h3>
        </div>
        <div className="p-4 grid gap-2">
          {article.keyFeatures.map((feature, i) => (
            <div key={i} className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/30 transition-colors">
              <span className="shrink-0 w-5 h-5 rounded bg-green-500/20 text-green-600 dark:text-green-400 flex items-center justify-center text-xs font-bold">✓</span>
              <span className="text-muted-foreground text-sm md:text-base">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DonateBanner = () => (
  <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-primary/20 rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-4">
    <div className="bg-white rounded-lg p-1.5 shrink-0">
      <img src={donateQr} alt="Donate QR Code" className="w-20 h-20 rounded" loading="lazy" />
    </div>
    <div className="text-center sm:text-left">
      <h3 className="font-semibold flex items-center justify-center sm:justify-start gap-2">
        <Heart className="w-4 h-4 text-destructive" /> Love this tool? Support us!
      </h3>
      <p className="text-sm text-muted-foreground mt-1">Scan QR to donate via UPI.</p>
    </div>
  </div>
);

const ToolLayout = ({ title, description, children, toolSlug }: ToolLayoutProps) => {
  const slug = toolSlug || title.toLowerCase().replace(/\s+/g, "-");
  const seoData = toolsSEO[slug];
  const structuredData = getToolStructuredData(slug, seoData?.h1Title || title, seoData?.description || description);
  const h1Title = seoData?.h1Title || title;

  return (
    <>
      <StructuredData data={structuredData} />
      <Header />
      <main className="min-h-screen py-4 sm:py-8" role="main">
        <div className="container px-2 sm:px-4 lg:px-8">
          <div className="hidden sm:block">
            <Breadcrumbs />
          </div>
          <Button variant="ghost" size="sm" asChild className="mb-4 sm:mb-6 hidden sm:inline-flex">
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>

          <div className="max-w-6xl mx-auto lg:flex lg:gap-6">
            <article className="flex-1 min-w-0 space-y-4 sm:space-y-6">
              <section className="glass-card rounded-xl sm:rounded-2xl p-3 sm:p-6 space-y-4 sm:space-y-6">
                <header className="text-center space-y-2">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">{h1Title}</h1>
                  <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                    {seoData?.description || description}
                  </p>
                </header>
                {children}
              </section>

              <DonateBanner />

              {seoData?.faqs && seoData.faqs.length > 0 && (
                <section className="glass-card rounded-2xl p-6">
                  <FAQ faqs={seoData.faqs} toolName={title} />
                </section>
              )}

              {seoData?.article && <ToolArticleSection article={seoData.article} toolName={title} />}
            </article>

            <aside className="hidden lg:block w-[300px] shrink-0" aria-label="Advertisements">
              <div className="sticky top-8 space-y-6">
                <AdBanner showLabel wrapperClassName="glass-card rounded-2xl p-4" />
                <AdBanner showLabel wrapperClassName="glass-card rounded-2xl p-4" />
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ToolLayout;
