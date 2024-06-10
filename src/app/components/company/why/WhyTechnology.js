"use client";

import React from "react";
import Image from "next/image";

const WhyTechnology = () => {
  return (
    <section className="relative isolate overflow-hidden bg-em-yellow">
      <svg
        className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
        />
      </svg>
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
    <div className="grid grid-cols-2 gap-4 mt-8">
      <Image className="w-full rounded-lg"  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
      <Image className="w-full rounded-lg"  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />

            <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
        </div>
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        <div className="inline-block rounded-lg bg-em-pink px-3 py-1 text-sm font-medium text-white">
        Leading the Way in Tech Innovation
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl py-5 text-em-purple">
            Experience and Expertise in the Technology Industry
            </h2>
            <div className="space-y-4 text-lg leading-8 text-gray-600 mb-5">
            <p>
            At Empuls3, we pride ourselves on our deep understanding of the technology industry and our extensive experience in delivering innovative solutions to our clients. Our team of experts is dedicated to staying ahead of the curve and leveraging the latest technologies to help businesses thrive in the digital age. With a focus on continuous learning and adaptation, we ensure that our clients benefit from cutting-edge advancements and best practices in technology.

          </p>
          </div>
        </div>
    </div>
</section>
  );
};

export default WhyTechnology;
