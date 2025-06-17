"use client";
import Image from 'next/image';
import {
  Briefcase,
  Warehouse,
  User,
  Store,
  Settings,
  Truck,
  GraduationCap,
  ShoppingCart,
  RefreshCcw,
} from "lucide-react";

const hiringData = [
  { icon: <Briefcase size={22} />, label: "Courier/Express Cargo" },
  { icon: <Warehouse size={22} />, label: "Warehousing" },
  { icon: <User size={22} />, label: "Custom House Agent" },
  { icon: <Store size={22} />, label: "Ecom Logistics" },
  { icon: <Settings size={22} />, label: "Manufacturing" },
  { icon: <Truck size={22} />, label: "Transportation" },
  { icon: <GraduationCap size={22} />, label: "3PL & 4PL" },
  { icon: <ShoppingCart size={22} />, label: "Shipping/NVOCC" },
  { icon: <RefreshCcw size={22} />, label: "EXIM" },
];

export default function ExecutiveHiring() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold font-jakarta text-center md:text-left text-blue-900 mb-8 underline decoration-blue-600 underline-offset-4">
            EXECUTIVE HIRING FOR
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {hiringData.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white shadow-sm hover:shadow-md transition rounded-xl p-4 border border-gray-200 hover:bg-blue-50 cursor-pointer"
              >
                <div className="text-blue-600">{item.icon}</div>
                <span className="font-medium text-gray-800 hover:text-blue-700">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full flex justify-center">
          <Image
            src="/logistics.png" // ✅ Replace with your imported image path
            alt="Logistics hiring"
            className="rounded-2xl shadow-xl object-cover w-[600px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
