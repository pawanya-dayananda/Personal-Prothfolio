import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Experinces from "@/components/Experinces";
import Projects from "@/components/Projects";
import Designs from "@/components/Designs";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div
      id="home"
      className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-gray-200 w-full"
    >
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Achievements />
      <Skills  />
      <Experinces  />
      <Projects />
      <Designs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
