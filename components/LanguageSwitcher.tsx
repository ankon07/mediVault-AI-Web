import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'bn' : 'en';
    i18n.changeLanguage(newLang);
  };

  const currentLang = i18n.language || 'en';

  return (
    <button
      onClick={toggleLanguage}
      className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-2"
      aria-label="Switch language"
    >
      <span className={currentLang === 'en' ? 'text-white' : 'text-slate-500'}>
        {t('languageSwitcher.en')}
      </span>
      <span className="text-slate-600">/</span>
      <span className={currentLang === 'bn' ? 'text-white' : 'text-slate-500'}>
        {t('languageSwitcher.bn')}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
