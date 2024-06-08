"use client";

import Link from "next/link";
import React from "react";

const PartnerHero = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white">
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
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="hidden sm:mt-32 sm:flex lg:mt-16">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 bg-em-pink text-white  hover:ring-gray-900/20">
                Collaborate with us for innovative solutions and shared success.
                <Link
                  href="#"
                  className="whitespace-nowrap font-semibold text-em-yellow hover:text-em-white"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  Lets Connect <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>

            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl text-em-purple py-5">
              Unlocking Potential Through Collaborative Partnerships
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover the power of collaboration and mutual growth through our
              partnership program. By joining forces, we can bring enhanced
              value to our services and create innovative solutions that drive
              success.
            </p>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src="../imgs/partner-hero.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PartnerHero;
