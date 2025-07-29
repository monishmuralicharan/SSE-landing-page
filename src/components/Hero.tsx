'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    const scrollToWaitlist = () => {
        document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleContactUs = () => {
        window.location.href = 'mailto:thesocialstockexchange@gmail.com';
    };

    return (
        <section
            id="hero"
            className="relative flex items-center justify-center min-h-screen px-5 overflow-hidden hero-bg pt-20 md:pt-32"
        >
            {/* Subtle background elements like Cluely */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:60px_60px]"></div>

            {/* Soft floating elements */}
            <motion.div
                className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 blur-xl"
                animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-24 h-24 bg-blue-300 rounded-full opacity-10 blur-xl"
                animate={{
                    y: [0, 15, 0],
                    x: [0, -10, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="text-center relative z-20 max-w-4xl mx-auto">
                <motion.h1 
                    className="text-5xl md:text-7xl font-bold text-black leading-tight mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Social Stock Exchange
                </motion.h1>
                
                <motion.p 
                    className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    The first exchange where you can invest in culture, creators, and trends. Join the revolution of social investing.
                </motion.p>
                
                <motion.div 
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <button 
                        onClick={scrollToWaitlist}
                        className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
                    >
                        <span>Join Waitlist</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                    <button 
                        onClick={handleContactUs}
                        className="text-blue-600 hover:text-blue-700 underline font-medium text-lg transition-colors"
                    >
                        Contact Us
                    </button>
                </motion.div>

                <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <div className="relative inline-block">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-2xl blur-2xl"></div>
                        <Image
                            src={heroDetails.centerImageSrc}
                            width={500}
                            height={400}
                            quality={100}
                            sizes="(max-width: 768px) 100vw, 500px"
                            priority={true}
                            unoptimized={true}
                            alt="Social Stock Exchange Platform"
                            className='relative rounded-2xl shadow-2xl'
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
