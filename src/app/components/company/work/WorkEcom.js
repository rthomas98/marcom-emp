"use client";

import React from "react";

const WorkEcom = () => {
  return (
    <header class="grid grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:grid-cols-2 lg:pt-0">
      <div class="container mx-auto md:justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end px-5">
        <h1 class="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
          Medium length hero heading goes here
        </h1>
        <p class="md:text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div class="mt-6 flex gap-x-4 md:mt-8">
          <button class="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-6 py-3">
            Button
          </button>
          <button class="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary bg-background-primary px-6 py-3">
            Button
          </button>
        </div>
      </div>
      <div class="relative flex items-center">
        <div class="absolute w-[45%] pl-[5%] lg:pl-0">
          <img
            src="https://relume-assets.s3.amazonaws.com/placeholder-image-portrait-dim.png"
            alt="Placeholder image 1"
            class="aspect-[2/3] w-full object-cover lg:h-full"
          />
        </div>
        <div class="ml-[10%]">
          <img
            src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
            alt="Placeholder image 2"
            class="w-full object-cover lg:h-screen lg:max-h-[60rem]"
          />
        </div>
      </div>
    </header>
  );
};

export default WorkEcom;
