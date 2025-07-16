"use client";

import {
  ExternalLink,
  Home,
  Palette,
  Image as ImageIcon,
  Brush,
  Layers,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Portfolio = () => {
  const designCategories = [
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Logo design, brand guidelines, and visual identity systems",
      color: "from-purple-500 to-pink-500",
      images: ["/image7.png", "/image10.jpg", "/image17.png", "/image15.png"],
    },
    {
      icon: ImageIcon,
      title: "Print Design",
      description: "Brochures, posters, business cards, and marketing materials",
      color: "from-purple-500 to-indigo-500",
      images: ["/image11.jpg", "/image9.jpg", "/image8.jpg", "/image16.jpg"],
    },
    {
      icon: Brush,
      title: "Digital Art",
      description: "Illustrations, digital paintings, and creative artwork",
      color: "from-pink-500 to-rose-500",
      images: ["/image18.jpg", "/image19.jpg"], // Add valid images if needed
    },
    {
      icon: Layers,
      title: "UI Design",
      description: "Mobile apps, web interfaces, and user experience designs",
      color: "from-violet-500 to-purple-500",
      images: ["/image13.png", "/image14.png", "/image12.png"],
      githubLinks: [
        "https://github.com/yourusername/ui-project1",
        "https://github.com/yourusername/ui-project2",
        "https://github.com/yourusername/ui-project3",
      ],
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-20 lg:py-32 px-6 lg:px-12 xl:px-16 bg-gradient-to-br from-purple-100 via-pink-50 to-gray-200 w-full"
    >
      <div className="max-w-[1700px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight mb-6">
            My Designs
          </h2>
          <p className="text-xl text-black-300 font-bold max-w-3xl mx-auto">
            Explore my creative design work and discover my beautiful villa homestay for your next getaway in Sri Lanka.
          </p>
        </div>

        {/* Design Work Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          {designCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-2xl p-8 shadow-xl border-4 border-purple-300"
            >
              {/* Top: Icon + Info Section */}
              <div className="grid grid-cols-1 gap-6 mb-8">
                <div className="flex items-center gap-6">
                  <div
                    className={`w-20 h-20 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-md`}
                  >
                    <category.icon className="text-white" size={36} />
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold text-gray-800">
                      {category.title.replace(/Design/gi, "")}
                    </h4>
                    <p className="text-gray-700 text-base mt-2">
                      {category.description.replace(/Design/gi, "")}
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-600 font-semibold pl-1 mb-6">Project Examples:</p>
              </div>

              {/* Bottom: Image Gallery */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {category.images.map((image, imageIndex) => (
                  image ? (
                    <Card
                      key={imageIndex}
                      className="group overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden">
                          <img
                            src={image}
                            alt={`${category.title} project ${imageIndex + 1}`}
                            className="w-full h-100 object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>

                        {/* GitHub Link for UI Design */}
                        {category.title === "UI Design" &&
                          category.githubLinks?.[imageIndex] && (
                            <div className="flex justify-center mt-3">
                              <a
                                href={category.githubLinks[imageIndex]}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="View on GitHub"
                                className="rounded-full p-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all shadow-md"
                              >
                                <Github size={24} />
                              </a>
                            </div>
                          )}
                      </CardContent>
                    </Card>
                  ) : null
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
