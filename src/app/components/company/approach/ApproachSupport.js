"use client";

import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const ApproachSupport = () => {
  return (
    <section className="relative isolate px-[5%] py-16 md:py-24 lg:py-28">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_left,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
        />
      </svg>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="inline-block rounded-lg bg-em-yellow px-3 py-1 text-sm font-medium text-white">
              Sustaining Success with Continuous Optimization and Support
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl py-5">
              Efficient and Results-Driven Maintenance and Support Phase
            </h2>
            <p className="mb-6 md:mb-8 md:text-md">
              During the maintenance and support phase, we ensure ongoing
              success and optimization of your project. Our team of experts is
              dedicated to providing efficient and effective support, resolving
              any issues that may arise and making necessary updates to keep
              your project running smoothly.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Expert Support
                </h3>
                <p>
                  Our team of experts is available to provide timely support and
                  address any concerns.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Regular Updates
                </h3>
                <p>
                  We proactively make necessary updates to ensure your project
                  remains optimized and secure.
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-x-4 md:mt-8">
              <Link
                href="/solutions/solutions-overview"
                className="bg-em-yellow text-em-purple py-2 px-4 rounded hover:bg-em-pink hover:text-white"
              >
                Checkout Our Solutions
              </Link>
              <Link
                href="contact-us"
                className="bg-transparent text-em-purple py-2 px-4 rounded hover:bg-transparent hover:text-em-pink flex items-center"
              >
                Get intouch with us
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
          <div>
            <img
              src="../imgs/appoach-img-7.png"
              className="w-full rounded-lg object-cover"
              alt="Placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSupport;
