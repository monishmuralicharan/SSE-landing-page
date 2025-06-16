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
            className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5 overflow-hidden"
        >
            {/* Animated background with grid */}
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
                </div>
            </div>

            {/* Enhanced cursor-following bubble */}
            <motion.div
                className="fixed w-96 h-96 rounded-full pointer-events-none z-0"
                style={{
                    background: 'radial-gradient(circle, rgba(254, 216, 53, 0.15) 0%, rgba(254, 216, 53, 0.05) 50%, transparent 100%)',
                    filter: 'blur(40px)',
                }}
                animate={{
                    x: mousePosition.x - 192, // Center the circle on cursor
                    y: mousePosition.y - 192,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    mass: 0.5
                }}
            />

            {/* Secondary cursor effect */}
            <motion.div
                className="fixed w-64 h-64 rounded-full pointer-events-none z-0"
                style={{
                    background: 'radial-gradient(circle, rgba(48, 79, 255, 0.1) 0%, rgba(48, 79, 255, 0.03) 50%, transparent 100%)',
                    filter: 'blur(25px)',
                }}
                animate={{
                    x: mousePosition.x - 128,
                    y: mousePosition.y - 128,
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    mass: 0.8
                }}
            />

            {/* Mouse-following animated elements */}
            <motion.div
                className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-5"
                animate={{
                    x: mousePosition.x * 0.02,
                    y: mousePosition.y * 0.02,
                }}
                transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 30
                }}
            />
            <motion.div
                className="absolute w-64 h-64 bg-secondary/10 rounded-full blur-2xl -z-5"
                animate={{
                    x: mousePosition.x * -0.01,
                    y: mousePosition.y * -0.01,
                }}
                transition={{
                    type: "spring",
                    stiffness: 40,
                    damping: 30
                }}
            />

            {/* Floating icons animation */}
            <motion.div
                className="absolute top-20 left-10 text-4xl opacity-20"
                animate={{
                    y: Math.sin(Date.now() * 0.001) * 10,
                    x: mousePosition.x * 0.01,
                }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                📈
            </motion.div>
            <motion.div
                className="absolute top-40 right-20 text-3xl opacity-20"
                animate={{
                    y: Math.sin(Date.now() * 0.002) * 15,
                    x: mousePosition.x * -0.005,
                }}
                transition={{ type: "spring", stiffness: 80 }}
            >
                💰
            </motion.div>
            <motion.div
                className="absolute bottom-40 left-20 text-3xl opacity-20"
                animate={{
                    y: Math.sin(Date.now() * 0.0015) * 12,
                    x: mousePosition.x * 0.008,
                }}
                transition={{ type: "spring", stiffness: 90 }}
            >
                🚀
            </motion.div>

            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]">
            </div>

            <div className="text-center relative z-10">
                <motion.h1 
                    className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {heroDetails.heading}
                </motion.h1>
                <motion.p 
                    className="mt-4 text-foreground max-w-lg mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {heroDetails.subheading}
                </motion.p>
                <motion.div 
                    className="mt-6 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <button 
                        onClick={scrollToWaitlist}
                        className="text-black bg-primary hover:bg-primary-accent px-8 py-3 rounded-full transition-colors font-semibold"
                    >
                        Join the Community
                    </button>
                    <button 
                        onClick={handleContactUs}
                        className="text-secondary border border-secondary hover:bg-secondary hover:text-white px-8 py-3 rounded-full transition-colors font-semibold mt-3 sm:mt-0"
                    >
                        Contact Us
                    </button>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <Image
                        src={heroDetails.centerImageSrc}
                        width={384}
                        height={340}
                        quality={100}
                        sizes="(max-width: 768px) 100vw, 384px"
                        priority={true}
                        unoptimized={true}
                        alt="Social Stock Exchange Platform"
                        className='relative mt-12 md:mt-16 mx-auto z-10'
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
