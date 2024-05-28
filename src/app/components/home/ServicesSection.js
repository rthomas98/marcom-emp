"use client";

import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const ServicesSection = () => {
  return (
    <section className="relative isolate w-full py-12 md:py-24 lg:py-28">
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
      <div className="container mx-auto grid gap-12 px-4 md:px-6">
        <div className="grid items-inline gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-em-yellow px-3 py-1 text-sm font-medium text-em-purple">
              Specialized Technology Services
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl py-5">
              Creating Scalable Solutions for Startups to Enterprises
            </h2>
          </div>
          <div className="space-y-4 text-gray-500">
            <p>
              At Empuls3, we showcase our expertise in delivering specialized
              technology services. From back-end to full-stack development, we
              have the skills and knowledge to meet the unique demands of
              startups to enterprises. Our team is experienced in creating
              innovative solutions like Progressive Web Apps and React Native
              Development, ensuring scalability and efficiency.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3 md:gap-8 lg:gap-12">
          <div className="space-y-4">
            <img
              alt="Feature 1"
              className="aspect-video w-full overflow-hidden rounded-xl object-cover"
              src="imgs/placeholder.svg"
            />
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Custom Software Development</h3>
              <p>
                We offer custom software development services tailored to your
                specific needs.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <img
              alt="Feature 2"
              className="aspect-video w-full overflow-hidden rounded-xl object-cover"
              src="imgs/placeholder.svg"
            />
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Ecommerce Development</h3>
              <p>
                Our team specializes in creating robust ecommerce solutions for
                businesses.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <img
              alt="Feature 3"
              className="aspect-video w-full overflow-hidden rounded-xl object-cover"
              src="imgs/placeholder.svg"
            />
            <div className="space-y-2">
              <h3 className="text-xl font-bold">MVP Development</h3>
              <p>
                We help startups build minimum viable products to validate their
                ideas.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-start">
          <Link
            href="/services/services-overview"
            className="bg-em-pink text-white py-2 px-4 rounded hover:bg-em-pink"
          >
            View Our Services
          </Link>
          <Link
            href="/frequently-asked-questions"
            className="bg-transparent text-em-purple py-2 px-4 rounded hover:bg-transpartent hover:text-em-pink flex items-center"
          >
            Have more questions?
            <ArrowRightIcon className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
