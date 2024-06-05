"use client";

import React from "react";

const CaseCta = () => {
  return (
    <section class="px-[5%] py-16 md:py-24 lg:py-28">
      <div class="container mx-auto text-center">
        <h2 class="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
          Medium length heading goes here
        </h2>
        <p class="md:text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <div class="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <button class="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-6 py-3">
            Button
          </button>
          <button class="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary bg-background-primary px-6 py-3">
            Button
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseCta;
