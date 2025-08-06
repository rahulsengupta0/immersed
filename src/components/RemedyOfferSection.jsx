import React, { useEffect, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

const RemedyOfferSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });
  const [ref2, inView2] = useInView({ threshold: 0.1, triggerOnce: false });

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
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const handleNavigate = () => {
    navigate('/remedytnc');
  };

  return (
    <>
      {/* Take the First Step Section */}
      <motion.section
        style={{
          padding: isMobile ? '50px 5%' : '80px 6%',
          background: 'linear-gradient(to bottom, #f0f4f8, #e0f2fe)',
          fontFamily: "'Poppins', sans-serif",
        }}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        ref={ref}
      >
        <motion.div
          variants={fadeInUp}
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'center',
            background: '#ffffffcc',
            borderRadius: '16px',
            padding: isMobile ? '30px 20px' : '50px 30px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          }}
          whileHover={{ y: -5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <motion.h2 
            style={{ 
              fontSize: isMobile ? '1.6rem' : '2rem', 
              color: '#0f172a', 
              marginBottom: '20px' 
            }}
            variants={itemVariants}
          >
            <strong style={{ color: 'rgb(53, 152, 219)' }}> TAKE THE FIRST STEP TO REMEDY</strong>
          </motion.h2>
          
          <motion.p 
            style={{ 
              fontSize: '1rem', 
              color: '#334155', 
              marginBottom: '18px' 
            }}
            variants={itemVariants}
          >
            It's time to stop being the debtor — and start being the decision-maker.
          </motion.p>
          
          <motion.p 
            style={{ 
              fontSize: '1rem', 
              color: '#334155', 
              marginBottom: '18px' 
            }}
            variants={itemVariants}
          >
            Don't beg the system for forgiveness.
            <br />
            <strong style={{ color: 'rgb(53, 152, 219)' }}>Command your remedy with confidence.</strong>
          </motion.p>
          
          <motion.p 
            style={{ 
              fontSize: '1rem', 
              color: '#334155', 
              marginBottom: '30px' 
            }}
            variants={itemVariants}
          >
            Let's fix your credit the right way — the lawful way — starting now.
          </motion.p>
          
          <motion.p 
            style={{ 
              fontSize: '1.1rem', 
              color: '#0f172a', 
              fontWeight: 600 
            }}
            variants={itemVariants}
          >
            <span style={{ color: 'rgb(53, 152, 219)' }}>Creditors Academy</span>
          </motion.p>
          
          <motion.p 
            style={{ 
              fontSize: '1rem', 
              color: '#475569', 
              fontStyle: 'italic' 
            }}
            variants={itemVariants}
          >
            Where Knowledge Becomes Power.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* What You'll Learn + Offer */}
      <motion.section
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          padding: isMobile ? '40px 5%' : '60px 6%',
          maxWidth: '1200px',
          margin: 'auto',
          fontFamily: "'Poppins', sans-serif",
        }}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        variants={containerVariants}
        ref={ref2}
      >
        {/* Learn Column */}
        <motion.div
          style={{
            flex: 1,
            minWidth: isMobile ? '100%' : '300px',
            paddingRight: isMobile ? 0 : '30px',
            marginBottom: isMobile ? '40px' : '30px',
          }}
          variants={itemVariants}
        >
          <motion.h2 
            style={{ 
              fontSize: isMobile ? '1.6em' : '1.8em', 
              color: '#0f172a', 
              marginBottom: '30px' 
            }}
            whileHover={{ scale: 1.02 }}
          >
            <span style={{ color: '#34495e' }}>
              What You'll <span style={{ color: 'rgb(0, 86, 179)' }}>Learn</span>
            </span>
          </motion.h2>
          
          <motion.ul 
            style={{ 
              listStyle: 'none', 
              padding: 0 
            }}
            variants={containerVariants}
          >
            {[
              { title: 'Step-by-step Credit Repair Blueprint', desc: 'Remove negative items and rebuild credit step-by-step.' },
              { title: 'Credit Monitoring Tools & Strategies', desc: 'Track and protect your credit using expert tools.' },
              { title: 'Debt Negotiation Techniques', desc: 'Learn how to settle debts legally and save thousands.' },
              { title: 'Building Positive Credit History', desc: 'Establish habits that boost long-term credit health.' },
              { title: 'Your Legal Rights & Protections', desc: 'Understand and use credit laws to your advantage.' },
            ].map((item, idx) => (
              <motion.li
                key={idx}
                style={{
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  background: '#f9fafe',
                  padding: '16px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                }}
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.span
                  style={{
                    marginRight: '16px',
                    background: '#28a745',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg width="14" height="14" fill="#fff" viewBox="0 0 16 16">
                    <path d="M13.485 1.929a1 1 0 010 1.414L6.414 10.414 2.515 6.515a1 1 0 10-1.414 1.414l4.95 4.95a1 1 0 001.414 0l7.95-7.95a1 1 0 10-1.414-1.414z" />
                  </svg>
                </motion.span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '1rem', color: '#334155' }}>{item.title}</div>
                  <div style={{ fontSize: '0.9rem', color: '#64748b' }}>{item.desc}</div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Offer Column */}
        <motion.div 
          style={{ 
            flex: 1, 
            minWidth: isMobile ? '100%' : '300px', 
            paddingLeft: isMobile ? 0 : '30px' 
          }}
          variants={itemVariants}
        >
          <motion.div
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              padding: '30px 20px',
              borderRadius: '16px',
              color: '#fff',
              textAlign: 'center',
              marginBottom: '25px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,123,255,0.2)',
            }}
            animate={pulseAnimation}
            whileHover={{ scale: 1.02 }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, rgba(0,153,255,0.7), rgba(0,191,255,0.5))',
                borderRadius: '16px',
              }}
            />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ fontWeight: 'bold', fontSize: isMobile ? '1.2em' : '1.4em' }}>
                Credit Score: <span style={{
                  background: 'rgba(0,0,0,0.3)',
                  padding: '2px 10px',
                  borderRadius: '20px'
                }}>750+</span>
              </div>
            </div>
          </motion.div>

          <motion.h3 
            style={{ 
              margin: '10px 0', 
              fontSize: isMobile ? '1.3em' : '1.4em', 
              textAlign: 'center', 
              color: '#000' 
            }}
            whileHover={{ scale: 1.02 }}
          >
            Transform Your Financial Future
          </motion.h3>

          <motion.p 
            style={{ 
              color: '#666', 
              marginBottom: '15px', 
              textAlign: 'center', 
              fontSize: '1rem' 
            }}
            variants={itemVariants}
          >
            Unlock the path to better credit—offline, hands-on, and fully supported.
          </motion.p>

          <motion.div 
            style={{ 
              position: 'relative', 
              margin: '25px 0', 
              textAlign: 'center' 
            }}
            variants={itemVariants}
          >
            <motion.div 
              style={{
                fontSize: isMobile ? '2em' : '2.6em',
                fontWeight: 'bold',
                color: '#00bfff',
              }}
              animate={pulseAnimation}
            >
              $399
            </motion.div>
            <motion.div 
              style={{
                position: 'absolute',
                top: '-10px',
                right: isMobile ? '10%' : '20%',
                background: '#ff4757',
                color: 'white',
                padding: '3px 15px',
                borderRadius: '20px',
                fontSize: '0.75em',
                fontWeight: 'bold',
                transform: 'rotate(10deg)',
              }}
              whileHover={{ rotate: [10, -10, 10] }}
              transition={{ duration: 0.6 }}
            >
              SAVE $200
            </motion.div>
            <motion.div 
              style={{ 
                textDecoration: 'line-through', 
                color: '#999', 
                fontSize: '1.1em', 
                marginTop: '5px' 
              }}
              variants={itemVariants}
            >
              $597
            </motion.div>
          </motion.div>

          <motion.button
            onClick={handleNavigate}
            style={{
              background: 'linear-gradient(to right, #00bfff, #2979ff)',
              color: 'white',
              fontWeight: 600,
              border: 'none',
              borderRadius: '8px',
              padding: '14px 20px',
              fontSize: '1.05em',
              cursor: 'pointer',
              width: '100%',
              boxShadow: '0 5px 15px rgba(41,121,255,0.3)',
            }}
            whileHover={{ 
              y: -4,
              scale: 1.02,
              boxShadow: '0 10px 25px rgba(41, 121, 255, 0.4)'
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            Enroll Now – Limited Seats
          </motion.button>

          <motion.div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '20px',
              fontSize: '0.85em',
              color: '#666',
              flexWrap: 'wrap',
              gap: '10px'
            }}
            variants={itemVariants}
          >
            <span>✅ Learn. Apply. Transform.</span>
            <span>🔒 Secure Payment</span>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default RemedyOfferSection;