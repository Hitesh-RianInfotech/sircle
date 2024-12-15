import React, { useState, useRef } from "react";
import {
  FaStar,
  FaLightbulb,
  FaEdit,
  FaPenFancy,
  FaLinkedin,
  FaRocket,
} from "react-icons/fa";

const WhatsIncluded = () => {
  const [activeCard, setActiveCard] = useState(null);
  const iconRefs = useRef([]);

  const timelineData = [
    {
      id: 1,
      title: "AI and Prompt Engineering",
      description:
        "Delve into the reign of mastering prompts and controlling the world of AI.",
      icon: <FaStar />,
      position: "right",
    },
    {
      id: 2,
      title: "Business Case Analysis",
      description:
        "From SWOT Analysis to real-time business dissection, learn to judge.",
      icon: <FaLightbulb />,
      position: "left",
    },
    {
      id: 3,
      title: "Design and Video Editing",
      description:
        "Whether it’s acing Canva like a pro or editing an aesthetic reel, get yourself ready to design and vlog all over again!",
      icon: <FaEdit />,
      position: "right",
    },
    {
      id: 4,
      title: "Content and Copywriting",
      description:
        "In a world where content is KING, learn to write copies that sell and publish your first blog with us.",
      icon: <FaPenFancy />,
      position: "left",
    },
    {
      id: 5,
      title: "Linkedin Mastery",
      description:
        "In a world thriving on networking and personal brand, this platform is a must-have. But what is the right way to shine out here? We will tell you that.",
      icon: <FaLinkedin />,
      position: "right",
    },
    {
      id: 6,
      title: "Startup 101",
      description:
        "What could be better than learning to take initiatives and pros and cons by the founder himself? This just might be our surprise module!",
      icon: <FaRocket />,
      position: "left",
    },
  ];

  const handleIconClick = (id, index) => {
    setActiveCard(id);
    // Smooth scroll to the clicked icon
    if (iconRefs.current[index]) {
      iconRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <div className="bg-black max-w-[90vw] m-auto text-white py-12">
      {/* Header */}
      <div className="my-12">
        <img
          className="mb-20 m-auto"
          src="/images/what.png"
          alt="What's Included"
        />
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Center Line - Hidden on Small Screens */}
        <div className="absolute top-0 left-1/2 w-[1px] h-[1000px] bg-gray-600 hidden sm:block"></div>

        {/* Icons on the Center Line */}
        <div className="absolute left-[calc(50%-20px)] hidden sm:block">
          {timelineData.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (iconRefs.current[index] = el)}
              onClick={() => handleIconClick(item.id, index)}
              style={{ top: `${index * 12}rem` }} // Positioning icons
              className={`absolute w-10 h-10 cursor-pointer flex items-center justify-center rounded-full text-black transition-all duration-300 transform ${
                activeCard === item.id
                  ? "bg-gradient-to-t from-purple-600 to-pink-600 scale-110 duration-300"
                  : "bg-gradient-to-t from-purple-900 to-white scale-100"
              }`}
            >
              {item.icon}
            </div>
          ))}
        </div>

        {/* Timeline Items */}
        {timelineData.map((item) => (
          <div
            key={item.id}
            className={`flex ${
              item.position === "left" ? "justify-start" : "justify-end"
            } mb-8 transition-all duration-500 ${
              activeCard === item.id ? "scale-105 shadow-2xl" : ""
            }`}
          >
            <div
              onClick={() => handleIconClick(item.id, timelineData.indexOf(item))}
              className={`relative w-full cursor-pointer sm:w-5/12 gradient-purple2 border border-gray-500 p-6 rounded-lg shadow-lg ${
                item.position === "right" ? "ml-0 sm:ml-8" : "mr-0 sm:mr-8"
              }`}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatsIncluded;
