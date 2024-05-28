"use client";

import React, { Component } from "react";
import Link from "next/link";
import {
  RocketLaunchIcon,
  PuzzlePieceIcon,
  ShieldCheckIcon,
  HandThumbUpIcon,
  ArrowRightIcon,
  CodeBracketIcon,
  ShoppingCartIcon,
  RectangleGroupIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

export class SolutionsSection extends Component {
  render() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-28">
        <div className="container mx-auto grid items-center gap-8 px-4 md:px-6 lg:grid-cols-3">
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-em-pink px-3 py-1 text-sm font-medium text-gray-900 dark:bg-pink dark:text-white">
                Empowering
              </div>
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl py-5">
                Transforming Ideas into Powerful Solutions for Businesses
              </h2>
              <p className="max-w-[700px] text-gray-500">
                We offer customized software development solutions to meet your
                specific business needs. Our team of experts will work closely
                with you to understand your requirements and deliver innovative
                and scalable solutions.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/solutions/solutions-overview"
                className="bg-em-purple text-white py-2 px-4 rounded hover:bg-em-pink"
              >
                View Our Solutions
              </Link>
              <Link
                href="/frequently-asked-questions"
                className="bg-transparent text-em-purple py-2 px-4 rounded hover:bg-transparent hover:text-em-pink flex items-center"
              >
                Have more questions?
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
          <div className="grid gap-8">
            <div className="gap-4">
              <CodeBracketIcon className="h-8 w-8 text-primary mb-4" />
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">
                  Custom Software Development Services
                </h3>
                <p className="text-gray-500">
                  We specialize in creating custom software solutions.
                </p>
              </div>
            </div>
            <div className="gap-4">
              <ShoppingCartIcon className="h-8 w-8 text-primary mb-4" />
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">
                  Ecommerce Development Solutions
                </h3>
                <p className="text-gray-500">
                  We provide end-to-end ecommerce development services.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-8">
            <div className="gap-4">
              <RectangleGroupIcon className="h-8 w-8 text-primary mb-4" />
              <div className="space-y-2">
                <h3 className="text-xl font-semibold ">
                  Progressive Web App Development Services
                </h3>
                <p className="text-gray-500">
                  We build scalable and engaging progressive web applications.
                </p>
              </div>
            </div>
            <div className="gap-4">
              <DevicePhoneMobileIcon className="h-8 w-8 text-primary mb-4" />
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">
                  React Native Development Services
                </h3>
                <p className="text-gray-500">
                  We develop cross-platform mobile apps using React Native.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SolutionsSection;
