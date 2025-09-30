'use client';

import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Plateforme e-commerce complète avec paiement sécurisé et analytics avancés.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    category: 'Web App'
  },
  {
    id: 2,
    title: 'AI Analytics Dashboard',
    description: 'Tableau de bord d\'analytics avec intelligence artificielle pour l\'analyse prédictive.',
    technologies: ['Python', 'TensorFlow', 'React', 'Docker'],
    category: 'AI/ML'
  },
  {
    id: 3,
    title: 'Mobile Banking App',
    description: 'Application mobile de banque avec authentification biométrique.',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
    category: 'Mobile'
  },
  {
    id: 4,
    title: 'SaaS Management Tool',
    description: 'Outil de gestion SaaS avec intégrations multiples et automatisation.',
    technologies: ['Vue.js', 'Express', 'Redis', 'Kubernetes'],
    category: 'SaaS'
  }
];

export default function Projects() {
  return (
    <section id="projets" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projets
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une sélection de mes réalisations les plus récentes, 
            alliant créativité et expertise technique.
          </p>
        </div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Image du projet */}
              <div className="h-48 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                <div className="text-6xl font-bold text-blue-200">
                  {project.title.charAt(0)}
                </div>
              </div>

              {/* Contenu du projet */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                  <span className="text-sm text-gray-500">2024</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Boutons d'action */}
                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    Voir le projet
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                    <Github className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bouton voir tous les projets */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
            Voir tous les projets
          </button>
        </div>
      </div>
    </section>
  );
}