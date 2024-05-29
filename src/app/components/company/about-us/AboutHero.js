"use client";

import React from "react";
import Link from "next/link";

const AboutHero = () => {
  return (
    <section className="container mx-auto grid items-center gap-6 px-4 py-10 md:py-20 lg:py-32 lg:grid-cols-3">
      <div className="space-y-6">
        <h3 className="text-sm font-medium tracking-tight text-primary">
          Design Inspiration
        </h3>
        <h2 className="text-3xl font-extrabold tracking-tight">
          Crafted with Passion
        </h2>
        <p className="text-gray-500">
          Our team of skilled designers and developers pour their creativity
          into every pixel, ensuring a visually stunning and delightful user
          experience. From initial concept to final polish, we meticulously
          craft each interface with passion and attention to detail.
        </p>
        <div className="flex space-x-4">
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          >
            Learn More
          </Link>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img
          alt="Image"
          className="object-cover rounded-lg"
          src="/imgs/placeholder.svg"
          style={{
            aspectRatio: "480/720",
          }}
        />
      </div>
      <div className="flex items-center justify-center">
        <img
          alt="Image"
          className="object-cover rounded-lg"
          src="/imgs/placeholder.svg"
          style={{
            aspectRatio: "480/360",
          }}
        />
      </div>
    </section>
  );
};

export default AboutHero;
