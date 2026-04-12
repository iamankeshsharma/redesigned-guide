import { Link } from "react-router";
import { Facebook, Twitter, Linkedin, Youtube, Github } from "lucide-react";

// Dynamic footer data - CMS ready
const footerLinks = {
  company: [
    { label: "About Us", path: "/about" },
    { label: "Blog", path: "/blog" },
  ],
  resources: [
    { label: "Technical Guides", path: "/blog" },
    { label: "Industry News", path: "/blog" },
  ],
  legal: [
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Terms of Service", path: "/terms" },
  ],
};

const socialLinks = [
  { icon: Facebook, url: "#", label: "Facebook" },
  { icon: Twitter, url: "#", label: "Twitter" },
  { icon: Linkedin, url: "#", label: "LinkedIn" },
  { icon: Youtube, url: "#", label: "YouTube" },
  { icon: Github, url: "#", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-border/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-accent rounded-lg">
                <span className="text-primary text-xl font-bold">SK</span>
              </div>
              <div>
                <div className="text-primary-foreground font-semibold leading-tight">
                  Shree Krishna
                </div>
                <div className="text-primary-foreground/70 text-sm">
                  Engineerings
                </div>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Your comprehensive resource for mechanical engineering, technology, and innovative products.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Anramium. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/60 italic">
              This website is for educational purposes only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
