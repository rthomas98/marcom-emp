"use client";

import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const HomeWhyUs = () => {
  return (
    <section className="relative isolate w-full py-12 md:py-24 lg:py-28">
      <div className="container mx-auto grid gap-8 items-center px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-8 xl:space-y-10">
          <div className="space-y-4 lg:space-y-6">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-em-yellow px-3 py-1 text-sm font-medium text-em-purple">
                Customized Solutions for Your Success
              </div>
              <h2 className="text-3xl font-bold sm:text-4xl xl:text-5xl py-5">
                Why Choose Empuls3 for Your Technology Needs
              </h2>
              <p className="max-w-[900px] text-gray-500 ">
                At Empuls3, we specialize in delivering scalable and innovative
                solutions, from back-end to full-stack development. Whether
                you're a startup or an enterprise, our expertise in technologies
                like Progressive Web Apps and React Native Development ensures
                that we meet your unique demands. With our customized approach
                and dedicated support, we are committed to helping businesses
                thrive and succeed.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Expertise</h3>
              <p className="text-gray-500">
                Our team of experienced developers and engineers are experts in
                their respective fields.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Customization</h3>
              <p className="text-gray-500">
                We tailor our solutions to accommodate the specific requirements
                of your business.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              href="/solutions/solutions-overview"
              className="bg-em-purple text-white py-2 px-4 rounded hover:bg-em-pink"
            >
              Learn more about us
            </Link>
            <Link
              href="/contact-us"
              className="bg-transparent text-em-purple py-2 px-4 rounded hover:bg-transparent hover:text-em-pink flex items-center"
            >
              Ready to get started?
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            alt="Feature Image"
            className="aspect-square w-full overflow-hidden rounded-xl object-cover"
            src="imgs/em-home-img-9.png"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeWhyUs;
