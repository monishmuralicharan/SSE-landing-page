'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiChartBar, HiLightningBolt, HiGlobe } from 'react-icons/hi';
import Container from './Container';
import SectionTitle from './SectionTitle';

const WhyUs: React.FC = () => {
    const benefits = [
        {
            icon: <HiChartBar className="w-12 h-12 text-blue-600" />,
            title: "Invest in What You Love",
            description: "From creators and trends to sports teams and viral products, invest in the culture and people that matter to you. Our platform lets you buy and trade shares in anything that has social value."
        },
        {
            icon: <HiLightningBolt className="w-12 h-12 text-blue-600" />,
            title: "Early Access to Cultural Trends",
            description: "Get in early on the next big thing. Whether it's a rising creator, viral trend, or emerging sport, SSE gives you the opportunity to invest before the mainstream catches on."
        },
        {
            icon: <HiGlobe className="w-12 h-12 text-blue-600" />,
            title: "Diverse Asset Classes",
            description: "Synthetic creator portfolios, pre-draft athlete trading, college prestige stocks, viral product exchanges, metaverse assets—SSE offers investment opportunities you won't find anywhere else."
        }
    ];

    return (
        <section id="why-us" className="section-padding bg-gray-50">
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
                            Why Join SSE?
                        </h2>
                    </SectionTitle>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        The first exchange where you can invest in culture, creators, and trends with full transparency and real market dynamics
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center hover:transform hover:scale-105"
                        >
                            <div className="flex justify-center mb-6">
                                <div className="p-4 bg-blue-50 rounded-full">
                                    {benefit.icon}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-4 leading-tight">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default WhyUs; 