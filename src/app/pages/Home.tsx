import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Cog, BookOpen, Package, Lightbulb } from "lucide-react";
import { BlogCard } from "../components/BlogCard";
import { CategoryCard } from "../components/CategoryCard";
import { Newsletter } from "../components/Newsletter";
import { AdPlaceholder } from "../components/AdPlaceholder";

// Mock data - In production, this comes from CMS
const featuredArticles = [
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
];

const categories = [
  {
    title: "Mechanical Engineering",
    description: "Core principles, design methods, and innovations",
    icon: Cog,
    link: "/blog",
    count: 24,
  },
  {
    title: "Automation & Robotics",
    description: "Industrial automation and robotic systems",
    icon: Package,
    link: "/blog",
    count: 18,
  },
  {
    title: "Technical Guides",
    description: "Step-by-step tutorials and how-tos",
    icon: BookOpen,
    link: "/blog",
    count: 32,
  },
  {
    title: "Innovation & Research",
    description: "Latest developments and future trends",
    icon: Lightbulb,
    link: "/blog",
    count: 15,
  },
];

const trendingArticles = [
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
];

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-accent rounded-xl shadow-lg">
                  <span className="text-primary text-3xl font-bold">SK</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl">
                  Shree Krishna Engineerings
                </h1>
              </div>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-xl">
                Your comprehensive resource for mechanical engineering insights, technology reviews, and innovative solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors"
                >
                  Explore Articles
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground border border-primary-foreground/20 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1752614671052-92e18f534db1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Mechanical Engineering"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ad Placeholder */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdPlaceholder variant="banner" />
      </div>

      {/* Featured Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl text-foreground mb-2">Featured Articles</h2>
            <p className="text-muted-foreground">Latest insights and technical deep-dives</p>
          </div>
          <Link
            to="/blog"
            className="text-accent hover:text-accent/80 inline-flex items-center gap-1"
          >
            View All
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <BlogCard {...article} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-foreground mb-2">Explore by Category</h2>
            <p className="text-muted-foreground">Find content tailored to your interests</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CategoryCard {...category} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl text-foreground mb-2">Trending Now</h2>
            <p className="text-muted-foreground">Most popular content this week</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {trendingArticles.map((article) => (
            <BlogCard key={article.id} {...article} />
          ))}
        </div>

        <AdPlaceholder variant="inline" />
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Newsletter />
      </section>
    </div>
  );
}
