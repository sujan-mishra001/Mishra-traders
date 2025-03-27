'use client';
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";


const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="text-xl font-semibold">
            {/* Navbar */}
            <nav className="sticky top-0 z-10 bg-emerald-500 backdrop-blur-md shadow">
                <div className="container mx-auto  flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" >
                    <div>
                        <Image
                        src={logo}
                        alt="logo"
                        className="h-1/2 w-1/2"
                        />
                        
                      
                        
                     
                    </div>

                   
   
       
                    </Link>
                    {/* Desktop Navigation */}
                    <div className="hidden sm:flex space-x-6">
                        <Link href="/" className="hover:text-primary">
                            Home
                        </Link>
                        <Link href="/services" className="hover:text-primary">
                            Services
                        </Link>
                        <Link href="/about" className="hover:text-primary">
                            About
                        </Link>
                        <Link href="/gallery" className="hover:text-primary">
                            Gallery
                        </Link>
                        <Link href="/contact" className="hover:text-primary">
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Hamburger Menu */}
                    <div className="sm:hidden">
                        <button
                            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            onClick={toggleMenu}
                        >
                            {/* Hamburger Icon */}
                            <span
                                className={`block w-6 h-0.5 bg-black mb-1 ${
                                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                                } transition-transform duration-300`}
                            ></span>
                            <span
                                className={`block w-6 h-0.5 bg-black mb-1 ${
                                    isMenuOpen ? "opacity-0" : ""
                                } transition-opacity duration-300`}
                            ></span>
                            <span
                                className={`block w-6 h-0.5 bg-black ${
                                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                                } transition-transform duration-300`}
                            ></span>
                        </button>
                    </div>
                </div>
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="sm:hidden absolute top-14 left-0 w-full mt-10 bg-slate-100 backdrop-blur-md shadow-md">
                        <div className="flex flex-col opacity-100  p-2">
                            <Link
                                href="/"
                                className="hover:text-primary py-1"
                                onClick={toggleMenu}
                            >
                                Home
                            </Link>
                            <Link
                                href="/services"
                                className="hover:text-primary py-1"
                                onClick={toggleMenu}
                            >
                                Services
                            </Link>
                            <Link
                                href="/about"
                                className="hover:text-primary py-1"
                                onClick={toggleMenu}
                            >
                                About
                            </Link>
                            <Link
                                href="/gallery"
                                className="hover:text-primary py-1"
                                onClick={toggleMenu}
                            >
                                Gallery
                            </Link>

                            <Link
                                href="/contact"
                                className="hover:text-primary py-1"
                                onClick={toggleMenu}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </div>

      
    );
}

export default Header;
