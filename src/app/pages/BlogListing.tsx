import { useState } from "react";
import { Search } from "lucide-react";
import { BlogCard } from "../components/BlogCard";
import { AdPlaceholder } from "../components/AdPlaceholder";

// Mock data - CMS driven in production
const allBlogs = [
  {
    id: "1",
    title: "Advanced Robotics in Modern Manufacturing",
    summary: "Exploring how robotic automation is revolutionizing the manufacturing industry with precision and efficiency.",
    image: "https://images.unsplash.com/photo-1752614671052-92e18f534db1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Automation",
    author: "Engineering Team",
    date: "Apr 10, 2026",
  },
  {
    id: "2",
    title: "3D Printing Technology: Future of Manufacturing",
    summary: "How additive manufacturing is changing prototyping and production across industries.",
    image: "https://images.unsplash.com/photo-1582879304171-8041c73bedbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "3D Printing",
    author: "Tech Insights",
    date: "Apr 8, 2026",
  },
  {
    id: "3",
    title: "Precision Engineering Tools and Techniques",
    summary: "A comprehensive guide to the latest tools and methodologies in precision mechanical engineering.",
    image: "https://images.unsplash.com/photo-1774977865287-888d3b7493f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Engineering",
    author: "Expert Review",
    date: "Apr 5, 2026",
  },
  {
    id: "4",
    title: "CAD Software Comparison 2026",
    summary: "Comparing the top CAD solutions for mechanical design and engineering workflows.",
    image: "https://images.unsplash.com/photo-1581090123826-27b62664de96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Software",
    author: "Tech Team",
    date: "Apr 3, 2026",
  },
  {
    id: "5",
    title: "Sustainable Materials in Engineering",
    summary: "Exploring eco-friendly materials and their applications in modern mechanical design.",
    image: "https://images.unsplash.com/photo-1581090466144-8ed89ea98b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Materials",
    author: "Green Tech",
    date: "Apr 1, 2026",
  },
  {
    id: "6",
    title: "Industrial Automation Systems",
    summary: "Understanding the components and benefits of modern industrial automation infrastructure.",
    image: "https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Automation",
    author: "Industry Expert",
    date: "Mar 28, 2026",
  },
];

const categories = [
  "All",
  "Automation",
  "3D Printing",
  "Engineering",
  "Software",
  "Materials",
];

export function BlogListing() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl mb-4">Blog & Articles</h1>
          <p className="text-primary-foreground/80 max-w-2xl">
            Technical insights, tutorials, and industry news from our expert contributors.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {allBlogs.map((blog) => (
                <BlogCard key={blog.id} {...blog} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Categories */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg text-foreground mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                      selectedCategory === category
                        ? "bg-accent text-accent-foreground"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Ad Placeholder */}
            <AdPlaceholder variant="sidebar" />

            {/* Ad Placeholder */}
            <AdPlaceholder variant="sidebar" />
          </div>
        </div>
      </div>
    </div>
  );
}
