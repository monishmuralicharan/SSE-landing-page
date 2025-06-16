'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiUsers, HiTrendingUp, HiSpeakerphone } from 'react-icons/hi';
import Container from './Container';
import SectionTitle from './SectionTitle';

const WhyUs: React.FC = () => {
    const benefits = [
        {
            icon: <HiUsers className="w-12 h-12 text-primary" />,
            title: "Enable your audience to invest in your success",
            description: "Turn your followers into stakeholders. Your audience can now put their money where their support is and invest directly in your growing influence."
        },
        {
            icon: <HiTrendingUp className="w-12 h-12 text-primary" />,
            title: "Earn from your audience's investments",
            description: "Generate revenue through trading fees, milestone bonuses, and exclusive partnership opportunities based on your stock performance."
        },
        {
            icon: <HiSpeakerphone className="w-12 h-12 text-primary" />,
            title: "Grow your influence through publicity",
            description: "Being listed on our exchange brings exposure to new audiences and validates your influence in the creator economy marketplace."
        }
    ];

    return (
        <section id="why-us" className="py-20 bg-white">
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
                            Why Join Our Exchange?
                        </h2>
                    </SectionTitle>
                    <p className="text-lg text-foreground-accent max-w-2xl mx-auto">
                        Transform your influence into a tradeable asset and unlock new revenue streams
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="text-center p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                            <div className="flex justify-center mb-6">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-4">
                                {benefit.title}
                            </h3>
                            <p className="text-foreground-accent">
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