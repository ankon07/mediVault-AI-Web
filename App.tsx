import React, { useState, useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ThreeBackground from './components/ThreeBackground';
import FeaturesGallery from './components/FeaturesGallery';
import { CONTENT } from './constants';
import { 
  ArrowRight, ChevronDown, Check, Briefcase, 
  FileText, Microscope, Pill, Activity, Calendar, Lock,
  X, Send, CheckCircle, Gift, AlertCircle, Download
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Email configuration - using Formsubmit.co (free, no API key required)
// First submission will require email verification (one-time)
const RECIPIENT_EMAIL = 'ankonahamed@gmail.com';

// APK Download URL
const APK_DOWNLOAD_URL = 'https://github.com/ankon07/medvault-ai/releases/download/v1.0.3/medivault-ai.apk';

// App Screenshots for the carousel
const APP_SCREENSHOTS = [
  '/images/Screenshot_2025-12-02-01-45-24-22_231b3b00131ed1acadb706f5a75af86c.jpg',
  '/images/Screenshot_2025-12-02-01-45-32-86_231b3b00131ed1acadb706f5a75af86c.jpg',
  '/images/Screenshot_2025-12-02-01-45-40-98_231b3b00131ed1acadb706f5a75af86c.jpg',
  '/images/Screenshot_2025-12-02-01-45-59-22_231b3b00131ed1acadb706f5a75af86c.jpg',
  '/images/Screenshot_2025-12-02-01-46-02-66_231b3b00131ed1acadb706f5a75af86c.jpg',
  '/images/Screenshot_2025-12-02-01-46-07-20_231b3b00131ed1acadb706f5a75af86c.jpg',
  '/images/Screenshot_2025-12-02-01-46-09-73_231b3b00131ed1acadb706f5a75af86c.jpg',
  '/images/Screenshot_2025-12-02-01-46-12-91_231b3b00131ed1acadb706f5a75af86c.jpg',
  '/images/Screenshot_2025-12-02-01-46-21-05_231b3b00131ed1acadb706f5a75af86c.jpg',
  '/images/Screenshot_2025-12-02-01-46-25-27_231b3b00131ed1acadb706f5a75af86c.jpg',
  '/images/Screenshot_2025-12-02-01-47-08-21_231b3b00131ed1acadb706f5a75af86c.jpg',
  '/images/Screenshot_2025-12-02-01-47-12-64_231b3b00131ed1acadb706f5a75af86c.jpg',
  '/images/Screenshot_2025-12-02-01-47-35-80_231b3b00131ed1acadb706f5a75af86c.jpg',
  '/images/Screenshot_2025-12-02-01-47-38-69_231b3b00131ed1acadb706f5a75af86c.jpg',
  '/images/Screenshot_2025-12-02-01-47-47-76_231b3b00131ed1acadb706f5a75af86c.jpg',
];

// App Screenshot Carousel Component - Single Image Loop
const AppScreenshotCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = APP_SCREENSHOTS.length;

  // Auto-advance carousel every 2 seconds in a loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, [totalImages]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative group">
      {/* Progress Indicators */}
      <div className="flex justify-center gap-1.5 mb-6 flex-wrap max-w-md mx-auto">
        {APP_SCREENSHOTS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'w-6 bg-teal-500' 
                : 'w-1.5 bg-slate-600 hover:bg-slate-500'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Single Image Carousel */}
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ 
            width: `${totalImages * 100}%`,
            transform: `translateX(-${currentIndex * (100 / totalImages)}%)`
          }}
        >
          {APP_SCREENSHOTS.map((screenshot, index) => (
            <div 
              key={index}
              className="flex justify-center items-center px-4"
              style={{ width: `${100 / totalImages}%` }}
            >
              <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 rounded-3xl overflow-hidden border-2 border-slate-700/50 shadow-2xl shadow-teal-900/30 transition-all duration-300 hover:border-teal-500/50 hover:shadow-teal-500/20">
                <img 
                  src={screenshot} 
                  alt={`App screenshot ${index + 1}`}
                  className="w-full h-auto"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Left Navigation Arrow */}
        <button 
          onClick={goToPrevious}
          className="absolute left-0 top-0 bottom-0 w-16 md:w-24 flex items-center justify-center z-20 text-white text-5xl md:text-6xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-teal-400"
          style={{
            background: 'linear-gradient(-90deg, rgba(0,0,0,0) 0%, rgba(15,23,42,0.9) 100%)'
          }}
          aria-label="Previous image"
        >
          ‹
        </button>

        {/* Right Navigation Arrow */}
        <button 
          onClick={goToNext}
          className="absolute right-0 top-0 bottom-0 w-16 md:w-24 flex items-center justify-center z-20 text-white text-5xl md:text-6xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-teal-400"
          style={{
            background: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(15,23,42,0.9) 100%)'
          }}
          aria-label="Next image"
        >
          ›
        </button>
      </div>

      {/* Image Counter */}
      <div className="flex justify-center mt-6">
        <span className="text-slate-400 text-sm font-medium">
          <span className="text-teal-400">{String(currentIndex + 1).padStart(2, '0')}</span>
          <span className="mx-2">/</span>
          <span>{String(totalImages).padStart(2, '0')}</span>
        </span>
      </div>
    </div>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");
  
  // Refs for intersection observation
  const heroRef = useRef<HTMLDivElement>(null);
  const pillar1Ref = useRef<HTMLDivElement>(null);
  const pillar2Ref = useRef<HTMLDivElement>(null);
  const pillar3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = { threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'hero') setActiveSection(0);
          if (entry.target.id === 'pillar-0') setActiveSection(0);
          if (entry.target.id === 'pillar-1') setActiveSection(1);
          if (entry.target.id === 'pillar-2') setActiveSection(2);
        }
      });
    }, options);

    if (heroRef.current) observer.observe(heroRef.current);
    if (pillar1Ref.current) observer.observe(pillar1Ref.current);
    if (pillar2Ref.current) observer.observe(pillar2Ref.current);
    if (pillar3Ref.current) observer.observe(pillar3Ref.current);

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isGalleryOpen || isWishlistOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isGalleryOpen, isWishlistOpen]);

  const handleWishlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage("");

    try {
      // Send email using Formsubmit.co (free, no API key required)
      // Note: First submission requires email verification (one-time)
      const formData = new FormData();
      formData.append('name', userName || 'Anonymous User');
      formData.append('email', email);
      formData.append('_subject', 'New MedVault AI Early Access Request');
      formData.append('message', `New early access request!\n\nName: ${userName || 'Anonymous User'}\nEmail: ${email}\n\nUser wants to receive the MedVault AI APK.`);
      formData.append('_captcha', 'false'); // Disable captcha for better UX
      formData.append('_template', 'table'); // Use table template for better formatting

      const response = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setFormStatus('success');
        setEmail("");
        setUserName("");
      } else {
        throw new Error(result.message || 'Failed to submit');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
      setErrorMessage('Failed to submit. Please try again or email us directly at ankonahamed@gmail.com');
    }
  };

  const closeWishlist = () => {
    setIsWishlistOpen(false);
    // Reset form status after animation closes
    setTimeout(() => setFormStatus('idle'), 500);
  };

  // Helper to render dynamic icons based on the constant string
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'file-text': return <FileText />;
      case 'microscope': return <Microscope />;
      case 'pill': return <Pill />;
      case 'activity': return <Activity />;
      case 'calendar': return <Calendar />;
      case 'lock': return <Lock />;
      default: return <Activity />;
    }
  };

  // Variants for Headline Animation
  const headlineLine = {
    hidden: { opacity: 1 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: i * 0.4 + 0.2 // Delay subsequent lines
      }
    })
  };

  const headlineWord = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-white selection:bg-teal-500/30">
      <Navigation />
      
      {/* 3D Background - Fixed */}
      <ThreeBackground sectionIndex={activeSection} />

      {/* Feature Gallery Modal */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100]"
          >
            <FeaturesGallery onClose={() => setIsGalleryOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Wishlist Modal */}
      <AnimatePresence>
        {isWishlistOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" 
              onClick={closeWishlist}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl shadow-teal-900/20 z-[101]"
            >
                <button onClick={closeWishlist} className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors">
                    <X size={20} />
                </button>
                
                <AnimatePresence mode="wait">
                  {formStatus === 'success' ? (
                      <motion.div 
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-8"
                      >
                          <div className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-teal-500">
                              <CheckCircle size={32} />
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-3">You're on the list!</h3>
                          <p className="text-slate-400 mb-8">We've received your request. Check your inbox—we'll be sending the APK download link shortly.</p>
                          <button onClick={closeWishlist} className="w-full py-3 bg-teal-500 text-slate-950 font-bold rounded-lg hover:bg-teal-400 transition-colors">
                              Back to Site
                          </button>
                      </motion.div>
                  ) : formStatus === 'error' ? (
                      <motion.div 
                        key="error"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-8"
                      >
                          <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-red-500">
                              <AlertCircle size={32} />
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-3">Oops! Something went wrong</h3>
                          <p className="text-slate-400 mb-8">{errorMessage}</p>
                          <div className="space-y-3">
                            <button 
                              onClick={() => setFormStatus('idle')} 
                              className="w-full py-3 bg-teal-500 text-slate-950 font-bold rounded-lg hover:bg-teal-400 transition-colors"
                            >
                              Try Again
                            </button>
                            <a 
                              href="mailto:ankonahamed@gmail.com?subject=MedVault AI Early Access Request" 
                              className="block w-full py-3 border border-slate-700 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors text-center"
                            >
                              Email Us Directly
                            </a>
                          </div>
                      </motion.div>
                  ) : (
                      <motion.div
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                          <div className="mb-8">
                              <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4 text-teal-500">
                                  <Gift size={24} />
                              </div>
                              <h3 className="text-2xl font-bold text-white mb-2">Get Early Access</h3>
                              <p className="text-slate-400">MedVault AI is currently in private beta. Join our wishlist to receive the latest APK build directly to your email.</p>
                          </div>
                          
                          <form onSubmit={handleWishlistSubmit} className="space-y-4">
                              <div>
                                  <label htmlFor="userName" className="block text-sm font-medium text-slate-400 mb-1.5">Your Name (Optional)</label>
                                  <input 
                                      type="text" 
                                      id="userName"
                                      value={userName}
                                      onChange={(e) => setUserName(e.target.value)}
                                      placeholder="John Doe"
                                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all placeholder:text-slate-600"
                                  />
                              </div>
                              <div>
                                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1.5">Email Address *</label>
                                  <input 
                                      type="email" 
                                      id="email"
                                      required
                                      value={email}
                                      onChange={(e) => setEmail(e.target.value)}
                                      placeholder="name@example.com"
                                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all placeholder:text-slate-600"
                                  />
                              </div>
                              <button 
                                  type="submit" 
                                  disabled={formStatus === 'submitting'}
                                  className="w-full py-3 bg-teal-500 text-slate-950 font-bold rounded-lg hover:bg-teal-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-6"
                              >
                                  {formStatus === 'submitting' ? (
                                    <span className="flex items-center gap-2">
                                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                      </svg>
                                      Sending...
                                    </span>
                                  ) : (
                                    <span className="flex items-center gap-2">Send me the APK <Send size={16} /></span>
                                  )}
                              </button>
                          </form>
                          <p className="mt-4 text-center text-xs text-slate-500">
                            We respect your privacy. No spam, ever.
                          </p>
                      </motion.div>
                  )}
                </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <main className="relative z-10">
        
        {/* Hero Section */}
        <section id="hero" ref={heroRef} className="min-h-screen flex items-center pt-20 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
                {CONTENT.hero.headline.split(',').map((line, lineIndex) => (
                  <motion.span 
                    key={lineIndex} 
                    className="block"
                    custom={lineIndex}
                    initial="hidden"
                    animate="visible"
                    variants={headlineLine}
                  >
                    {(line + (lineIndex === 0 ? ',' : '')).trim().split(' ').map((word, wordIndex) => (
                      <motion.span
                        key={wordIndex}
                        variants={headlineWord}
                        className="inline-block mr-3 md:mr-5 last:mr-0"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.span>
                ))}
              </h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl leading-relaxed"
              >
                {CONTENT.hero.subhead}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button 
                  onClick={() => setIsWishlistOpen(true)}
                  className="px-8 py-4 bg-teal-500 text-slate-950 font-bold rounded-full hover:bg-teal-400 transition-colors flex items-center justify-center gap-2 group"
                >
                  {CONTENT.hero.primaryCta}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => setIsGalleryOpen(true)}
                  className="px-8 py-4 border border-slate-700 text-white font-medium rounded-full hover:bg-slate-800 transition-colors flex items-center justify-center"
                >
                  {CONTENT.hero.secondaryCta}
                </button>
              </motion.div>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
             <ChevronDown size={32} />
          </div>
        </section>

        {/* Story Pillars */}
        <div className="relative">
          {CONTENT.pillars.map((pillar, index) => (
            <section 
              key={pillar.id}
              id={`pillar-${index}`}
              ref={index === 0 ? pillar1Ref : index === 1 ? pillar2Ref : pillar3Ref}
              className="min-h-screen flex items-center relative bg-gradient-to-b from-transparent to-slate-950/20 border-b border-slate-800/20"
            >
              <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content Box */}
                <motion.div 
                   className="lg:col-start-1"
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: false, amount: 0.5 }}
                   variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { 
                        opacity: 1, 
                        x: 0,
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: 0.1
                        }
                      }
                   }}
                >
                  <motion.div 
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 mb-6 backdrop-blur-sm"
                  >
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: pillar.color }}></span>
                    <span className="text-sm font-medium uppercase tracking-wider text-slate-300">Feature 0{index + 1}</span>
                  </motion.div>
                  
                  <motion.h2 
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    className="text-5xl md:text-7xl font-bold mb-6"
                  >
                    {pillar.title}
                  </motion.h2>
                  <motion.p 
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    className="text-2xl text-teal-400 mb-8 font-light"
                  >
                    {pillar.subtitle}
                  </motion.p>
                  
                  <ul className="space-y-4 mb-10">
                    {pillar.description.map((item, i) => (
                      <motion.li 
                        key={i} 
                        variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                        className="flex items-start gap-3 text-lg text-slate-300"
                      >
                        <Check size={24} className="text-slate-500 shrink-0 mt-1" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.button 
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    onClick={() => setIsGalleryOpen(true)}
                    className="text-white border-b border-teal-500 pb-1 hover:text-teal-400 transition-colors flex items-center gap-2"
                  >
                    {pillar.cta} <ArrowRight size={16} />
                  </motion.button>
                </motion.div>
                
                {/* Space reserved for 3D visual interaction */}
                <div className="hidden lg:block h-[50vh]"></div>
              </div>
            </section>
          ))}
        </div>

        {/* Infrastructure Stats (Scroll Triggered) */}
        <section className="py-24 bg-slate-900 border-y border-slate-800">
          <div className="container mx-auto px-6">
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {CONTENT.stats.map((stat, i) => (
                <motion.div 
                  key={i} 
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                  }}
                  className="text-center p-6 border-r border-slate-800 last:border-0"
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-slate-500 uppercase tracking-wider text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="py-32 bg-slate-950">
          <div className="container mx-auto px-6">
            <div className="mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Complete health oversight.</h2>
              <p className="text-xl text-slate-400 max-w-2xl">
                From digitizing crumpled prescriptions to analyzing complex lab results, MedVault handles it all.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CONTENT.useCases.map((useCase, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                  className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-teal-500/50 hover:bg-slate-900 hover:shadow-2xl hover:shadow-teal-900/20 transition-all group"
                >
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 text-teal-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-teal-500/10 transition-all duration-300">
                    {renderIcon(useCase.icon)}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-teal-400 transition-colors">{useCase.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* App Screenshots Gallery */}
        <section id="insights" className="py-32 bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience MedVault AI</h2>
               <p className="text-slate-400 text-lg max-w-2xl mx-auto">Swipe through to explore our intuitive interface designed to put your health data at your fingertips.</p>
            </div>
            
            {/* Swipeable Screenshot Gallery */}
            <AppScreenshotCarousel />
          </div>
        </section>

        {/* Careers / Download */}
        <section id="download" className="py-32 bg-teal-900/20 border-y border-teal-900/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-50"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Take control of your health data.</h2>
            <div className="flex justify-center gap-4 mb-8 flex-col sm:flex-row items-center">
               <a 
                  href={APK_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-teal-900 font-bold rounded-full hover:bg-teal-50 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center group"
               >
                 <Download size={20} className="group-hover:animate-bounce" />
                 Download APK
               </a>
               <button 
                  onClick={() => setIsWishlistOpen(true)}
                  className="px-8 py-4 border border-teal-500/30 text-white font-bold rounded-full hover:bg-teal-500/10 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
               >
                 Join Waitlist
               </button>
            </div>
            
            <p className="text-slate-400 text-sm mb-8">
              Version 1.0.3 • Android APK • ~25MB
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-sm font-medium">
                AI Powered
              </span>
              <span className="px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-sm font-medium">
                HIPAA Compliant
              </span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

export default App;
