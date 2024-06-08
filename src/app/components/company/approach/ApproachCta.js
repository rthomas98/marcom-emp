"use client";

import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const ApproachCta = () => {
  return (
    <header className="relative isolate bg-em-pink px-[5%] py-16 md:py-24 lg:py-28">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
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
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <img
              src="../imgs/appoach-img-8.png"
              className="w-full rounded-xl object-cover"
              alt="Placeholder image"
            />
          </div>
          <div>
            <div className="inline-block rounded-lg bg-em-yellow px-3 py-1 text-sm font-medium text-em-purple">
              Proven Strategies for Maximum Efficiency and Impact
            </div>
            <h2 className="text-3xl text-white font-bold sm:text-4xl md:text-5xl py-5">
              Efficient Methods, Exceptional Results
            </h2>
            <p className="md:text-md text-white">
              Discover our proven methods and processes for tackling projects,
              ensuring efficiency, and delivering exceptional results.
            </p>
            <div className="mt-6 flex gap-x-4 md:mt-8">
              <Link
                href="/contact-us"
                className="bg-em-purple text-white py-2 px-4 rounded hover:bg-em-yellow hover:text-em-purple"
              >
                Ready to get started?
              </Link>
              <Link
                href="/company/frequently-asked-questions"
                className="bg-transparent text-white py-2 px-4 rounded hover:bg-transparent hover:text-em-purple flex items-center"
              >
                Have questions?
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ApproachCta;
