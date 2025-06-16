'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
    FaYoutube, 
    FaTwitter, 
    FaInstagram, 
    FaTiktok, 
    FaFacebook, 
    FaReddit, 
    FaDiscord,
    FaTwitch,
    FaSnapchatGhost,
    FaPinterest,
    FaLinkedin
} from 'react-icons/fa';
import Container from './Container';
import SectionTitle from './SectionTitle';

const Endorsements: React.FC = () => {
    const platforms = [
        { icon: <FaYoutube className="w-12 h-12" />, name: "YouTube", color: "#FF0000" },
        { icon: <FaTwitter className="w-12 h-12" />, name: "Twitter", color: "#1DA1F2" },
        { icon: <FaInstagram className="w-12 h-12" />, name: "Instagram", color: "#E4405F" },
        { icon: <FaTiktok className="w-12 h-12" />, name: "TikTok", color: "#000000" },
        { icon: <FaFacebook className="w-12 h-12" />, name: "Facebook", color: "#1877F2" },
        { icon: <FaReddit className="w-12 h-12" />, name: "Reddit", color: "#FF4500" },
        { icon: <FaDiscord className="w-12 h-12" />, name: "Discord", color: "#5865F2" },
        { icon: <FaTwitch className="w-12 h-12" />, name: "Twitch", color: "#9146FF" },
        { icon: <FaSnapchatGhost className="w-12 h-12" />, name: "Snapchat", color: "#FFFC00" },
        { icon: <FaPinterest className="w-12 h-12" />, name: "Pinterest", color: "#BD081C" },
        { icon: <FaLinkedin className="w-12 h-12" />, name: "LinkedIn", color: "#0077B5" }
    ];

    // Duplicate platforms for seamless scrolling
    const duplicatedPlatforms = [...platforms, ...platforms];

    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <SectionTitle>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Trusted by Personas From
                        </h2>
                    </SectionTitle>
                    <p className="text-lg text-foreground-accent max-w-2xl mx-auto">
                        Join creators from all major platforms who are already building their influence empire
                    </p>
                </motion.div>

                <div className="relative">
                    <motion.div
                        animate={{
                            x: ["0%", "-50%"]
                        }}
                        transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="flex gap-16 items-center"
                    >
                        {duplicatedPlatforms.map((platform, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.1 }}
                                className="flex flex-col items-center gap-4 min-w-fit opacity-70 hover:opacity-100 transition-opacity"
                                style={{ color: platform.color }}
                            >
                                {platform.icon}
                                <span className="text-sm font-semibold text-foreground">
                                    {platform.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-2xl font-bold text-foreground">
                        Ready to turn your influence into investment opportunities?
                    </p>
                </motion.div>
            </Container>
        </section>
    );
};

export default Endorsements; 