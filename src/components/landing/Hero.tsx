import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Trophy } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden mt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary-foreground rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent-foreground rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-success-foreground rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Empowering Education,
            <br />
            <span className="bg-gradient-to-r from-accent-foreground to-success-foreground bg-clip-text text-transparent">
              Transforming Futures
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Comprehensive educational services designed to help students excel in competitive exams, 
            teachers develop their skills, and institutions achieve excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:shadow-hover transition-all duration-300 text-lg px-8 py-6"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 text-lg px-8 py-6"
            >
              Explore Services
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20 hover:shadow-glow transition-all duration-300 animate-scale-in">
              <BookOpen className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">Quality Education</h3>
              <p className="text-primary-foreground/80">Expert-designed programs and comprehensive learning resources</p>
            </div>
            
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20 hover:shadow-glow transition-all duration-300 animate-scale-in" style={{animationDelay: "0.1s"}}>
              <Users className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">Expert Faculty</h3>
              <p className="text-primary-foreground/80">Learn from experienced educators and industry professionals</p>
            </div>
            
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20 hover:shadow-glow transition-all duration-300 animate-scale-in" style={{animationDelay: "0.2s"}}>
              <Trophy className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">Proven Results</h3>
              <p className="text-primary-foreground/80">Track record of success in competitive exams and placements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
