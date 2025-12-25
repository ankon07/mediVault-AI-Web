import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { CONTENT } from '../constants';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

// Android-style robot icon component
const AndroidIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    {/* Android robot head */}
    <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/>
  </svg>
);

interface NavigationProps {
  downloadCount?: number | null;
  onDownloadClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ downloadCount = null, onDownloadClick }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadClick = () => {
    if (onDownloadClick) {
      onDownloadClick();
    }
  };

  const scrollToDownload = () => {
    const downloadSection = document.getElementById('download');
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Download Counter and Button */}
            <div className="flex items-center gap-2">
              {downloadCount !== null && downloadCount !== undefined && (
                <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 border border-slate-700 rounded-full backdrop-blur-sm">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse"></div>
                  <span className="text-slate-300 text-xs font-medium">
                    {downloadCount.toLocaleString()}
                  </span>
                </div>
              )}
              
              <button
                onClick={handleDownloadClick}
                className="group flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                title="Download App"
              >
                <span className="hidden sm:block">{t('nav.download')}</span>
                <div className="p-2 rounded-full border border-slate-700 group-hover:bg-green-500/10 group-hover:border-green-500 group-hover:text-green-400 transition-all">
                  <AndroidIcon size={20} />
                </div>
              </button>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="group flex items-center gap-3 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              <span className="hidden sm:block">{t('common.menu')}</span>
              <div className="p-2 rounded-full border border-slate-700 group-hover:bg-teal-500/10 group-hover:border-teal-500 transition-all">
                <Menu size={20} />
              </div>
            </button>
          </div>
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
                    {t(item.label)}
                  </motion.a>
                ))}
              </div>

              <div className="hidden lg:block space-y-8 p-12 bg-slate-900 rounded-3xl border border-slate-800">
                <h3 className="text-2xl font-light text-white">{t('nav.latestFromVault')}</h3>
                <div className="space-y-6">
                    {CONTENT.insights.slice(0,2).map((insight, idx) => (
                        <div key={insight.title} className="group cursor-pointer">
                            <p className="text-teal-500 text-sm mb-1">{t(`insights.items.${idx}.tag`)}</p>
                            <h4 className="text-xl text-slate-300 group-hover:text-white transition-colors">{t(`insights.items.${idx}.title`)}</h4>
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
