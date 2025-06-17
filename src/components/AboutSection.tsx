"use client";

import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="w-full text-gray-800">
      {/* Top Banner */}
      <div className="bg-blue-600 text-white px-6 py-12 text-center">
        <h2 className="text-4xl font-bold mb-2">About Us</h2>
        <p className="max-w-2xl mx-auto text-2xl font-semibold ">
         " Being An Insider, We Do It The Best!"
        </p>
      </div>

      {/* Two Column Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12 items-center">
        <div>
          <Image
            src="/team.png" 
            alt="teamImg"
            width={600}
            height={400}
            className="rounded shadow-lg w-full"
          />
        </div>
        <div className="bg-blue-100 p-6 rounded shadow">
          <h3 className="text-xl font-bold text-blue-700 mb-2">
           The Go-To-Provider For Logistics & Supply Chain Talent
          </h3>
          <p className="text-gray-700">
            Since 2007, Logjob Has Become Synonymous For Logistics & Supply Chain Companies For Hiring High-caliber Talent.
Logjob Is The Go-to-provider Of Talent For - Courier, Express Cargo, Transport, Freight Forwarding, Contract Logistics, Shipping Cos.
We Have Been Successfully Recommending & Advising Selection Of Personnel For Large Indian & Global Logistics Organizations.
          </p>
        </div>
      </div>

      {/* Mission & Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 pb-12">
        <div>
          <h4 className="text-xl font-semibold mb-2">Our Mission</h4>
          <p className="text-gray-700">
            Resources Placed By Us Over Past Decade Has Proved To Be An Asset For Their Employers & Its Business To Grow Exponentially.
Our Team Offers Domain Expertise & Industry Connect, Adding Immense Value To Your Business & Its Hiring Process, At Every Step. We Have Been Partnering Talent-acquisition Process Across Complete Domain Of Express & Logistics Industry In India.
Being Industry Specialist, We Are Well-connected, Known & Respected In The Industry. We Are Quite Networked & Are Able To Search Passive Candidates From Target Companies, Too.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2">Core Values</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Fuerat aestu carentem habentia spectent</li>
            <li>Mutastis locavit liberioris. Sinistra possedit</li>
            <li>Sinistra possedit litora ut nabataeaque</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
