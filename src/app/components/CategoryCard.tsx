import { Link } from "react-router";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  count: number;
}

export function CategoryCard({
  title,
  description,
  icon: Icon,
  link,
  count,
}: CategoryCardProps) {
  return (
    <Link
      to={link}
      className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-accent/50 transition-all h-full flex flex-col"
    >
      <div className="flex items-center justify-center w-14 h-14 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors mb-4">
        <Icon className="text-accent" size={28} />
      </div>
      <h3 className="text-lg text-foreground group-hover:text-accent transition-colors mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 flex-1">{description}</p>
      <div className="pt-3 border-t border-border">
        <span className="text-xs text-muted-foreground">
          {count} {count === 1 ? "article" : "articles"}
        </span>
      </div>
    </Link>
  );
}
