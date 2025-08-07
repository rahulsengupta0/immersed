import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import masterclassBanner from '../assets/Masterclass.png';
import { useNavigate } from 'react-router-dom';
import './MasterclassBanner.css';

const MasterclassBanner = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  const handleClick = () => {
    navigate('/masterclass');
  };

  // 3D Background Component - now properly sized
  const ThreeDBackground = () => {
    return (
      <div className="three-d-background-container">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Stars 
            radius={100} 
            depth={50} 
            count={5000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={1} 
          />
          <mesh position={[0, 0, -10]} rotation={[0.1, 0.2, 0]}>
            <icosahedronGeometry args={[3, 1]} />
            <meshStandardMaterial 
              color="#0284c7" 
              transparent 
              opacity={0.6} 
              wireframe 
            />
          </mesh>
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={0.5} 
          />
        </Canvas>
      </div>
    );
  };

  return (
    <section 
      ref={containerRef}
      className="masterclass-hero-section"
    >
      {/* 3D Animated Background - now full width */}
      <ThreeDBackground />

      {/* Floating Particles - now relative to component */}
      <motion.div 
        className="floating-particles-container"
        style={{ y }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ 
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
              }
            }}
          />
        ))}
      </motion.div>

      <div className="masterclass-content-wrapper">
        {/* Banner Image */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 50 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
          className="masterclass-hero-image-container"
          style={{ opacity }}
        >
          <motion.img
            src={masterclassBanner}
            alt="Masterclass Banner"
            className="masterclass-hero-image"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div 
            className="image-glow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
          className="masterclass-hero-text"
          style={{ opacity }}
        >
          <motion.p 
            className="masterclass-hero-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.span 
              className="highlight-word"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Everything
            </motion.span> You Need to Go{' '}
            <motion.span 
              className="highlight-word"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Private
            </motion.span> — All in One Place
          </motion.p>

          <motion.button 
            onClick={handleClick} 
            className="masterclass-hero-button"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 20px rgba(2, 132, 199, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, delay: 0.9 }}
          >
            Learn More
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default MasterclassBanner;