import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Hotel Booking System",
      description:
        "A modern Kotlin-based Android hotel booking app with seamless reservation management and intuitive, user-friendly UI/UX design.",
      image: "/image5.png",
      technologies: ["Kotlin", "UI/UX Designing"],
      liveUrl: "https://github.com/pawanya-dayananda/Hotel-Booking-System.git",
      githubUrl: "https://github.com/pawanya-dayananda/Hotel-Booking-System.git",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Budget Management System",
      description:
        "A modern Android budget management app developed in Kotlin with intuitive UI/UX designing and data handling using Shared Preferences.",
      image:"/image6.webp",
      technologies: ["Kotlin", "UI/UX Designing", "SQL"],
      liveUrl: "https://github.com/pawanya-dayananda/Budget-Management-System.git",
      githubUrl: "https://github.com/pawanya-dayananda/Budget-Management-System.git",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Transportation Management System ",
      description:
        "A smart Transportation Management System (TMS) with real-time vehicle tracking, dynamic route optimization, and intuitive dashboards for delivery performance, cost analytics, and fleet efficiency.",
      image:
        "/image19.png",
      technologies: ["React", "Node.js", "Express", "Tailwind css"],
      liveUrl: "https://github.com/pawanya-dayananda/Transportation-Management-System.git",
      githubUrl: "https://github.com/pawanya-dayananda/Transportation-Management-System.git",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Spare Parts Sellling System",
      description:
        "A full-featured spare parts selling system with detailed product catalogs, intelligent search and filtering and a secure, multi-step checkout process—streamlining the purchase of automotive and machinery components with efficiency and convenience.",
      image: "/image20.png",
      technologies: ["JAVA", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-blue-500 to-teal-500",
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 lg:py-32 px-6 lg:px-12 xl:px-16">
      <div className="w-full max-w-[1700px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-6xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight mb-6">
            Featured Projects
          </h2>
          <p className="text-2xl text-black-300 font-bold max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating
            exceptional digital experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border-4 border-purple-300 hover:bg-purple-50 transition-all duration-300 hover:scale-105"
            >
              {/* Project Image */}
              <div className="w-full h-50 rounded-md overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Project Title & Description */}
              <h3 className="text-3xl font-semibold text-black mb-2">{project.title}</h3>
              <p className="text-2xl text-gray-700 mb-4 text-sm">{project.description}</p>

              {/* Tech Tags */}
              <div className=" flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-1xl px-3 py-2 bg-purple-100 text-purple-800  rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-4">
            <Button
             size="sm"
             className="w-full bg-white border-4 border-purple-600 text-purple-600 hover:bg-purple-50 hover:text-purple-700 transition-all duration-300 font-medium text-xl px-10 py-6"
             onClick={() => window.open(project.liveUrl, "_blank")}
            >
            <ExternalLink className="mr-1 h-4 w-4" />
            View
            </Button>
          </div>

          </div>
          ))}
        </div>

        {/* View‑More / View‑Less button */}
        {projects.length > 3 && (
          <div className="flex justify-center mt-8">
            <Button
              variant="secondary"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all duration-300 font-medium shadow-lg hover:shadow-xl text-2xl px-12 py-8  "
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "View Less" : "View More"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
