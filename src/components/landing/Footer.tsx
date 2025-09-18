import { 
  GraduationCap, 
  Facebook, 
  Twitter,  
  Linkedin, 
  Instagram,
  Youtube,
  Mail, 
  Phone, 
  MapPin,
  Clock,
  Award,
  BookOpen,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const services = [
    { name: "Educational Events", link: "#events" },
    { name: "Recruitment Services", link: "#recruitment" }, 
    { name: "Coaching Programs", link: "#services" },
    { name: "Teacher Training", link: "#services" },
    { name: "Competitive Exams", link: "#services" }
  ];

  const quickLinks = [
    { name: "About Us", link: "#about" },
    { name: "Admissions", link: "#register" },
    { name: "Events", link: "#events" },
    { name: "Contact", link: "#contact" },
    { name: "Career Opportunities", link: "#contact" }
  ];

  const resources = [
    { name: "Study Materials", link: "#" },
    { name: "Mock Tests", link: "#" },
    { name: "Previous Papers", link: "#" },
    { name: "Success Stories", link: "#testimonials" },
    { name: "Blog & Articles", link: "#" }
  ];

  const courseCategories = [
    { name: "Civil Services (UPSC)", icon: Target },
    { name: "Banking & SSC", icon: BookOpen },
    { name: "Engineering (JEE)", icon: Users },
    { name: "Medical (NEET)", icon: Award }
  ];

  const centers = [
    { city:"Nanded", address: "Anjangiri CBT Center Jai Bhavani Nager Beside Canol Road, Taroda (kd) Nanded - 431605", phone: "+91 9767725619" },
    // { city: "Mumbai", address: "456 Learning Avenue, Andheri", phone: "+91 22 3456 7890" },
    // { city: "Bangalore", address: "789 Knowledge Park, Koramangala", phone: "+91 80 4567 8901" }
  ];

  const achievements = [
    { icon: Users, number: "50,000+", label: "Students Trained" },
    { icon: Award, number: "95%", label: "Success Rate" },
    { icon: Globe, number: "50+", label: "Centers" },
    { icon: Star, number: "4.8/5", label: "Rating" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-500" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-blue-400" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-500" },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:bg-red-500" }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary via-primary-dark to-accent text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary-foreground rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent-foreground rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-success-foreground rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Achievements Banner */}
        <div className="py-8 border-b border-primary-foreground/10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-4 hover:bg-primary-foreground/10 transition-all duration-300 group"
              >
                <achievement.icon className="h-8 w-8 mx-auto mb-2 text-accent-foreground group-hover:scale-110 transition-transform" />
                <div className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-1">{achievement.number}</div>
                <div className="text-xs sm:text-sm text-primary-foreground/80">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid lg:grid-cols-6 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-primary rounded-xl shadow-glow">
                <GraduationCap className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold block">GroWith</span>
                <span className="text-sm text-primary-foreground/80">Educational Services</span>
              </div>
            </div>
            <p className="text-primary-foreground/90 mb-6 leading-relaxed text-sm sm:text-base">
              Empowering students and educators through comprehensive educational services, 
              innovative teaching methods, and personalized guidance for academic and career success.
            </p>
            
            {/* Business Hours */}
            <div className="bg-primary-foreground/5 rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-2 mb-3">
                <Clock className="h-5 w-5 text-accent-foreground" />
                <span className="font-semibold">Business Hours</span>
              </div>
              <div className="text-sm text-primary-foreground/80 space-y-1">
                <div className="flex justify-between">
                  <span>Mon - Fri</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="p-2 bg-primary-foreground/10 rounded-lg group-hover:bg-accent transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/80">Email Us</div>
                  <span className="font-medium">info@growith.edu</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="p-2 bg-primary-foreground/10 rounded-lg group-hover:bg-accent transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/80">Call Us</div>
                  <span className="font-medium">+91 11 2345 6789</span>
                </div>
              </div>
            </div>
          </div>

          {/* Course Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center space-x-2">
              <BookOpen className="h-5 w-5" />
              <span>Top Courses</span>
            </h3>
            <ul className="space-y-4">
              {courseCategories.map((course, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="flex items-center space-x-3 text-primary-foreground/80 hover:text-primary-foreground transition-all duration-200 group"
                  >
                    <course.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    <span className="group-hover:translate-x-1 transition-transform text-sm">{course.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.link}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    <span>{service.name}</span>
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
                    href={link.link}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Centers */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Our Centers</span>
            </h3>
            <div className="space-y-4">
              {centers.map((center, index) => (
                <div key={index} className="bg-primary-foreground/5 rounded-lg p-3 hover:bg-primary-foreground/10 transition-colors">
                  <div className="font-medium text-primary-foreground mb-1">{center.city}</div>
                  <div className="text-xs text-primary-foreground/80 mb-2">{center.address}</div>
                  <div className="text-xs text-accent-foreground font-medium">{center.phone}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        {/* <div className="py-8 border-t border-primary-foreground/10">
          <div className="bg-gradient-to-r from-primary-foreground/5 to-accent/5 rounded-2xl p-6 sm:p-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 flex items-center space-x-2">
                  <Mail className="h-6 w-6 text-accent-foreground" />
                  <span>Stay Updated</span>
                </h3>
                <p className="text-primary-foreground/80 text-sm sm:text-base">
                  Subscribe to our newsletter for the latest educational insights, exam updates, and exclusive opportunities.
                </p>
                <div className="flex items-center space-x-2 mt-3">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-accent-foreground text-accent-foreground" />
                  ))}
                  <span className="text-xs text-primary-foreground/70 ml-2">Trusted by 10,000+ students</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 bg-primary-foreground text-primary placeholder:text-primary/60 border-0 focus:ring-2 focus:ring-accent"
                  />
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-6 whitespace-nowrap">
                    Subscribe Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success-foreground" />
                  <span className="text-xs text-primary-foreground/70">No spam, unsubscribe anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Social Links & Copyright */}
        <div className="py-8 border-t border-primary-foreground/10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <span className="text-primary-foreground/80 font-medium">Connect with us:</span>
              <div className="flex items-center space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`p-3 bg-primary-foreground/10 rounded-xl hover:scale-110 transition-all duration-300 ${social.color} hover:text-white group`}
                  >
                    <social.icon className="h-5 w-5 group-hover:animate-pulse" />
                  </a>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center lg:text-right">
              <p className="text-primary-foreground/80 mb-2">
                © 2024 GroWith Educational Services. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-end gap-4 text-xs">
                <a href="#" className="hover:text-primary-foreground transition-colors flex items-center space-x-1">
                  <Shield className="h-3 w-3" />
                  <span>Privacy Policy</span>
                </a>
                <span className="text-primary-foreground/40">•</span>
                <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
                <span className="text-primary-foreground/40">•</span>
                <a href="#" className="hover:text-primary-foreground transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>

        {/* Awards & Certifications */}
        {/* <div className="py-6 border-t border-primary-foreground/10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Award className="h-5 w-5 text-accent-foreground" />
              <p className="text-primary-foreground/80 font-medium">
                Certified & Award-Winning Educational Institution
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 opacity-70">
              {[
                "ISO 9001:2015 Certified",
                "NAAC Grade A+", 
                "Best Education Provider 2024",
                "Excellence in Teaching Award"
              ].map((certification, index) => (
                <div 
                  key={index} 
                  className="bg-primary-foreground/5 rounded-lg p-3 hover:bg-primary-foreground/10 transition-colors"
                >
                  <div className="text-xs font-medium">{certification}</div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
