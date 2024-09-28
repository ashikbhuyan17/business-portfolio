"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { NavigationMenuDemo } from "@/components/NavigatinMenu";
import styles from "../Navbar.module.css";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className="relative w-full h-[90vh] md:h-[80vh] lg:h-[90vh] "
        // style={{
        //   backgroundImage: " url('/assets/software-developer-at-office.jpg')",
        // }}
      >
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(0, 35, 102, 0.8) 50%, rgba(255, 255, 255, 0) 100%), url('/assets/software-developer-at-office.jpg') ",
            backgroundPosition: "center ",
          }}
        ></div>
        <div className={` ${isSticky ? styles.sticky : ""}`}>
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
                <Link href="/">Home</Link>
                <p>About</p>
                {/* <FlyoutMenu /> */}
                <NavigationMenuDemo />
                <p>pricing plan </p>
                <p>contact </p>
              </div>
              <div className="max-lg:hidden">
                {/* <ThemeComponent /> */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-white">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path
                            strokeDasharray="64"
                            strokeDashoffset="64"
                            d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z"
                          >
                            <animate
                              fill="freeze"
                              attributeName="strokeDashoffset"
                              dur="0.6s"
                              values="64;0"
                            />
                            <animateTransform
                              id="lineMdPhoneCallLoop0"
                              fill="freeze"
                              attributeName="transform"
                              begin="0.6s;lineMdPhoneCallLoop0.begin+2.7s"
                              dur="0.5s"
                              type="rotate"
                              values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12"
                            />
                          </path>
                          <path
                            strokeDasharray="4"
                            strokeDashoffset="4"
                            d="M15.76 8.28c-0.5 -0.51 -1.1 -0.93 -1.76 -1.24M15.76 8.28c0.49 0.49 0.9 1.08 1.2 1.72"
                          >
                            <animate
                              fill="freeze"
                              attributeName="strokeDashoffset"
                              begin="lineMdPhoneCallLoop0.begin+0s"
                              dur="2.7s"
                              keyTimes="0;0.111;0.259;0.37;1"
                              values="4;0;0;4;4"
                            />
                          </path>
                          <path
                            strokeDasharray="6"
                            strokeDashoffset="6"
                            d="M18.67 5.35c-1 -1 -2.26 -1.73 -3.67 -2.1M18.67 5.35c0.99 1 1.72 2.25 2.08 3.65"
                          >
                            <animate
                              fill="freeze"
                              attributeName="strokeDashoffset"
                              begin="lineMdPhoneCallLoop0.begin+0.2s"
                              dur="2.7s"
                              keyTimes="0;0.074;0.185;0.333;0.444;1"
                              values="6;6;0;0;6;6"
                            />
                          </path>
                        </g>
                      </svg>
                    </span>
                    <span>+880 17935033</span>
                  </div>

                  {/* Get a Quote Button */}
                  <Link
                    href="/contact"
                    className=" bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-md:p-2 text-white relative h-full flex justify-center items-center">
          <div className="flex justify-center items-center w-full">
            <div className="space-y-4 lg:w-1/2 ">
              <p className="font-medium text-xl tracking-wide ">
                {" "}
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
                <p className="uppercase font-medium">see project {"->"}</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
