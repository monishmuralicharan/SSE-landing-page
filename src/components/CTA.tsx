import { ctaDetails } from "@/data/cta"

const CTA: React.FC = () => {
    return (
        <section id="cta" className="section-padding bg-gradient-to-b from-blue-50 to-blue-100">
            <div className="relative mx-auto py-16 sm:py-24">
                <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
                        Be Among the First to Invest in Culture
                    </h2>

                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                        Join our waitlist to get early access to the world's first social stock exchange. 
                        Invest in creators, trends, and culture before anyone else.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2">
                            <span>Join Waitlist</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                        <button className="text-blue-600 hover:text-blue-700 underline font-medium text-lg transition-colors">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA