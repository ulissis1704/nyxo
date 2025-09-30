'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: 'L\'avenir du développement web avec l\'IA',
    excerpt: 'Comment l\'intelligence artificielle transforme la façon dont nous créons des applications web modernes.',
    date: '15 Jan 2024',
    category: 'Technologie',
    readTime: '5 min',
    image: '/api/placeholder/400/300'
  },
  {
    id: 2,
    title: 'Data Science au Maroc : opportunités et défis',
    excerpt: 'Analyse du marché de la data science au Maroc et des opportunités pour les entrepreneurs locaux.',
    date: '10 Jan 2024',
    category: 'Entrepreneuriat',
    readTime: '7 min',
    image: '/api/placeholder/400/300'
  },
  {
    id: 3,
    title: 'React Native vs Flutter : guide complet',
    excerpt: 'Comparaison détaillée des deux frameworks de développement mobile cross-platform.',
    date: '5 Jan 2024',
    category: 'Développement',
    readTime: '8 min',
    image: '/api/placeholder/400/300'
  },
  {
    id: 4,
    title: 'Optimisation des performances web',
    excerpt: 'Techniques avancées pour améliorer les performances de vos applications web.',
    date: '1 Jan 2024',
    category: 'Performance',
    readTime: '6 min',
    image: '/api/placeholder/400/300'
  }
];

export default function News() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} id="news" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Titre de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-8">
            News
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Mes dernières réflexions sur la technologie, l&apos;entrepreneuriat 
            et l&apos;innovation digitale.
          </p>
        </motion.div>

        {/* Grille d'articles */}
        <motion.div
          style={{ y }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                y: -5
              }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image de l'article */}
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-2xl font-bold text-gray-400">
                    {item.title.charAt(0)}
                  </div>
                </div>
                
                {/* Overlay au hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/50 flex items-center justify-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center space-x-2 text-white"
                  >
                    <span>Lire l&apos;article</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Contenu de l'article */}
              <div className="p-6">
                {/* Métadonnées */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{item.date}</span>
                    </div>
                    <span>•</span>
                    <span>{item.readTime}</span>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                    {item.category}
                  </span>
                </div>

                {/* Titre */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                {/* Extrait */}
                <p className="text-gray-600 leading-relaxed">
                  {item.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bouton voir tous les articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors cursor-pointer"
          >
            Voir tous les articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

