// pages/index.js
import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className=" h-[600px] bg-white rounded-lg">
      <div className="w-full  p-6 ">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Section */}
          <div className="flex flex-col items-center md:items-start md:w-1/2 mb-6 md:mb-0">
            <div className="relative ">
              <Image
                src="/assets/coding.jpeg"
                alt="Developer Image"
                width={500}
                height={500}
                className="rounded-md"
              />
              <div className="absolute bottom-[-100px] right-[-100px] p-2 ">
                <img
                  src="/assets/bg.jpg"
                  alt="Developer Image"
                  className="rounded-md h-[300px] w-[300px]"
                />
              </div>
              <div className="absolute bottom-0 right-20 p-2 bg-white rounded-md shadow-md">
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                  <span className="ml-2 text-gray-800 font-bold">
                    1.2K+ Project Done
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  Small Until High Projects
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 md:pl-10">
            <h1 className="text-4xl font-bold text-gray-900">
              Welcome To Our Custom Software Development Service For Any Needs
            </h1>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="mt-6">
              <blockquote className="text-xl italic text-gray-800">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo."
              </blockquote>
            </div>
            <div className="flex items-center mt-6 space-x-6">
              <div>
                <p className="text-lg font-bold text-blue-500">1,235+</p>
                <p className="text-sm text-gray-500">Give Best Feedback</p>
              </div>
              <div className="text-gray-600">We Offer Unlimited Revision</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
