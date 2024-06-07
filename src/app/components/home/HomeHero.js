"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const marqueeDownVariants = {
  animate: {
    y: ["-50%", "50%"],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      },
    },
  },
};

const marqueeUpVariants = {
  animate: {
    y: ["0%", "-50%"],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      },
    },
  },
};

const HomeHero = () => {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.clientHeight);
    }
  }, []);

  return (
    <section className="w-full relative isolate py-12 md:py-24 lg:py-28 overflow-hidden bg-em-purple">
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
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 md:px-6">
        <div ref={contentRef} className="space-y-4">
          <div className="inline-block rounded-lg bg-em-pink px-3 py-1 text-sm font-medium text-gray-900 dark:bg-pink dark:text-white">
            Innovating Business with Tailored Tech Solutions
          </div>
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl text-white">
            Transforming businesses with innovative technology solutions
          </h1>
          <p className="max-w-[600px] text-white md:text-xl lg:text-base xl:text-xl dark:text-white mb-5">
            At Empuls3, we specialize in delivering scalable and innovative
            technology solutions that meet the unique demands of startups to
            enterprises. Our expertise spans from back-end to full-stack
            development, including Progressive Web Apps and React Native
            Development.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Link
              href="/company/about-us"
              className="bg-em-yellow text-em-purple py-2 px-4 rounded hover:bg-em-pink hover:text-white"
            >
              Learm more about us
            </Link>
            <Link
              href="contact-us"
              className="bg-transparent text-white py-2 px-4 rounded hover:bg-transparent hover:text-em-pink flex items-center"
            >
              Get intouch with us
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
        <div
          className="grid grid-cols-2 gap-4 overflow-hidden"
          style={{ height: contentHeight }}
        >
          <motion.div
            variants={marqueeDownVariants}
            animate="animate"
            className="space-y-4 flex flex-col"
          >
            <img
              alt="Image"
              className="aspect-[3/4] overflow-hidden rounded-lg object-cover"
              src="imgs/hero-img-1.png"
            />
            <img
              alt="Image"
              className="aspect-[3/4] overflow-hidden rounded-lg object-cover"
              src="imgs/placeholder.svg"
            />
            <img
              alt="Image"
              className="aspect-[3/4] overflow-hidden rounded-lg object-cover"
              src="imgs/placeholder.svg"
            />
            <img
              alt="Image"
              className="aspect-[3/4] overflow-hidden rounded-lg object-cover"
              src="imgs/placeholder.svg"
            />
          </motion.div>
          <motion.div
            variants={marqueeUpVariants}
            animate="animate"
            className="space-y-4 flex flex-col"
          >
            <img
              alt="Image"
              className="aspect-[3/4] overflow-hidden rounded-lg object-cover"
              src="imgs/placeholder.svg"
            />
            <img
              alt="Image"
              className="aspect-[3/4] overflow-hidden rounded-lg object-cover"
              src="imgs/placeholder.svg"
            />
            <img
              alt="Image"
              className="aspect-[3/4] overflow-hidden rounded-lg object-cover"
              src="imgs/placeholder.svg"
            />
            <img
              alt="Image"
              className="aspect-[3/4] overflow-hidden rounded-lg object-cover"
              src="imgs/placeholder.svg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
