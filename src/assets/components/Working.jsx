import React from "react";
import Workingcard from "./Workingcard";

function Working() {
  const data = [
    {
      number: "01",
      question: "Consultation",
      parag:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      number: "02",
      question: "Research and Strategy Development",
      parag:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      number: "03",
      question: "Implementation",
      parag:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      number: "04",
      question: "Monitoring and Optimization",
      parag:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      number: "05",
      question: "Reporting and Communication",
      parag:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      number: "06",
      question: "Continual Improvement",
      parag:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
  ];
  return (
    <section className="w-[85%] mx-auto mb-20 ">
      <div>
        {data.map((item, i) => (
          <Workingcard
            number={item.number}
            question={item.question}
            parag={item.parag}
          />
        ))}
      </div>
    </section>
  );
}

export default Working;
