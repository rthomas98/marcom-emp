"use client";

import React from "react";

const WhyHero = () => {
  return (
    <section className="relative isolate mx-auto container px-8 lg:py-28 py-10">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
        />
      </svg>
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="text-center lg:mb-20 mb-10">
        <div className="inline-block rounded-lg bg-em-pink px-3 py-1 text-sm font-medium text-gray-900 dark:bg-pink dark:text-white">
          Your Trusted Technology Partner
        </div>
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl py-5">
          Why Choose Empuls3?
        </h1>
        <p className="max-w-[600px] mx-auto text-center md:text-xl lg:text-base xl:text-x mb-5">
          Discover the unique advantages of partnering with Empuls3. Our
          commitment to innovation, quality, and client success sets us apart.
          Let us help you achieve your business goals with our expert technology
          solutions.
        </p>
      </div>
      <div className="mb-6 grid grid-cols-2 gap-6 md:grid-cols-12">
        <div className="col-span-2 h-[140px] sm:h-[150px] md:col-span-4">
          <img
            src="../imgs/why-hero-img-1.png"
            alt="Collaboration"
            className="h-full w-full rounded-lg shadow-md object-cover object-center"
          />
        </div>
        <div className="col-span-1 h-[100px] sm:h-[150px] md:col-span-3">
          <img
            src="../imgs/why-hero-img-2.png"
            alt="Teamwork"
            className="h-full w-full rounded-lg shadow-md object-cover object-center"
          />
        </div>
        <div className="col-span-1 h-[100px] sm:h-[150px] md:col-span-5">
          <img
            src="../imgs/why-hero-img-3.png"
            alt="Innovation"
            className="h-full w-full rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-12">
        <div className="col-span-2 h-[140px] sm:h-[150px] md:col-span-3">
          <img
            src="../imgs/why-hero-img-4.png"
            alt="Strategy"
            className="h-full w-full rounded-lg shadow-md object-cover"
          />
        </div>
        <div className="col-span-1 h-[100px] sm:h-[150px] md:col-span-5">
          <img
            src="../imgs/why-hero-img-5.png"
            alt="Development"
            className="h-full w-full rounded-lg shadow-md object-cover"
          />
        </div>
        <div className="col-span-1 h-[100px] sm:h-[150px] md:col-span-4">
          <img
            src="../imgs/why-hero-img-6.png"
            alt="Growth"
            className="h-full w-full rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyHero;
