// pages/index.js
import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className=" md:min-h-[700px]  rounded-lg md:mt-10">
      <div className="w-full  p-6 ">
        <div className="flex flex-col lg:flex-row items-center justify-evenly gap-x-10">
          {/* Left Section */}
          <div className="flex flex-col  items-center md:items-start w-full lg:w-1/2 mb-6 md:mb-20 max-md:hidden">
            <div className="relative max-md:w-[400px] max-md:p-3">
              <Image
                src="/assets/about-1.png"
                alt="Developer Image"
                width={400}
                height={400}
                className="rounded-md"
              />
              <div className="absolute bottom-[-100px] right-[-100px] p-2 bg-white">
                {/* <img
                  src="/assets/male-programmer-working.jpg"
                  alt="Developer Image"
                  className="rounded-md h-[500px] w-[300px]"
                /> */}
                <Image
                  src="/assets/about-2.png"
                  alt="Developer Image"
                  width={250}
                  height={250}
                  className="rounded-md"
                />
              </div>
              <div className="absolute bottom-[-30px] right-20 p-4 bg-white rounded-md shadow-md">
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
          <div className="lg:w-1/2  lg:mt-[100px]">
            <p className="tracking-wide text-lg font-semibold mb-3">About Us</p>
            <h1 className="text-2xl font-bold text-gray-900 lg:mb-8">
              {'" Beyond Innovation , Into the Extraordinary "'}
            </h1>

            <div className="mt-6 flex space-x-4">
              <p className="border-r-4  border-[#F8AE3D] rounded-md"></p>
              <blockquote className="text-xl italic text-gray-800 leading-relaxed">
                At AesthiTech, we are a dynamic and forward-thinking technology
                startup based in Dhaka, Bangladesh. Founded by a team of
                passionate and highly skilled professionals, our collective
                experience spans a wide range of industries, including software
                development, IoT automation, AI, and UI/UX design. Each member
                of our team brings a wealth of expertise and a proven track
                record of delivering successful projects, giving us the ability
                to tackle even the most complex challenges.
              </blockquote>
            </div>

            {/* <div className=" mt-6 space-x-6">
              <div className="text-gray-600 flex items-center space-x-3">
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      color="#3B82F6"
                    >
                      <path d="m18.952 8.607l2.51-.153C19.662 3.704 14.497 1 9.46 2.344C4.096 3.778.91 9.262 2.343 14.595s6.945 8.494 12.31 7.061A10.04 10.04 0 0 0 22 13.485" />
                      <path d="M12 8v4l2 2" />
                    </g>
                  </svg>
                </p>
                <p className="text-xl font-semibold">
                  {' '}
                  We Offer Unlimited Revision
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-3xl font-bold text-blue-500">1,235+</p>
                <p className=" text-gray-500 font-medium">Give Best Feedback</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
