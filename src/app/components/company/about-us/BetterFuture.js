"use client";

import React from "react";

const BetterFuture = () => {
  return (
    <section className="w-full py-12">
      <div className="container mx-auto max-w-5xl grid  gap-6 px-4 md:px-6">
        <div className="grid items-center gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Subtitle
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Your Title Here
            </h2>
          </div>
          <div className="[&>p:first-child]:mt-0">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nisl nec tincidunt lacinia, nisl nisl aliquam nisl, eget
              aliquam nisl nisl eget nisl.
            </p>
            <p>
              Sed euismod, nisl nec tincidunt lacinia, nisl nisl aliquam nisl,
              eget aliquam nisl nisl eget nisl. Sed euismod, nisl nec tincidunt
              lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
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
