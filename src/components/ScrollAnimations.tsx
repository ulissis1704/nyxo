'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  delay?: number;
}

export default function ScrollAnimation({ 
  children, 
  className = '', 
  direction = 'up', 
  distance = 100,
  delay = 0 
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  
  const y = useTransform(scrollYProgress, [0, 1], 
    direction === 'up' ? [distance, -distance] : 
    direction === 'down' ? [-distance, distance] : [0, 0]
  );
  
  const x = useTransform(scrollYProgress, [0, 1], 
    direction === 'left' ? [distance, -distance] : 
    direction === 'right' ? [-distance, distance] : [0, 0]
  );
  
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 15, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [0, 10, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  

  const springY = useSpring(y, springConfig);
  const springX = useSpring(x, springConfig);
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);
  const springScale = useSpring(scale, springConfig);
  const springOpacity = useSpring(opacity, springConfig);

  return (
    <motion.div
      ref={ref}
      style={{
        y: springY,
        x: springX,
        rotateX: springRotateX,
        rotateY: springRotateY,
        scale: springScale,
        opacity: springOpacity,
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Composant pour les animations de particules
export function ParticleAnimation() {
  const ref = useRef(null);

  // Valeurs fixes pour éviter les problèmes d'hydratation
  const particleData = [
    { x: 20, y: 30, size: 3, hue: 220, left: 15, top: 25, duration: 3 },
    { x: 80, y: 15, size: 4, hue: 240, left: 60, top: 10, duration: 4 },
    { x: 50, y: 70, size: 2, hue: 260, left: 40, top: 65, duration: 5 },
    { x: 90, y: 80, size: 3, hue: 200, left: 75, top: 70, duration: 3.5 },
    { x: 10, y: 60, size: 4, hue: 230, left: 5, top: 55, duration: 4.5 },
    { x: 70, y: 40, size: 2, hue: 250, left: 55, top: 35, duration: 3.8 },
    { x: 30, y: 85, size: 3, hue: 210, left: 25, top: 80, duration: 4.2 },
    { x: 85, y: 25, size: 4, hue: 270, left: 70, top: 20, duration: 3.2 },
    { x: 40, y: 50, size: 2, hue: 235, left: 35, top: 45, duration: 4.8 },
    { x: 60, y: 90, size: 3, hue: 245, left: 50, top: 85, duration: 3.6 }
  ];

  const particles = particleData.map((particle, i) => {

    return (
      <motion.div
        key={i}
        style={{
          scale: 1,
          opacity: 0.6,
          position: 'absolute',
          width: particle.size,
          height: particle.size,
          background: `hsl(${particle.hue}, 70%, 60%)`,
          borderRadius: '50%',
          left: `${particle.left}%`,
          top: `${particle.top}%`,
        }}
        animate={{
          rotate: [0, 360],
          scale: [0, 1, 0],
        }}
        transition={{
          duration: particle.duration,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    );
  });

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles}
    </div>
  );
}

// Composant pour les effets de morphing
export function MorphingBackground() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const path = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [
    "M0,0 L100,0 L100,100 L0,100 Z",
    "M0,0 L100,20 L100,80 L0,100 Z",
    "M0,20 L100,0 L100,100 L0,80 Z",
    "M0,0 L100,0 L100,100 L0,100 Z"
  ]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.path
          d={path}
          fill="url(#gradient)"
          opacity={0.1}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
}
