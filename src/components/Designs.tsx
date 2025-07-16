import { Palette, Image, Brush, Layers } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Designs = () => {
  const navigate = useNavigate();

  const designCategories = [
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Logo design, brand guidelines, and visual identity systems",
      color: "from-purple-500 to-pink-500",
      
    },
    {
      icon: Image,
      title: "Print Design",
      description: "Brochures, posters, business cards, and marketing materials",
      color: "from-purple-500 to-pink-500",
     
    },
    {
      icon: Brush,
      title: "Digital Art",
      description: "Illustrations, digital paintings, and creative artwork",
      color: "from-purple-500 to-pink-500",
     
    },
    {
      icon: Layers,
      title: "UI Design",
      description: "Mobile apps, web interfaces, and user experience designs",
      color: "from-purple-500 to-pink-500",
      
    },
  ];

  const handleViewAllDesigns = () => {
    navigate("/portfolio");
  };

  return (
    <section id="Designs" className="py-20 px-6">
      <div className="max-w-[1700px] mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-6xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight mb-6">
            My Designs
          </h2>
          <p className="text-2xl text-black-300 font-bold max-w-3xl mx-auto">
            Explore my creative design work across various categories, from brand identity
            to digital art and user interface design.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {designCategories.map((category, index) => (
    <div
      key={index}
      className="bg-white rounded-xl p-8 border-4 border-purple-300 hover:bg-white/20 transition-all duration-300 hover:scale-105"
    >
      <div
        className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}
      >
        <category.icon className="text-white" size={32} />
      </div>
      <h3 className="text-3xl font-semibold text-black mb-4">{category.title}</h3>
      <p className="text-2xl text-gray-700 mb-6 leading-relaxed ">{category.description}</p>
      <div className="text-gray-600 font-medium text-lg">
           </div>
    </div>
    ))}
    </div>


        {/* View More Button */}
        <div className="text-center mt-16">
          <Button
            onClick={handleViewAllDesigns}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all duration-300 font-medium shadow-lg hover:shadow-xl text-2xl px-12 py-8"
          >
            View My Designs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Designs;
