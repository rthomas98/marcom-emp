"use client";

import React from "react";

const PartnerHero = () => {
  return (
    <header class="relative px-[5%]">
      <div class="container  mx-auto">
        <div class="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
          <div class="text-center">
            <h1 class="mb-5 text-6xl text-white font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
              Medium length hero heading goes here
            </h1>
            <p class="text-white text-text-alternative md:text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div class="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              <button class="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-6 py-3">
                Button
              </button>
              <button class="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-alternative text-text-alternative px-6 py-3">
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute inset-0 -z-10">
        <video
          class="absolute inset-0 aspect-video size-full object-cover"
          autoplay=""
          loop=""
          muted=""
        >
          <source
            src="https://relume-assets.s3.amazonaws.com/placeholder-video.mp4"
            type="video/mp4"
          />
        </video>
        <div class="absolute inset-0 bg-black/50"></div>
      </div>
    </header>
  );
};

export default PartnerHero;
