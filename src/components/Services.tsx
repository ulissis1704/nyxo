'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, ShieldCheck, Smartphone, Cloud } from 'lucide-react';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: ShieldCheck,
      title: 'Audit Digital',
      description: 'Analyse approfondie de votre infrastructure pour identifier les failles de sécurité et les opportunités d&apos;optimisation.',
      color: 'from-green-500 to-emerald-500',
      features: ['Audit de sécurité', 'Analyse de performance', 'Audit SEO technique', 'Recommandations stratégiques']
    },
    {
      icon: Code,
      title: 'Développement Web',
      description: 'Conception et développement de sites vitrines, e-commerce et applications web sur mesure avec les dernières technologies.',
      color: 'from-blue-500 to-cyan-500',
      features: ['Sites vitrines modernes', 'Plateformes E-commerce', 'Applications web sur mesure', 'API RESTful']
    },
    {
      icon: Smartphone,
      title: 'Développement Mobile',
      description: 'Création d&apos;applications mobiles natives et cross-platform pour iOS et Android, offrant une expérience utilisateur fluide.',
      color: 'from-purple-500 to-pink-500',
      features: ['Applications iOS/Android', 'React Native', 'Expérience utilisateur intuitive', 'Performance optimisée']
    },
    {
      icon: Cloud,
      title: 'Solutions Data',
      description: 'Gestion et analyse de données, intégration de solutions cloud et systèmes de stockage sécurisés pour vos données.',
      color: 'from-orange-500 to-red-500',
      features: ['Analyse de données', 'Solutions Cloud (AWS, Azure)', 'Bases de données', 'Intelligence artificielle']
    }
  ];


  return (
    <section ref={ref} id="services" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Fond décoratif */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Titre de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Mes <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Des solutions complètes pour transformer vos idées en réalité digitale. 
            De l&apos;audit à la mise en production, je vous accompagne à chaque étape.
          </p>
        </motion.div>

        {/* Grille de services - Style moderne */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                y: -15,
                scale: 1.03,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)"
              }}
              className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 hover:from-white/10 hover:to-white/15 transition-all duration-700 cursor-pointer border border-white/20 hover:border-blue-400/50 overflow-hidden"
            >
              {/* Effet de fond animé */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Icône avec animation */}
              <motion.div
                whileHover={{ rotate: 10, scale: 1.2 }}
                className={`relative w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:shadow-2xl transition-all duration-500`}
              >
                <service.icon className="w-10 h-10 text-white" />
                <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>

              {/* Contenu */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  {service.description}
                </p>

                {/* Features avec style amélioré */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: (index * 0.1) + (featureIndex * 0.1) }}
                      className="flex items-center space-x-3 text-gray-300 group-hover:text-white transition-colors"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                      <span className="font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}