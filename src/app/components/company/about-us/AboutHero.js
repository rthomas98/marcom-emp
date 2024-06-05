"use client";

import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const AboutHero = () => {
  return (
    <section className="relative isolate container mx-auto grid items-center gap-6 px-4 py-10 md:py-20 lg:py-32 lg:grid-cols-3">
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
      <div className="space-y-6">
        <div className="inline-block rounded-lg bg-em-pink px-3 py-1 text-sm font-medium text-gray-900 dark:bg-pink dark:text-white">
          Innovating Business with Tailored Tech Solutions
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight">
          Delivering Excellence in Technology Solutions
        </h1>
        <p className="text-gray-500">
          Our team of skilled designers and developers pour their creativity
          into every pixel, ensuring a visually stunning and delightful user
          experience. From initial concept to final polish, we meticulously
          craft each interface with passion and attention to detail.
        </p>
        <div className="flex space-x-4">
          <Link
            href="/company/about-us"
            className="bg-em-yellow text-em-purple py-2 px-4 rounded hover:bg-em-pink hover:text-white"
          >
            Learm more about us
          </Link>
          <Link
            href="/frequently-asked-questions"
            className="bg-transparent text-em-purple py-2 px-4 rounded hover:bg-transparent hover:text-em-pink flex items-center"
          >
            Have more questions?
            <ArrowRightIcon className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img
          alt="Image"
          className="object-cover rounded-lg"
          src="/imgs/placeholder.svg"
          style={{
            aspectRatio: "480/720",
          }}
        />
      </div>
      <div className="flex items-center justify-center">
        <img
          alt="Image"
          className="object-cover rounded-lg"
          src="/imgs/placeholder.svg"
          style={{
            aspectRatio: "480/360",
          }}
        />
      </div>
    </section>
  );
};

export default AboutHero;
