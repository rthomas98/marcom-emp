"use client";

import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const HomeCta = () => {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40">
      <div className="absolute inset-0 bg-gray-900/70" />
      <div className="relative container mx-auto px-4 md:px-6 text-center space-y-6">
        <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          Transform Your Business with Empuls3
        </h2>
        <p className="text-gray-300 md:text-xl lg:text-lg">
          We provide scalable, innovative solutions for startups to enterprises.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="company/about-us"
            className="bg-em-purple text-white py-2 px-4 rounded hover:bg-em-yellow hover:text-em-purple"
          >
            Ready to Get Started?
          </Link>
          <Link
            href="/freqently-asked-questions"
            className="bg-transparent text-white py-2 px-4 rounded hover:bg-transparent hover:text-em-pink flex items-center"
          >
            Have more questions?
            <ArrowRightIcon className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeCta;
