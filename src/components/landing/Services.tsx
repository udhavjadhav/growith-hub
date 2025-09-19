import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Briefcase, 
  School, 
  UserCheck, 
  Trophy, 
  ArrowRight,
  BookOpen,
  Users,
  Award,
  Target,
  GraduationCap
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimation";

const Services = () => {
  useScrollReveal();

  const services = [
    {
      icon: Calendar,
      title: "Educational Events",
      description: "Organize and participate in workshops, seminars, and educational conferences that enhance learning experiences.",
      features: ["Interactive Workshops", "Expert Seminars", "Networking Events", "Skill Development"],
      color: "bg-primary",
      textColor: "text-primary-foreground"
    },
    {
      icon: Briefcase,
      title: "Recruitment Services",
      description: "Connect talented individuals with top organizations through our comprehensive recruitment solutions.",
      features: ["Job Placement", "Career Counseling", "Resume Building", "Interview Preparation"],
      color: "bg-accent",
      textColor: "text-accent-foreground"
    },
    {
      icon: School,
      title: "Coaching & School Development",
      description: "Comprehensive coaching programs and institutional development services for academic excellence.",
      features: ["Academic Coaching", "Institutional Training", "Curriculum Development", "Quality Enhancement"],
      color: "bg-success",
      textColor: "text-success-foreground"
    },
    {
      icon: UserCheck,
      title: "Teachers Orientation Programme",
      description: "Professional development programs designed to enhance teaching methodologies and skills.",
      features: ["Teaching Methodologies", "Digital Learning Tools", "Assessment Techniques", "Professional Growth"],
      color: "bg-warning",
      textColor: "text-warning-foreground"
    },
    {
      icon: Trophy,
      title: "Competitive Exam Organizer",
      description: "End-to-end solutions for organizing and managing competitive examinations with precision.",
      features: ["Exam Planning", "Question Paper Design", "Online Testing", "Result Management"],
      color: "bg-destructive",
      textColor: "text-destructive-foreground"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="scroll-reveal text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="scroll-reveal text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive educational solutions tailored to meet the diverse needs of students, 
            educators, and institutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="scroll-reveal bg-card rounded-2xl p-4 sm:p-6 lg:p-8 shadow-card hover:shadow-glow hover:scale-105 transition-all duration-500 group cursor-pointer"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className={`${service.color} ${service.textColor} p-3 sm:p-4 rounded-xl group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-glow transition-all duration-300 mx-auto sm:mx-0`}>
                  <service.icon className="h-6 w-6 sm:h-8 sm:w-8 group-hover:animate-pulse" />
                </div>
                
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 justify-center sm:justify-start">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-xs sm:text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="group/btn hover:shadow-card w-full sm:w-auto">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Additional Services
            </h3>
            <p className="text-muted-foreground">
              Explore our comprehensive range of educational support services
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 text-center">
            {[
              { icon: BookOpen, title: "Study Materials", desc: "Comprehensive resources" },
              { icon: Users, title: "Group Sessions", desc: "Collaborative learning" },
              { icon: Award, title: "Certifications", desc: "Recognized credentials" },
              { icon: Target, title: "Goal Setting", desc: "Personal guidance" },
              { icon: GraduationCap, title: "Alumni Network", desc: "Lifetime connections" }
            ].map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-primary/10 p-3 sm:p-4 rounded-xl mb-3 sm:mb-4 group-hover:bg-primary group-hover:shadow-glow transition-all duration-300">
                  <item.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary group-hover:text-primary-foreground mx-auto" />
                </div>
                <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;