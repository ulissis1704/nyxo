'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ExternalLink, X } from 'lucide-react';

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<{
    id: number;
    title: string;
    description: string;
    images: string[];
  } | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fonction pour ouvrir une image en grand
  const openImage = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  // Fonction pour fermer l'image agrandie
  const closeImage = () => {
    setSelectedImage(null);
  };

  // Fonction pour naviguer entre les images
  const navigateImage = useCallback((direction: 'prev' | 'next') => {
    if (!selectedProject?.images) return;
    
    const totalImages = selectedProject.images.length;
    let newIndex = currentImageIndex;
    
    if (direction === 'prev') {
      newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : totalImages - 1;
    } else {
      newIndex = currentImageIndex < totalImages - 1 ? currentImageIndex + 1 : 0;
    }
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(selectedProject.images[newIndex]);
  }, [selectedProject, currentImageIndex]);

  // Gestion des touches du clavier
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!selectedImage) return;
      
      switch (event.key) {
        case 'Escape':
          closeImage();
          break;
        case 'ArrowLeft':
          navigateImage('prev');
          break;
        case 'ArrowRight':
          navigateImage('next');
          break;
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage, currentImageIndex, selectedProject, navigateImage]);

  const projects = [
    {
      id: 1,
      title: 'École du Maroc',
      description: 'Plateforme complète permettant aux écoles du Maroc de s\'enregistrer et d\'avoir une visibilité sur les tarifs, programmes et informations des établissements éducatifs.',
      image: '/Capture d\'écran 2025-09-30 203121.png',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
      status: 'En production',
      link: '#',
      category: 'Web',
      year: '2024',
      images: [
        '/Capture d\'écran 2025-09-30 203121.png',
        '/Capture d\'écran 2025-09-30 204945.png',
        '/Capture d\'écran 2025-09-30 204954.png',
        '/Capture d\'écran 2025-09-30 205003.png',
        '/Capture d\'écran 2025-09-30 205015.png',
        '/Capture d\'écran 2025-09-30 205023.png'
      ]
    },
    {
      id: 2,
      title: 'K.S Protection Consulting',
      description: 'Site web professionnel pour société de sécurité et surveillance. Solutions sur-mesure en matière de sécurité, surveillance, gardiennage et sécurité incendie.',
      image: '/ks.png',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
      status: 'En ligne',
      link: 'https://ksprotectionconsulting.com/prestation',
      category: 'Web',
      year: '2024'
    },
  ];

  return (
    <section ref={ref} id="portfolio" className="py-24 bg-slate-800 relative overflow-hidden">
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
            Mes <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projets</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez quelques-uns de mes projets récents qui démontrent mon expertise 
            en développement web et mobile.
          </p>
        </motion.div>

        {/* Grille de projets - Design simple et moderne */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
              }}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-500"
            >
              {/* En-tête du projet */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    {project.id === 2 ? (
                      <div className="w-8 h-8 relative">
                        <Image 
                          src="/ks.png" 
                          alt="K.S Protection Logo" 
                          fill 
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <span className="text-white font-bold text-lg">{project.category.charAt(0)}</span>
                    )}
                  </div>
                  <div>
                    <div className="text-blue-400 font-semibold text-sm">{project.category}</div>
                    <div className="text-gray-400 text-xs">{project.year}</div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  project.status === 'En ligne' ? 'bg-green-500/20 text-green-400' :
                  project.status === 'Terminé' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {project.status}
                </span>
              </div>
              
              {/* Titre et description */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              {/* Technologies */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Bouton d'action */}
              {project.images ? (
                <motion.button
                  onClick={() => setSelectedProject(project)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span>Voir le projet</span>
                </motion.button>
              ) : (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span>Voir le projet</span>
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Galerie d'images en popup */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-slate-900 rounded-2xl p-6 max-w-6xl max-h-[90vh] overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton fermer */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Titre */}
            <h3 className="text-2xl font-bold text-white mb-6 pr-12">
              {selectedProject.title}
            </h3>

            {/* Galerie d'images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[75vh] overflow-y-auto">
              {selectedProject.images.map((image: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group cursor-pointer"
                  onClick={() => openImage(image, index)}
                >
                  <div className="relative w-full h-80 rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${selectedProject.title} - Image ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold">Cliquer pour agrandir</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Description */}
            <div className="mt-6">
              <p className="text-gray-300 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Modal d'agrandissement d'image */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeImage}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-8xl max-h-[98vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton fermer */}
            <button
              onClick={closeImage}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Boutons de navigation */}
            {selectedProject?.images && selectedProject.images.length > 1 && (
              <>
                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Image agrandie */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={selectedImage}
                alt={`Image agrandie ${currentImageIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Indicateur d'image actuelle */}
            {selectedProject?.images && selectedProject.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-white text-sm">
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </span>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}