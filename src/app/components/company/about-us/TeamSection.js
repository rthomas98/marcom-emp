"use client";

import React from "react";

const TeamSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
            Our Team
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Meet the Experts
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
            Our talented team of professionals is dedicated to delivering
            exceptional results.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 items-center justify-center">
          {[
            {
              name: "John Doe",
              title: "CEO",
              description:
                "John is the visionary leader who drives our company forward with his strategic insights and innovative thinking.",
            },
            {
              name: "Jane Smith",
              title: "CTO",
              description:
                "Jane is the technical mastermind behind our cutting-edge solutions, ensuring our products are built with the latest technologies.",
            },
            {
              name: "Michael Johnson",
              title: "Head of Design",
              description:
                "Michael is the creative genius behind our visually stunning designs, ensuring our products not only function well but also look amazing.",
            },
            {
              name: "Emily Davis",
              title: "Product Manager",
              description:
                "Emily is the driving force behind our product development, ensuring our solutions meet the needs of our customers.",
            },
            {
              name: "David Lee",
              title: "Software Engineer",
              description:
                "David is the talented engineer who brings our ideas to life, crafting robust and scalable software solutions.",
            },
            {
              name: "Sarah Chen",
              title: "Marketing Specialist",
              description:
                "Sarah is the marketing mastermind who helps us reach and engage our target audience, driving growth and brand awareness.",
            },
          ].map((teamMember, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <img
                alt={teamMember.name}
                className="w-36 h-36 rounded-full object-cover"
                src="/imgs/placeholder.svg"
              />
              <div className="space-y-1 text-center">
                <h3 className="text-xl font-bold">{teamMember.name}</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {teamMember.title}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {teamMember.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
