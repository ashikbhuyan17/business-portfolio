'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { NavigationMenuDemo } from '@/components/NavigatinMenu';
import styles from '../Navbar.module.css';

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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
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
              "linear-gradient(90deg, rgb(240 177 72 / 80%) 50%, rgb(226 190 31 / 0%) 100%), url('/assets/MainImage.png')",
            // "url('/assets/MainImage.png')",
            backgroundPosition: 'center ',
          }}
        ></div>
        <div
          className={` ${isSticky ? styles.sticky : styles.stickyFirstShow} `}
        >
          <div className="items-center py-2 px-2 container mx-auto ">
            <div className="flex justify-between items-center relative">
              <Link href="/">
                <Image
                  src="/assets/icons/01 agri tech.png"
                  width={50}
                  height={50}
                  alt="no image"
                  // color="white"
                />
              </Link>

              <div className="flex gap-x-10 font-medium text-md  uppercase items-center max-lg:hidden">
                <Link href="/">Home</Link>
                <Link href="/">About</Link>
                {/* <FlyoutMenu /> */}
                <NavigationMenuDemo />
                {/* <Link href="/">pricing plan </Link> */}
                <Link href="/contact">contact </Link>
              </div>
              <div className="max-lg:hidden">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center space-x-2 border border-[#F8AE3D] border-dashed rounded-full py-1 px-3">
                    <Image
                      src="/assets/bd-flag.png"
                      width={25}
                      height={25}
                      alt="no image"
                      color="white"
                    />
                    <span>+880 17935033</span>
                  </div>

                  {/* Get a Quote Button */}
                  <Link
                    href="/contact"
                    className=" bg-[#faa72a]  shadow-md hover:bg-[#fbd293] text-white font-semibold py-2 px-4 rounded-full"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-md:p-5  relative h-full flex justify-center items-center">
          <div className="flex justify-center items-center w-full">
            <div className="space-y-4 lg:w-1/2 ">
              <p className="font-medium text-xl tracking-wide ">
                {' '}
                Custom Software Development
              </p>
              <div className="font-bold  text-4xl lg:text-5xl    tracking-wide md:space-y-4">
                <p>More than software: </p>
                <p>
                  Delivering AI-driven solutions <br /> and IoT innovations for
                  your <br />
                  Business success.
                </p>
              </div>
              <p className="text-xl lg:text-2xl ">
                Our team is ready to transform your challenges <br /> into
                innovative technology solutions
              </p>
              <div className="flex gap-x-10 items-center">
                <Link
                  href="/services"
                  className="font-medium bg-[#F8AE3D] hover:bg-[#e49114] duration-100 ease-in-out rounded-md p-3 text-white"
                >
                  GET STARTED
                </Link>
                <p className="uppercase font-medium">see project {'->'}</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="container mx-auto flex justify-center items-center max-lg:hidden lg:mb-[50px]">
        <div className="absolute m-[-30px] lg:w-11/12 xl:w-8/12 bg-white shadow-md h-[120px] rounded-xl">
          <div className="flex justify-between w-full h-full">
            <div className="border-r h-full flex justify-center items-center gap-x-4 p-5">
              <Image
                src="/assets/EfficientDeliveries.svg"
                width={60}
                height={60}
                alt="no image"
                // color="white"
              />
              <p className="text-xl font-semibold">Efficient Deliveries</p>
            </div>
            <div className=" border-r h-full flex justify-center items-center gap-x-4 p-5">
              <Image
                src="/assets/TailoredSolutions.svg"
                width={60}
                height={60}
                alt="no image"
                // color="white"
              />
              <p className="text-xl font-semibold">Tailored Solutions</p>
            </div>
            <div className="border-r h-full flex justify-center items-center gap-x-4 p-5">
              <Image
                src="/assets/SeamlessOperations.svg"
                width={60}
                height={60}
                alt="no image"
                // color="white"
              />
              <p className="text-xl font-semibold">Seamless Operations</p>
            </div>
            <div className=" h-full flex justify-center items-center gap-x-4 p-5">
              <Image
                src="/assets/CustomerClearance.svg"
                width={60}
                height={60}
                alt="no image"
                // color="white"
              />
              <p className="text-xl font-semibold">Customer Clearance</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
