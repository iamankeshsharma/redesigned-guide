import { Box, Download } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  type: string;
  downloadLink?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  type,
  downloadLink,
}: ProjectCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video overflow-hidden bg-muted relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-primary/80 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-xs flex items-center gap-1">
          <Box size={12} />
          {type}
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-lg text-foreground mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>
        {downloadLink && (
          <a
            href={downloadLink}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors text-sm"
          >
            <Download size={16} />
            Download
          </a>
        )}
      </div>
    </div>
  );
}
