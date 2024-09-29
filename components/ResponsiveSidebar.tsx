'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const ResponsiveSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleDrawer} className="p-2">
        <Image
          src="/assets/respponsiveicon-1.png"
          width={30}
          height={30}
          alt="no image"
        />
      </button>
      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed left-0 top-0 w-8/12 md:w-1/2 bg-[#FCEED7] text-white h-screen transform transition-transform duration-300`}
      >
        <div>
          <div className="flex justify-between p-2 border-b border-dashed border-[#d4a338]">
            <Image
              src="/assets/icons/01 agri tech.png"
              width={40}
              height={40}
              alt="no image"
              // color="white"
            />
            <button
              onClick={toggleDrawer}
              className="p-2 flex justify-center items-center rounded-full bg-white text-black text-xl shadow-md w-[40px] h-[40px]"
            >
              <Image
                src="/assets/cross.png"
                width={30}
                height={30}
                alt="no image"
              />
            </button>
          </div>
          <div className="flex flex-col gap-y-1 text-black font-medium text-md  uppercase items-center ">
            <Link
              href="/"
              className="bg-[#F9DFB4] p-4 duration-100 ease-in-out block w-full"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="bg-[#F9DFB4] p-4 duration-100 ease-in-out block w-full"
            >
              About
            </Link>
            <Link
              href="/Services"
              className="bg-[#F9DFB4] p-4 duration-100 ease-in-out block w-full"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="bg-[#F9DFB4] p-4 duration-100 ease-in-out block w-full"
            >
              contact us
            </Link>
            <Link
              href="/"
              className="bg-[#F9DFB4] p-4 duration-100 ease-in-out block w-full"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveSidebar;
