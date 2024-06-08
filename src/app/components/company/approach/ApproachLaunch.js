"use client";

import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const ApproachLaunch = () => {
  return (
    <header className="relative isolate px-[5%] py-16 md:py-24 lg:py-28 bg-em-purple">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/20 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
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
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        />
      </svg>
      <div className="container mx-auto">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-12 lg:mb-20 lg:gap-20">
          <h2 className="text-3xl text-white font-bold sm:text-4xl md:text-5xl py-5">
            Efficient and Successful Project Launch and Implementation
          </h2>
          <div className="mx-[7.5%] flex flex-col justify-end md:mt-48">
            <p className="md:text-md text-white">
              Our deployment phase focuses on the seamless launch and efficient
              implementation of your project. We ensure that every detail is
              carefully executed to deliver successful results.
            </p>
            <div className="mt-6 flex gap-x-4 md:mt-8">
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
        </div>
        <div className="grid grid-cols-[1fr_0.33fr] items-start gap-6 sm:gap-8 md:gap-16">
          <div className="mt-[10%] w-full">
            <img
              className="aspect-[3/2] rounded-lg size-full object-cover"
              src="../imgs/appoach-img-5.png"
              alt="Placeholder image 1"
            />
          </div>
          <div className="w-full">
            <img
              className="aspect-[2/3] rounded-lg size-full object-cover"
              src="../imgs/appoach-img-6.png"
              alt="Placeholder image 2"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default ApproachLaunch;
