"use client";

import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const AboutSolutions = () => {
  return (
    <section className="relative isolate px-[5%] py-16 md:py-24 lg:py-28">
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
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="inline-block rounded-lg bg-em-pink px-3 py-1 text-sm font-medium text-white">
              Empowering Growth with Cutting-Edge Tech
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl my-5">
              Revolutionizing Businesses with Cutting-Edge Technology
            </h2>
            <p className="mb-6 md:mb-8 md:text-md">
              We offer tailored software development services designed to meet
              your unique business needs, ensuring enhanced efficiency and
              sustained growth. Our custom solutions drive innovation and
              streamline operations, helping your business thrive.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 md:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Custom Solutions
                </h6>
                <p>
                  Tailored software development to meet unique business needs,
                  driving efficiency and growth.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Scalable Applications
                </h6>
                <p>
                  Building robust, scalable applications to support your
                  business as it grows and evolves.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row mt-5">
              <Link
                href="/solutions/solutions-overview"
                className="bg-em-yellow text-em-purple py-2 px-4 rounded hover:bg-em-pink hover:text-white"
              >
                Learm more about our Solutions
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
              src="../imgs/about-solutions-img-1.png"
              className="w-full rounded-lg object-cover"
              alt="Placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSolutions;
