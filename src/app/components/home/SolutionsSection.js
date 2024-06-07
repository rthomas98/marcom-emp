"use client";

import React, { Component } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const SolutionsSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-28">
      <div className="container mx-auto grid items-center gap-8 px-4 md:px-6 lg:grid-cols-3">
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-em-pink px-3 py-1 text-sm font-medium text-gray-900 dark:bg-pink dark:text-white">
              Tailored Technology for Your Unique Business Challenges
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl py-5">
              Turning Vision into Reality with Custom Software Solutions
            </h2>
            <p className="max-w-[700px] text-gray-500">
              We offer customized software development solutions to meet your
              specific business needs. Our team of experts will work closely
              with you to understand your requirements and deliver innovative
              and scalable solutions.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              href="/solutions/solutions-overview"
              className="bg-em-purple text-white py-2 px-4 rounded hover:bg-em-pink"
            >
              View Our Solutions
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
        <div className="grid gap-8">
          <div className="gap-4">
            <img
              alt="Image"
              className="w-full h-auto rounded-lg overflow-hidden object-cover mb-4"
              src="imgs/em-home-img-2.png"
              style={{ aspectRatio: "600/400" }}
            />
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">
                Custom Software Development Services
              </h3>
              <p className="text-gray-500">
                We specialize in creating custom software solutions.
              </p>
            </div>
            <div className="mt-6 flex gap-x-4 md:mt-8">
              <Link
                href="/company/about-us"
                className="bg-em-yellow text-em-purple py-2 px-4 rounded hover:bg-em-pink hover:text-white"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="gap-4">
            <img
              alt="Image"
              className="w-full h-auto rounded-lg overflow-hidden object-cover mb-4"
              src="imgs/em-home-img-4.png"
              style={{ aspectRatio: "600/400" }}
            />
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">
                Ecommerce Development Solutions
              </h3>
              <p className="text-gray-500">
                We provide end-to-end ecommerce development services.
              </p>
            </div>
            <div className="mt-6 flex gap-x-4 md:mt-8">
              <Link
                href="/company/about-us"
                className="bg-em-yellow text-em-purple py-2 px-4 rounded hover:bg-em-pink hover:text-white"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="grid gap-8">
          <div className="gap-4">
            <img
              alt="Image"
              className="w-full h-auto rounded-lg overflow-hidden object-cover mb-4"
              src="imgs/em-home-img-3.png"
              style={{ aspectRatio: "600/400" }}
            />
            <div className="space-y-2">
              <h3 className="text-xl font-semibold ">
                Progressive Web App Development Services
              </h3>
              <p className="text-gray-500">
                We build scalable and engaging progressive web applications.
              </p>
            </div>
            <div className="mt-6 flex gap-x-4 md:mt-8">
              <Link
                href="/company/about-us"
                className="bg-em-yellow text-em-purple py-2 px-4 rounded hover:bg-em-pink hover:text-white"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="gap-4">
            <img
              alt="Image"
              className="w-full h-auto rounded-lg overflow-hidden object-cover mb-4"
              src="imgs/em-home-img-5.png"
              style={{ aspectRatio: "600/400" }}
            />
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">
                React Native Development Services
              </h3>
              <p className="text-gray-500">
                We develop cross-platform mobile apps using React Native.
              </p>
            </div>
            <div className="mt-6 flex gap-x-4 md:mt-8">
              <Link
                href="/company/about-us"
                className="bg-em-yellow text-em-purple py-2 px-4 rounded hover:bg-em-pink hover:text-white"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
