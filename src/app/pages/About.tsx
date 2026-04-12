import { Code, Palette, Zap, Cloud, Brain, Rocket, ArrowRight } from "lucide-react";

// Mock data - CMS driven in production
const services = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Frontend + backend web development, MVP creation for startups, and scalable web applications.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Professional Figma design, design systems, prototypes, and user-centric interfaces.",
  },
  {
    icon: Zap,
    title: "Performance & Optimization",
    description: "Website redesign, performance optimization, and CMS-based scalable solutions.",
  },
  {
    icon: Cloud,
    title: "Cloud & Deployment",
    description: "Cloud deployment, hosting solutions, API integrations, and ongoing maintenance.",
  },
  {
    icon: Brain,
    title: "AI Development",
    description: "Machine learning solutions, AI automation tools, and intelligent systems integration.",
  },
  {
    icon: Rocket,
    title: "AI Consulting",
    description: "Strategic AI consulting, implementation roadmaps, and future-ready technology planning.",
  },
];

const expertise = [
  "Website Development (Frontend + Backend)",
  "MVP Development for Startups",
  "UI/UX Design with Figma",
  "Web Applications & SaaS Platforms",
  "CMS-Based Solutions",
  "API Integrations",
  "Cloud Deployment & Hosting",
  "AI & Machine Learning",
  "Product Redesign & Upgrades",
];

export function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-accent rounded-xl shadow-lg mb-6">
            <Code className="text-primary" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl mb-6">About Us</h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
            We are a full-service IT and AI solutions provider specializing in building fast, scalable, and user-centric digital products for startups and enterprises.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Who We Are */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl text-foreground mb-6">Who We Are</h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  We're a team of passionate developers, designers, and AI specialists who transform ideas into powerful digital solutions. From concept to deployment, we handle every aspect of your digital journey.
                </p>
                <p>
                  Whether you're a startup launching your MVP or an established business looking to redesign and upgrade your existing product, we deliver innovative, future-ready solutions tailored to your needs.
                </p>
                <p className="text-accent font-semibold">
                  This website was designed and built by our team to showcase modern web development best practices.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-lg p-8">
              <h3 className="text-xl text-foreground mb-4">Our Mission</h3>
              <p className="text-foreground mb-6">
                To empower businesses with cutting-edge technology solutions that are fast, scalable, and built for the future.
              </p>
              <h3 className="text-xl text-foreground mb-4">Our Vision</h3>
              <p className="text-foreground">
                To be the go-to partner for startups and enterprises seeking innovative digital transformation and AI-powered solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-foreground mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end technology solutions from design to deployment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-accent/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <service.icon className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-16">
          <div className="bg-muted rounded-lg p-8 md:p-12">
            <h2 className="text-3xl text-foreground mb-8 text-center">Our Approach</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-3">
                  <Zap className="text-accent" size={24} />
                </div>
                <h3 className="text-foreground mb-2">Fast</h3>
                <p className="text-sm text-muted-foreground">
                  Rapid development without compromising quality
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-3">
                  <Rocket className="text-accent" size={24} />
                </div>
                <h3 className="text-foreground mb-2">Scalable</h3>
                <p className="text-sm text-muted-foreground">
                  Built to grow with your business
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-3">
                  <Palette className="text-accent" size={24} />
                </div>
                <h3 className="text-foreground mb-2">User-Centric</h3>
                <p className="text-sm text-muted-foreground">
                  Designed with your users in mind
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-3">
                  <Brain className="text-accent" size={24} />
                </div>
                <h3 className="text-foreground mb-2">Future-Ready</h3>
                <p className="text-sm text-muted-foreground">
                  AI-powered and innovation-driven
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise List */}
        <section className="mb-16">
          <h2 className="text-3xl text-foreground mb-8 text-center">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:border-accent/50 transition-colors"
              >
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="bg-gradient-to-r from-primary to-primary/90 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl text-primary-foreground mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Whether you need a new website, want to redesign your existing product, or explore AI solutions, we're here to help. Visit our portfolio to see our work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://your-portfolio-domain.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold shadow-lg"
              >
                View Our Portfolio
                <ArrowRight size={20} />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-primary-foreground border border-primary-foreground/20 rounded-lg hover:bg-white/20 transition-colors font-semibold"
              >
                Work With Us
              </a>
            </div>
            <p className="text-sm text-primary-foreground/70 mt-6">
              Click "View Our Portfolio" to visit our main company website and see more projects
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
