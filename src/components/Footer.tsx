'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#apropos', label: 'À propos' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '/pricing', label: 'Tarifs' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-slate-900 py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="#accueil" className="flex items-center space-x-2">
              <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-md">
                NS
              </div>
              <span className="text-xl font-bold text-white">NyxoSolution</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Votre partenaire digital à Rabat, Maroc. Nous transformons vos idées en solutions web et mobiles performantes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SEO Text */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Expertise</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Audit digital Rabat, développement web Maroc, solutions mobiles Casablanca, 
              consulting IT, optimisation SEO, applications sur mesure.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} NyxoSolution, Rabat – Maroc. Tous droits réservés.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, color: '#3b82f6' }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
          >
            <span className="text-sm">Retour en haut</span>
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}