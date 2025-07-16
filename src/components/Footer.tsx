import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle } from "lucide-react";

const Footer = () => {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
     { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Designs", href: "#designs" },
    { name: "Achievements", href: "#achievements" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900/90 text-white py-12 px-6">
      <div className="w-full max-w-[1700px] mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Pawanya Dayananda
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              A passionate developer and designer creating innovative digital solutions. 
              Specialized in web development, UI/UX design, and bringing creative ideas to life 
              through technology.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.linkedin.com/in/pawanya-dayananda-a1250823a" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin size={36} />
              </a>
              <a href="https://github.com/pawanyadayananda" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github size={36} />
              </a>
              <a href="#contact" className="inline-flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors">
                <MessageCircle size={36} />
                <span>Message</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-3xl font-semibold text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-purple-400 transition-colors text-left text-lg"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-3xl font-semibold text-white">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 text-lg">
                <Mail size={26} />
                <span>pawanya.dayananda@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-lg">
                <Phone size={26} />
                <span>+94 70 702 2060</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-lg">
                <MapPin size={26} />
                <span>No19, Batawala Road, Weligama, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-lg ">
              © 2025 Pawanya. All rights reserved.
            </p>
            <div className="flex space-x-6 text-lg text-gray-400">
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
