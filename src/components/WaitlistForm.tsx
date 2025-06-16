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
            <section id="waitlist" className="mt-10 mb-5 lg:my-20">
                <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
                    <div className="h-full w-full">
                        <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#050a02] bg-[linear-gradient(to_right,#12170f_1px,transparent_1px),linear-gradient(to_bottom,#12170f_1px,transparent_1px)] bg-[size:6rem_4rem]">
                            <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,#1C1C02,transparent)]"></div>
                        </div>

                        <motion.div 
                            className="h-full flex flex-col items-center justify-center text-white text-center px-5"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="text-6xl mb-6">🎉</div>
                            <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl">
                                Welcome to the Future!
                            </h2>
                            <p className="mx-auto max-w-xl md:px-5 text-lg">
                                Thank you for joining our waitlist. We&apos;ll be in touch soon with exclusive updates about the Social Stock Exchange.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="waitlist" className="mt-10 mb-5 lg:my-20">
            <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
                <div className="h-full w-full">
                    <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#050a02] bg-[linear-gradient(to_right,#12170f_1px,transparent_1px),linear-gradient(to_bottom,#12170f_1px,transparent_1px)] bg-[size:6rem_4rem]">
                        <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,#1C1C02,transparent)]"></div>
                    </div>

                    <div className="h-full flex flex-col items-center justify-center text-white text-center px-5">
                        <motion.h2 
                            className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            Ready to Transform Your Influence?
                        </motion.h2>

                        <motion.p 
                            className="mx-auto max-w-xl md:px-5 mb-8"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Join thousands of creators who are already turning their social capital into real financial opportunities.
                        </motion.p>

                        <motion.form 
                            onSubmit={handleSubmit}
                            className="w-full max-w-md space-y-4"
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
                                    className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-primary focus:bg-white/20 transition-all"
                                />
                                <input
                                    type="text"
                                    name="last_name"
                                    placeholder="Last Name"
                                    value={formData.last_name}
                                    onChange={handleInputChange}
                                    required
                                    className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-primary focus:bg-white/20 transition-all"
                                />
                            </div>

                            <input
                                type="email"
                                name="primary_email"
                                placeholder="Primary Email"
                                value={formData.primary_email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-primary focus:bg-white/20 transition-all"
                            />

                            <textarea
                                name="primary_influence_platform"
                                placeholder="Primary Influence Platform (e.g., YouTube, Instagram, TikTok)"
                                value={formData.primary_influence_platform}
                                onChange={handleInputChange}
                                required
                                rows={3}
                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-primary focus:bg-white/20 transition-all resize-none"
                            />

                            {error && (
                                <p className="text-red-400 text-sm">{error}</p>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full text-black bg-primary hover:bg-primary-accent px-8 py-3 rounded-lg transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Joining...' : 'Join the Community'}
                            </button>
                        </motion.form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WaitlistForm; 