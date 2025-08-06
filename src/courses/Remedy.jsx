import React, { useEffect, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import remedyBanner from '../assets/iwrn_banner.png';
import flexImage from '../assets/flex.jpg';

import RemedyOfferSection from '../components/RemedyOfferSection';
import GameBanner from '../components/GameBanner';
import RemedyMaster from '../components/RemedyMaster';
import RemedyResult from '../components/RemedyResult';

const Remedy = () => {
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const fadeInUp = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const zoomIn = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const slideIn = (direction = 'left') => ({
    hidden: {
      x: direction === 'left' ? -100 : 100,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 15
      }
    }
  });

  const sectionStyle = {
    padding: isMobile ? '50px 5%' : '80px 6%',
    background: '#f4f6f8',
    fontFamily: "'Poppins', sans-serif",
  };

  const contentGridStyle = {
    maxWidth: '1200px',
    margin: 'auto',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: isMobile ? '30px' : '50px',
  };

  const imageContainerStyle = {
    flex: 1,
    minWidth: isMobile ? '100%' : '280px',
    display: 'flex',
    justifyContent: 'center',
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const imageStyle = {
    width: '100%',
    maxWidth: '434px',
    borderRadius: '14px',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 8px 24px',
  };

  const textContainerStyle = {
    flex: 1,
    minWidth: isMobile ? '100%' : '280px',
  };

  const boxStyle = {
    background: '#ffffff',
    borderLeft: '4px solid #3498db',
    padding: isMobile ? '15px' : '20px',
    borderRadius: '10px',
    boxShadow: '0 6px 18px rgba(0,0,0,0.05)',
    fontSize: isMobile ? '0.9rem' : '0.95rem',
    color: '#2c3e50',
    lineHeight: '1.6',
  };

  return (
    <>
      {/* Banner Image */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div style={{ width: '100%', height: 'auto', position: 'relative', overflow: 'hidden' }}>
          <motion.img
            src={remedyBanner}
            alt="I Want Remedy Now Banner"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              display: 'block',
              borderRadius: '8px',
            }}
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2 }}
          />
        </div>
      </motion.section>

      {/* Remedy Video Section */}
      <motion.section
        style={{
          padding: isMobile ? '50px 5%' : '80px 6%',
          background: 'linear-gradient(to right, #eef5ff, #ffffff)',
          fontFamily: "'Poppins', sans-serif",
        }}
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          style={{ 
            maxWidth: '800px', 
            margin: '0 auto 50px', 
            textAlign: 'center' 
          }}
        >
          <motion.h2 
            style={{ 
              fontSize: isMobile ? '1.8rem' : '2.5rem', 
              color: '#0056b3', 
              marginBottom: '20px', 
              lineHeight: '1.4' 
            }}
            whileHover={{ scale: 1.02 }}
          >
            <span style={{ color: '#3598db', fontWeight: 'bold' }}>
              I WANT A REMEDY NOW <span style={{ color: '#3598db' }}>!!</span>
            </span>
          </motion.h2>
          <motion.p 
            style={{ 
              color: '#595f66', 
              fontSize: isMobile ? '1rem' : '1.1rem', 
              marginTop: '10px' 
            }}
            variants={fadeInUp}
          >
            Restore Your Credit. Discharge Debt. Take Your Power Back.
          </motion.p>
        </motion.div>

        <motion.div
          variants={zoomIn}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          style={{
            width: '100%',
            maxWidth: '960px',
            margin: '40px auto',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
          }}
        >
          <div style={{ position: 'relative', paddingTop: '56.25%', height: 0 }}>
            <iframe
              src="https://drive.google.com/file/d/1nzMTFFILh8d21_FUF0VuD9I0kJiLVMCp/preview"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Remedy Video"
              style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%', 
                border: 'none' 
              }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Take Your Power Back Section */}
      <motion.section
        style={sectionStyle}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div style={contentGridStyle}>
          <AnimatePresence>
            <motion.div
              style={imageContainerStyle}
              variants={slideIn('right')}
              key="image"
            >
              <motion.img
                src={flexImage}
                alt="Take Your Power Back"
                style={imageStyle}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.03 }}
                transition={{ 
                  scale: { duration: 0.3 },
                  opacity: { duration: 0.8 }
                }}
                viewport={{ once: false, amount: 0.2 }}
              />
            </motion.div>
            <motion.div
              style={textContainerStyle}
              variants={slideIn('left')}
              key="text"
            >
              <motion.div
                style={boxStyle}
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <p style={{ margin: 0 }}>
                  <strong>Tired of Being Denied, Deceived, or Drowned in Debt?</strong><br /><br />
                  You're not the problem — the system is rigged.<br /><br />
                  But now… <strong>you hold the remedy</strong>.<br /><br />
                  This isn't another "credit repair" scheme.<br />
                  It's <strong>legal, psychological, and spiritual financial warfare</strong> — built to liberate you from the contracts and collections that trap millions.
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.section>

      {/* Other Sections with Staggered Animations */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
        <motion.div variants={itemVariants}>
          <RemedyOfferSection isMobile={isMobile} />
        </motion.div>
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
        <motion.div variants={itemVariants}>
          <GameBanner isMobile={isMobile} />
        </motion.div>
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
        <motion.div variants={itemVariants}>
          <RemedyMaster isMobile={isMobile} />
        </motion.div>
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
        <motion.div variants={itemVariants}>
          <RemedyResult isMobile={isMobile} />
        </motion.div>
      </motion.section>
    </>
  );
};

export default Remedy;