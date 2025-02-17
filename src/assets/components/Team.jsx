import React from "react";
import TeamCard from "./TeamCard";

function Team() {
  const data = [
    {
      icon: "icon",
      name: "John Smith",
      job: "CEO and Founder",
      para: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    },
    {
      icon: "icon2",
      name: "Jane Doe",
      job: "Director of Operations",
      para: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    },
    {
      icon: "icon3",
      name: "Michael Brown",
      job: "Senior SEO Specialist",
      para: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    },
    {
      icon: "icon4",
      name: "Emily Johnson",
      job: "PPC Manager",
      para: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    },
    {
      icon: "icon5",
      name: "Brian Williams",
      job: "Social Media Specialist",
      para: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    },
    {
      icon: "icon6",
      name: "Sarah Kim",
      job: "Content Creator",
      para: "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
    },
  ];
  return (
    <section>
      <div className=" w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10  ">
        {data.map((item) => (
          <TeamCard
            icon={item.icon}
            name={item.name}
            job={item.job}
            para={item.para}
          />
        ))}
      </div>
    </section>
  );
}

export default Team;
