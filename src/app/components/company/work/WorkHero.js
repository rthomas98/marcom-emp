"use client";

import React from "react";

const WorkHero = () => {
  return (
    <header class="px-[5%] py-16 md:py-24 lg:py-28">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div class="order-1 lg:order-1">
            <img
              src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
              class="w-full object-cover"
              alt="Placeholder image"
            />
          </div>
          <div class="order-2 lg:order-2">
            <h1 class="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Medium length hero heading goes here
            </h1>
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
      </div>
    </header>
  );
};

export default WorkHero;
