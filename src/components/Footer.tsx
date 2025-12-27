import { Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@hiteshjaganiya.com", label: "Email" },
  ];

  return (
    <footer className="bg-foreground py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="text-xl font-bold text-primary-foreground tracking-tight">
            Hitesh<span className="text-primary">.</span>
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} Hitesh Jaganiya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
