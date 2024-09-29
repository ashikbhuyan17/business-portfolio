import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#F3C26F] text-gray-700 py-12">
      <div className="container mx-auto grid grid-cols-1 max-sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {/* Brand Information */}
        <div>
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <span className="mr-2"> {/* Icon Placeholder */} </span>
            Cetech
          </h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-gray-500">
                Homepage
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-500">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-gray-500">
                Our Services
              </a>
            </li>
            <li>
              <a href="/project" className="hover:text-gray-500">
                Projects Work
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-500">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Customize Software */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Customize Software</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-500">
                Payment Gateway
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Point Of Sales
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Custom Warehouse
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                MLM Software
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                SAAS Software
              </a>
            </li>
          </ul>
        </div>

        {/* Office Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Head Office Address</h3>
          <p className="text-gray-500 mb-4">
            Lumbung Hidup St 425 East Java Madiun City
            <br />
            Block ABC 123
          </p>
          <h4 className="text-lg font-semibold">Days Open</h4>
          <p className="text-gray-500">Monday - Friday 09 AM - 6 PM</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t-2 border-gray-400 border-dashed mt-8 pt-6">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          <p className="font-semibold text-center lg:text-left">
            Copyrights@2024 by AestheticBD. All Rights Reserved
          </p>
          <div className="flex sm:justify-center space-x-6">
            <a
              href="#"
              target="_blank"
              className="text-white hover:text-gray-500 p-1 rounded-full"
            >
              <Image
                src="/assets/icons/facebook.png"
                width={35}
                height={35}
                alt="no image"
              />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-white hover:text-gray-500 p-1 rounded-full"
            >
              <Image
                src="/assets/icons/linkdin.png"
                width={35}
                height={35}
                alt="no image"
              />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-white hover:text-gray-500 p-1 rounded-full"
            >
              <Image
                src="/assets/icons/instagram.png"
                width={35}
                height={35}
                alt="no image"
              />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-white hover:text-gray-500 p-1 rounded-full"
            >
              <Image
                src="/assets/icons/twitter.png"
                width={35}
                height={35}
                alt="no image"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
