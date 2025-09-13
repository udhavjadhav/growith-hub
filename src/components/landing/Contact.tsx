import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageSquare,
  Navigation,
  Globe
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Centers",
      details: [
        "Head Office: 123 Education Street, New Delhi - 110001",
        "Mumbai Branch: 456 Learning Avenue, Mumbai - 400001", 
        "Bangalore Branch: 789 Knowledge Park, Bangalore - 560001"
      ]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "Main Line: +91 11 2345 6789",
        "Admissions: +91 11 2345 6790",
        "Support: +91 11 2345 6791"
      ]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "General: info@growith.edu",
        "Admissions: admissions@growith.edu",
        "Support: support@growith.edu"
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 4:00 PM",
        "Sunday: Closed (Emergency support available)"
      ]
    }
  ];

  const quickActions = [
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our support team",
      action: "Start Chat"
    },
    {
      icon: Navigation,
      title: "Get Directions",
      description: "Find our nearest center",
      action: "View Map"
    },
    {
      icon: Phone,
      title: "Request Callback",
      description: "We'll call you back within 2 hours",
      action: "Schedule Call"
    },
    {
      icon: Globe,
      title: "Virtual Tour",
      description: "Explore our facilities online",
      action: "Take Tour"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your educational journey? Contact us today for personalized guidance 
            and support from our expert team.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card animate-fade-in-up">
              <CardHeader className="bg-gradient-primary rounded-t-lg">
                <CardTitle className="text-2xl text-primary-foreground flex items-center space-x-2">
                  <Send className="h-6 w-6" />
                  <span>Send us a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Your Name</Label>
                      <Input 
                        id="contact-name" 
                        placeholder="Enter your full name"
                        className="focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email Address</Label>
                      <Input 
                        id="contact-email" 
                        type="email" 
                        placeholder="your.email@example.com"
                        className="focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="contact-phone">Phone Number</Label>
                      <Input 
                        id="contact-phone" 
                        type="tel" 
                        placeholder="+91 9876543210"
                        className="focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-subject">Subject</Label>
                      <Input 
                        id="contact-subject" 
                        placeholder="What can we help you with?"
                        className="focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-message">Message</Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Tell us more about your inquiry, goals, or how we can help you..."
                      rows={6}
                      className="focus:ring-primary resize-none"
                    />
                  </div>

                  <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 py-6 text-lg">
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-3">{info.title}</h4>
                      <div className="space-y-2">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {quickActions.map((action, index) => (
            <Card 
              key={index} 
              className="text-center cursor-pointer hover:shadow-hover transition-all duration-300 group animate-scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-6">
                <div className="bg-gradient-primary p-4 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <action.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {action.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {action.description}
                </p>
                <Button variant="outline" size="sm" className="hover:shadow-card">
                  {action.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map Section */}
        <Card className="shadow-card animate-fade-in">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center space-x-2">
              <MapPin className="h-6 w-6 text-primary" />
              <span>Find Us</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 h-64 flex items-center justify-center border-t border-border">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-2">Interactive Map</h4>
                <p className="text-muted-foreground mb-4">
                  Explore our locations and get directions to the nearest center
                </p>
                <Button className="bg-gradient-primary hover:shadow-card">
                  Open in Google Maps
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <div className="text-center mt-12 bg-gradient-primary rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            Need Immediate Assistance?
          </h3>
          <p className="text-primary-foreground/90 mb-6">
            Our emergency support team is available 24/7 for urgent queries
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Call Emergency Line: +91 9999 888 777
            </Button>
            <Button 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              WhatsApp Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;