import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 p-10 bg-[#f9fafe]">
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
          src="/heroImg.avif" // ✅ Referenced relative to the `public/` folder
          alt="People high-fiving"
          width={600} // ✅ Required for static images in Next.js
          height={400}
          className="rounded-2xl shadow-xl"
        />
        <p className="italic text-center mt-2 text-gray-500">
          "We Are Your Sherpa, You Climb Everest"
        </p>
      </div>
    </section>
  );
}
