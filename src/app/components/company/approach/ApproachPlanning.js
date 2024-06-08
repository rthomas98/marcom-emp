"use client";

import React from "react";

const ApproachPlanning = () => {
  return (
    <section className="relative isolate px-[5%] py-16 md:py-24 lg:py-28">
      <div
        className="absolute left-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
        aria-hidden="true"
      >
        <div
          className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
          }}
        />
      </div>
      <div className="container mx-auto mb-12 grid grid-cols-1 items-center justify-between gap-x-12 gap-y-8 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl py-5">
          Our Research-Driven Approach Guides Our Strategic Planning for Project
          Success
        </h2>
        <p className="md:text-md">
          During the planning phase, we conduct thorough research to gather
          insights and data. This allows us to form effective strategies that
          are tailored to the specific needs and goals of each project. Our team
          of experts analyzes the research findings to identify opportunities
          and challenges, ensuring that our approach is well-informed and
          results-driven.
        </p>
      </div>
      <div>
        <img
          src="../imgs/appoach-img-2.png"
          className="w-full round-lg object-cover"
          alt="Placeholder image"
        />
      </div>
    </section>
  );
};

export default ApproachPlanning;
