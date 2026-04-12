import { Eye } from "lucide-react";
import { useEffect, useState } from "react";

export function VisitorCounter() {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    // Get visit count from localStorage
    const storedVisits = localStorage.getItem("visitCount");
    const currentCount = storedVisits ? parseInt(storedVisits, 10) : 0;
    const newCount = currentCount + 1;

    // Update localStorage
    localStorage.setItem("visitCount", newCount.toString());
    setVisits(newCount);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="bg-card border-2 border-accent shadow-lg rounded-lg px-4 py-3 flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-full">
          <Eye className="text-accent" size={20} />
        </div>
        <div>
          <div className="text-xs text-muted-foreground uppercase tracking-wide">
            Total Visits
          </div>
          <div className="text-2xl text-foreground font-bold tabular-nums">
            {visits.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
}
