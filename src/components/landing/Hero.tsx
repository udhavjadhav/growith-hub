import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Trophy } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden pt-32 sm:pt-24 md:pt-20 lg:pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary-foreground rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent-foreground rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-success-foreground rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 sm:mb-6 leading-tight px-4 sm:px-0">
            Empowering Education,
            <br />
            <span className="bg-gradient-to-r from-accent-foreground to-success-foreground bg-clip-text text-transparent">
              Transforming Futures
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
            Comprehensive educational services designed to help students excel in competitive exams, 
            teachers develop their skills, and institutions achieve excellence.
          </p>

          {/* CTA Buttons */}
{/*           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
              className="border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary transition-all duration-300 text-lg px-8 py-6"
            >
              Explore Services
            </Button>
          </div>
 */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-12 px-4 sm:px-0">
  {/* Primary Filled Button */}
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
            onClick={() => {
              const registerSection = document.getElementById('register');
              registerSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
                Get Started Today
  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>


  {/* Secondary Outlined Button */}
  <Button
    size="lg"
    variant="outline"
    className="border-2 border-primary-foreground text-primary-foreground font-semibold hover:bg-primary-foreground hover:text-primary hover:scale-105 hover:shadow-md transition-all duration-300 text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-6 rounded-xl flex items-center justify-center"
  >
    Explore Services
  </Button>
</div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16 px-4 sm:px-0">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-primary-foreground/20 hover:shadow-glow transition-all duration-300 animate-scale-in text-center">
              <BookOpen className="h-10 w-10 sm:h-12 sm:w-12 text-primary-foreground mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-primary-foreground mb-2">Quality Education</h3>
              <p className="text-sm sm:text-base text-primary-foreground/80">Expert-designed programs and comprehensive learning resources</p>
            </div>
            
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-primary-foreground/20 hover:shadow-glow transition-all duration-300 animate-scale-in text-center" style={{animationDelay: "0.1s"}}>
              <Users className="h-10 w-10 sm:h-12 sm:w-12 text-primary-foreground mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-primary-foreground mb-2">Expert Faculty</h3>
              <p className="text-sm sm:text-base text-primary-foreground/80">Learn from experienced educators and industry professionals</p>
            </div>
            
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-primary-foreground/20 hover:shadow-glow transition-all duration-300 animate-scale-in text-center sm:col-span-2 md:col-span-1" style={{animationDelay: "0.2s"}}>
              <Trophy className="h-10 w-10 sm:h-12 sm:w-12 text-primary-foreground mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-primary-foreground mb-2">Proven Results</h3>
              <p className="text-sm sm:text-base text-primary-foreground/80">Track record of success in competitive exams and placements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
