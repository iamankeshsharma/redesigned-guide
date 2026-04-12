import { useParams, Link } from "react-router";
import { Calendar, User, Tag, ArrowLeft, Share2 } from "lucide-react";
import { BlogCard } from "../components/BlogCard";
import { AdPlaceholder } from "../components/AdPlaceholder";

// Mock data - CMS driven in production
const blogContent = {
  title: "Advanced Robotics in Modern Manufacturing",
  author: "Engineering Team",
  date: "Apr 10, 2026",
  category: "Automation",
  image: "https://images.unsplash.com/photo-1752614671052-92e18f534db1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  content: `
    <p>The integration of advanced robotics in modern manufacturing has transformed the industry landscape, bringing unprecedented levels of precision, efficiency, and scalability to production processes worldwide.</p>

    <h2>The Evolution of Manufacturing Robotics</h2>
    <p>Over the past decade, we've witnessed a remarkable evolution in robotic systems. What began as simple repetitive task automation has evolved into sophisticated systems capable of complex decision-making and adaptive behaviors.</p>

    <p>Modern manufacturing robots are equipped with advanced sensors, machine learning capabilities, and real-time data processing systems that enable them to:</p>
    <ul>
      <li>Adapt to varying production conditions</li>
      <li>Maintain consistent quality standards</li>
      <li>Optimize resource utilization</li>
      <li>Minimize waste and downtime</li>
    </ul>

    <h2>Key Technologies Driving Innovation</h2>
    <p>Several key technologies are at the forefront of this robotic revolution in manufacturing:</p>

    <h3>Collaborative Robots (Cobots)</h3>
    <p>Unlike traditional industrial robots that operate in isolation, cobots are designed to work alongside human operators. They feature advanced safety systems and intuitive interfaces that make them accessible to workers without specialized programming knowledge.</p>

    <h3>Machine Vision Systems</h3>
    <p>High-resolution cameras and AI-powered image processing enable robots to inspect products, identify defects, and make real-time quality control decisions with accuracy that often exceeds human capabilities.</p>

    <h3>IoT Integration</h3>
    <p>The Internet of Things has connected robotic systems to broader manufacturing ecosystems, enabling predictive maintenance, real-time monitoring, and data-driven optimization of production processes.</p>

    <h2>Impact on Industry</h2>
    <p>The adoption of advanced robotics has yielded significant benefits across various manufacturing sectors:</p>

    <ul>
      <li><strong>Increased Productivity:</strong> Robots can operate continuously, significantly increasing output while maintaining consistent quality.</li>
      <li><strong>Enhanced Safety:</strong> Automation of dangerous tasks has reduced workplace injuries and created safer working environments.</li>
      <li><strong>Cost Efficiency:</strong> While initial investment is substantial, long-term operational costs are typically lower than traditional methods.</li>
      <li><strong>Flexibility:</strong> Modern robots can be quickly reprogrammed for different tasks, enabling manufacturers to respond rapidly to market changes.</li>
    </ul>

    <h2>Looking Ahead</h2>
    <p>As we move forward, the integration of artificial intelligence, 5G connectivity, and quantum computing promises to unlock even greater potential in robotic manufacturing systems. The future of manufacturing is not just automated—it's intelligent, adaptive, and increasingly sustainable.</p>

    <p>Organizations that embrace these technologies today position themselves to lead in the competitive global manufacturing landscape of tomorrow.</p>
  `,
};

const relatedPosts = [
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
    id: "6",
    title: "Industrial Automation Systems",
    summary: "Understanding the components and benefits of modern industrial automation infrastructure.",
    image: "https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Automation",
    author: "Industry Expert",
    date: "Mar 28, 2026",
  },
];

export function BlogDetail() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Articles
          </Link>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
              <Tag size={14} />
              {blogContent.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl text-foreground mb-6">
            {blogContent.title}
          </h1>

          <div className="flex items-center gap-6 text-sm text-muted-foreground pb-6 border-b border-border">
            <span className="flex items-center gap-2">
              <User size={16} />
              {blogContent.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              {blogContent.date}
            </span>
            <button className="flex items-center gap-2 ml-auto text-accent hover:text-accent/80 transition-colors">
              <Share2 size={16} />
              Share
            </button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <img
            src={blogContent.image}
            alt={blogContent.title}
            className="w-full aspect-video object-cover"
          />
        </div>

        {/* Ad Placeholder */}
        <div className="mb-8">
          <AdPlaceholder variant="inline" />
        </div>

        {/* Article Content */}
        <div
          className="prose prose-lg max-w-none mb-8 [&_h2]:text-2xl [&_h2]:text-foreground [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:text-foreground [&_p]:mb-4 [&_ul]:text-foreground [&_ul]:mb-4 [&_li]:mb-2"
          dangerouslySetInnerHTML={{ __html: blogContent.content }}
        />

        {/* In-Content Ad */}
        <div className="my-8">
          <AdPlaceholder variant="inline" />
        </div>

        {/* Share Section */}
        <div className="border-t border-b border-border py-6 my-8">
          <div className="flex items-center justify-between">
            <span className="text-foreground">Share this article</span>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-card border border-border rounded-lg hover:bg-muted transition-colors">
                Twitter
              </button>
              <button className="px-4 py-2 bg-card border border-border rounded-lg hover:bg-muted transition-colors">
                LinkedIn
              </button>
              <button className="px-4 py-2 bg-card border border-border rounded-lg hover:bg-muted transition-colors">
                Facebook
              </button>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <section className="mt-16">
          <h2 className="text-3xl text-foreground mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
