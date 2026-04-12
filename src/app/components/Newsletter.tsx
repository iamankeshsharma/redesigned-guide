import { Mail } from "lucide-react";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // CMS will handle newsletter subscription
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-8 md:p-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-accent rounded-full mb-4">
          <Mail className="text-accent-foreground" size={24} />
        </div>
        <h2 className="text-3xl text-primary-foreground mb-4">
          Stay Updated
        </h2>
        <p className="text-primary-foreground/80 mb-6">
          Subscribe to our newsletter for the latest mechanical engineering insights, product reviews, and project updates.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
