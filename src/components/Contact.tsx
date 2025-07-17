"use client";

import { Mail, Phone, MapPin, Send, Linkedin, Home, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current || isSubmitting) return;

    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_il7yc2v',
        'template_e4iw8me',
        formRef.current,
        'cj47YJgusNUJDYaQ-'
      )
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "Thank you for reaching out. I'll get back to you soon!",
          });
          setFormData({ name: "", email: "", subject: "", message: "" });
          setIsSubmitting(false);
        },
        (error) => {
          console.error("FAILED...", error);
          toast({
            title: "Failed to send message",
            description: "Please try again later.",
            variant: "destructive",
          });
          setIsSubmitting(false);
        }
      );
  };

  const contactItems = [
    {
      icon: Mail,
      title: "Email",
      value: "pawanya.dayananda@gmail.com",
      bg: "from-purple-500 to-blue-500",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "0707022060",
      bg: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "No19, Batawala Road, Weligama",
      bg: "from-orange-500 to-red-500",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: (
        <a
          href="https://www.linkedin.com/in/pawanya-dayananda-a1250823a"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors duration-300 text-xl"
        >
          Connect on LinkedIn
        </a>
      ),
      bg: "from-blue-600 to-blue-700",
    },
    {
      icon: Home,
      title: "Minu Homestay & Villa",
      value: (
        <a
          href="https://www.booking.com/hotel/lk/minu-homestay.html"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-400 transition-colors duration-300 text-xl"
        >
          Book Minu Homestay
        </a>
      ),
      bg: "from-emerald-500 to-teal-500",
    },
    {
      icon: Github,
      title: "GitHub",
      value: (
        <a
          href="https://github.com/pawanya-dayananda"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors duration-300 text-xl"
        >
          View my repositories
        </a>
      ),
      bg: "from-gray-800 to-gray-600",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="w-full max-w-[1700px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-6xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight mb-6">
            Get In Touch
          </h2>
          <p className="text-2xl text-gray-700 font-bold max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a friendly chat about technology and design.
          </p>
        </div>

        {/* Grid: Contact Info + Form */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactItems.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${item.bg} rounded-lg flex items-center justify-center flex-shrink-0`}
                >
                  <item.icon className="text-white" size={36} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xl font-medium break-words">
                    {typeof item.value === "string" ? item.value : item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 border-4 border-purple-300 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-2xl backdrop-blur-md">
            <h2 className="text-4xl font-bold text-black mb-10 text-center">
              Send a Message
            </h2>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="text-xl bg-white/10 border border-gray-600 text-gray-700 placeholder:text-gray-600 placeholder:text-xl rounded-md"
                  required
                  disabled={isSubmitting}
                />
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="text-xl bg-white/10 border border-gray-600 text-gray-700 placeholder:text-gray-600 placeholder:text-xl rounded-md"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <Input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="text-xl bg-white/10 border border-gray-600 text-gray-700 placeholder:text-gray-600 placeholder:text-xl rounded-md"
                required
                disabled={isSubmitting}
              />

              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                className="text-xl bg-white/10 border border-gray-600 text-gray-700 placeholder:text-gray-600 placeholder:text-xl rounded-md"
                required
                disabled={isSubmitting}
              />

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-blue-600 transition-all duration-300 text-white font-semibold shadow-md rounded-md text-2xl px-12 py-8"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-3 h-5 w-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
