import React from "react";
import { HoverEffect } from "./ui/experience-card-hover";

const Experience = () => {
  const experiences = [
    {
      company: "Spot Inc.",
      title: "Software Developer Intern",
      icon: "/spotlogo.png",
      link: "https://spotinc.com",
      description:
        "At Spot, I developed a service integrating a third-party API (Sustain Log) to track CO2 emissions, leveraging React, .NET, C#, and SQL. I implemented Redis caching, Hangfire for background tasks, Azure DevOps for CI/CD, and followed CQRS principles to optimize deployment speed and API performance.",
    },
    {
      company: "Purdue Center for Career Opportunities",
      title: "Full Stack Engineer",
      icon: "/ccologo.png",
      link: "https://www.cco.purdue.edu/",
      description:
        "As a Full Stack Developer at Purdue CCO, I rebuilt the file uploader to improve efficiency and UI using Tailwind CSS, ASP.NET MVC, and React, making the system 80% faster. I also enhanced the Alumni Caller System, optimizing its database for 5,000+ records and increasing processing speed by 90% using C#, SQL, and AJAX + JQuery.      ",
    },
    {
      company: "Purdue IT (formerly known as ITaP)",
      title: "Network Engineer",
      icon: "/itaplogo.png",
      link: "https://it.purdue.edu/",
      description:
        "At Purdue IT, I automated the migration of 2,500+ network devices to a new network management protocol using Python, AWS Route 53, and the LibreNMS API. I also developed Selenium scripts for testing and used Ansible playbooks to streamline the transition process.      ",
    },
  ];

  return (
    <>
      <HoverEffect items={experiences} />
    </>
  );
};

export default Experience;
