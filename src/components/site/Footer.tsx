import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border bg-gradient-to-b from-background to-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/X-Ciencia_logo.png"
              alt="X-Ciencia Logo"
              className="w-9 h-9 rounded-xl object-contain"
            />
            <span className="font-display font-bold text-lg">X-Ciencia Technologies India Pvt. Ltd.</span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Bengaluru-based software company building intelligent ERP, AI, and SaaS
            solutions. <em>Science for All.</em>
          </p>
          <div className="flex gap-3 mt-5">
            {[Linkedin, Twitter, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full glass-card flex items-center justify-center hover:text-primary transition-smooth"
                aria-label="Social link"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/careers" className="hover:text-primary">Careers</Link></li>
            <li><Link to="/portfolio" className="hover:text-primary">Portfolio</Link></li>
            <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
            <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Solutions</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-primary">Custom Software</Link></li>
            <li><Link to="/erp" className="hover:text-primary">ERP Systems</Link></li>
            <li><Link to="/services" className="hover:text-primary">AI Solutions</Link></li>
            <li><Link to="/services" className="hover:text-primary">SaaS Products</Link></li>
            <li><Link to="/internships" className="hover:text-primary">Internships</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-primary" /> Rajajinagar · Frazer Town · Jayanagar, Bengaluru</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> hr@xciencia.com</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +91 8217679738</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} X-Ciencia Technologies. All rights reserved.</p>
          <p>Crafted with care in Bengaluru, India.</p>
        </div>
      </div>
    </footer>
  );
}
