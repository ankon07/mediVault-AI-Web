import React from 'react';
import { CONTENT } from '../constants';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const { team, email } = CONTENT.footer; 

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-8">
             <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-teal-500 rounded-br-lg rounded-tl-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">M</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">MedVault AI</span>
                </div>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Secure medical data infrastructure for the AI era. 
                  Protecting patient privacy while enabling clinical innovation.
                </p>
             </div>
             
             <div className="space-y-2">
                <p className="text-white font-semibold">{team}</p>
                <a 
                  href={`mailto:${email}`} 
                  className="flex items-center gap-2 text-teal-400 hover:text-white transition-colors text-sm"
                >
                  <Mail size={16} />
                  {email}
                </a>
             </div>

             <div className="flex gap-4">
               <a href="#" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-teal-400 transition-colors">
                 <Twitter size={18} />
               </a>
               <a href="#" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-teal-400 transition-colors">
                 <Linkedin size={18} />
               </a>
               <a href="#" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-teal-400 transition-colors">
                 <Github size={18} />
               </a>
             </div>
          </div>
          
          {CONTENT.footer.links.map((column) => (
            <div key={column.category}>
              <h4 className="text-white font-semibold mb-6">{column.category}</h4>
              <ul className="space-y-4">
                {column.items.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">{CONTENT.footer.copyright}</p>
          <div className="flex gap-6 text-sm text-slate-500">
             <a href="#" className="hover:text-white transition-colors">Privacy</a>
             <a href="#" className="hover:text-white transition-colors">Terms</a>
             <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;