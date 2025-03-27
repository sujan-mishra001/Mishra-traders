'use client';
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Testimonial from "../components/Testimonial";
import Image from "next/image";



const testimonials = [
  {
    quote: "Great service and quality work!",
    author: "Chiranjibi Adhikari",
    role: "CEO, Halesi Scrap",
  },
  {
    quote: "Highly recommend their services.",
    author: "Matrika Timsina",
    role: "Home Owner",
  },
  {
    quote: "The best in the industry.",
    author: "Srijana Pokhrel",
    role: "Satisfied Customer",
  },
  {
    quote: "The products with their best value.",
    author: "Krishna Phyakurel",
    role: "Merchant",
  },
];

export default function AboutPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 ">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-6 text-gray-700">About Our Company</h1>
          <p className="text-lg leading-relaxed ">
            At <span className="font-semibold text-gray-900">Mishra Brothers</span>, we take pride in delivering excellence in construction materials and fabrication services. Based in Arjundhara-6, Jhapa, Nepal, we specialize in:
          </p>
          <ul className="list-disc list-inside text-lg  mb-8">
            <li><span className="font-semibold">Aluminum & Wooden Doors and Windows</span> – Designed for durability and aesthetic appeal.</li>
            <li><span className="font-semibold">Steel Railings & UPVC Installations</span> – Ensuring strength and elegance for modern spaces.</li>
            <li><span className="font-semibold">False Ceilings & Decorative Finishes</span> – Transforming interiors with creativity and style.</li>
            <li><span className="font-semibold">High-Quality Paints & Primers</span> – Official distributors of Kankai Company for enamel, distemper, and emulsions.</li>
          </ul>
          <p className="text-lg text-gray-700">
            With years of industry experience, Director <span className="font-semibold">Chhabi Lal Mishra</span> and Assistant Director <span className="font-semibold">Ramesh Mishra</span> lead a dedicated team committed to precision, innovation, and customer satisfaction. We blend craftsmanship with technology to offer solutions tailored to your needs.
          </p>
        </div>
        <div className="hidden md:block">
          <Image src="/images/project5.jpg" alt="Company" width={600} height={400} className="rounded-lg shadow-lg" />
        </div>
      </div>
      <h2 className="text-3xl font-bold text-center mt-12 mb-6 text-gray-900">What Our Clients Say:</h2>
      
      {/* Testimonials Slider */}
      <div className="relative w-full max-w-2xl mx-auto h-44 overflow-hidden bg-gray-200 rounded-lg shadow-xl flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center shadow-xl text-center p-3"
          >
            <Testimonial
              quote={testimonials[index].quote}
              author={testimonials[index].author}
              role={testimonials[index].role}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
