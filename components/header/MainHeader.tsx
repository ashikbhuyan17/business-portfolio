'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { NavigationMenuDemo } from '@/components/NavigatinMenu';
import styles from '../Navbar.module.css';

export default function MainHeader() {
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
        className="relative w-full  bg-[#001845] "
        // style={{
        //   backgroundImage: " url('/assets/software-developer-at-office.jpg')",
        // }}
      >
        {/* <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(0, 35, 102, 0.8) 50%, rgba(255, 255, 255, 0) 100%), url('/assets/software-developer-at-office.jpg') ",
            backgroundPosition: "center ",
          }}
        ></div> */}
        <div
          className={` ${isSticky ? styles.sticky : styles.stickyFirstShow} `}
        >
          <div className="items-center py-2 px-2 container mx-auto">
            <div className="flex justify-between items-center relative">
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
                    className=" bg-blue-600 hover:bg-blue-700 font-semibold py-2 px-4 rounded-lg"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
