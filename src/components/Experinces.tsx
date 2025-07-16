"use client";

import { Calendar, ExternalLink, Home } from "lucide-react";

const Experiences = () => {
  return (
    <section
      id="experience"
      className="py-20 px-6 bg-gradient-to-br from-purple-100 via-pink-50 to-gray-200 w-full"
    >
      <div className="max-w-[1700px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-6xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight mb-6">
            Professional Experience
          </h2>
          <p className="text-2xl text-black-300 font-bold max-w-3xl mx-auto">
            My journey in villa hosting and web development
          </p>
        </div>

        {/* Main Card Container */}
        <div className="w-full bg-white rounded-xl p-8 border-4 border-purple-300 hover:bg-purple-50 transition-all duration-300 hover:scale-105">
          {/* Top Row: Image + Details */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Image */}
            <div className="w-full lg:w-[40%]">
              <img
                src="/image18.jpg"
                alt="Villa Hosting"
                className="w-full h-auto rounded-xl shadow-lg object-cover"
              />
            </div>

            {/* Right: Details */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-start mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl mr-6 flex-shrink-0">
                  <Home className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-black-900 mb-2">
                    Villa Host & Property Manager
                  </h3>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="font-medium text-2xl">2 Years Experience</span>
                  </div>
                </div>
              </div>

              <h4 className="text-3xl font-semibold text-purple-600 mb-4">
                Minu Homestay and Villa – Weligama, Sri Lanka
              </h4>

              <p className="text-2xl text-gray-700 leading-relaxed mb-6">
                Successfully managed and operated a beautiful villa homestay in Weligama,
                providing exceptional hospitality experiences for international guests
                seeking authentic Sri Lankan culture.
              </p>

              {/* Platforms */}
              <div className="mb-6">
                <h5 className="text-3xl font-semibold text-gray-800 mb-4">
                  Active on Major Platforms:
                </h5>
                <div className="text-2xl flex flex-wrap gap-3">
                  {[
                    {
                      name: "Booking.com",
                      url: "https://www.booking.com/hotel/lk/minu-homestay.html",
                      color: "bg-blue-600 hover:bg-blue-700",
                    },
                    {
                      name: "VRBO",
                      url: "https://www.vrbo.com",
                      color: "bg-purple-600 hover:bg-purple-700",
                    },
                  ].map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-4 py-2 ${platform.color} text-white rounded-lg transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:scale-105`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {platform.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section: Full Width Below */}
          <div className="mt-10">
            <h5 className="text-3xl font-semibold text-gray-800 mb-4">Skills Applied:</h5>
            <div className=" flex flex-wrap text-2xl justify-center text-purple-800 front-bold gap-6 ">
              {[
                "Guest Relations",
                "Property Management",
                "Revenue Management",
                "Digital Marketing",
                "Photography",
                "Hospitality",
                "Cultural Exchange",
                "Booking Systems",
                "Customer Service",
                "Local Tourism",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-purple-100 text-purple-600  rounded-full border border-purple-100 hover:border-purple-400 hover:bg-purple-50 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Responsibilities + Achievements Grid Under Skills */}
          <div className="grid sm:grid-cols-2 gap-6 mt-12">
            {/* Responsibilities */}
            <div className="space-y-3">
              <h5 className="text-3xl font-semibold text-gray-800">Key Responsibilities:</h5>
              <ul className="text-2xl space-y-2 text-gray-600">
                {[
                  "Guest relations and customer service",
                  "Booking management across platforms",
                  "Property maintenance coordination",
                  "Marketing and promotion strategies",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Achievements */}
            <div className="space-y-3">
              <h5 className="text-3xl font-semibold text-gray-800">Achievements:</h5>
              <ul className="text-2xl space-y-2 text-gray-600">
                {[
                  "Maintained 95% guest satisfaction rating",
                  "Increased booking rates by 40%",
                  "Built strong repeat customer base",
                  "Established local business partnerships",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
