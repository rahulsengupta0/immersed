
import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import './AboutSection.css';

const AboutSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoContainerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    if (videoContainerRef.current) {
      const rect = videoContainerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  const handlePlayClick = () => {
    setIsModalOpen(true);
  };

  // Transform mouse positions for the follower line
  const lineX = useTransform(mouseX, value => value - 100);
  const lineY = useTransform(mouseY, value => value - 1);

  // Floating gradient blobs
  const floatingBlobs = [
    { id: 1, size: 140, x: 10, y: 15, gradient: 'radial-gradient(circle, rgba(93, 173, 226, 0.4), transparent)', delay: 0 },
    { id: 2, size: 100, x: 80, y: 70, gradient: 'radial-gradient(circle, rgba(255, 107, 107, 0.3), transparent)', delay: 0.5 },
    { id: 3, size: 160, x: 30, y: 50, gradient: 'radial-gradient(circle, rgba(29, 209, 161, 0.3), transparent)', delay: 1 },
    { id: 4, size: 120, x: 70, y: 20, gradient: 'radial-gradient(circle, rgba(84, 160, 255, 0.3), transparent)', delay: 1.5 },
    { id: 5, size: 130, x: 50, y: 80, gradient: 'radial-gradient(circle, rgba(93, 173, 226, 0.35), transparent)', delay: 2 },
  ];

  // Floating particles
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <>
      {/* Video Modal */}
      {isModalOpen && (
        <motion.div 
          className="video-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div 
            className="video-modal-content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe 
              width="100%" 
              height="100%" 
              src="https://drive.google.com/file/d/1jUjnrebq_Z6jy64RWnIZqAHjD6JEfW9Y/preview" 
              allow="autoplay; fullscreen"
              title="Creditor Academy Video"
            ></iframe>
            <button 
              className="modal-close-btn"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close video modal"
            >
              &times;
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Main Section */}
      <section className="about-section">
        {/* Background Animations */}
        <div className="background-animations">
          {floatingBlobs.map(blob => (
            <motion.div
              key={blob.id}
              className="floating-blob"
              initial={{ 
                x: `${blob.x}%`,
                y: `${blob.y}%`,
                opacity: 0.3,
              }}
              animate={{
                x: [`${blob.x}%`, `${blob.x + 8}%`, `${blob.x - 5}%`, `${blob.x}%`],
                y: [`${blob.y}%`, `${blob.y + 12}%`, `${blob.y - 8}%`, `${blob.y}%`],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 12 + blob.id * 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: blob.delay,
              }}
              style={{
                width: blob.size,
                height: blob.size,
                background: blob.gradient,
                filter: 'blur(30px)',
              }}
            />
          ))}
          
          {particles.map(particle => (
            <motion.div
              key={particle.id}
              className="floating-particle"
              initial={{
                x: `${particle.x}%`,
                y: `${particle.y}%`,
                opacity: 0.5,
                scale: 1,
              }}
              animate={{
                x: [`${particle.x}%`, `${particle.x + (Math.random() * 15 - 7.5)}%`],
                y: [`${particle.y}%`, `${particle.y + (Math.random() * 15 - 7.5)}%`],
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: Math.random() * 7 + 8,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'linear',
                delay: Math.random() * 2,
              }}
              style={{
                width: particle.size,
                height: particle.size,
                background: 'rgba(93, 173, 226, 0.8)',
                borderRadius: '50%',
              }}
            />
          ))}
        </div>

        {/* Video Container */}
        <motion.div 
          ref={videoContainerRef}
          className="about-video-container"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          onMouseMove={handleMouseMove}
        >
          <div className="video-thumbnail" onClick={handlePlayClick}>
            <div className="play-button" />
            <div className="branding-overlay">
              CREDITOR ACADEMY
              <span>PRIVATE MONTESSORI ASSOCIATION</span>
            </div>
            <div className="video-glow" />
            <motion.div 
              className="mouse-follower-line"
              style={{
                x: lineX, // Use transformed value
                y: lineY, // Use transformed value
              }}
            />
          </div>
        </motion.div>

        {/* Text Container */}
        <motion.div 
          className="about-text-container"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="about-title">About Creditor Academy</h2>
          <p className="about-description">
            At Creditor Academy, we equip individuals and entrepreneurs with the knowledge to unlock the full power of the "Private" operating outside the public system, which means more control, more protection, and more opportunity. Our educational platform & Instructors empower you to structure your life and business for maximum privacy, asset protection, and true independence. This is where knowledge becomes sovereignty, because real freedom begins in the Private.
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default AboutSection;