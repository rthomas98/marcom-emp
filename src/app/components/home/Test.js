"use client";

import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Test = () => {
  return (
    <header className="relative isolate grid grid-cols-1 gap-y-16 pt-16 md:grid-flow-row md:pt-24 lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:pt-0 bg-em-purple">
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
      <div className="mx-[5%] max-w-[40rem] justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
        <div className="inline-block rounded-lg bg-em-pink px-3 py-1 text-sm font-medium text-gray-900 dark:bg-pink dark:text-white mb-3">
          Empowering Your Digital Transformation
        </div>
        <h1 className="mb-5 text-4xl font-bold md:mb-6 md:text-6xl lg:text-6xl text-white">
          Transforming businesses with innovative technology solutions
        </h1>
        <p className="md:text-md text-white">
          At Empuls3, we specialize in delivering scalable and innovative
          technology solutions that meet the unique demands of startups to
          enterprises. Our expertise spans from back-end to full-stack
          development, including Progressive Web Apps and React Native
          Development.
        </p>
        <div className="mt-6 flex gap-x-4 md:mt-8">
          <Link
            href="/company/about-us"
            className="bg-em-yellow text-em-purple py-2 px-4 rounded hover:bg-em-pink hover:text-white"
          >
            Learn more about us
          </Link>
          <Link
            href="contact-us"
            className="bg-transparent text-white py-2 px-4 rounded hover:bg-transparent hover:text-em-pink flex items-center"
          >
            Get in touch with us
            <ArrowRightIcon className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
      <div className="h-[30rem] overflow-hidden pl-[5vw] pr-[5vw] md:h-[40rem] lg:h-screen lg:pl-0">
        <div className="grid w-full grid-cols-2 gap-x-4">
          <div className="animate-scroll-up grid size-full columns-2 grid-cols-1 gap-4 self-center">
            {[...Array(2)].map((_, index) => (
              <React.Fragment key={index}>
                <div className="grid size-full grid-cols-1 gap-4">
                  <div className="relative w-full pt-[120%]">
                    <img
                      className="absolute inset-0 size-full object-cover"
                      src="imgs/hero-img-1.png"
                      alt="Placeholder image 1"
                    />
                  </div>
                </div>
                <div className="grid size-full grid-cols-1 gap-4">
                  <div className="relative w-full pt-[120%]">
                    <img
                      className="absolute rounded-lg inset-0 size-full object-cover"
                      src="imgs/hero-img-2.png"
                      alt="Placeholder image 2"
                    />
                  </div>
                </div>
                <div className="grid size-full grid-cols-1 gap-4">
                  <div className="relative w-full pt-[120%]">
                    <img
                      className="absolute rounded-lg inset-0 size-full object-cover"
                      src="imgs/hero-img-3.png"
                      alt="Placeholder image 3"
                    />
                  </div>
                </div>
                <div className="grid size-full grid-cols-1 gap-4">
                  <div className="relative w-full pt-[120%]">
                    <img
                      className="absolute rounded-lg inset-0 size-full object-cover"
                      src="imgs/hero-img-4.png"
                      alt="Placeholder image 4"
                    />
                  </div>
                </div>
                <div className="grid size-full grid-cols-1 gap-4">
                  <div className="relative w-full pt-[120%]">
                    <img
                      className="absolute rounded-lg inset-0 size-full object-cover"
                      src="imgs/hero-img-5.png"
                      alt="Placeholder image 5"
                    />
                  </div>
                </div>
                <div className="grid size-full grid-cols-1 gap-4">
                  <div className="relative w-full pt-[120%]">
                    <img
                      className="absolute rounded-lg inset-0 size-full object-cover"
                      src="imgs/hero-img-6.png"
                      alt="Placeholder image 6"
                    />
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="animate-scroll-down grid size-full grid-cols-1 gap-4">
            {[...Array(2)].map((_, index) => (
              <React.Fragment key={index}>
                <div className="grid size-full grid-cols-1 gap-4">
                  <div className="relative w-full pt-[120%]">
                    <img
                      className="absolute inset-0 size-full object-cover"
                      src="imgs/hero-img-7.png"
                      alt="Placeholder image 7"
                    />
                  </div>
                </div>
                <div className="grid size-full grid-cols-1 gap-4">
                  <div className="relative w-full pt-[120%]">
                    <img
                      className="absolute rounded-lg inset-0 size-full object-cover"
                      src="imgs/hero-img-8.png"
                      alt="Placeholder image 8"
                    />
                  </div>
                </div>
                <div className="grid size-full grid-cols-1 gap-4">
                  <div className="relative w-full pt-[120%]">
                    <img
                      className="absolute rounded-lg inset-0 size-full object-cover"
                      src="imgs/hero-img-9.png"
                      alt="Placeholder image 9"
                    />
                  </div>
                </div>
                <div className="grid size-full grid-cols-1 gap-4">
                  <div className="relative w-full pt-[120%]">
                    <img
                      className="absolute rounded-lg inset-0 size-full object-cover"
                      src="imgs/hero-img-10.png"
                      alt="Placeholder image 10"
                    />
                  </div>
                </div>
                <div className="grid size-full grid-cols-1 gap-4">
                  <div className="relative w-full pt-[120%]">
                    <img
                      className="absolute rounded-lg inset-0 size-full object-cover"
                      src="imgs/hero-img-11.png"
                      alt="Placeholder image 11"
                    />
                  </div>
                </div>
                <div className="grid size-full grid-cols-1 gap-4">
                  <div className="relative w-full pt-[120%]">
                    <img
                      className="absolute rounded-lg inset-0 size-full object-cover"
                      src="imgs/hero-img-12.png"
                      alt="Placeholder image 12"
                    />
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        @keyframes scroll-down {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0%);
          }
        }
        .animate-scroll-up {
          animation: scroll-up 80s linear infinite;
        }
        .animate-scroll-down {
          animation: scroll-down 80s linear infinite;
        }
      `}</style>
    </header>
  );
};

export default Test;
