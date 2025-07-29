'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { addToWaitlist } from '@/lib/supabase';

const WaitlistForm: React.FC = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        primary_email: '',
        primary_influence_platform: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            await addToWaitlist(formData);
            setIsSubmitted(true);
            setFormData({
                first_name: '',
                last_name: '',
                primary_email: '',
                primary_influence_platform: ''
            });
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <section id="waitlist" className="section-padding bg-gradient-to-b from-green-50 to-green-100">
                <div className="relative mx-auto py-16 sm:py-24">
                    <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
                        <motion.div 
                            className="text-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="text-6xl mb-8">🎉</div>
                            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
                                Welcome to the Future of Investing!
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                Thank you for joining our waitlist. We&apos;ll be in touch soon with exclusive updates about the Social Stock Exchange and early access opportunities.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="waitlist" className="section-padding bg-white">
            <div className="relative mx-auto py-16 sm:py-24">
                <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
                    <motion.h2 
                        className="text-3xl sm:text-4xl md:text-6xl font-bold text-black mb-6 leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        Get Early Access to the Future of Investing
                    </motion.h2>

                    <motion.p 
                        className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Join thousands of investors who are ready to invest in culture, creators, and trends. 
                        Be among the first to access the world&apos;s first social stock exchange.
                    </motion.p>

                    <motion.form 
                        onSubmit={handleSubmit}
                        className="w-full max-w-lg mx-auto space-y-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="first_name"
                                placeholder="First Name"
                                value={formData.first_name}
                                onChange={handleInputChange}
                                required
                                className="px-4 py-4 rounded-lg border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-lg"
                            />
                            <input
                                type="text"
                                name="last_name"
                                placeholder="Last Name"
                                value={formData.last_name}
                                onChange={handleInputChange}
                                required
                                className="px-4 py-4 rounded-lg border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-lg"
                            />
                        </div>

                        <input
                            type="email"
                            name="primary_email"
                            placeholder="Primary Email"
                            value={formData.primary_email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-4 rounded-lg border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-lg"
                        />

                        <textarea
                            name="primary_influence_platform"
                            placeholder="Who do you want to see on the exchange? (Creators, influencers, athletes, politicians, or anyone with a social influence)"
                            value={formData.primary_influence_platform}
                            onChange={handleInputChange}
                            required
                            rows={3}
                            className="w-full px-4 py-4 rounded-lg border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none text-lg"
                        />

                        {error && (
                            <p className="text-red-500 text-sm">{error}</p>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? 'Joining...' : (
                                <>
                                    <span>Join Waitlist</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </>
                            )}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default WaitlistForm; 