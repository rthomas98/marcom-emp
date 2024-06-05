"use client";

import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Test = () => {
  return (
    <header class="relative isolate grid grid-cols-1 gap-y-16 pt-16 md:grid-flow-row md:pt-24 lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:pt-0  bg-em-purple">
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
      <div class="mx-[5%] max-w-[40rem] justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
        <div className="inline-block rounded-lg bg-em-pink px-3 py-1 text-sm font-medium text-gray-900 dark:bg-pink dark:text-white mb-3">
          Innovating Business with Tailored Tech Solutions
        </div>
        <h1 class="mb-5 text-4xl font-bold md:mb-6 md:text-8xl lg:text-10xl text-white">
          Medium length hero heading goes here
        </h1>
        <p class="md:text-md text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div class="mt-6 flex gap-x-4 md:mt-8">
          <Link
            href="/company/about-us"
            className="bg-em-yellow text-em-purple py-2 px-4 rounded hover:bg-em-pink hover:text-white"
          >
            Learm more about us
          </Link>
          <Link
            href="contact-us"
            className="bg-transparent text-white py-2 px-4 rounded hover:bg-transparent hover:text-em-pink flex items-center"
          >
            Get intouch with us
            <ArrowRightIcon className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
      <div class="h-[30rem] overflow-hidden pl-[5vw] pr-[5vw] md:h-[40rem] lg:h-screen lg:pl-0">
        <div class="grid w-full grid-cols-2 gap-x-4">
          <div class="-mt-[120%] grid size-full animate-loop-vertically columns-2 grid-cols-1 gap-4 self-center">
            <div class="grid size-full grid-cols-1 gap-4">
              <div class="relative w-full pt-[120%]">
                <img
                  class="absolute inset-0 size-full object-cover"
                  src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                  alt="Placeholder image 1"
                />
              </div>
            </div>
            <div class="grid size-full grid-cols-1 gap-4">
              <div class="relative w-full pt-[120%]">
                <img
                  class="absolute inset-0 size-full object-cover"
                  src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                  alt="Placeholder image 2"
                />
              </div>
            </div>
            <div class="grid size-full grid-cols-1 gap-4">
              <div class="relative w-full pt-[120%]">
                <img
                  class="absolute inset-0 size-full object-cover"
                  src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                  alt="Placeholder image 3"
                />
              </div>
            </div>
            <div class="grid size-full grid-cols-1 gap-4">
              <div class="relative w-full pt-[120%]">
                <img
                  class="absolute inset-0 size-full object-cover"
                  src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                  alt="Placeholder image 4"
                />
              </div>
            </div>
            <div class="grid size-full grid-cols-1 gap-4">
              <div class="relative w-full pt-[120%]">
                <img
                  class="absolute inset-0 size-full object-cover"
                  src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                  alt="Placeholder image 5"
                />
              </div>
            </div>
            <div class="grid size-full grid-cols-1 gap-4">
              <div class="relative w-full pt-[120%]">
                <img
                  class="absolute inset-0 size-full object-cover"
                  src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                  alt="Placeholder image 6"
                />
              </div>
            </div>
          </div>
          <div class="grid size-full animate-loop-vertically grid-cols-1 gap-4">
            <div class="grid size-full grid-cols-1 gap-4">
              <div class="relative w-full pt-[120%]">
                <img
                  class="absolute inset-0 size-full object-cover"
                  src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                  alt="Placeholder image 1"
                />
              </div>
            </div>
            <div class="grid size-full grid-cols-1 gap-4">
              <div class="relative w-full pt-[120%]">
                <img
                  class="absolute inset-0 size-full object-cover"
                  src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                  alt="Placeholder image 2"
                />
              </div>
            </div>
            <div class="grid size-full grid-cols-1 gap-4">
              <div class="relative w-full pt-[120%]">
                <img
                  class="absolute inset-0 size-full object-cover"
                  src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                  alt="Placeholder image 3"
                />
              </div>
            </div>
            <div class="grid size-full grid-cols-1 gap-4">
              <div class="relative w-full pt-[120%]">
                <img
                  class="absolute inset-0 size-full object-cover"
                  src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                  alt="Placeholder image 4"
                />
              </div>
            </div>
            <div class="grid size-full grid-cols-1 gap-4">
              <div class="relative w-full pt-[120%]">
                <img
                  class="absolute inset-0 size-full object-cover"
                  src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                  alt="Placeholder image 5"
                />
              </div>
            </div>
            <div class="grid size-full grid-cols-1 gap-4">
              <div class="relative w-full pt-[120%]">
                <img
                  class="absolute inset-0 size-full object-cover"
                  src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                  alt="Placeholder image 6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Test;
