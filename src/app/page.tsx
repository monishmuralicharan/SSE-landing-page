'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { addToWaitlist } from '@/lib/supabase';
import { 
    FaYoutube, 
    FaTwitter, 
    FaInstagram, 
    FaTiktok, 
    FaDiscord,
    FaTwitch
} from 'react-icons/fa';
import { HiLightningBolt, HiGlobe, HiChartBar, HiStar, HiFire } from 'react-icons/hi';

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 w-full z-50">
      {/* Desktop Navigation */}
      <nav className={`nav-blur transition-all duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'} hidden-mobile`}>
        <div className="nav-container">
          <div className="nav-content">
            <div className="flex items-center gap-8">
              <a href="#" className="nav-logo">
                <div className="nav-logo-text">Social Stock Exchange</div>
              </a>
              <div className="flex items-center gap-8">
                <a href="#why" className="nav-link">Why SSE?</a>
                <a href="#assets" className="nav-link">Asset Classes</a>
                <a href="#features" className="nav-link">Features</a>
                <a href="#faq" className="nav-link">FAQ</a>
              </div>
            </div>
            <div>
              <a href="#waitlist" className="btn-secondary">
                Join Waitlist
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className={`nav-blur transition-all duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'} hidden-desktop hidden-tablet`}>
        <div className="nav-container">
          <div className="nav-content">
            <a href="#" className="nav-logo">
              <div className="nav-logo-text">SSE</div>
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              <div className="space-y-1">
                <div className="w-5 h-0.5 bg-white rounded"></div>
                <div className="w-5 h-0.5 bg-white rounded"></div>
                <div className="w-5 h-0.5 bg-white rounded"></div>
              </div>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

// Hero Component
const HeroSection = () => {
  return (
    <section className="section relative overflow-hidden" style={{ minHeight: '100vh' }}>
      {/* Background lights - matching Framer template */}
      <div className="bg-light bg-light-green absolute" style={{ top: '20%', left: '15%', width: '300px', height: '300px' }}></div>
      <div className="bg-light bg-light-green absolute" style={{ top: '30%', left: '25%', width: '200px', height: '200px' }}></div>
      <div className="bg-light bg-light-blue absolute" style={{ bottom: '20%', right: '15%', width: '300px', height: '300px' }}></div>
      <div className="bg-light bg-light-blue absolute" style={{ bottom: '30%', right: '25%', width: '200px', height: '200px' }}></div>
      
      <div className="container relative z-10 text-center flex flex-col justify-center" style={{ minHeight: '100vh' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="heading-hero">
            <motion.span 
              className="inline-block"
              initial={{ opacity: 0, filter: 'blur(4px)', y: 12 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Invest
            </motion.span>{' '}
            <motion.span 
              className="inline-block"
              initial={{ opacity: 0, filter: 'blur(4px)', y: 12 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              in
            </motion.span>{' '}
            <motion.span 
              className="inline-block"
              initial={{ opacity: 0, filter: 'blur(4px)', y: 12 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Culture,
            </motion.span>{' '}
            <motion.span 
              className="inline-block"
              initial={{ opacity: 0, filter: 'blur(4px)', y: 12 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Creators
            </motion.span>{' '}
            <motion.span 
              className="inline-block"
              initial={{ opacity: 0, filter: 'blur(4px)', y: 12 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              and
            </motion.span>{' '}
            <motion.span 
              className="inline-block"
              initial={{ opacity: 0, filter: 'blur(4px)', y: 12 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Trends.
            </motion.span>
          </h1>
          <motion.p 
            className="text-supporting"
            initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            The NASDAQ of culture: turn influence and trends into a tradeable asset and and profit as your investment rises.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <a href="#waitlist" className="btn-primary">
              <span>Get Started</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
        
        {/* Dashboard Image - keeping Framer template image */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 1.2 }}
        >
          <div className="relative max-w-md mx-auto">
            <Image 
              src="/images/first_section_picture.png" 
              alt="SSE Platform" 
              width={534}
              height={600}
              className="rounded-2xl shadow-2xl"
              style={{ width: '534px', height: 'auto', maxWidth: '100%', filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Why SSE Section  
const WhySSESection = () => {
  const benefits = [
    {
      title: "Invest in What You Love",
      description: "From creators and trends to sports teams and viral products, invest in the culture and people that matter to you. Our platform lets you buy and trade shares in anything that has social value."
    },
    {
      title: "Early Access to Cultural Trends", 
      description: "Get in early on the next big thing. Whether it's a rising creator, viral trend, or emerging sport, SSE gives you the opportunity to invest before the mainstream catches on."
    },
    {
      title: "Diverse Asset Classes",
      description: "Synthetic creator portfolios, pre-draft athlete trading, college prestige stocks, viral product exchanges, metaverse assets—SSE offers investment opportunities you won't find anywhere else."
    }
  ];

  return (
    <section id="why" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-section">Why Social Stock Exchange?</h2>
          <p className="text-supporting">
            The first exchange where you can invest in culture, creators, and trends with full transparency and real market dynamics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="heading-subsection">{benefit.title}</h3>
              <p className="text-body">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Intro Section (matching Framer template intro)
const IntroSection = () => {
  return (
    <section className="section">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-thin mb-8 max-w-4xl mx-auto px-8 md:px-16" style={{ color: 'var(--light-text)' }}>
            SSE is the world&apos;s first hybrid exchange combining sports betting excitement with traditional stock market investing. Invest in creators, trends, teams, and ideas that matter to you.
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

// Asset Classes Section (matching OLD_LANDING_PAGE style)
const AssetClassesSection = () => {
  const assetClasses = [
    { icon: <FaYoutube className="w-12 h-12" />, name: "Creators", color: "#FF0000" },
    { icon: <HiLightningBolt className="w-12 h-12" />, name: "Trends", color: "var(--primary-green)" },
    { icon: <HiGlobe className="w-12 h-12" />, name: "Sports", color: "#10B981" },
    { icon: <HiChartBar className="w-12 h-12" />, name: "College", color: "#8B5CF6" },
    { icon: <HiStar className="w-12 h-12" />, name: "Metaverse", color: "#F59E0B" },
    { icon: <HiFire className="w-12 h-12" />, name: "Products", color: "#EF4444" },
    { icon: <FaTiktok className="w-12 h-12" />, name: "Social", color: "#FF6B6B" },
    { icon: <FaInstagram className="w-12 h-12" />, name: "Influencers", color: "#E4405F" },
    { icon: <FaTwitter className="w-12 h-12" />, name: "Culture", color: "#1DA1F2" },
    { icon: <FaDiscord className="w-12 h-12" />, name: "Community", color: "#5865F2" },
    { icon: <FaTwitch className="w-12 h-12" />, name: "Gaming", color: "#9146FF" }
  ];

  // Duplicate asset classes for seamless scrolling
  const duplicatedAssetClasses = [...assetClasses, ...assetClasses];

  return (
    <section id="assets" className="section overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="container">
          <h2 className="heading-section">Invest in Diverse Asset Classes</h2>
          <p className="text-supporting">
            From creator stocks to viral trends, SSE offers investment opportunities you won&apos;t find anywhere else
          </p>
        </div>
      </motion.div>

      <div className="relative overflow-hidden">
          <motion.div
            animate={{
              x: ["0%", "-50%"]
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex gap-24 items-center"
          >
            {duplicatedAssetClasses.map((asset, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-4 min-w-fit opacity-70 hover:opacity-100 transition-all duration-300"
                style={{ color: asset.color }}
              >
                <div className="p-6 bg-gray-900/50 rounded-2xl hover:bg-gray-800/60 transition-all duration-300 border border-gray-700/30 backdrop-filter backdrop-blur-sm">
                  {asset.icon}
                </div>
                <span className="text-sm font-semibold" style={{ color: 'var(--light-text)' }}>
                  {asset.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
    </section>
  );
};

// Platform Features Section
const FeaturesSection = () => {
  const features = [
    {
      title: "Seamless Trading Experience",
      subtitle: "Ease of Use & 24/7 Trading",
      description: "Simple onboarding process that let's invest in minutes. The influence never sleeps - our exchange operates around the clock so you can act on real time updates."
    },
    {
      title: "Real-Time Market Updates", 
      subtitle: "Instant Updates & News",
      description: "Our app serves instantaneous updates on breaking news for every person and stock listed on the exchange to make sure the price reflects the public sentiment in real time."
    },
    {
      title: "Social Media Integration",
      subtitle: "Interactive & Social Trading", 
      description: "Our app operates just like social media. Craft your portfolio, view your friend's trades, climb up the leaderboard and share your updates to your feed. Build your influence by gaining followers."
    }
  ];

  return (
    <section id="features" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-section">Platform Features</h2>
          <p className="text-supporting">
            Experience the cutting-edge technology that powers the social stock exchange.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card text-left"
            >
              <h3 className="heading-subsection">{feature.title}</h3>
              <h4 className="text-lg font-semibold mb-6 mt-2" style={{ color: 'var(--primary-green)' }}>
                {feature.subtitle}
              </h4>
              <p className="text-body">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Social Stock Exchange?",
      answer: "Social Stock Exchange is a stock market built for fans and the public to invest in the success of influencers, celebrities, athletes, politicians, or any public persona just how you invest in traditional stocks. Your audience can buy shares that reflect your social influence and success."
    },
    {
      question: "How does investing work?",
      answer: "Investing is as easy as opening your account, choosing an influencer, and buying shares. Fans can purchase shares in their favorite creators, and stock prices fluctuate based on how fans react to real-time social metrics, events, and major announcements."
    },
    {
      question: "When is this exchange active?",
      answer: "The exchange is active 24/7 to account for important events happening at any time of the day that influences the stock. Social media never sleeps, and neither does our exchange."
    },
    {
      question: "What makes me eligible to join?",
      answer: "We welcome influencers, celebrities, athletes, politicians, and public personas from all platforms including YouTube, Twitter, Instagram, TikTok, Facebook, Reddit, and Discord. You need a verifiable social media presence and engagement with your audience."
    },
    {
      question: "How are stock prices determined?",
      answer: "Fans can purchase shares in their favorite creators, and stock prices fluctuate based on how fans react to real-time social metrics, events, and major announcements."
    }
  ];

  return (
    <section id="faq" className="section relative overflow-hidden">
      {/* Background effects */}
      <div className="bg-light bg-light-green absolute" style={{ top: '10%', left: '10%', width: '200px', height: '200px' }}></div>
      <div className="bg-light bg-light-blue absolute" style={{ bottom: '10%', right: '10%', width: '300px', height: '300px' }}></div>
      
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-wider mb-6" style={{ color: 'var(--primary-green)' }}>FAQ&apos;S</p>
          <h2 className="heading-section">Frequently Asked Questions</h2>
          <p className="text-supporting">Everything you need to know about SSE</p>
          <a href="mailto:thesocialstockexchange@gmail.com" 
             className="text-lg font-semibold mt-8 inline-block" 
             style={{ color: 'var(--primary-green)' }}>
            thesocialstockexchange@gmail.com
          </a>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`
                backdrop-blur-xl border rounded-3xl p-8 transition-all duration-500 cursor-pointer
                ${openIndex === index 
                  ? 'border-green-400 shadow-green-500/20 shadow-2xl' 
                  : 'border-white/10 hover:border-green-400/50 hover:shadow-green-500/10 hover:shadow-xl'
                }
              `}
              style={{
                background: openIndex === index 
                  ? 'rgba(0, 255, 178, 0.05)' 
                  : 'rgba(255, 255, 255, 0.03)',
                boxShadow: openIndex === index 
                  ? '0 0 50px rgba(0, 255, 178, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.1)' 
                  : 'inset 0 0 16px rgba(255, 255, 255, 0.06)'
              }}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-center justify-between group-hover:transform group-hover:scale-[1.02] transition-transform">
                <h3 className="text-xl font-semibold text-white pr-8">{faq.question}</h3>
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                  ${openIndex === index 
                    ? 'bg-green-400 rotate-45 shadow-green-400/50 shadow-lg' 
                    : 'bg-white/10 group-hover:bg-green-400/20'
                  }
                `}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </div>
              
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-6 pt-6 border-t border-green-400/30"
                >
                  <p className="text-gray-300 leading-relaxed text-lg">{faq.answer}</p>
                </motion.div>
              )}
            </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Last CTA Section (matching Framer template "LastCTA")
const LastCTASection = () => {
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
    setFormData(prev => ({ ...prev, [name]: value }));
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
      <section id="waitlist" className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="text-6xl mb-8">🎉</div>
            <h2 className="heading-section">Welcome to the Future of Investing!</h2>
            <p className="text-supporting">
              Thank you for joining our waitlist. We&apos;ll be in touch soon with exclusive updates about the Social Stock Exchange and early access opportunities.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="section-large relative">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-rgba(0,255,178,0.05) pointer-events-none"></div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="heading-section">Ready to Join the Revolution?</h2>
          <p className="text-supporting">
            Get early access to the world&apos;s first social stock exchange. Join thousands of creators and investors who are already transforming how we think about influence as an asset.
          </p>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid gap-4 max-w-lg mx-auto mt-8"
          >
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                value={formData.first_name}
                onChange={handleInputChange}
                required
                className="form-input"
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={formData.last_name}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>

            <input
              type="email"
              name="primary_email"
              placeholder="Primary Email"
              value={formData.primary_email}
              onChange={handleInputChange}
              required
              className="form-input"
            />

            <textarea
              name="primary_influence_platform"
              placeholder="Who do you want to see on the exchange? (Creators, influencers, athletes, politicians, or anyone with a social influence)"
              value={formData.primary_influence_platform}
              onChange={handleInputChange}
              required
              rows={3}
              className="form-input resize-none"
            />

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-lg border border-red-400/30 bg-red-400/10 backdrop-blur-sm"
              >
                <p className="text-sm text-red-300 font-medium">{error}</p>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                  <span>Joining...</span>
                </>
              ) : (
                <>
                  <span>Join Waitlist</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

// Main Page Component
export default function Home() {
  return (
    <div id="main" style={{ minHeight: '100vh', width: 'auto' }}>
      <Navigation />
      <HeroSection />
      <div className="section-divider-subtle"></div>
      <IntroSection />
      <div className="section-divider-subtle"></div>
      <WhySSESection />
      <div className="section-divider-subtle"></div>
      <AssetClassesSection />
      <div className="section-divider-subtle"></div>
      <FeaturesSection />
      <div className="section-divider-subtle"></div>
      <FAQSection />
      <div className="section-divider-subtle"></div>
      <LastCTASection />
    </div>
  );
}