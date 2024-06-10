"use client";

import React from "react";

const WhyIntro = () => {
  return (
    <section className="relative isolate overflow-hidden bg-em-purple px-[5%] py-16 md:py-24 lg:py-28">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
      </svg>
      <div className="container mx-auto grid grid-cols-1 items-center justify-between gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
      
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl py-5 text-em-yellow">
            Empowering businesses with innovative technology solutions since 2019.
            </h2>
        <p className="md:text-md text-white">
        At Empuls3, we are driven by our mission to deliver exceptional technology solutions that transform businesses. Our vision is to be the leading provider of innovative software development and IT consulting services. We are guided by our core values of excellence, integrity, and collaboration, ensuring that we always exceed client expectations.
        </p>
      </div>
    </section>
  );
};

export default WhyIntro;
