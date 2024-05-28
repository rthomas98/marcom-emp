"use client";

import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const RecentPosts = () => {
  return (
    <section className="relative isolate w-full py-12 md:py-24 lg:py-32">
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
        className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
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
      <div className="container mx-auto grid gap-12 px-4 md:px-6">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-em-pink px-3 py-1 text-sm font-medium text-gray-900 dark:bg-pink dark:text-white">
            Our Recent Posts
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl py-3">
            Stay Informed with Empuls3
          </h2>
          <p className="max-w-[700px] text-gray-500">
            Discover the latest technology trends and industry insights.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <img
              alt="Feature Image"
              className="aspect-video w-full overflow-hidden rounded-lg object-cover"
              src="/imgs/placeholder.svg"
            />
            <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-em-yellow text-em-purple">
              Recent Blog
            </span>
            <h3 className="text-2xl font-bold tracking-tighter">
              Unveiling Our New Design System
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              We're excited to introduce our new design system, which aims to
              provide a consistent and intuitive user experience across all our
              products.
            </p>
            <Link href="#" className="text-primary-600 hover:underline">
              Read More
            </Link>
          </div>
          <div className="space-y-4">
            <img
              alt="Feature Image"
              className="aspect-video w-full overflow-hidden rounded-lg object-cover"
              src="/imgs/placeholder.svg"
            />
            <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-em-yellow text-em-purple">
              Recent Blog
            </span>
            <h3 className="text-2xl font-bold tracking-tighter">
              Introducing Our New Mobile App
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Stay connected on the go with our new mobile app, featuring a
              sleek design and powerful features to help you stay productive
              anytime, anywhere.
            </p>
            <Link href="#" className="text-primary-600 hover:underline">
              Read More
            </Link>
          </div>
          <div className="space-y-4">
            <img
              alt="Feature Image"
              className="aspect-video w-full overflow-hidden rounded-lg object-cover"
              src="/imgs/placeholder.svg"
            />
            <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-em-yellow text-em-purple">
              Recent Blog
            </span>
            <h3 className="text-2xl font-bold tracking-tighter">
              Enhancing User Privacy and Security
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              At our company, we take user privacy and security seriously. Learn
              about the latest updates we've implemented to protect your data.
            </p>
            <Link href="#" className="text-primary-600 hover:underline">
              Read More
            </Link>
          </div>
        </div>
        <div className="flex justify-end">
          <Link
            href="/company/insight"
            className="text-primary-500 hover:text-em-pink flex items-center"
          >
            View All
            <ArrowRightIcon className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
