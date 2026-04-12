import { ProjectCard } from "../components/ProjectCard";
import { Download } from "lucide-react";

// Mock data - CMS driven in production
const projects = [
  {
    title: "Robotic Arm 3D Model",
    description: "Complete 3D model of a 6-axis industrial robotic arm with detailed assembly instructions.",
    image: "https://images.unsplash.com/photo-1752614671052-92e18f534db1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    type: "3D Model",
    downloadLink: "#",
  },
  {
    title: "Mechanical Gear System",
    description: "Precision gear assembly model with multiple configurations for educational purposes.",
    image: "https://images.unsplash.com/photo-1774977865287-888d3b7493f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    type: "3D Model",
    downloadLink: "#",
  },
  {
    title: "3D Printed Drone Frame",
    description: "Lightweight, aerodynamic drone frame design optimized for 3D printing.",
    image: "https://images.unsplash.com/photo-1703221561813-cdaa308cf9e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    type: "3D Model",
    downloadLink: "#",
  },
  {
    title: "Automated Assembly Line Concept",
    description: "Conceptual design for a modular automated assembly system with robot integration.",
    image: "https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    type: "Project",
    downloadLink: "#",
  },
  {
    title: "Precision Measuring Gauge",
    description: "CAD model for a digital measuring gauge with high precision capabilities.",
    image: "https://images.unsplash.com/photo-1581090466144-8ed89ea98b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    type: "3D Model",
    downloadLink: "#",
  },
  {
    title: "Industrial Gripper Design",
    description: "Multi-functional gripper mechanism for robotic applications with adaptive fingers.",
    image: "https://images.unsplash.com/photo-1774229637247-3cd45219826c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    type: "3D Model",
    downloadLink: "#",
  },
];

const projectTypes = ["All Projects", "3D Models", "CAD Files", "Tutorials", "Case Studies"];

export function Projects() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl mb-4">3D Models & Projects</h1>
          <p className="text-primary-foreground/80 max-w-2xl">
            Free downloadable resources including 3D models, CAD files, and project documentation for learning and development.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Buttons */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {projectTypes.map((type) => (
              <button
                key={type}
                className="px-4 py-2 bg-card border border-border rounded-lg hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Info Banner */}
        <div className="mb-8 p-6 bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-lg">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-accent/20 rounded-lg">
              <Download className="text-accent" size={24} />
            </div>
            <div>
              <h3 className="text-lg text-foreground mb-2">Free Educational Resources</h3>
              <p className="text-muted-foreground">
                All models and projects are provided free for educational and non-commercial use.
                Please review the license information included with each download.
              </p>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Bottom Notice */}
        <div className="mt-12 p-6 bg-muted rounded-lg text-center">
          <h3 className="text-lg text-foreground mb-2">Looking for Custom Models?</h3>
          <p className="text-muted-foreground mb-4">
            Need a specific design or custom 3D model? Get in touch with our team.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
