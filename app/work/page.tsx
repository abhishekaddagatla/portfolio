import React from "react";
import Experience from "@/components/Experience";
import MyFooter from "@/components/MyFooter";
import Projects from "@/components/projects";

const WorkPage = () => {
  return (
    <div className="container mx-auto px-4 py-10 ">
      <div className="z-20">
        <h1 className="mt-6 font-bold text-2xl">past experiences</h1>
        <Experience />
        <h1 className="mt-6 font-bold text-2xl">personal projects</h1>
        <Projects />
        <MyFooter />
      </div>
    </div>
  );
};

export default WorkPage;
