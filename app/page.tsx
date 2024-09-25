'use client';
import FlyoutMenu from '@/components/NavigatinMenu';
import Image from 'next/image';

import { ThemeComponent } from '@/components/theme/ThemeComponent';
import AboutUs from '@/components/AboutUs';
import { useEffect, useState } from 'react';
import styles from '../components/Navbar.module.css';
import WhoWeAre from '@/components/WhoWeAre';
import Rating from '@/components/Rating';
import Footer from '@/components/Footer';

export default function Home() {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <header
        className="relative w-full h-[60vh] lg:h-[90vh] "
        // style={{
        //   backgroundImage: " url('/assets/software-developer-at-office.jpg')",
        // }}
      >
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(0, 35, 102, 0.8) 50%, rgba(255, 255, 255, 0) 100%), url('/assets/software-developer-at-office.jpg') ",
            backgroundPosition: 'center ',
          }}
        ></div>
        <div className={` ${isSticky ? styles.sticky : ''}`}>
          <div className="items-center py-2 px-2 container mx-auto">
            <div className="flex justify-between items-center text-white relative">
              <Image
                src="/assets/logo.svg"
                width={100}
                height={100}
                alt="no image"
                color="white"
              />

              <div className="flex gap-x-10 font-medium text-md  uppercase items-center max-lg:hidden">
                <p>HomePage</p>
                <p>Features</p>
                <FlyoutMenu />
                <p>How It Works</p>
                <p>Services</p>
                <p>Blog</p>
              </div>
              <div>
                <ThemeComponent />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:pt-[130px] text-white relative">
          <div className="flex justify-center items-center ">
            <div className="space-y-4 lg:w-1/2 ">
              <p className="font-medium text-xl tracking-wide ">
                {' '}
                Custom Software Development
              </p>
              <div className="font-bold  text-4xl lg:text-5xl   text-white tracking-wide md:space-y-4">
                <p>specialize in providing</p>
                <p>custom software</p>
                <p>solutions unique needs</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus <br /> nec ullamcorper mattis, pulvinar dapibus
                leo.
              </p>
              <div className="flex gap-x-10 items-center">
                <button className="bg-[#0466C8] rounded-md p-3 text-white">
                  GET STARTED
                </button>
                <p className="uppercase font-medium">see project {'->'}</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto ">{/* <AboutUs /> */}</main>
      <section className="p-8 bg-gray-100 rounded-lg shadow-md min-h-[500px]">
        <div className="container mx-auto ">
          <WhoWeAre />
        </div>
      </section>

      <section className="p-8 bg-gray-50 rounded-lg shadow-md min-h-[500px]">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <p className="text-lg tracking-wider text-gray-500 uppercase font-semibold">
              What We Do
            </p>
            <h2 className="text-blue-900 text-3xl lg:text-4xl font-bold mb-4">
              Discover Our Best Service Provided From Expert
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Card 1 */}
            <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {/* Icon Placeholder */}
                <span className="text-5xl text-blue-500">💡</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-700 mb-2">
                Software Ideas
              </h4>
              <p className="text-gray-500 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                Learn More &rarr;
              </a>
            </div>

            {/* Service Card 2 */}
            <div className="text-center p-6 border rounded-lg shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {/* Icon Placeholder */}
                <span className="text-5xl text-blue-500">🛡️</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-700 mb-2">
                Software Security
              </h4>
              <p className="text-gray-500 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                Learn More &rarr;
              </a>
            </div>

            {/* Service Card 3 */}
            <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {/* Icon Placeholder */}
                <span className="text-5xl text-blue-500">💳</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-700 mb-2">
                Payment Gateway
              </h4>
              <p className="text-gray-500 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                Learn More &rarr;
              </a>
            </div>

            {/* Service Card 4 */}
            <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {/* Icon Placeholder */}
                <span className="text-5xl text-blue-500">📦</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-700 mb-2">
                Point Of Sales
              </h4>
              <p className="text-gray-500 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                Learn More &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="relative min-h-[700px] w-full">
          {/* Background image and gradient overlay */}
          <div
            className="absolute inset-0 bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(0, 35, 102, 0.8) 50%, rgba(255, 255, 255, 0) 100%), url('/assets/theres-our-solution-.jpg')",
              backgroundPosition: 'center',
            }}
          ></div>

          {/* Content */}
          <div className="container mx-auto ">
            <div className="relative z-10 min-h-[700px] flex items-center px-8 lg:px-16 ">
              <div className="text-white max-w-lg">
                <p className="text-lg tracking-wider uppercase font-semibold mb-4">
                  Bring Your Ideas
                </p>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  We Have Expertise To Build Customization Software From Idea
                </h1>
                <p className="text-lg mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <a
                  href="#"
                  className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md"
                >
                  Get Started &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 ">
            {/* Left Side - Images */}
            <div className="flex flex-col space-y-4 col-span-1">
              <Image
                src="/assets/handsome-young-programmer.jpg"
                alt="Team working on project"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>

            {/* Right Side - Text, Progress Bars, and Button */}
            <div className="space-y-6 col-span-2">
              <p className="text-lg tracking-wider text-gray-500 uppercase font-semibold">
                Expert Skill We Have
              </p>
              <h2 className="text-blue-900 text-3xl lg:text-4xl font-bold">
                We Have The Skills And Expertise To Deliver High-Quality Custom
                Software
              </h2>
              <div className="flex justify-between max-md:flex-wrap max-md:gap-y-6 md:gap-x-6">
                <div>
                  <Image
                    src="/assets/teamwork-of-programmers-at-table-at-meeting.jpg"
                    alt="Team working on project"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div className="space-y-6">
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <p className="text-gray-600">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>

                  {/* Progress Bars */}
                  <div>
                    <div className="flex justify-between text-gray-700 font-semibold mb-2">
                      <span>Desktop Software</span>
                      <span>95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: '95%' }}
                      ></div>
                    </div>

                    <div className="flex justify-between text-gray-700 font-semibold mb-2">
                      <span>Web Based Software</span>
                      <span>99%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: '99%' }}
                      ></div>
                    </div>
                  </div>
                  {/* Button */}
                  <a
                    href="#"
                    className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md"
                  >
                    Get A Quote &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="relative min-h-[600px]  w-full">
          {/* Background image and gradient overlay */}
          <div
            className="bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(0, 35, 102, 0.8) 50%, rgba(255, 255, 255, 0) 100%), url('/assets/theres-our-solution-.jpg')",
              backgroundPosition: 'center',
            }}
          >
            <div className="py-8 px-4  lg:py-16 lg:px-6">
              <div className="text-center mb-8 lg:mb-12 space-y-4">
                <p className="text-lg tracking-widest text-white uppercase font-semibold">
                  Pricing Plan
                </p>
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
                  Choose Our Flexible Pricing Plan For Customizing Software
                </h2>
              </div>
              <div className="space-y-8 grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                {/* Pricing Card */}
                <div className=" flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8 ">
                  <h3 className="mb-4 text-2xl font-semibold">Starter</h3>
                  <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    Best option for personal use &amp; for your next project.
                  </p>
                  <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-5xl font-extrabold">$29</span>
                    <span className="text-gray-500 dark:text-gray-400">
                      /month
                    </span>
                  </div>
                  {/* List */}
                  <ul role="list" className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Individual configuration</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>No setup, or hidden fees</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        Team size:{' '}
                        <span className="font-semibold">1 developer</span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        Premium support:{' '}
                        <span className="font-semibold">6 months</span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        Free updates:{' '}
                        <span className="font-semibold">6 months</span>
                      </span>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className=" bg-blue-600 text-white hover:bg-blue-500 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center   dark:focus:ring-primary-900"
                  >
                    Get started
                  </a>
                </div>
                {/* Pricing Card */}
                <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8 ">
                  <h3 className="mb-4 text-2xl font-semibold">Company</h3>
                  <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    Relevant for multiple users, extended &amp; premium support.
                  </p>
                  <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-5xl font-extrabold">$99</span>
                    <span className="text-gray-500 dark:text-gray-400">
                      /month
                    </span>
                  </div>
                  {/* List */}
                  <ul role="list" className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Individual configuration</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>No setup, or hidden fees</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        Team size:{' '}
                        <span className="font-semibold">10 developers</span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        Premium support:{' '}
                        <span className="font-semibold">24 months</span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        Free updates:{' '}
                        <span className="font-semibold">24 months</span>
                      </span>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="bg-blue-600 text-white hover:bg-blue-500 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center   dark:focus:ring-primary-900"
                  >
                    Get started
                  </a>
                </div>
                {/* Pricing Card */}
                <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8 ">
                  <h3 className="mb-4 text-2xl font-semibold">Enterprise</h3>
                  <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    Best for large scale uses and extended redistribution
                    rights.
                  </p>
                  <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-5xl font-extrabold">$499</span>
                    <span className="text-gray-500 dark:text-gray-400">
                      /month
                    </span>
                  </div>
                  {/* List */}
                  <ul role="list" className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Individual configuration</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>No setup, or hidden fees</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        Team size:{' '}
                        <span className="font-semibold">100+ developers</span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        Premium support:{' '}
                        <span className="font-semibold">36 months</span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        Free updates:{' '}
                        <span className="font-semibold">36 months</span>
                      </span>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="bg-blue-600 text-white hover:bg-blue-500 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center   dark:focus:ring-primary-900"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" bg-gray-100 py-12 relative">
          <div className="container mx-auto px-4 ">
            <p className="text-lg mb-4 tracking-widest text-blue-900 text-center uppercase font-semibold">
              Client Feedback
            </p>
            <h1 className="text-center text-4xl font-bold text-blue-900 mb-12">
              We Provide Our Clients With The <br />
              Most Innovative And Effective Solutions
            </h1>

            {/* Feedback Cards */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
              {/* First Feedback Card */}
              <div className="bg-[#001845] space-y-7 text-white rounded-lg p-6 shadow-lg w-full lg:w-1/2">
                <div className="flex items-center mb-4">
                  <Rating rating={4} />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <div className="flex items-center">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="John Doe"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold">Mr. John Doe</p>
                    <p className="text-sm">Business Owner</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#001845] space-y-7 text-white rounded-lg p-6 shadow-lg w-full lg:w-1/2">
                <div className="flex items-center mb-4">
                  <Rating rating={4} />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <div className="flex items-center">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="John Doe"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold">Mr. John Doe</p>
                    <p className="text-sm">Business Owner</p>
                  </div>
                </div>
              </div>

              {/* Second Feedback Card */}
              <div className="bg-[#001845] space-y-7 text-white rounded-lg p-6 shadow-lg w-full lg:w-1/2">
                <div className="flex items-center mb-4">
                  <Rating rating={5} />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <div className="flex items-center">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="John Doe"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold">Mr. John Doe</p>
                    <p className="text-sm">Business Owner</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center mt-8">
              <span className="h-2 w-6 bg-blue-900 rounded-full inline-block mx-1"></span>
              <span className="h-2 w-2 bg-gray-400 rounded-full inline-block mx-1"></span>
              <span className="h-2 w-2 bg-gray-400 rounded-full inline-block mx-1"></span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
