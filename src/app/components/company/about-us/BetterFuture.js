"use client";

import React from "react";

const BetterFuture = () => {
  return (
    <section className="w-full py-12">
      <div className="container mx-auto grid  gap-6 px-4 md:px-6">
        <div className="grid items-center gap-4 md:grid-cols-2 lg:pb-5">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-em-pink px-3 py-1 text-sm font-medium text-gray-900 dark:bg-pink dark:text-white mb-3">
              Innovating Business with Tailored Tech Solutions
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Building a Better Future Through Technology
            </h2>
          </div>
          <div className="[&>p:first-child]:mt-0">
            <p>
              At Empuls3, we are driven by our passion for technology and our
              commitment to customer success. Our mission is to deliver
              top-notch technology solutions that empower businesses to thrive
              in the digital age. With a team of experienced professionals and a
              customer-centric approach, we strive to exceed expectations and
              create innovative solutions that drive growth and transformation.
            </p>
          </div>
        </div>
        <img
          alt="Image"
          className="aspect-video w-full overflow-hidden rounded-lg object-cover"
          src="/imgs/placeholder.svg"
        />
      </div>
    </section>
  );
};

export default BetterFuture;
