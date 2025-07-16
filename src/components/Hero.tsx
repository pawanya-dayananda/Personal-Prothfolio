import { ArrowDown, Github, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-8 lg:px-16 xl:px-24 relative pt-20"
    >
      <div className="text-gray-800 max-w-[1700px] mx-auto w-full">
        <div className="animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 xl:gap-32 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-10">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                Pawanya Dayananda
              </h1>
              <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-gray-700 font-medium">
                UI/UX Designer & Graphic Designer
              </p>
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 max-w-4xl leading-relaxed">
                Creative designer passionate about crafting beautiful user
                experiences and visual designs. I collaborate with teams to
                bring innovative ideas to life through thoughtful design
                solutions.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 pt-8">
                {/* Download CV Button */}
                <a
                  href="/cv.jpg"
                  download="Pawanya_Dayananda_CV.pdf"
                  className="inline-block"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all duration-300 font-medium shadow-lg hover:shadow-xl text-2xl px-12 py-8"
                  >
                    <Download className="mr-5 h-7 w-7" />
                    Download CV
                  </Button>
                </a>

                {/* Contact Me Button */}
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 hover:text-purple-700 transition-all duration-300 font-medium text-2xl px-12 py-8"
                  onClick={scrollToContact}
                >
                  <Mail className="mr-3 h-6 w-6" />
                  Contact Me
                </Button>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Outer Glow Layer */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500 scale-105 z-0"></div>

                {/* Gradient Border */}
                <div className="relative z-10 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 p-3 sm:p-4 lg:p-5 rounded-full shadow-3xl transition-all duration-300">
                  <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] 2xl:w-[36rem] 2xl:h-[36rem] rounded-full overflow-hidden bg-white">
                    <img
                      src="/image4.jpg"
                      alt="Pawanya Dayananda"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-purple-600 hover:text-purple-700 transition-colors duration-300 animate-bounce"
      >
        <ArrowDown size={48} />
      </button>
    </section>
  );
};

export default Hero;
