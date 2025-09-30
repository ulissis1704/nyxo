'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="min-h-screen bg-black relative overflow-hidden pt-32">
      {/* Fond avec grille animée */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(59,130,246,0.1)_50%,transparent_100%)] bg-[length:200%_100%] animate-pulse"></div>
        
        {/* Grille de fond */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
        </div>
        
        {/* Formes géométriques flottantes */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${20 + (i * 10)}%`,
                top: `${10 + (i * 8)}%`,
                width: `${60 + (i * 20)}px`,
                height: `${60 + (i * 20)}px`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            >
              <div className={`w-full h-full border border-blue-400/20 ${
                i % 3 === 0 ? 'rounded-full' : 
                i % 3 === 1 ? 'rounded-lg' : 'rounded-none'
              }`}></div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Contenu principal */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Contenu texte */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-400/30"
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-blue-300 font-medium">Basé à Rabat, Maroc</span>
              </motion.div>

              {/* Titre principal */}
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
                >
                  <span className="block text-white">Solutions</span>
                  <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
                    Digitales
                  </span>
                  <span className="block text-white">Sur Mesure</span>
                </motion.h1>
              </div>

              {/* Sous-titre */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl"
              >
                Votre partenaire digital à Rabat. Nous créons des solutions web et mobiles 
                qui transforment votre vision en réalité.
              </motion.p>

              {/* Boutons CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/quote'}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-3 text-lg shadow-lg hover:shadow-xl"
                >
                  <span>Travaillons ensemble</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('#portfolio')}
                  className="px-8 py-4 border-2 border-gray-400 text-gray-300 font-semibold rounded-xl hover:border-blue-400 hover:text-blue-400 transition-all duration-300 text-lg"
                >
                  Voir mes projets
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Section visuelle */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative flex justify-center items-center"
            >
              {/* Cercle principal */}
              <div className="relative w-96 h-96">
                {/* Cercle extérieur animé */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-blue-400/30 rounded-full"
                ></motion.div>
                
                {/* Cercle moyen */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 border border-cyan-400/40 rounded-full"
                ></motion.div>
                
                {/* Cercle intérieur avec contenu */}
                <div className="absolute inset-16 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white/30"
                    >
                      <div className="w-24 h-24 relative">
                        <Image 
                          src="/logo.png" 
                          alt="NyxoSolution Logo" 
                          fill 
                          className="object-contain"
                        />
                      </div>
                    </motion.div>
                    <div className="text-white font-semibold text-lg">NyxoSolution</div>
                    <div className="text-blue-300 text-sm">Solutions Digitales</div>
                  </div>
                </div>
                
                {/* Points flottants */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-blue-400 rounded-full"
                    style={{
                      top: `${20 + (i * 10)}%`,
                      left: `${10 + (i * 15)}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 2 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
}