import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "National Teaching Excellence Summit 2024",
      date: "2024-03-15",
      time: "09:00 AM",
      location: "Delhi Convention Center",
      category: "Conference",
      attendees: 500,
      status: "upcoming",
      description: "Join leading educators for insights on modern teaching methodologies and educational technology.",
      image: "bg-gradient-to-br from-primary to-primary-light"
    },
    {
      id: 2,
      title: "Competitive Exam Strategy Workshop",
      date: "2024-03-22",
      time: "02:00 PM",
      location: "Mumbai Learning Hub",
      category: "Workshop",
      attendees: 150,
      status: "upcoming",
      description: "Master effective strategies for competitive exams with expert guidance and practice sessions.",
      image: "bg-gradient-to-br from-accent to-accent-light"
    },
    {
      id: 3,
      title: "Digital Learning Innovation Forum",
      date: "2024-04-05",
      time: "10:30 AM",
      location: "Bangalore Tech Park",
      category: "Forum",
      attendees: 300,
      status: "upcoming",
      description: "Explore the latest trends in digital learning and educational technology innovations.",
      image: "bg-gradient-to-br from-success to-success/80"
    },
    {
      id: 4,
      title: "Career Guidance & Placement Drive",
      date: "2024-04-12",
      time: "11:00 AM",
      location: "Hyderabad Career Center",
      category: "Career Event",
      attendees: 200,
      status: "registration-open",
      description: "Connect with top recruiters and get career guidance from industry experts.",
      image: "bg-gradient-to-br from-warning to-warning/80"
    }
  ];

  const recentNews = [
    {
      title: "GroWith Partners with Leading Universities",
      date: "2024-02-28",
      summary: "New collaborations to enhance educational opportunities and research initiatives."
    },
    {
      title: "Record Breaking Placement Results",
      date: "2024-02-25",
      summary: "95% placement rate achieved in recent recruitment drive with top companies."
    },
    {
      title: "Excellence Award for Innovation",
      date: "2024-02-20",
      summary: "Recognition for outstanding contribution to educational technology and methodology."
    }
  ];

  return (
    <section id="events" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Events & News
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with our latest events, workshops, and educational initiatives 
            designed to enhance learning and career opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground">Upcoming Events</h3>
              <Button variant="outline" className="hover:shadow-card w-full sm:w-auto">
                View All Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid gap-6">
              {upcomingEvents.map((event, index) => (
                <Card 
                  key={event.id} 
                  className="overflow-hidden hover:shadow-hover transition-all duration-300 group animate-fade-in-up"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row">
                      {/* Event Image/Gradient */}
                      <div className={`${event.image} lg:w-48 h-32 sm:h-48 lg:h-auto flex items-center justify-center relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/20"></div>
                        <Calendar className="h-8 w-8 sm:h-12 sm:w-12 text-white z-10" />
                      </div>
                      
                      {/* Event Details */}
                      <div className="flex-1 p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-2">
                          <div className="flex-1">
                            <Badge variant="secondary" className="mb-2 text-xs">
                              {event.category}
                            </Badge>
                            <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">
                              {event.title}
                            </h4>
                          </div>
                          <Badge 
                            variant={event.status === 'upcoming' ? 'default' : 'outline'}
                            className="text-xs self-start"
                          >
                            {event.status === 'upcoming' ? 'Upcoming' : 'Registration Open'}
                          </Badge>
                        </div>
                        
                        <p className="text-muted-foreground mb-4 line-clamp-2 text-sm sm:text-base">
                          {event.description}
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-4 text-xs sm:text-sm text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                            <span>{new Date(event.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                            <span className="truncate">{event.location}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
                            <Users className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                            <span>{event.attendees} attendees expected</span>
                          </div>
                          <Button size="sm" className="hover:shadow-card w-full sm:w-auto">
                            Register Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* News Sidebar */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Latest News</h3>
            <div className="space-y-4">
              {recentNews.map((news, index) => (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-card transition-all duration-300 cursor-pointer group animate-fade-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {news.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {news.summary}
                  </p>
                  <div className="text-xs text-muted-foreground">
                    {new Date(news.date).toLocaleDateString()}
                  </div>
                </Card>
              ))}
            </div>
            
            {/* Newsletter Signup */}
            <Card className="p-6 mt-8 bg-gradient-primary">
              <h4 className="text-xl font-semibold text-primary-foreground mb-3">
                Stay Updated
              </h4>
              <p className="text-primary-foreground/90 mb-4 text-sm">
                Subscribe to our newsletter for the latest events and educational insights.
              </p>
              <Button 
                variant="secondary" 
                className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Subscribe Now
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;