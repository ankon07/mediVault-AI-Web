import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { CONTENT } from '../constants';
import { useTranslation } from 'react-i18next';

interface FeaturesGalleryProps {
  onClose: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const FeaturesGallery: React.FC<FeaturesGalleryProps> = ({ onClose }) => {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-md flex flex-col">
      {/* Header */}
      <div className="container mx-auto px-6 py-6 flex justify-between items-center z-10 border-b border-slate-800/50">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-teal-500 rounded-br-lg rounded-tl-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
           </div>
           <span className="text-xl font-bold tracking-tight text-white">Feature Gallery</span>
        </div>
        <button 
          onClick={onClose}
          className="p-2 rounded-full border border-slate-700 hover:bg-slate-800 text-slate-300 hover:text-white transition-all"
        >
          <X size={24} />
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <div className="container mx-auto px-6 py-12">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Designed for clarity.</h2>
            <p className="text-xl text-slate-400">
              A refined mobile experience that puts your health data front and center, 
              without the clutter.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {CONTENT.gallery.map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="group relative flex flex-col items-center"
              >
                {/* Phone Frame */}
                <div 
                  className="relative w-full max-w-[320px] aspect-[1/2.16] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden mb-8 transition-transform duration-500 ease-out group-hover:-translate-y-4 group-hover:border-slate-700 group-hover:shadow-teal-900/20"
                >
                  {/* Image Placeholder - User should replace src with actual assets */}
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  
                  {/* Glossy Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none rounded-[2.5rem]"></div>
                </div>

                {/* Caption */}
                <div className="text-center max-w-[300px]">
                  <span className={`inline-block px-3 py-1 mb-3 text-xs font-bold uppercase tracking-wider rounded-full border ${
                    t(item.category) === t('gallery.categories.core') ? 'bg-teal-500/10 border-teal-500/30 text-teal-400' :
                    t(item.category) === t('gallery.categories.intelligence') ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' :
                    'bg-slate-700/30 border-slate-600 text-slate-300'
                  }`}>
                    {t(item.category)}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{t(item.title)}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {t(item.description)}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-24 pb-12">
            <button
              onClick={onClose}
              className="px-8 py-4 border border-slate-700 text-white font-medium rounded-full hover:bg-slate-800 transition-colors"
            >
              {t('common.closeGallery')}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeaturesGallery;