import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "IAS Officer",
      course: "Civil Services Preparation",
      rating: 5,
      image: "/placeholder.svg",
      testimonial: "GroWith Educational Services transformed my approach to competitive exam preparation. The faculty's expertise and personalized guidance helped me clear the UPSC exam in my second attempt. The comprehensive study materials and mock tests were invaluable.",
      achievement: "Secured AIR 47 in UPSC 2023"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Software Engineer",
      course: "Technical Interview Preparation",
      rating: 5,
      image: "/placeholder.svg",
      testimonial: "The placement preparation program at GroWith was exceptional. From resume building to technical interviews, they covered everything. I landed my dream job at a top tech company with a 150% salary hike!",
      achievement: "Placed at Microsoft with 45 LPA package"
    },
    {
      id: 3,
      name: "Dr. Sunita Verma",
      role: "Principal",
      course: "Teachers Orientation Programme",
      rating: 5,
      image: "/placeholder.svg",
      testimonial: "As an educator, the professional development programs offered by GroWith have been game-changing. The innovative teaching methodologies and digital learning tools have significantly improved our institution's performance.",
      achievement: "Improved school ranking by 40%"
    },
    {
      id: 4,
      name: "Amit Patel",
      role: "Banking Professional",
      course: "Banking & SSC Preparation",
      rating: 5,
      image: "/placeholder.svg",
      testimonial: "The structured approach and quality content at GroWith made all the difference. The regular assessments and doubt-clearing sessions helped me stay on track and achieve my goal of joining the banking sector.",
      achievement: "Selected as PO in SBI"
    },
    {
      id: 5,
      name: "Neha Gupta",
      role: "Medical Student",
      course: "NEET Preparation",
      rating: 5,
      image: "/placeholder.svg",
      testimonial: "GroWith's NEET preparation course was comprehensive and well-structured. The faculty's dedication and the competitive environment helped me secure admission to one of the top medical colleges in India.",
      achievement: "NEET AIR 156 - AIIMS Delhi"
    },
    {
      id: 6,
      name: "Vikram Singh",
      role: "Engineering Student",
      course: "JEE Advanced Coaching",
      rating: 5,
      image: "/placeholder.svg",
      testimonial: "The quality of teaching and the problem-solving approach at GroWith is outstanding. The regular practice sessions and personalized feedback helped me crack JEE Advanced and get into IIT Bombay.",
      achievement: "IIT Bombay - Computer Science"
    }
  ];

  const stats = [
    { number: "95%", label: "Success Rate", description: "Students achieve their goals" },
    { number: "10K+", label: "Success Stories", description: "Dreams turned into reality" },
    { number: "4.9/5", label: "Average Rating", description: "Student satisfaction score" },
    { number: "15+", label: "Years Experience", description: "Proven track record" }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Student Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how GroWith Educational Services has helped thousands of students 
            achieve their academic and career aspirations.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 animate-scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="overflow-hidden hover:shadow-hover transition-all duration-300 group animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <Quote className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center space-x-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      "{testimonial.testimonial}"
                    </p>
                    
                    <div className="bg-success/10 border border-success/20 rounded-lg p-3 mb-6">
                      <div className="text-sm font-medium text-success">
                        Achievement: {testimonial.achievement}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-primary font-medium">
                      {testimonial.course}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-primary rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Success Journey?
          </h3>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-lg">
            Join thousands of successful students who have achieved their dreams with GroWith Educational Services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-hover">
              Start Your Journey Today
            </button>
            <button className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;