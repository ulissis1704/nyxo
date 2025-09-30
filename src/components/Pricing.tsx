'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pricingPlans = [
    {
      name: 'Starter',
      price: 'À partir de',
      amount: '3500 MAD',
      period: '/projet',
      description: 'Développement web - Parfait pour les petits projets et sites vitrines',
      features: [
        'Site vitrine (1-5 pages)',
        'Design responsive',
        'Optimisation SEO de base',
        'Support par email',
        'Livraison à partir de 2 semaines'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Business',
      price: 'À partir de',
      amount: '10000 MAD',
      period: '/projet',
      description: 'E-commerce et solutions avancées - Idéal pour les entreprises en croissance',
      features: [
        'Site web complet (5-15 pages)',
        'Design personnalisé',
        'E-commerce basique',
        'Optimisation SEO avancée',
        'Analytics intégrés',
        'Support prioritaire',
        'Maintenance 3 mois incluse',
        'Livraison à partir de 4 semaines'
      ],
      popular: false,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      price: 'À partir de',
      amount: '21000 MAD',
      period: '/projet',
      description: 'Solutions sur mesure pour grandes entreprises',
      features: [
        'Application web/mobile complète',
        'Architecture sur mesure',
        'Intégrations API avancées',
        'Sécurité renforcée',
        'Audit de performance',
        'Support prioritaire',
        'Maintenance 6 mois incluse',
        'Formation équipe incluse',
        'Livraison à partir de 8 semaines'
      ],
      popular: false,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const additionalServices = [
    {
      name: 'Audit Digital',
      price: '1400 MAD',
      description: 'Analyse complète de votre présence digitale'
    },
    {
      name: 'Formation Équipe',
      price: '2100 MAD',
      description: 'Formation à l&apos;utilisation de votre solution'
    },
    {
      name: 'Optimisation SEO',
      price: '2800 MAD',
      description: 'Amélioration du référencement naturel'
    },
    {
      name: 'Analyse de Données',
      price: '3500 MAD',
      description: 'Analyse et visualisation de vos données business'
    },
    {
      name: 'Machine Learning',
      price: 'À partir de 10000 MAD',
      description: 'Développement de modèles prédictifs et IA'
    },
    {
      name: 'Consulting Data',
      price: 'À partir de 5000 MAD',
      description: 'Conseil stratégique en data science'
    }
  ];

  return (
    <section ref={ref} id="pricing" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Fond décoratif */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Titre de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Mes <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Tarifs</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Des tarifs transparents et adaptés à vos besoins. Chaque projet est unique, 
            contactez-moi pour un devis personnalisé.
          </p>
        </motion.div>

        {/* Grille de tarifs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-start">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.2)"
              }}
              className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 hover:from-white/10 hover:to-white/15 transition-all duration-700 cursor-pointer border-2 border-white/20 hover:border-blue-400/50 overflow-hidden"
            >

              {/* Effet de fond animé */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>

              {/* Contenu */}
              <div className="relative z-10">
                {/* En-tête */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-6">{plan.description}</p>
                  
                  <div className="space-y-2">
                    <div className="text-sm text-gray-400">{plan.price}</div>
                    <div className="text-4xl font-bold text-white">{plan.amount}</div>
                    <div className="text-gray-400">{plan.period}</div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: (index * 0.1) + (featureIndex * 0.1) }}
                      className="flex items-center space-x-3 text-gray-300 group-hover:text-white transition-colors"
                    >
                      <div className="w-5 h-5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Bouton CTA */}
                <motion.a
                  href="/quote"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl"
                >
                  <span>Demander un devis</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services additionnels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Services Additionnels</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-blue-400/50"
              >
                <h4 className="text-lg font-semibold text-white mb-2">{service.name}</h4>
                <div className="text-2xl font-bold text-blue-400 mb-2">{service.price}</div>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-3xl p-8 border border-blue-400/30">
            <h3 className="text-2xl font-bold text-white mb-4">Besoin d&apos;un devis personnalisé ?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Chaque projet est unique. Contactez-moi pour discuter de vos besoins spécifiques 
              et obtenir un devis adapté à votre budget.
            </p>
            <motion.a
              href="/quote"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-3 mx-auto"
            >
              <span>Demander un devis</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
