
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About ", href: "/#about" },
    { name: "Education", href: "/#education" },
    { name: "Achievements", href: "/#achievements" },
    { name: "Skills", href: "/#skills" },
    { name: "Experinces", href: "/#experience" },
    { name: "Projects", href: "/#projects" },
    { name: "Designs", href: "/#Designs" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      if (location.pathname === "/") {
        const element = document.querySelector(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.location.href = href;
      }
    } else {
      window.location.href = href;
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-gray-900/90 backdrop-blur-md border-b border-white/2 pt-8">
      <div className="w-full max-w-[1700px] mx-auto px-16">
        <div className="flex justify-between items-center h-12">
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mr-auto">
            Pawanya
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-14">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-200 hover:text-white transition-colors duration-300 text-xl "
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-medium text-left py-2"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
