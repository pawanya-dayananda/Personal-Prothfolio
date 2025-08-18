import { Palette, Eye, Code } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Project Manager",
      description: "Project Planning, Team Leadership, UI/UX Collaboration, Strategic Execution",  
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Figma, Adobe XD, Sketch, User Research, Wireframing",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Eye,
      title: "Graphic Design",
      description: "Adobe Creative Suite, Branding, Logo Design, Print Design",
      color: "from-purple-500 to-pink-500"
    }
    
  ];

  return (
    <section id="about" className="py-20  lg:py-32 px-6 lg:px-12 xl:px-16 bg-gradient-to-br from-purple-100 via-pink-50 to-gray-200 w-full">
      <div className="w-full max-w-[1700px] mx-auto">
        {/* Centered Heading and Intro Paragraph */}
        <div className="text-center mb-12 lg:mb-20">
          <h1 className="text-6xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight mb-6
">
            About Me
          </h1>
          <p className="text-2xl text-black-300 font-bold max-w-3xl mx-auto">
            Explore my journey in design and what drives my passion for
            <br />
            crafting meaningful user experiences
          </p>
        </div>

        {/* Left: Info Paragraphs | Right: Image */}
        <div className="flex flex-col lg:flex-row items-start gap-12 mb-16">
          {/* Left Column */}
          <div className="flex-1 text-left">
            <h3 className="text-4xl font-semibold text-purple-600 mb-4">
              Information Technology Undergraduate
            </h3>

            <div className="text-xl sm:text-2xl lg:text-3xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
              <p>
                I’m an undergraduate student at the Sri Lanka Institute of Information Technology (SLIIT),
                currently in my third year, with an expected graduation in 2027.
              </p>
              <p>
                Project Manager with a strong background in UI/UX, web, and graphic design, specializing in delivering
                 user-centric and visually engaging digital experiences. Skilled in leading projects from concept to 
                 completion, I collaborate with cross-functional teams to ensure innovative ideas are brought to life 
                 through strategic planning and effective execution.
              </p>
              <p>
                My work spans designing posters, banners, social media graphics, and marketing materials, combining creativity with strategic communication to achieve impactful results.
              </p>
              <p>
                I thrive in collaborative environments and enjoy working with teams to solve design challenges and
                transform creative ideas into impactful, user-friendly solutions.
              </p>
            </div>

            <h4 className="text-4xl font-semibold text-purple-600 mt-10">
              Interests &amp; Focus Areas
            </h4>
          </div>

          {/* Right Column: Image */}
          <div className="flex-shrink-0 self-center lg:self-start">
            <div className="w-100 h-160 md:w-96 md:h-80 lg:w-96 lg:h-96 overflow-hidden p-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-xl">
              <img
                src="/image25.jpg"
                alt="Pawanya Dayananda"
                className="w-full h-full "
              />
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border-4 border-purple-300 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4`}>
                <skill.icon className="text-white" size={28} />
              </div>
              <h3 className="text-3xl font-semibold text-black mb-2">{skill.title}</h3>
              <p className="text-2xl text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
