'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from './Container';
import SectionTitle from './SectionTitle';

const About: React.FC = () => {
    return (
        <section id="about" className="section-padding bg-white">
            <Container>
                <div className="text-center max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <SectionTitle>
                            <h2 className="text-4xl md:text-6xl font-bold text-black mb-8 leading-tight">
                                The NASDAQ of Culture<br />
                                <span className="text-blue-600">Where Culture Becomes Investable</span>
                            </h2>
                        </SectionTitle>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="space-y-8 text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
                        >
                            <p className="text-xl">
                                SSE is the world&apos;s first hybrid exchange combining sports betting excitement with traditional stock market investing. 
                                Invest in creators, trends, teams, and ideas that matter to you.
                            </p>
                            <p>
                                Whether you&apos;re a sports bettor, social media fan, or traditional investor, SSE makes investing accessible and unites all these worlds under one exchange. 
                                In a future driven by social trends, we&apos;re paving the way as the first exchange where cultural relevance becomes investable.
                            </p>
                            <p>
                                Imagine if you could have invested in MrBeast when he had just 100 subscribers, or backed Drake before his first album. 
                                That&apos;s the opportunity our platform creates: letting you invest early in creators you believe in and grow as they grow.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};

export default About; 