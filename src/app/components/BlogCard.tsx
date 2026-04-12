import { Link } from "react-router";
import { Calendar, User, Tag } from "lucide-react";

interface BlogCardProps {
  id: string;
  title: string;
  summary: string;
  image: string;
  category: string;
  author: string;
  date: string;
  featured?: boolean;
}

export function BlogCard({
  id,
  title,
  summary,
  image,
  category,
  author,
  date,
  featured = false,
}: BlogCardProps) {
  return (
    <Link
      to={`/blog/${id}`}
      className="group block bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      <div className="aspect-video overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className={`p-6 ${featured ? "space-y-4" : "space-y-3"}`}>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">
            <Tag size={12} />
            {category}
          </span>
        </div>
        <h3 className={`${featured ? "text-2xl" : "text-xl"} text-foreground group-hover:text-accent transition-colors line-clamp-2`}>
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{summary}</p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2 border-t border-border">
          <span className="flex items-center gap-1">
            <User size={14} />
            {author}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {date}
          </span>
        </div>
      </div>
    </Link>
  );
}
