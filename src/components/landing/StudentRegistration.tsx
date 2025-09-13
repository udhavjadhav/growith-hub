import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { UserPlus, Mail, Phone, Calendar, MapPin, BookOpen, MessageSquare } from "lucide-react";

const StudentRegistration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    courseInterested: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const courses = [
    "Civil Services (UPSC)",
    "Banking & SSC",
    "Engineering Entrance (JEE)",
    "Medical Entrance (NEET)",
    "Teacher Training Program",
    "Competitive Exam Coaching",
    "Skill Development",
    "Other"
  ];

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const errors = [];
    
    if (!formData.name.trim()) errors.push("Name is required");
    if (!formData.email.trim()) errors.push("Email is required");
    if (!formData.phone.trim()) errors.push("Phone number is required");
    if (!formData.courseInterested) errors.push("Course selection is required");
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      errors.push("Please enter a valid email address");
    }
    
    // Phone validation (basic)
    const phoneRegex = /^\+?[\d\s-()]{10,}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      errors.push("Please enter a valid phone number");
    }
    
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (errors.length > 0) {
      toast({
        title: "Validation Error",
        description: errors.join(", "),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - Replace with actual backend integration
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For now, just show success message
      toast({
        title: "Registration Successful! 🎉",
        description: "Thank you for your interest! Our team will contact you soon.",
        className: "bg-success text-success-foreground",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        address: "",
        courseInterested: "",
        message: ""
      });
      
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Start Your Learning Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Register now to get personalized course recommendations and exclusive access 
              to our educational programs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Registration Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-card animate-fade-in-up">
                <CardHeader className="bg-gradient-primary rounded-t-lg">
                  <CardTitle className="text-2xl text-primary-foreground flex items-center space-x-2">
                    <UserPlus className="h-6 w-6" />
                    <span>Student Registration Form</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="flex items-center space-x-2">
                          <UserPlus className="h-4 w-4" />
                          <span>Full Name *</span>
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Enter your full name"
                          className="focus:ring-primary"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center space-x-2">
                          <Mail className="h-4 w-4" />
                          <span>Email Address *</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your.email@example.com"
                          className="focus:ring-primary"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="flex items-center space-x-2">
                          <Phone className="h-4 w-4" />
                          <span>Phone Number *</span>
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+91 9876543210"
                          className="focus:ring-primary"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="dateOfBirth" className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>Date of Birth</span>
                        </Label>
                        <Input
                          id="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                          className="focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address" className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>Address</span>
                      </Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        placeholder="Enter your complete address"
                        className="focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="courseInterested" className="flex items-center space-x-2">
                        <BookOpen className="h-4 w-4" />
                        <span>Course/Exam Interested *</span>
                      </Label>
                      <Select value={formData.courseInterested} onValueChange={(value) => handleInputChange("courseInterested", value)}>
                        <SelectTrigger className="focus:ring-primary">
                          <SelectValue placeholder="Select your course of interest" />
                        </SelectTrigger>
                        <SelectContent>
                          {courses.map((course) => (
                            <SelectItem key={course} value={course}>
                              {course}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="flex items-center space-x-2">
                        <MessageSquare className="h-4 w-4" />
                        <span>Message (Optional)</span>
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us about your goals, preferences, or any specific requirements..."
                        rows={4}
                        className="focus:ring-primary resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 py-6 text-lg"
                    >
                      {isSubmitting ? "Submitting..." : "Register Now"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Benefits Sidebar */}
            <div className="space-y-6">
              <Card className="shadow-card animate-fade-in" style={{animationDelay: "0.2s"}}>
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Why Register?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { title: "Personalized Guidance", desc: "Get course recommendations based on your goals" },
                    { title: "Expert Counseling", desc: "Free consultation with our education experts" },
                    { title: "Exclusive Access", desc: "Early access to new programs and events" },
                    { title: "Regular Updates", desc: "Stay informed about educational opportunities" },
                    { title: "Community Support", desc: "Connect with fellow students and mentors" }
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-medium text-foreground">{benefit.title}</div>
                        <div className="text-sm text-muted-foreground">{benefit.desc}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-gradient-primary shadow-card animate-fade-in" style={{animationDelay: "0.4s"}}>
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-semibold text-primary-foreground mb-3">
                    Need Help?
                  </h4>
                  <p className="text-primary-foreground/90 mb-4 text-sm">
                    Our counselors are here to help you choose the right path for your career.
                  </p>
                  <Button variant="secondary" className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                    Talk to Counselor
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentRegistration;