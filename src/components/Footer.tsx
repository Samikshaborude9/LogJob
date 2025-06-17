import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 mb-8">
          {/* Left Column */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">LOGJOB</h2>
            <div className="mb-4">
              <h3 className="font-semibold">Address</h3>
              <p>552 W48th Street, New York, NY 10036</p>
            </div>
            <div>
              <h3 className="font-semibold">Call Us</h3>
              <p>+1 234 567 890</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="pl-80">
            <h2 className="text-2xl font-semibold mb-4 ">Business Hours</h2>
            <ul className="space-y-1">
              <li>Monday – Closed</li>
              <li>Tuesday : 11.00 – 09.00</li>
              <li>Wednesday : 11.00 – 09.00</li>
              <li>Thursday : 11.00 – 09.00</li>
              <li>Friday : 11.00 – 09.00</li>
              <li>Saturday : 11.00 – 09.00</li>
              <li>Sunday : 11.00 – 09.00</li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-600 mb-4 md:mb-0">
            <p>Copyright © 2025 Local Business |</p>
            <p>Powered by Local Business</p>
          </div>
          <div className="flex space-x-4 text-gray-600 text-xl">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
