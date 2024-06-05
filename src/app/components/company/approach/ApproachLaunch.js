"use client";

import React from "react";

const ApproachLaunch = () => {
  return (
    <header class="px-[5%] py-16 md:py-24 lg:py-28">
      <div class="container">
        <div class="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-12 lg:mb-20 lg:gap-20">
          <h1 class="text-6xl font-bold md:text-9xl lg:text-10xl">
            Medium length hero heading goes here
          </h1>
          <div class="mx-[7.5%] flex flex-col justify-end md:mt-48">
            <p class="md:text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
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
        </div>
        <div class="grid grid-cols-[1fr_0.33fr] items-start gap-6 sm:gap-8 md:gap-16">
          <div class="mt-[10%] w-full">
            <img
              class="aspect-[3/2] size-full object-cover"
              src="https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg"
              alt="Placeholder image 1"
            />
          </div>
          <div class="w-full">
            <img
              class="aspect-[2/3] size-full object-cover"
              src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
              alt="Placeholder image 2"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default ApproachLaunch;
