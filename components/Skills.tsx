"use client";

import React from "react";
import {
  SiPython,
  SiCplusplus,
  SiSharp,
  SiDotnet,
  SiReact,
  SiFigma,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiPandas,
  SiLinux,
  SiTensorflow,
  SiGit,
  SiMysql,
} from "react-icons/si";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";

const skillsCategories = [
  {
    title: "Programming Languages",
    skills: [
      { icon: <SiPython />, name: "Python" },
      { icon: <SiCplusplus />, name: "C++" },
      { icon: <SiSharp />, name: "C#" },
      { icon: <SiDotnet />, name: ".NET" },
      { icon: <SiTypescript />, name: "TypeScript" },
    ],
  },
  {
    title: "Technologies & Frameworks",
    skills: [
      { icon: <SiReact />, name: "React" },
      { icon: <SiHtml5 />, name: "HTML" },
      { icon: <SiCss3 />, name: "CSS" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <SiTensorflow />, name: "TensorFlow" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { icon: <SiPandas />, name: "Pandas" },
      { icon: <SiLinux />, name: "Linux" },
      { icon: <SiGit />, name: "Git" },
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiFigma />, name: "Figma" },
    ],
  },
];

// Animation Variants for Cards
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Skills = () => {
  return (
    <div className="py-10 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
        Skills
      </h2>

      {/* Three-column grid with Equal-Height Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6">
        {skillsCategories.map((category, index) => (
          <motion.div
            key={index}
            className="w-full h-full"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={index} // Custom delay for staggered effect
          >
            <Card className="p-6 bg-gray-900 shadow-md rounded-lg h-full flex flex-col">
              {/* Card Title */}
              <CardTitle className="text-xl font-semibold text-gray-300 text-center mb-4">
                {category.title}
              </CardTitle>

              {/* Card Description (Icons) */}
              <CardDescription className="flex-1 flex flex-col justify-center">
                <div className="flex flex-wrap justify-center gap-6">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all w-28"
                    >
                      <div className="text-6xl text-gray-400 dark:text-gray-300 hover:text-blue-500 transition-transform transform hover:scale-110">
                        {skill.icon}
                      </div>
                      <span className="mt-2 text-sm text-white">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardDescription>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
