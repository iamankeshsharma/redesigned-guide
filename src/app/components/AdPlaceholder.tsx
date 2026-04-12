interface AdPlaceholderProps {
  variant?: "banner" | "sidebar" | "inline";
  height?: string;
}

export function AdPlaceholder({
  variant = "banner",
  height,
}: AdPlaceholderProps) {
  const heights = {
    banner: height || "h-32",
    sidebar: height || "h-64",
    inline: height || "h-24",
  };

  return (
    <div
      className={`${heights[variant]} bg-muted border-2 border-dashed border-border rounded-lg flex items-center justify-center`}
    >
      <div className="text-center">
        <p className="text-sm text-muted-foreground uppercase tracking-wide">
          Advertisement
        </p>
        <p className="text-xs text-muted-foreground/60 mt-1">
          {variant === "banner" && "AdSense Banner"}
          {variant === "sidebar" && "Sidebar Ad"}
          {variant === "inline" && "In-Content Ad"}
        </p>
      </div>
    </div>
  );
}
