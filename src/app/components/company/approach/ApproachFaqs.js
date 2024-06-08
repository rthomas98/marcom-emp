"use client";

import Link from "next/link";
import React from "react";

const faqs = [
  {
    question: "What is the first step in your project approach?",
    answer:
      "The first step in our project approach is the initial consultation and discovery phase, where we thoroughly understand your business goals and specific project requirements.",
  },
  {
    question: "How do you ensure that the solutions are tailored to our needs?",
    answer:
      "We conduct a detailed analysis during the discovery phase, gathering insights and data to inform our strategy. This allows us to develop customized solutions that align with your unique needs and objectives.",
  },
  {
    question: "What methodologies do you use during the development phase?",
    answer:
      "We employ industry best practices and agile methodologies during the development phase, ensuring flexibility, efficiency, and the ability to adapt to any changes or new requirements that may arise.",
  },
  {
    question: "How do you maintain quality throughout the project?",
    answer:
      "Quality is maintained through rigorous testing and quality assurance processes at every stage of development. Our team ensures that all deliverables meet the highest standards of performance and reliability.",
  },
  {
    question:
      "What kind of support do you offer after the project is completed?",
    answer:
      "After project completion, we provide ongoing maintenance and support to ensure the continued success and optimization of your solution. Our team is dedicated to resolving any issues and making necessary updates to keep your project running smoothly.",
  },
];

const ApproachFaqs = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white">
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
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <div className="inline-block rounded-lg bg-em-yellow px-3 py-1 text-sm font-medium text-em-purple">
              Answers to Your Most Common Questions
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl py-5">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Can’t find the answer you’re looking for? Reach out to our{" "}
              <Link
                href="/contact-us"
                className="font-semibold text-em-pink hover:text-em-purple"
              >
                customer support team.
              </Link>
            </p>
          </div>
          <div className="mt-10 lg:col-span-6 lg:mt-0">
            <dl className="space-y-10">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApproachFaqs;
