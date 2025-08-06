import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './HeroLMS.css';
import dashboard from '../assets/dashboard.png';
import progress from '../assets/progress.png';

const HeroLMS = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Card variants for animation
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <div className="hero-lms" ref={ref}>
      <div className="hero-background">
        <motion.div 
          className="gradient-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div 
          className="hero-image-background"
          style={{ backgroundImage: `url(${dashboard})` }}
        />
      </div>
      
      <div className="hero-content">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-text"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
          >
            Transform Learning With <span>Athena LMS</span>
          </motion.h1>
          
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="subtitle"
          >
            The next-generation platform for immersive, engaging education
          </motion.p>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="cta-buttons"
          >
            <motion.a
              href="https://aathenaa.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 25px rgba(138, 37, 226, 0.5)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="cta-button primary"
            >
              Get Started
            </motion.a>
            <motion.a
              href="#demo"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(255,255,255,0.2)",
                boxShadow: "0 10px 25px rgba(255,255,255,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="cta-button secondary"
            >
              Watch Demo
            </motion.a>
          </motion.div>

          {/* Feature Cards Section */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            className="feature-cards-mobile"
          >
            <motion.div variants={cardVariants} className="feature-card">
              <div className="card-icon">📊</div>
              <h3>Interactive Dashboard</h3>
              <p>Track progress and analytics in real-time</p>
            </motion.div>
            
            <motion.div variants={cardVariants} className="feature-card">
              <div className="card-icon">🤖</div>
              <h3>AI-Powered Tools</h3>
              <p>Personalized learning recommendations</p>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Right Side Content */}
        <div className="hero-right-content">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="floating-dashboard-container"
          >
            <div className="floating-dashboard">
              <img src={progress} alt="Athena LMS Dashboard" />
            </div>

            {/* Desktop Feature Cards */}
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              className="feature-cards-desktop"
            >
              <motion.div variants={cardVariants} className="feature-card">
                <div className="card-icon">👥</div>
                <h3>Collaborative Learning</h3>
                <p>Connect with peers and instructors</p>
              </motion.div>
              
              <motion.div variants={cardVariants} className="feature-card">
                <div className="card-icon">📱</div>
                <h3>Mobile Ready</h3>
                <p>Learn anywhere on any device</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span>Explore More</span>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5z" fill="currentColor" />
        </svg>
      </motion.div>
    </div>
  );
};

export default HeroLMS;           