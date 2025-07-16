import { useState } from "react";
import { BookOpen, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Achievements = () => {
  /* ─────────────── Data ─────────────── */
  const professionalCertifications = [
    {
      icon: BookOpen,
      degree: "Advance Certificate of English",
      institution: "University of Ruhuna",
      year: "2023",
      description:
        "Completed an English course that enhanced my skills in writing, reading, speaking, and listening.",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: BookOpen,
      degree: "Diploma in Information Technology",
      institution: "Esoft Metro Campus",
      year: "2022",
      description:
        "Gained foundational skills in Software Engineering, Graphic Designing, Networking, and Web Development.",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: BookOpen,
      degree: "Certificate in Professional English and IT",
      institution: "Aquinas College of Higher Studies",
      year: "2022",
      description:
        "Focused on communication and digital skills, supporting effective workplace collaboration and productivity.",
      color: "from-pink-500 to-purple-500",
    },
  ];

  const skillBuildingCourses = [
    {
      icon: BookOpen,
      degree: "Data Structures & Algorithms in Java",
      institution: "Great Learning",
      year: "2024",
      description: "Strengthened my programming fundamentals in Java.",
      color: "from-purple-500 to-blue-500",
    },
    {
      icon: BookOpen,
      degree: "Adobe XD UI/UX Design Masterclass",
      institution: "Alison",
      year: "2025",
      description: "Enhanced UI/UX design skills through projects and wireframes.",
      color: "from-purple-500 to-blue-500",
    },
    {
      icon: BookOpen,
      degree: "Introduction to Canva",
      institution: "Alison",
      year: "2025",
      description: "Explored Canva to build graphic‑design skills.",
      color: "from-purple-500 to-blue-500",
    },
    {
      icon: BookOpen,
      degree: "Video Editing Masterclass Leveraging CapCut and ChatGPT AI ",
      institution: "Alison",
      year: "2025",
      description: "Video editing using capcut and chatgpt AI .",
      color: "from-purple-500 to-blue-500",
    },
  ];

  const [activeTab, setActiveTab] = useState("all");   // all | professional | skill-building
  const [showAll, setShowAll] = useState(false);       // View‑More toggle

  /* ─────────────── Filtering ─────────────── */
  const getFilteredAchievements = () => {
    switch (activeTab) {
      case "professional":
        return professionalCertifications;
      case "skill-building":
        return skillBuildingCourses;
      default:
        return [...professionalCertifications, ...skillBuildingCourses];
    }
  };

  const filteredAchievements = getFilteredAchievements();
  const displayedAchievements = showAll
    ? filteredAchievements
    : filteredAchievements.slice(0, 3);

  /* ─────────────── JSX ─────────────── */
  return (
    <section
      id="achievements"
      className="py-20 lg:py-32 px-6 lg:px-12 xl:px-16"
    >
      <div className="w-full max-w-[1700px] mx-auto">
        {/* ── Heading ── */}
        <div className="text-center mb-16">
          <h2 className="text-6xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight mb-6">
            Achievements
          </h2>
          <p className="text-2xl text-black-300 font-bold max-w-3xl mx-auto">
            My certifications and professional development
          </p>
        </div>

        {/* ── Tabs ── */}
        <div className="flex justify-center mb-8">
  <div className="text-2xl flex flex-wrap gap-4">
    <button
      onClick={() => setActiveTab("all")}
      className={`rounded-lg transition-all duration-300 font-medium shadow-lg text-xl px-10 py-6
        ${activeTab === "all"
          ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:shadow-xl"
          : "border-2 border-purple-300 text-purple-700 hover:bg-purple-50"
        }`}
    >
      All
    </button>
    <button
      onClick={() => setActiveTab("professional")}
      className={`rounded-lg transition-all duration-300 font-medium shadow-lg text-xl px-10 py-6
        ${activeTab === "professional"
          ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:shadow-xl"
          : "border-2 border-purple-300 text-purple-700 hover:bg-purple-50"
        }`}
    >
      Professional Certifications
    </button>
    <button
      onClick={() => setActiveTab("skill-building")}
      className={`rounded-lg transition-all duration-300 font-medium shadow-lg text-xl px-10 py-6
        ${activeTab === "skill-building"
          ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:shadow-xl"
          : "border-2 border-purple-300 text-purple-700 hover:bg-purple-50"
        }`}
    >
      Skill‑Building Courses
    </button>
  </div>
</div>


        {/* ── Cards & View‑More ── */}
        <div>
  {/* Cards grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {displayedAchievements.map((ach, index) => (
      <div
        key={`ach-${index}`}
        className="bg-white rounded-xl p-8 border-4 border-purple-300 hover:bg-purple-50 transition-all duration-300 hover:scale-105"
      >
        {/* Icon */}
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${ach.color} flex items-center justify-center mb-4`}>
          <ach.icon className="text-white" size={36} />
        </div>

        {/* Content */}
        <h3 className="text-3xl font-semibold text-black mb-2">{ach.degree}</h3>
        <span className="text-3xl text-lg text-gray-800 font-bold block mb-4">{ach.year}</span>
        <p className="text-2xl text-purple-800 font-bold mb-4">{ach.institution}</p>
        <p className="text-xl text-gray-700">{ach.description}</p>
      </div>
    ))}
  </div>
</div>


          {/* View‑More / View‑Less button */}
          {filteredAchievements.length > 3 && (
            <div className="flex justify-center mt-8">
              <Button
                variant="secondary"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all duration-300 font-medium shadow-lg hover:shadow-xl text-2xl px-12 py-8 "
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

export default Achievements;
