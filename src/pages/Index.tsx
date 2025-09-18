import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Services from "@/components/landing/Services";
import Events from "@/components/landing/Events";
import Testimonials from "@/components/landing/Testimonials";
import StudentRegistration from "@/components/landing/StudentRegistration";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import ScrollToTop from "@/components/ui/scroll-to-top";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Events />
      <StudentRegistration />
      <Contact />
      <Footer />
      <ScrollToTop />
      <Toaster />
    </div>
  );
};

export default Index;
