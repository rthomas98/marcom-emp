"use client";

import React from "react";

const ApproachIntro = () => {
  return (
    <section className="relative isolate px-[5%] py-16 md:py-24 lg:py-28">
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
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="inline-block rounded-lg bg-em-pink px-3 py-1 text-sm font-medium text-white">
              Foundation of Success Through Insightful Planning
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl py-5">
              Efficient and Results-Driven Approach to Projects
            </h2>
            <p className="mb-6 md:mb-8 md:text-md">
              In the initial phase of our approach, we prioritize discovery and
              research. By thoroughly understanding our clients' needs and
              conducting in-depth analysis, we gather valuable insights that
              inform our strategy and ensure successful project outcomes.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Discovery Phase
                </h3>
                <p>
                  Thoroughly understand client needs and conduct in-depth
                  analysis
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Research Phase
                </h3>
                <p>
                  Gather valuable insights to inform our strategy and ensure
                  success
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="../imgs/appoach-img-1.png"
              className="w-full rounded-lg object-cover"
              alt="Placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachIntro;
