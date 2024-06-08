"use client";

import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const ApproachDesign = () => {
  return (
    <section className="relative isolate px-[5%] py-16 md:py-24 lg:py-28">
      <svg
        className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_top,white,transparent)]"
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
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="inline-block rounded-lg bg-em-pink px-3 py-1 text-sm font-medium text-white">
              Bringing Innovation to Life with Expert Design and Development
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl py-5">
              Transforming Ideas into Tangible Products and Services
            </h2>
            <p className="mb-5 text-base md:mb-6 md:text-md">
              Our design and development phase is where innovation takes shape.
              We combine creativity and technical expertise to turn ideas into
              tangible products and services that exceed expectations.
            </p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    src="https://relume-assets.s3.amazonaws.com/relume-icon.svg"
                    alt="Relume logo 1"
                    className="size-6"
                  />
                </div>
                <span>
                  We provide innovative and creative solutions tailored to meet
                  the unique needs of each project. Our team leverages their
                  expertise to deliver exceptional and imaginative outcomes.
                </span>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    src="https://relume-assets.s3.amazonaws.com/relume-icon.svg"
                    alt="Relume logo 2"
                    className="size-6"
                  />
                </div>
                <span>
                  Our collaborative approach ensures that we work closely with
                  our clients throughout the project. We prioritize open
                  communication and teamwork to achieve the best results
                  together.
                </span>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    src="https://relume-assets.s3.amazonaws.com/relume-icon.svg"
                    alt="Relume logo 3"
                    className="size-6"
                  />
                </div>
                <span>
                  We follow an iterative process that allows for continuous
                  improvement and refinement. By regularly reviewing and
                  adjusting our strategies, we ensure optimal project outcomes
                  at every stage.
                </span>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-x-4 md:mt-8">
              <Link
                href="/contact-us"
                className="bg-em-yellow text-em-purple py-2 px-4 rounded hover:bg-em-pink hover:text-white"
              >
                Ready To get Started?
              </Link>
              <Link
                href="/company/frequently-asked-questions"
                className="bg-transparent text-purple py-2 px-4 rounded hover:bg-transparent hover:text-em-pink flex items-center"
              >
                Have MOre Questions?
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
          <div>
            <img
              src="../imgs/appoach-img-3.png"
              className="w-full rounded-lg object-cover"
              alt="Placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachDesign;
