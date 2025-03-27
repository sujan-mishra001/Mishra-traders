import { Facebook, Instagram, Youtube} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 ">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-semibold">Mishra Trader's</h2>
          <p className="mt-2 text-gray-400">
            Providing top-notch fabrication, aluminum & wooden doors, windows, steel railings, UPVC, false ceilings, and premium paints.
          </p>
        </div>
        <div>

        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link href="/services" className="hover:text-gray-300">Services</Link></li>
            <li><Link href="/gallery" className="hover:text-gray-300">Gallery</Link></li>
            <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
            <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold">Get in Touch</h3>
          <p className="mt-2 text-gray-400">Arjundhara-6, Jhapa, Nepal</p>
          <p className="text-gray-400">Phone: +977 9804906236 / +977 9804042126 </p>
          <p className="text-gray-400">Email: mishrabrothers@example.com</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white text-xl"><Facebook /></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl"><Instagram /></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl"><Youtube /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Mishra Trader's. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;


