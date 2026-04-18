import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import ToolCard from "./ToolCard";
import { Button } from "@/components/ui/button";
import { tools } from "@/lib/toolsList";

const ToolsGrid = () => {
  return (
    <section className="py-16" id="tools">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Popular <span className="gradient-text">Tools</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most used tools. All free, fast, and easy to use.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <ToolCard key={tool.path} {...tool} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/tools">
              View All Tools
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ToolsGrid;
