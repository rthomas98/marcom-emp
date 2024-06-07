"use client";

import React from "react";

const BetterFuture = () => {
  return (
    <section className="relative isolate w-full py-12">
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
      <div className="container mx-auto grid  gap-6 px-4 md:px-6">
        <div className="grid items-center gap-4 md:grid-cols-2 lg:pb-5">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-em-pink px-3 py-1 text-sm font-medium text-gray-900 dark:bg-pink dark:text-white mb-3">
              Innovating Business with Tailored Tech Solutions
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Building a Better Future Through Technology
            </h2>
          </div>
          <div className="[&>p:first-child]:mt-0">
            <p>
              At Empuls3, we are driven by our passion for technology and our
              commitment to customer success. Our mission is to deliver
              top-notch technology solutions that empower businesses to thrive
              in the digital age. With a team of experienced professionals and a
              customer-centric approach, we strive to exceed expectations and
              create innovative solutions that drive growth and transformation.
            </p>
          </div>
        </div>
        <img
          alt="Image"
          className="aspect-video w-full overflow-hidden rounded-lg object-cover"
          src="/imgs/about-hero-img-3.png"
        />
      </div>
    </section>
  );
};

export default BetterFuture;
