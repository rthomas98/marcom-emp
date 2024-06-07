"use client";

import React from "react";
import { motion } from "framer-motion";

const Logos = () => {
  const logos = [
    "https://relume-assets.s3.amazonaws.com/webflow-logo.svg",
    "https://relume-assets.s3.amazonaws.com/relume-logo.svg",
    "https://relume-assets.s3.amazonaws.com/webflow-logo.svg",
    "https://relume-assets.s3.amazonaws.com/relume-logo.svg",
    "https://relume-assets.s3.amazonaws.com/webflow-logo.svg",
    "https://relume-assets.s3.amazonaws.com/relume-logo.svg",
    "https://relume-assets.s3.amazonaws.com/webflow-logo.svg",
    "https://relume-assets.s3.amazonaws.com/relume-logo.svg",
  ];

  const scrollVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className="overflow-hidden py-12 md:py-16 lg:py-20">
      <div className="container text-center mx-auto mb-8 w-full px-[5%] md:mb-10 lg:mb-12">
        <div className="inline-block text-center rounded-lg bg-em-pink px-3 py-1 text-sm font-medium text-white">
          Trusted by Industry Leaders
        </div>
        <h2 className="text-3xl mx-auto text-center font-bold tracking-tighter sm:text-5xl my-5">
          Our Valued Clients
        </h2>
        <p className="mb-6 md:mb-8 md:text-md">
          We are proud to have worked with a diverse range of clients across
          various industries, delivering tailored and innovative technology
          solutions. Our commitment to excellence and client satisfaction has
          helped us build strong, lasting relationships. Discover the businesses
          that have trusted us to drive their success.
        </p>
      </div>
      <motion.div
        className="flex items-center pt-[28px] md:pt-0"
        variants={scrollVariants}
        animate="animate"
      >
        <div className="flex shrink-0 items-center">
          {logos.map((logo, index) => (
            <img
              key={index}
              className="mx-[28px] max-h-12 shrink-0 md:mx-10 md:max-h-14"
              src={logo}
              alt={`Logo ${index + 1}`}
            />
          ))}
        </div>
        <div className="flex shrink-0 items-center">
          {logos.map((logo, index) => (
            <img
              key={index}
              className="mx-[28px] max-h-12 shrink-0 md:mx-10 md:max-h-14"
              src={logo}
              alt={`Logo ${index + 9}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Logos;
