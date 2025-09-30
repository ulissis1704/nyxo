'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Brain, Terminal } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { icon: Brain, name: 'Data Science', color: 'from-purple-500 to-pink-500' },
    { icon: Database, name: 'Machine Learning', color: 'from-green-500 to-emerald-500' },
    { icon: Terminal, name: 'Python Expert', color: 'from-yellow-500 to-orange-500' },
    { icon: Code, name: 'Next.js & React', color: 'from-blue-500 to-cyan-500' }
  ];

  return (
    <section ref={ref} id="apropos" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Fond décoratif */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contenu texte */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                À propos de <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Hamza Bayahia</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Je suis Hamza Bayahia, Data Scientist et expert en data, ingénieur diplômé à Toulouse. 
                  Fondateur de NyxoSolution, j&apos;accompagne les entreprises dans l&apos;analyse de données, 
                  le machine learning et le développement de solutions digitales intelligentes.
                </p>
                
                <p>
                  Mon expertise inclut Python, machine learning, Next.js, React, et l&apos;analyse de données avancée. 
                  Je transforme vos données en insights actionnables et développe des solutions sur mesure.
                </p>
              </div>
            </div>

            {/* Compétences */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Mes Compétences</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10"
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color}`}>
                      <skill.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Photo/Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
              <span className="text-6xl font-bold text-white">HB</span>
              {/* Effets de lumière subtils */}
              <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse"></div>
            </div>
            {/* Lignes animées en arrière-plan */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute w-full h-full border border-blue-400/30 rounded-full"
              ></motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute w-3/4 h-3/4 border border-gray-300/20 rounded-full"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}