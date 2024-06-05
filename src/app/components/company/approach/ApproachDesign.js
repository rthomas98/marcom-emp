"use client";

import React from "react";

const ApproachDesign = () => {
  return (
    <section class="px-[5%] py-16 md:py-24 lg:py-28">
      <div class="container">
        <div class="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p class="mb-3 font-semibold md:mb-4">Tagline</p>
            <h1 class="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Medium length section heading goes here
            </h1>
            <p class="mb-5 text-base md:mb-6 md:text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <ul class="grid grid-cols-1 gap-4 py-2">
              <li class="flex self-start">
                <div class="mr-4 flex-none self-start">
                  <img
                    src="https://relume-assets.s3.amazonaws.com/relume-icon.svg"
                    alt="Relume logo 1"
                    class="size-6"
                  />
                </div>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </li>
              <li class="flex self-start">
                <div class="mr-4 flex-none self-start">
                  <img
                    src="https://relume-assets.s3.amazonaws.com/relume-icon.svg"
                    alt="Relume logo 2"
                    class="size-6"
                  />
                </div>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </li>
              <li class="flex self-start">
                <div class="mr-4 flex-none self-start">
                  <img
                    src="https://relume-assets.s3.amazonaws.com/relume-icon.svg"
                    alt="Relume logo 3"
                    class="size-6"
                  />
                </div>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </li>
            </ul>
            <div class="mt-6 flex items-center gap-x-4 md:mt-8">
              <button class="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary bg-background-primary px-6 py-3">
                Button
              </button>
              <button class="focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-0 text-text-primary gap-2 p-0">
                Button
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="0"
                  viewBox="0 0 15 15"
                  class="size-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
              class="w-full object-cover"
              alt="Placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachDesign;
