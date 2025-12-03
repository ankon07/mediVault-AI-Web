import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { CONTENT } from '../constants';
import { AnimatePresence, motion } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-4 bg-slate-900/80 backdrop-blur-md border-b border-slate-800' : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-teal-500 rounded-br-lg rounded-tl-lg flex items-center justify-center">
               <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">MedVault AI</span>
          </div>

          <button 
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-3 text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            <span className="hidden sm:block">Menu</span>
            <div className="p-2 rounded-full border border-slate-700 group-hover:bg-teal-500/10 group-hover:border-teal-500 transition-all">
              <Menu size={20} />
            </div>
          </button>
        </div>
      </nav>

      {/* Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-slate-950 flex flex-col"
          >
            <div className="container mx-auto px-6 py-6 flex justify-between items-center">
              <div className="flex items-center gap-2">
                 <div className="w-8 h-8 bg-teal-500 rounded-br-lg rounded-tl-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">M</span>
                 </div>
                 <span className="text-xl font-bold tracking-tight text-white">MedVault AI</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full border border-slate-700 hover:bg-red-500/10 hover:border-red-500 text-slate-300 hover:text-red-500 transition-all"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                {CONTENT.nav.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    className="block text-5xl md:text-7xl font-bold text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
              
              <div className="hidden lg:block space-y-8 p-12 bg-slate-900 rounded-3xl border border-slate-800">
                <h3 className="text-2xl font-light text-white">Latest from the vault</h3>
                <div className="space-y-6">
                    {CONTENT.insights.slice(0,2).map((insight) => (
                        <div key={insight.title} className="group cursor-pointer">
                            <p className="text-teal-500 text-sm mb-1">{insight.tag}</p>
                            <h4 className="text-xl text-slate-300 group-hover:text-white transition-colors">{insight.title}</h4>
                        </div>
                    ))}
                </div>
                <a href="#careers" className="inline-flex items-center gap-2 text-white font-medium hover:gap-4 transition-all">
                    Join our team <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;