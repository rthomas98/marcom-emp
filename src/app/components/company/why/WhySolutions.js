"use client";

import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const WhySolutions = () => {
  return (
    <section className="relative isolate px-[5%] py-16 md:py-24 lg:py-28">
       <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="inline-block rounded-lg bg-em-pink px-3 py-1 text-sm font-medium text-white">
            Innovative Solutions for Complex Technology Problems
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl py-5">
            Innovative Solutions for Complex Technology Problems
            </h2>
            <div className="space-y-4 text-lg leading-8 text-gray-600 mb-5">
            <p>
            At Empuls3, we take pride in our innovative approach to tackling complex technology challenges. Our team of experts is dedicated to delivering cutting-edge solutions that exceed client expectations.
          </p>
          </div>
            <ul className="grid grid-cols-1 gap-4 py-2">
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    src="https://relume-assets.s3.amazonaws.com/relume-icon.svg"
                    alt="Relume logo 1"
                    className="size-6"
                  />
                </div>
                <span className="text-base leading-7 text-gray-600">
                <strong>Collaborative Problem-Solving:</strong> Working together to find the best solutions.
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
                <span className="text-base leading-7 text-gray-600">
                <strong>Customized Technology Solutions:</strong> Tailored to meet your unique needs.
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
                <span className="text-lg leading-8 text-gray-600">
                <strong>Exceptional Client Satisfaction:</strong> Ensuring our clients' success and satisfaction.
                </span>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-x-4 md:mt-8">
            
            <Link
              href="/solutions/solutions-overview"
              className="bg-em-yellow text-em-purple py-2 px-4 rounded hover:bg-em-pink hover:text-white"
            >
              Learn More About Our Solutions
            </Link>
            <Link
              href="contact-us"
              className="bg-transparent text-purple py-2 px-4 rounded hover:bg-transparent hover:text-em-pink flex items-center"
            >
              Get in Touch with Our Experts
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
            </div>
          </div>
          <div>
            <img
              src="../imgs/why-solutions-img.png"
              className="w-full object-cover rounded-xl"
              alt="Placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySolutions;
