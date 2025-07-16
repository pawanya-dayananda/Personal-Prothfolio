
import { Code, Palette, Layers, Monitor, Smartphone, Globe, Database, Github, HouseIcon } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "React", level: 88 },
        { name: "JavaScript", level: 85 },
        { name: "Tailwind CSS", level: 92 }
      ]
    },
    {
      title: "UI/UX Designing and Mobile Appplication",
      icon: <Palette className="w-8 h-8" />,
      skills: [
        { name: "Android Studio", level: 93 },
        { name: "Figma", level: 90 },
        { name: "Kotlin", level: 90 },
        { name: "Adobe XD", level: 88 }
        
       ]
    },
    {
      title: "Grapic Designing and video Editing",
      icon: <Globe className="w-8 h-8" />,
      skills: [
        { name: "Canva", level: 94 },
        { name: "Adobe Photoshop", level: 80 },
        { name: "Capcat", level: 78 },
        { name: "Adobe InDesign", level: 75 }
      ]
    },
    {
      title: "Tools & Workflow",
      icon: <Monitor className="w-8 h-8" />,
      skills: [
        { name: "Git/GitHub", level: 89 },
        { name: "VS Code", level: 95 },
        { name: "Eclipse", level: 85 },
        { name: "Visual Studio", level: 87 },
        { name: "python IDLE", level: 80 }
      ]
    },
    
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-100 via-pink-50 to-gray-200 w-full">
      <div className="max-w-[1700px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight mb-6">
            Skills & Expertise
          </h2>
          <p className="text-2xl text-black-300 font-bold max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-4 border-purple-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl mr-4">
                {category.icon}
                </div>
                <h3 className="text-3xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-2xl font-medium">
                        {skill.name}
                      </span>
                      <span className="text-purple-600 text-2xl font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-purple-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className=" mt-16 text-center">
          <h3 className="text-4xl font-bold text-gray-900 mb-8">
            Additional Technologies
          </h3>
          <div className="bg-white backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-4 border-purple-300 flex flex-wrap text-2xl justify-center gap-6 ">
            {[
              "Node.js", "Express.js", "MongoDB", "MySQL", "C++", 
              "java", "C", "Python", "R", "PHP", "Postman"
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-purple-100 text-purple-800 front-bold backdrop-blur-sm  rounded-full border-2 border-purple-400 hover:border-purple-400 hover:bg-purple-50 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
