import { ExternalLink, Star } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  price?: string;
  rating?: number;
  affiliateLink: string;
}

export function ProductCard({
  title,
  description,
  image,
  price,
  rating,
  affiliateLink,
}: ProductCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-lg text-foreground mb-2 line-clamp-1">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>
        {rating && (
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < Math.floor(rating) ? "fill-accent text-accent" : "text-muted"}
              />
            ))}
            <span className="text-sm text-muted-foreground ml-2">{rating}</span>
          </div>
        )}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          {price && <span className="text-lg text-foreground">{price}</span>}
          <a
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors text-sm"
          >
            View Product
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
