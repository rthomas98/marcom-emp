"use client";

import React from "react";

const HomeProcess = () => {
  return (
    <section className="relative isolate container max-w-6xl mx-auto items-center grid md:grid-cols-2 gap-12 py-12">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
        />
      </svg>
      <div className="order-2 md:order-1">
        <img
          alt="Image"
          className="rounded-lg object-cover w-full h-auto"
          src="imgs/em-home-img-10.png"
          style={{
            aspectRatio: "600/400",
          }}
        />
      </div>
      <div className="grid gap-8 order-1 md:order-2">
        <div className="border-l-4 border-transparent hover:border-primary transition-colors px-4 py-2">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl py-5">
            Our Process
          </h2>
          <p className="text-gray-500">
            At Empuls3, we follow a comprehensive process to deliver our
            technology services. It starts with an initial consultation to
            understand your unique requirements and ends with the successful
            deployment of the solution. Our team of experts ensures that every
            step is executed with precision and attention to detail.
          </p>
        </div>
        <div className="border-l-4 border-transparent hover:border-primary transition-colors px-4 py-2">
          <h3 className="text-2xl font-semibold mb-2">
            Consultation &amp; Analysis
          </h3>
          <p className="text-gray-500">
            During the consultation phase, we dive deep into your business goals
            and challenges. Our team conducts a thorough analysis of your
            requirements to develop a tailored solution that meets your specific
            needs. We believe in open communication and collaboration to ensure
            a clear understanding of your project.
          </p>
        </div>
        <div className="border-l-4 border-transparent hover:border-primary transition-colors px-4 py-2">
          <h3 className="text-2xl font-semibold mb-2">
            Development &amp; Testing
          </h3>
          <p className="text-gray-500">
            Once the consultation and analysis phase is complete, our skilled
            developers start working on your project. We follow industry best
            practices and employ cutting-edge technologies to develop robust and
            scalable solutions. Rigorous testing is conducted throughout the
            development process to ensure the highest quality standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeProcess;
