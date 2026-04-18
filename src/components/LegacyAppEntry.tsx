import { lazy, Suspense } from "react";
import { ClientOnly } from "@tanstack/react-router";
import { HelmetProvider } from "react-helmet-async";

const LegacyApp = lazy(() => import("@/App"));

const LoadingScreen = () => (
  <main className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
    <div className="flex items-center gap-3 text-sm font-medium">
      <span className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      Loading ToolsKit...
    </div>
  </main>
);

export default function LegacyAppEntry() {
  return (
    <ClientOnly fallback={<LoadingScreen />}>
      <HelmetProvider>
        <Suspense fallback={<LoadingScreen />}>
          <LegacyApp />
        </Suspense>
      </HelmetProvider>
    </ClientOnly>
  );
}
