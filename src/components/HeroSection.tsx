import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="bg-[#f9fafe] px-14">
      {/* Hero Top Section */}
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center gap-10 p-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">
            People Build <span className="text-blue-600">Businesses</span>
          </h1>
          <h2 className="text-xl font-semibold mt-2">People Run Businesses</h2>
          <p className="text-blue-600 mt-1 font-medium">
            Talented People Make Businesses Profitable
          </p>
          <p className="mt-4 text-gray-700">
            Since 2007, LogJob has become synonymous with logistics & supply chain companies...
          </p>
          <div className="flex gap-4 mt-6">
            <button className="bg-blue-600 text-white px-5 py-2 rounded">
              Find Talent
            </button>
            <button className="border border-blue-600 text-blue-600 px-5 py-2 rounded">
              Learn More
            </button>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/heroImg.avif"
            alt="People high-fiving"
            width={600}
            height={400}
            className="rounded-2xl shadow-xl"
          />
          <p className="italic text-center mt-2 text-gray-500">
            "We Are Your Sherpa, You Climb Everest"
          </p>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center px-10 pb-16">
        <Image
          src="/teamImg.png"
          alt="work"
          width={500}
          height={350}
          className="rounded-lg"
        />
        <div>
          <p className="text-sm font-semibold text-gray-600 uppercase">Who We Are</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-1">
            Full-Service Plumbing Company Solving Every Kind Of Plumbing Problem
          </h2>
          <p className="mt-4 text-gray-600">
            Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris.
            Sinistra possedit litora ut nabataeaque. Setucant coeperynt parens perveniunt
            animal! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded flex items-center gap-2">
            Request Callback <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="px-10 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
          How can we help you?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition w-full">
            <div className="h-52 w-full relative">
              <Image
                src="/transportation.png"
                alt="transportation"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-lg">Transportation</h3>
              <p className="text-sm text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition w-full">
            <div className="h-52 w-full relative">
              <Image
                src="/air.png"
                alt="Air/Ocean Freight"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-lg">Air/Ocean Freight</h3>
              <p className="text-sm text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition w-full">
            <div className="h-52 w-full relative">
              <Image
                src="/wearhousing.png"
                alt="Warehousing"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-lg">Warehousing</h3>
              <p className="text-sm text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
              </p>
            </div>
          </div>
        </div>

        {/* View All Services Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-blue-600 text-white px-6 py-2 rounded flex items-center gap-2">
            View All Services <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
