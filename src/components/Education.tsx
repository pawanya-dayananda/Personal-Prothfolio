import { GraduationCap, School } from "lucide-react";

const Education = () => {
  const education = [
    {
      icon: GraduationCap,
      degree: "B.Sc. In Information Technology",
      institution: "Sri Lanka Institiute Of Information Technology ",
      year: "2023-2027",
      description: "Focused on UI/UX Designing, Graphic Designing, and web development. Completed two yearswith three group projects.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: School,
      degree: "Advanced Level",
      institution: "Sujatha Vidyalaya, Matara",
      year: "2018-2020",
      description: "Studied in the Bio science stream, covering Biology, Physics, and Chemistry.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: School,
      degree: "Ordinary Level",
      institution: "St.Mary's Convent, Matara",
      year: "2006-2017",
      description: "Completed outstanding academic performance,while also being an active contributor to school leadership and extracurricular initiatives..",
      color: "from-purple-500 to-pink-500"
    },
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="w-full max-w-[1700px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight mb-6">
            Education
          </h2>
          <p className="text-2xl text-black-300 font-bold  max-w-3xl mx-auto">
            My academic background and qualifications.
          </p>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
      {education.map((edu, index) => (
      <div
      key={index}
      className="bg-white rounded-xl p-8 border-4 border-purple-300 hover:bg-purple-50 transition-all duration-300 hover:scale-105"
    >
      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${edu.color} flex items-center justify-center mb-4`}>
        <edu.icon className="text-white" size={36} />
      </div>
      <h3 className="text-3xl font-semibold text-black mb-2">{edu.degree}</h3>
      <span className="text-3xl text-lg text-gray-1000  font-bold block mb-4">{edu.year}</span>
      <p className="text-2xl text-purple-800 font-bold font-1g mb-4">{edu.institution}</p>
      <p className="text-xl text-black-1000 text-1g">{edu.description}</p>
      </div>
       ))}
      </div>

      </div>
    </section>
  );
};

export default Education;