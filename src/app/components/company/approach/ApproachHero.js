"use client";

import React from "react";

const ApproachHero = () => {
  return (
    <header className="relative px-[5%]">
      <div className="container grid mx-auto">
        <div className="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
          <div className="max-w-lg">
            <div className="inline-block rounded-lg bg-em-pink px-3 py-1 text-sm font-medium text-white">
              Efficient, Transparent, and Client-Centric
            </div>
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl text-white py-5">
              Streamlined Project Approach
            </h1>
            <p className="text-white text-text-alternative md:text-md">
              At Empuls3, our streamlined project approach ensures efficiency
              and transparency at every stage. From initial consultation to
              final delivery, we prioritize clear communication and
              collaboration, tailoring our strategies to meet your unique
              business needs. Experience a seamless journey to innovative and
              scalable solutions with our expert team guiding you every step of
              the way.
            </p>
            <div className="mb-0 mt-6 max-w-sm md:mt-8"></div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <img
          src="../imgs/aproach-hero.png"
          className="size-full object-cover"
          alt="Placeholder image"
        />
        <div className="absolute inset-0 bg-em-purple/80"></div>
      </div>
    </header>
  );
};

export default ApproachHero;
