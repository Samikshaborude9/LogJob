import Image from "next/image";
import {
  BriefcaseIcon,
  TruckIcon,
  AcademicCapIcon,
  CubeTransparentIcon,
  UserIcon,
  ShoppingCartIcon,
  ArrowPathIcon,
  Cog6ToothIcon,
  BuildingStorefrontIcon,
  
} from "@heroicons/react/24/outline"; // replace icons with suitable ones or use react-icons

const sectors = [
  { name: "Courier/Express Cargo", icon: <BriefcaseIcon className="h-5 w-5 text-black" /> },
  { name: "Transportation", icon: <TruckIcon className="h-5 w-5 text-black" /> },
  
  { name: "Warehousing", icon: <CubeTransparentIcon className="h-5 w-5 text-black" /> },
  { name: "3PL & 4PL", icon: <AcademicCapIcon className="h-5 w-5 text-black" /> },
  { name: "Custom House Agent", icon: <UserIcon className="h-5 w-5 text-black" /> },
  { name: "Shipping/NVOCC", icon: <ShoppingCartIcon className="h-5 w-5 text-black" /> },
  { name: "Ecom Logistics", icon: <BuildingStorefrontIcon className="h-5 w-5 text-black" /> },
  { name: "EXIM", icon: <ArrowPathIcon className="h-5 w-5 text-black" /> },
  { name: "Manufacturing", icon: <Cog6ToothIcon className="h-5 w-5 text-black" /> },
];

export default function HiringSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-blue-900 uppercase">
        Executive Hiring For
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10">
          {sectors.map((sector, index) => (
            <div key={index} className="flex items-center space-x-3">
              {sector.icon}
              <span className="text-blue-800 font-semibold">{sector.name}</span>
            </div>
          ))}
        </div>

        {/* Right: Image */}
        <div className="w-full h-[300px] relative">
          <Image
            src="/logistics.png" // make sure this is placed inside /public folder
            alt="Logistics Illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
