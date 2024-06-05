"use client";

import React from "react";

const CaseHero = ({ title, subtitle, image }) => {
  return (
    <header class="px-[5%] py-16 md:py-24 lg:py-28">
      <div class="container grid mx-auto">
        <div class="flex flex-col items-center">
          <div class="mb-12 text-center md:mb-18 lg:mb-20">
            <div class="w-full">
              <h1 class="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
                Medium length hero heading goes here
              </h1>
              <p class="md:text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
              <div class="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                <button class="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-6 py-3">
                  Button
                </button>
                <button class="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary bg-background-primary px-6 py-3">
                  Button
                </button>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg"
              class="size-full object-cover"
              alt="Placeholder image"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default CaseHero;
