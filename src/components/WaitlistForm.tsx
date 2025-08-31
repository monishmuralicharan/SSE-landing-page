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
    const [testResult, setTestResult] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const testSupabaseConnection = async () => {
        window.console.log('=== TESTING SUPABASE CONNECTION ===')
        setTestResult('Testing connection...')
        
        try {
            window.console.log('Testing basic Supabase client...')
            
            // Import the supabase client directly
            const { supabase } = await import('@/lib/supabase')
            window.console.log('Supabase client imported:', !!supabase)
            
            // Test a simple query to the table
            window.console.log('Attempting to query sse_waitlist table...')
            const { data, error, count } = await supabase
                .from('sse_waitlist')
                .select('*', { count: 'exact', head: true })
                .limit(0)
            
            window.console.log('Query result:', { data, error, count })
            
            if (error) {
                window.console.error('❌ Connection test failed:', error)
                setTestResult(`❌ Connection failed: ${error.message}`)
            } else {
                window.console.log('✅ Connection test successful!')
                setTestResult(`✅ Connection successful! Table has ${count || 0} entries.`)
            }
        } catch (err) {
            window.console.error('❌ Connection test error:', err)
            setTestResult(`❌ Test error: ${err instanceof Error ? err.message : String(err)}`)
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        // Use window.console to ensure it appears in browser
        window.console.log('=== WAITLIST FORM SUBMISSION STARTED ===')
        window.console.log('Form data being submitted:', formData)
        window.console.log('Browser info:', {
            userAgent: navigator.userAgent,
            url: window.location.href,
            timestamp: new Date().toISOString()
        })

        try {
            window.console.log('About to call addToWaitlist function...')
            window.console.log('addToWaitlist function exists?', typeof addToWaitlist)
            
            const result = await addToWaitlist(formData);
            
            window.console.log('✅ addToWaitlist call completed successfully!')
            window.console.log('Result:', result)
            setIsSubmitted(true);
            setFormData({
                first_name: '',
                last_name: '',
                primary_email: '',
                primary_influence_platform: ''
            });
        } catch (err) {
            window.console.error('❌ FORM SUBMISSION ERROR CAUGHT:')
            window.console.error('Error type:', typeof err)
            window.console.error('Error constructor:', err?.constructor?.name)
            window.console.error('Error instanceof Error:', err instanceof Error)
            window.console.error('Full error object:', err)
            window.console.error('Error name:', err && typeof err === 'object' && 'name' in err ? (err as Error).name : undefined)
            window.console.error('Error message:', err && typeof err === 'object' && 'message' in err ? (err as Error).message : undefined)
            window.console.error('Error stack:', err && typeof err === 'object' && 'stack' in err ? (err as Error).stack : undefined)
            window.console.error('Error cause:', err && typeof err === 'object' && 'cause' in err ? (err as Error & { cause?: unknown }).cause : undefined)
            
            // Check if it's a network error
            if (err instanceof TypeError && err.message.includes('fetch')) {
                window.console.error('🌐 This appears to be a network/fetch error')
            }
            
            const errorMessage = err instanceof Error ? err.message : 'Something went wrong. Please try again.'
            window.console.error('Setting user-facing error message:', errorMessage)
            setError(errorMessage);
        } finally {
            window.console.log('Form submission process completed, setting isSubmitting to false')
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

                        {testResult && (
                            <p className={`text-sm ${testResult.includes('✅') ? 'text-green-600' : 'text-red-500'}`}>
                                {testResult}
                            </p>
                        )}

                        <div className="flex flex-col gap-3">
                            <button
                                type="button"
                                onClick={testSupabaseConnection}
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-200 font-medium text-base"
                            >
                                🔍 Test Database Connection
                            </button>

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
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default WaitlistForm; 