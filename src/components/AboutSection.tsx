import Image from "next/image";

export default function AboutSection() {
  return (
    <main className="p-6 bg-white min-h-screen flex justify-center items-center">
      <section className="max-w-6xl w-full bg-[#f9fafe] rounded-3xl shadow-lg p-10 grid md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div>
          <p className="text-blue-700 font-semibold mb-2">How It Started</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Our Dream is <br />
            Global Learning <br />
            Transformation
          </h1>
          <p className="text-gray-600">
            Since 2007, Logjob Has Become Synonymous For Logistics & Supply Chain Companies For Hiring High-caliber Talent.
Logjob Is The Go-to-provider Of Talent For - Courier, Express Cargo, Transport, Freight Forwarding, Contract Logistics, Shipping Cos.
We Have Been Successfully Recommending & Advising Selection Of Personnel For Large Indian & Global Logistics Organizations.
Resources Placed By Us Over Past Decade Has Proved To Be An Asset For Their Employers & Its Business To Grow Exponentially.
Our Team Offers Domain Expertise & Industry Connect, Adding Immense Value To Your Business & Its Hiring Process, At Every Step
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6">
          {/* Team Image */}
          <div className="w-full h-[250px] md:h-[300px] relative rounded-2xl overflow-hidden">
            <Image
              src="/team.png" // ✅ Make sure this image exists in your /public folder
              alt="Team Working"
              fill
              className="object-cover"
            />
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 text-center shadow">
              <h2 className="text-2xl font-bold">18</h2>
              <p className="text-gray-500 text-sm">Years Experience</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 text-center shadow">
              <h2 className="text-2xl font-bold">830+</h2>
              <p className="text-gray-500 text-sm">Positive Reviews</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow">
              <h2 className="text-2xl font-bold">100K</h2>
              <p className="text-gray-500 text-sm">Trusted Students</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
