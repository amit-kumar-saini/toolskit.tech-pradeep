import { createFileRoute } from "@tanstack/react-router";
import LegacyAppEntry from "@/components/LegacyAppEntry";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return <LegacyAppEntry />;
}
