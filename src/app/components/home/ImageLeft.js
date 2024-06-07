"use client";

import Link from "next/link";
import React, { Component } from "react";

const ImageLeft = () => {
  return (
    <section className="relative isolate container mx-auto grid items-center grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 py-12 md:py-24 lg:py-32 px-4 md:px-6">
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
      <div
        className="absolute left-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
        aria-hidden="true"
      >
        <div
          className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
          }}
        />
      </div>
      <div className="order-2 md:order-1">
        <img
          alt="Image"
          className="w-full h-auto rounded-lg overflow-hidden object-cover"
          src="imgs/em-home-img-1.png"
          style={{ aspectRatio: "600/400" }}
        />
      </div>
      <div className="order-1 md:order-2 space-y-4 md:space-y-6">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-em-pink px-3 py-1 text-sm font-medium text-gray-900 dark:bg-pink dark:text-white">
            Specialized Technology Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight py-4">
            Who We Are
          </h2>
        </div>
        <p className="text-gray-500 max-w-[650px]">
          At Empuls3, we are experts in back-end to full-stack development,
          creating scalable and innovative solutions like Progressive Web Apps
          and React Native Development. Whether you're a startup or an
          enterprise, we have the expertise to meet your unique technology
          needs.
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <Link
            href="company/about-us"
            className="bg-em-purple text-white py-2 px-4 rounded hover:bg-em-yellow hover:text-em-purple"
          >
            Get to know us more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ImageLeft;
