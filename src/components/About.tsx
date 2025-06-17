'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from './Container';
import SectionTitle from './SectionTitle';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <Container>
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <SectionTitle>
                            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                                Don&apos;t just influence,<br />
                                <span className="text-secondary">let your audience invest in you</span>
                            </h2>
                        </SectionTitle>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="space-y-6 text-lg text-foreground-accent"
                        >
                            <p>
                                Social Stock Exchange is the world&apos;s first stock market designed specifically for public personas like you. 
                                Your influence has value, and now your audience can invest directly in your success.
                            </p>
                            <p>
                                Whether you&apos;re a YouTuber, TikToker, athlete, or any public figure, give back to the loyal fans that support you, by allowing your audience to invest in your success and be rewarded as your influence expands.
                            </p>
                            <p>
                                Join influencers who are empowering their audience engagement in ways never possible before. The future of the influence based economy starts here.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};

export default About; 