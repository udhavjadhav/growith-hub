import { CheckCircle, Target, Heart, Lightbulb } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimation";

const About = () => {
  useScrollReveal();

  const features = [
    "15+ years of educational excellence",
    "Expert faculty with industry experience",
    "Comprehensive course materials",
    "Personalized learning approach",
    "State-of-the-art infrastructure",
    "100% job placement assistance"
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide world-class education and create opportunities for students to achieve their academic and career goals."
    },
    {
      icon: Heart,
      title: "Our Vision",
      description: "To be the leading educational service provider, empowering students and educators to reach their full potential."
    },
    {
      icon: Lightbulb,
      title: "Our Values",
      description: "Excellence, integrity, innovation, and student-centric approach drive everything we do."
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="scroll-reveal text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 px-4 sm:px-0">
            About GroWith Educational Services
          </h2>
          <p className="scroll-reveal text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
            We are dedicated to transforming lives through quality education, innovative teaching methods, 
            and comprehensive support for students and educators alike.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
          {/* Left Content */}
          <div className="scroll-reveal order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">
              Committed to Educational Excellence
            </h3>
            <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Since our inception, GroWith Educational Services has been at the forefront of 
              educational innovation. We understand the challenges students face in today's 
              competitive environment and provide comprehensive solutions to help them succeed.
            </p>
            <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Our team of experienced educators, industry experts, and support staff work 
              tirelessly to create an environment where learning thrives and students can 
              achieve their dreams.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-success flex-shrink-0" />
                  <span className="text-foreground text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="scroll-reveal bg-gradient-card rounded-2xl p-6 sm:p-8 shadow-card hover:shadow-glow transition-all duration-500 order-1 lg:order-2 group">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 text-center">
              <div className="hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2 group-hover:animate-bounce">10,000+</div>
                <div className="text-muted-foreground text-sm sm:text-base">Students Trained</div>
              </div>
              <div className="hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 sm:mb-2 group-hover:animate-bounce">95%</div>
                <div className="text-muted-foreground text-sm sm:text-base">Success Rate</div>
              </div>
              <div className="hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="text-2xl sm:text-3xl font-bold text-success mb-1 sm:mb-2 group-hover:animate-bounce">500+</div>
                <div className="text-muted-foreground text-sm sm:text-base">Faculty Members</div>
              </div>
              <div className="hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="text-2xl sm:text-3xl font-bold text-warning mb-1 sm:mb-2 group-hover:animate-bounce">50+</div>
                <div className="text-muted-foreground text-sm sm:text-base">Centers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="scroll-reveal text-center bg-card rounded-xl p-6 sm:p-8 shadow-card hover:shadow-glow hover:scale-105 transition-all duration-500 group cursor-pointer"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-full mb-4 sm:mb-6 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                <value.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground group-hover:animate-pulse" />
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors">{value.title}</h4>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base group-hover:text-foreground transition-colors">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;