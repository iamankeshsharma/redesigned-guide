import { ProductCard } from "../components/ProductCard";
import { AdPlaceholder } from "../components/AdPlaceholder";

// Mock data - CMS driven in production
const products = [
  {
    title: "Professional 3D Printer - Advanced Model",
    description: "High-precision 3D printer perfect for prototyping and small-scale production.",
    image: "https://images.unsplash.com/photo-1582879304171-8041c73bedbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    price: "$2,499",
    rating: 4.5,
    affiliateLink: "#",
  },
  {
    title: "Industrial Robot Arm Kit",
    description: "Modular robotic arm system for automation and precision tasks.",
    image: "https://images.unsplash.com/photo-1752614671052-92e18f534db1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    price: "$8,999",
    rating: 4.8,
    affiliateLink: "#",
  },
  {
    title: "Precision Measuring Tools Set",
    description: "Complete set of professional-grade measuring instruments for engineering work.",
    image: "https://images.unsplash.com/photo-1581090466144-8ed89ea98b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    price: "$399",
    rating: 4.6,
    affiliateLink: "#",
  },
  {
    title: "CAD Workstation Computer",
    description: "Powerful workstation optimized for CAD, CAM, and engineering software.",
    image: "https://images.unsplash.com/photo-1581090123826-27b62664de96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    price: "$3,499",
    rating: 4.7,
    affiliateLink: "#",
  },
  {
    title: "Automated Conveyor System",
    description: "Modular conveyor belt system for efficient material handling and transport.",
    image: "https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    price: "$12,999",
    rating: 4.4,
    affiliateLink: "#",
  },
  {
    title: "Advanced Welding Robot",
    description: "Precision welding system with programmable control for consistent results.",
    image: "https://images.unsplash.com/photo-1752614671144-7eee784abf74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    price: "$18,500",
    rating: 4.9,
    affiliateLink: "#",
  },
];

const categories = [
  "All Products",
  "3D Printers",
  "Robotics",
  "Measuring Tools",
  "CAD Equipment",
  "Automation",
];

export function Products() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl mb-4">Product Recommendations</h1>
          <p className="text-primary-foreground/80 max-w-2xl">
            Curated selection of quality tools and equipment for mechanical engineering and manufacturing.
          </p>
        </div>
      </div>

      {/* Ad Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdPlaceholder variant="banner" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-card border border-border rounded-lg hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {/* Bottom Ad */}
        <AdPlaceholder variant="banner" />

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            <strong>Affiliate Disclosure:</strong> This page contains affiliate links. We may earn a commission when you make a purchase through these links, at no additional cost to you. All product recommendations are based on our genuine assessment.
          </p>
        </div>
      </div>
    </div>
  );
}
