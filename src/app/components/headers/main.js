"use client";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  LightBulbIcon,
  HandRaisedIcon,
  HandThumbUpIcon,
  UserCircleIcon,
  ArrowRightCircleIcon,
  QuestionMarkCircleIcon,
  ServerStackIcon,
  ComputerDesktopIcon,
  RectangleStackIcon,
  ShoppingCartIcon,
  WindowIcon,
  CircleStackIcon,
  Square2StackIcon,
  RocketLaunchIcon,
  DevicePhoneMobileIcon,
  CodeBracketSquareIcon,
  PaintBrushIcon,
  BellIcon,
  ChartBarIcon,
  CogIcon,
  ChatBubbleBottomCenterIcon,
  WrenchIcon,
  CloudIcon,
  AdjustmentsHorizontalIcon,
  UsersIcon,
  CodeBracketIcon,
  BriefcaseIcon,
  DocumentCheckIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  HeartIcon,
  BuildingLibraryIcon,
  MoonIcon,
  TruckIcon,
  AcademicCapIcon,
  ChartBarSquareIcon,
  IdentificationIcon,
  HomeIcon,
  ChartPieIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, RectangleGroupIcon } from "@heroicons/react/20/solid";

const about = [
  {
    name: "About Us",
    description: "Learn About Our Company",
    href: "/company/about-us",
    icon: UserCircleIcon,
  },
  {
    name: "Approach",
    description: "Our Unique Methodology",
    href: "/company/approach",
    icon: LightBulbIcon,
  },
  {
    name: "Partnership",
    description: "Collaborative Efforts",
    href: "/company/partnership",
    icon: HandRaisedIcon,
  },
  {
    name: "Why Us",
    description: "Why Choose Empuls3?",
    href: "/company/why-us",
    icon: HandThumbUpIcon,
  },
  {
    name: "Our Work",
    description: "Our Project Portfolio",
    href: "/company/our-work",
    icon: BriefcaseIcon,
  },
  {
    name: "Case Studies",
    description: "Detailed Client Successes",
    href: "/company/case-studies",
    icon: DocumentCheckIcon,
  },
  {
    name: "Insight",
    description: "Industry Insights and Trends",
    href: "/company/insight",
    icon: DocumentCheckIcon,
  },
];

const solutions = [
  {
    name: "Solutions Overview",
    description: "Comprehensive Tech Solutions",
    href: "/solutions/solutions-overview",
    icon: ChartPieIcon,
  },
  {
    name: "Back-End Development",
    description: "Robust Server-Side Solutions",
    href: "solutions/back-end-development",
    icon: ServerStackIcon,
  },
  {
    name: "Custom Software Development",
    description: "Tailored Software Solutions",
    href: "/solutions/custom-software-development",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Custom WordPress Development",
    description: "Unique WordPress Customizations",
    href: "/solutions/custom-wordpress-development",
    icon: RectangleStackIcon,
  },
  {
    name: "E-commerce Development",
    description: "Online Store Development",
    href: "/solutions/e-commerce-development",
    icon: ShoppingCartIcon,
  },
  {
    name: "Front-End Development",
    description: "Engaging User Interfaces",
    href: "/solutions/front-end-development",
    icon: WindowIcon,
  },
  {
    name: "Full-Stack Development",
    description: "End-to-End Tech Solutions",
    href: "/solutions/full-stack-development",
    icon: CircleStackIcon,
  },
  {
    name: "HubSpot Development",
    description: "HubSpot CRM Integrations",
    href: "/solutions/hubspot-development",
    icon: Square2StackIcon,
  },
  {
    name: "MVP Development",
    description: "Launch Startups Efficiently",
    href: "/solutions/mvp-development",
    icon: RocketLaunchIcon,
  },
  {
    name: "Progressive Web Applications",
    description: "Cutting-Edge Web Apps",
    href: "/solutions/progressive-web-applications",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "React Native Development",
    description: "Cross-Platform Mobile Apps",
    href: "/solutions/react-native-development",
    icon: CodeBracketSquareIcon,
  },
  {
    name: "Software Development and Design",
    description: "Elegant & Functional Software",
    href: "/solutions/software-development-and-design",
    icon: PaintBrushIcon,
  },
];

const services = [
  {
    name: "Services Overview",
    description: "All Our Servicess",
    href: "/services/services-overview",
    icon: BellIcon,
  },
  {
    name: "Application Services",
    description: "Comprehensive App Solutions",
    href: "/services/application-services",
    icon: ChartBarIcon,
  },
  {
    name: "DevOps",
    description: "Integrated DevOps Services/;.",
    href: "/services/devops",
    icon: CogIcon,
  },
  {
    name: "IT Consulting",
    description: "Expert IT Advice",
    href: "/services/it-consulting",
    icon: ChatBubbleBottomCenterIcon,
  },
  {
    name: "Maintenance and Support",
    description: "Ongoing Tech Support",
    href: "/services/maintenance-and-support",
    icon: WrenchIcon,
  },
  {
    name: "Managed IT Services",
    description: "Complete IT Management",
    href: "/services/managed-it-services",
    icon: CloudIcon,
  },
  {
    name: "Quality Assurance and Testing",
    description: "Ensuring Software Quality",
    href: "/services/quality-assurance-and-testing",
    icon: AdjustmentsHorizontalIcon,
  },
  {
    name: "Smart Teams",
    description: "Dedicated Tech Teams",
    href: "/services/smart-teams",
    icon: UsersIcon,
  },
  {
    name: "Software Engineering",
    description: "Advanced Software Solutions",
    href: "/services/software-engineering",
    icon: CodeBracketIcon,
  },
];

const industries = [
  {
    name: "Industries Overview",
    description: "Sectors We Serve",
    href: "/industries/industries-overview",
    icon: BuildingOfficeIcon,
  },
  {
    name: "Oil and Gas",
    description: "Tech Solutions for Oil and Gas",
    href: "/industries/oil-and-gas",
    icon: GlobeAltIcon,
  },
  {
    name: "Healthcare",
    description: "Health Tech Solutions;.",
    href: "/industries/healthcare",
    icon: HeartIcon,
  },
  {
    name: "Protech Software Development",
    description: "Property Tech Innovations",
    href: "/industries/proptech-software-development",
    icon: BuildingLibraryIcon,
  },
  {
    name: "Technology Startups",
    description: "Startup Tech Support",
    href: "/industries/technology-startups",
    icon: MoonIcon,
  },
  {
    name: "Transportation and Logistics",
    description: " Logistics Tech Solutions",
    href: "/industries/transportation-and-logistics",
    icon: TruckIcon,
  },
  {
    name: "Education",
    description: "EdTech Innovations",
    href: "/industries/education",
    icon: AcademicCapIcon,
  },
  {
    name: "Manufacturing",
    description: "Smart Manufacturing Tech",
    href: "/industries/manufacturing",
    icon: ChartBarSquareIcon,
  },
  {
    name: "Energy",
    description: "Energy Tech Solutions",
    href: "/industries/energy",
    icon: ChartBarSquareIcon,
  },
  {
    name: "Government",
    description: "GovTech Innovations",
    href: "/industries/government",
    icon: IdentificationIcon,
  },
  {
    name: "Real Estate",
    description: "Real Estate Tech Innovations",
    href: "/industries/real-estate",
    icon: HomeIcon,
  },
];

const callsToAction = [
  {
    name: "Ready to get started?",
    href: "/contact-us",
    icon: ArrowRightCircleIcon,
  },
  {
    name: "Have More Questions",
    href: "/frequently-asked-questions",
    icon: QuestionMarkCircleIcon,
  },
  {
    name: "View all solutions",
    href: "/solutions/solutions-overview",
    icon: RectangleGroupIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MainHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative isolate z-10 bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Empuls3</span>
            <img
              className="h-auto w-3/5"
              src="/imgs/emp-logo.svg"
              alt="Empuls3 Logo"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
            Home
          </a>

          <Popover>
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Company
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <Popover.Panel className="absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5">
                <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                  {about.map((item) => (
                    <div
                      key={item.name}
                      className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-em-purple group-hover:bg-em-pink">
                        <item.icon
                          className="h-6 w-6 text-em-yellow group-hover:text-white"
                          aria-hidden="true"
                        />
                      </div>
                      <a
                        href={item.href}
                        className="mt-6 block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-em-pink">
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                      {callsToAction.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-white hover:bg-dark-em-pink"
                        >
                          <item.icon
                            className="h-5 w-5 flex-none text-em-yellow"
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              <span>Solutions</span>
              <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 lg:max-w-3xl">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-2">
                    {solutions.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                      >
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-em-purple group-hover:bg-em-pink">
                          <item.icon
                            className="h-6 w-6 text-em-yellow group-hover:text-white"
                            aria-hidden="true"
                          />
                        </div>
                        <div>
                          <a
                            href={item.href}
                            className="font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-em-pink px-8 py-6">
                    <div className="flex items-center gap-x-3">
                      <h3 className="text-sm font-semibold leading-6 text-white">
                        Enterprise
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-white">
                      Empower your entire team with even more advanced tools.
                    </p>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              <span>Services</span>
              <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 lg:max-w-3xl">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-2">
                    {services.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                      >
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-em-purple group-hover:bg-em-pink">
                          <item.icon
                            className="h-6 w-6 text-em-yellow group-hover:text-white"
                            aria-hidden="true"
                          />
                        </div>
                        <div>
                          <a
                            href={item.href}
                            className="font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-em-pink px-8 py-6">
                    <div className="flex items-center gap-x-3">
                      <h3 className="text-sm font-semibold leading-6 text-white">
                        Our Services
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-white">
                      Explore our expert services, from application development
                      to IT consulting, designed to drive your success.
                    </p>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              <span>Industries</span>
              <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 lg:max-w-3xl">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-2">
                    {industries.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                      >
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-em-purple group-hover:bg-em-pink">
                          <item.icon
                            className="h-6 w-6 text-em-yellow group-hover:text-white"
                            aria-hidden="true"
                          />
                        </div>
                        <div>
                          <a
                            href={item.href}
                            className="font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-em-pink px-8 py-6">
                    <div className="flex items-center gap-x-3">
                      <h3 className="text-sm font-semibold leading-6 text-white">
                        Our Industries
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-white">
                      Discover the sectors we serve with specialized technology
                      solutions tailored to each industry's unique needs.
                    </p>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/contact-us"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Contact Us <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="/imgs/mobile-logo.svg" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Company
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...about, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Solutions
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...solutions, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Services
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...services, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Industries
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...industries, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="py-6">
                <a
                  href="/contact-us"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
