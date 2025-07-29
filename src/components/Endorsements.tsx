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
import { HiLightningBolt, HiGlobe, HiChartBar, HiStar, HiFire } from 'react-icons/hi';
import Container from './Container';
import SectionTitle from './SectionTitle';

const Endorsements: React.FC = () => {
    const assetClasses = [
        { icon: <FaYoutube className="w-12 h-12" />, name: "Creator Stocks", color: "#FF0000" },
        { icon: <HiLightningBolt className="w-12 h-12" />, name: "Viral Trends", color: "#3B82F6" },
        { icon: <HiGlobe className="w-12 h-12" />, name: "Sports Trading", color: "#10B981" },
        { icon: <HiChartBar className="w-12 h-12" />, name: "College Prestige", color: "#8B5CF6" },
        { icon: <HiStar className="w-12 h-12" />, name: "Metaverse Assets", color: "#F59E0B" },
        { icon: <HiFire className="w-12 h-12" />, name: "Viral Products", color: "#EF4444" },
        { icon: <FaTiktok className="w-12 h-12" />, name: "Social Trends", color: "#000000" },
        { icon: <FaInstagram className="w-12 h-12" />, name: "Influencer Portfolios", color: "#E4405F" },
        { icon: <FaTwitter className="w-12 h-12" />, name: "Cultural Movements", color: "#1DA1F2" },
        { icon: <FaDiscord className="w-12 h-12" />, name: "Community Tokens", color: "#5865F2" },
        { icon: <FaTwitch className="w-12 h-12" />, name: "Gaming Assets", color: "#9146FF" }
    ];

    // Duplicate asset classes for seamless scrolling
    const duplicatedAssetClasses = [...assetClasses, ...assetClasses];

    return (
        <section className="section-padding bg-white overflow-hidden">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <SectionTitle>
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                            Invest in Diverse Asset Classes
                        </h2>
                    </SectionTitle>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        From creator stocks to viral trends, SSE offers investment opportunities you won't find anywhere else
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
                        {duplicatedAssetClasses.map((asset, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.1 }}
                                className="flex flex-col items-center gap-4 min-w-fit opacity-70 hover:opacity-100 transition-all duration-300"
                                style={{ color: asset.color }}
                            >
                                <div className="p-4 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300">
                                    {asset.icon}
                                </div>
                                <span className="text-sm font-semibold text-gray-700">
                                    {asset.name}
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
                    className="text-center mt-16"
                >
                    <p className="text-2xl font-bold text-black">
                        Ready to invest in the future of culture?
                    </p>
                </motion.div>
            </Container>
        </section>
    );
};

export default Endorsements; 