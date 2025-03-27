'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';


const images = [
  '/images/project4.jpg',
  '/images/project1.jpg',
  '/images/project3.png',
  '/images/project5.jpg',
];

export default function Home() {
    const router = useRouter();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Image Slider */}
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={images[index]}
            alt="Construction Project"
            fill
            style={{ objectFit: 'cover' }}
            quality={80}
            unoptimized

          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-end mb-10   text-white text-center p-4">
        <div className='mb-10'>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-300">Mishra Trader's</h1>
        <p className="t md:text-xl mt-2">✅ Quality You Can Trust | ✅ Custom Solutions | ✅ Affordable & Durable </p>
        <button onClick={() => router.push('/services')} className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold">Explore Our Services</button>
    

        </div>
     </div>

      {/* Navigation Controls */}
      <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-2 rounded-full" onClick={prevSlide}>
        <ArrowLeft className="text-white w-6 h-6" />
      </button>
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-2 rounded-full" onClick={nextSlide}>
        <ArrowRight className="text-white w-6 h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${i === index ? 'bg-blue-600' : 'bg-gray-400'}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
