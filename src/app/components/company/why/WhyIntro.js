"use client";

import React from "react";

const WhyIntro = () => {
  return (
    <section class="px-[5%] py-16 md:py-24 lg:py-28">
      <div class="container mx-auto grid grid-cols-1 items-start justify-between gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
        <h2 class="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
          Long heading is what you see here in this feature section
        </h2>
        <p class="md:text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
          quis viverra ornare, eros dolor interdum nulla.
        </p>
      </div>
    </section>
  );
};

export default WhyIntro;
