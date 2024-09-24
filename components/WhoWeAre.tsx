// pages/index.js

import Image from "next/image";

export default function WhoWeAre() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        {/* Text Content */}
        <div className="space-y-10 col-span-2">
          <p className="text-lg tracking-wider text-gray-500 uppercase font-semibold">
            Who We Are
          </p>
          <h2 className="text-blue-900 text-3xl lg:text-4xl font-bold mb-4">
            We Specialize In Providing Tailor-Made <br /> Software Solutions
            Custom Needed
          </h2>
          <div className="flex justify-between max-md:flex-wrap max-md:space-y-6 space-x-6 h-full">
            <div className="w-full border-4 border-gray-300 hover:border-blue-400 duration-200 ease-in-out p-5 text-center">
              <h3 className="text-xl font-bold text-gray-700 mb-2">Overview</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-gray-600 mt-2">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <ul className="space-y-4 w-full">
              <li className="border-l-4 border-gray-300 h-fit px-4">
                <h4 className="text-lg font-semibold text-gray-700">
                  15 Years Experience
                </h4>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </li>
              <li className="border-l-4 border-blue-400 h-fit px-4">
                <h4 className="text-lg font-semibold text-gray-700">
                  Best Certification Team
                </h4>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </li>
              <li className="border-l-4 border-gray-300 h-fit px-4">
                <h4 className="text-lg font-semibold text-gray-700">
                  Unlimited Revision
                </h4>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* Image */}
        <div className=" hidden lg:block col-span-1">
          <Image
            src="/assets/software-developer-working-in-office.jpg"
            alt="Team working on project"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
