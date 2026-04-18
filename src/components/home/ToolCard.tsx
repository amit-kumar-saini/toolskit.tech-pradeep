import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

interface ToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  color: string;
}

const ToolCard = ({ title, description, icon: Icon, path, color }: ToolCardProps) => {
  return (
    <Link to={path} className="tool-card block group">
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
          style={{ backgroundColor: `${color}20`, color }}
        >
          <Icon className="w-6 h-6" />
        </div>
        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
      </div>
      <h3 className="font-bold text-lg mb-1 text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Link>
  );
};

export default ToolCard;
