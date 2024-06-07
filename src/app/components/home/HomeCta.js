"use client";

import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const HomeCta = () => {
  return (
    <section className="relative isolate w-full py-24 md:py-32 lg:py-40 bg-em-pink">
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
      <div className="absolute inset-0" />
      <div className="relative container mx-auto px-4 md:px-6 text-center space-y-6">
        <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          Transform Your Business with Empuls3
        </h2>
        <p className="text-white md:text-xl lg:text-lg">
          We provide scalable, innovative solutions for startups to enterprises.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="company/about-us"
            className="bg-em-purple text-white py-2 px-4 rounded hover:bg-em-yellow hover:text-em-purple"
          >
            Ready to Get Started?
          </Link>
          <Link
            href="/freqently-asked-questions"
            className="bg-transparent text-white py-2 px-4 rounded hover:bg-transparent hover:text-em-purple flex items-center"
          >
            Have more questions?
            <ArrowRightIcon className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeCta;
