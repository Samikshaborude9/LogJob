import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-sm">
      <div className="text-xl font-bold text-blue-700">LOGJOB</div>
      <ul className="flex gap-6 text-sm font-medium">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Us</Link></li> {/* ✅ Fixed link */}
        <li><Link href="/hiring">Hiring</Link></li>
        <li><Link href="/client">Client's Say</Link></li>
        <li>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
