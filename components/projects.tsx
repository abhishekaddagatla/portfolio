import React from "react";
import { HoverEffect } from "./ui/projects-card-hover";

const Projects = () => {
  const projects = [
    {
      title: "My Music DB",
      description:
        "A simple database for users to upload, download, and store music files.",
      image: "/mymusicdb.png",
      link: "https://github.com/abhishekaddagatla/myMusicDB",
    },
    {
      title: "Dad Joke Generator",
      description:
        "Using the OpenAI GPT API, this app generates dad jokes based on user input.",
      image: "/dadjokegenerator.png",
      link: "https://github.com/abhishekaddagatla/dad_joke_generator",
    },
    {
      title: "covidBot13",
      description:
        "This now defunct application is a simple twitter bot that posts daily world stats about COVID 19 and also has a feature that replies to mentions with stats about specific countries. Deployed on an AWS EC2 instance for continuous operation.",
      image: "/covidbot2.png",
      link: "https://github.com/abhishekaddagatla/covidBot13",
    },
  ];
  return (
    <div className="flex flex-col items-center">
      <div className="w-3/4">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
};

export default Projects;
