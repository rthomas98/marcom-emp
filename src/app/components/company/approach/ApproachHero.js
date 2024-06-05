"use client";

import React from "react";

const ApproachHero = () => {
  return (
    <header class="relative px-[5%]">
      <div class="container grid mx-auto">
        <div class="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
          <div class="max-w-md">
            <h1 class="mb-5 text-white text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-7xl">
              Medium length hero heading goes here
            </h1>
            <p class="text-white text-text-alternative md:text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div class="mb-0 mt-6 max-w-sm md:mt-8">
              <div class="mb-4 grid grid-cols-1 items-center gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-y-4 md:mt-8">
                <div class="relative flex size-full items-center">
                  <input
                    type="email"
                    class="flex size-full min-h-11 border border-border-primary bg-background-primary py-2 align-middle file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 px-3"
                    placeholder="Enter your email"
                  />
                </div>
                <button class="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-6 py-3">
                  Sign up
                </button>
              </div>
              <div>
                <p class="text-xs text-text-alternative">
                  By clicking Sign Up you're confirming that you agree with our
                  <a
                    href="#"
                    class="text-text-alternative underline decoration-border-alternative focus-visible:outline-none"
                  >
                    Terms and Conditions
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute inset-0 -z-10">
        <img
          src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
          class="size-full object-cover"
          alt="Placeholder image"
        />
        <div class="absolute inset-0 bg-black/50"></div>
      </div>
    </header>
  );
};

export default ApproachHero;
