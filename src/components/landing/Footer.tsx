import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const services = [
    "Educational Events",
    "Recruitment Services", 
    "Coaching Programs",
    "Teacher Training",
    "Competitive Exams"
  ];

  const quickLinks = [
    "About Us",
    "Admissions",
    "Courses",
    "Results",
    "Career Opportunities"
  ];

  const resources = [
    "Study Materials",
    "Mock Tests",
    "Previous Papers",
    "Success Stories",
    "Blog & Articles"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid lg:grid-cols-5 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-primary-foreground rounded-lg">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <span className="text-2xl font-bold">GroWith Educational Services</span>
            </div>
            <p className="text-primary-foreground/90 mb-6 leading-relaxed">
              Empowering students and educators through comprehensive educational services, 
              innovative teaching methods, and personalized guidance for academic and career success.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-foreground/80" />
                <span>+91 11 2345 6789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-foreground/80" />
                <span>info@growith.edu</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-foreground/80" />
                <span>123 Education Street, New Delhi - 110001</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary-foreground after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary-foreground after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary-foreground after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="py-8 border-t border-primary-foreground/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-primary-foreground/80">
                Subscribe to our newsletter for the latest educational insights and opportunities.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-primary bg-primary-foreground placeholder:text-primary/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground"
              />
              <button className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200 whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="py-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-primary-foreground/80">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-primary-foreground/80">
                © 2024 GroWith Educational Services. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end gap-4 mt-2 text-sm">
                <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
                <span className="text-primary-foreground/60">•</span>
                <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
                <span className="text-primary-foreground/60">•</span>
                <a href="#" className="hover:text-primary-foreground transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>

        {/* Awards & Certifications */}
        <div className="py-6 border-t border-primary-foreground/20">
          <div className="text-center">
            <p className="text-primary-foreground/80 mb-4">
              Certified by leading educational bodies and awarded for excellence in education
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {[
                "ISO 9001:2015 Certified",
                "NAAC Grade A+", 
                "Best Education Provider 2023",
                "Excellence in Teaching Award"
              ].map((certification, index) => (
                <div key={index} className="text-sm font-medium">
                  {certification}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;