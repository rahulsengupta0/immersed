import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import statistics from '../assets/statistics.jpg';
import usermanagement from '../assets/usermanagement.jpg';
import livelesson from '../assets/livelesson.jpg';
import livechat from '../assets/livechat.jpg';
import coursecreation from '../assets/coursecreation.jpg';
import certificate from '../assets/certificate.jpg';

const FeaturesLMS = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      ),
      title: "Course Creation Tools",
      description: "Build interactive courses with multimedia content, assessments, and SCORM support",
      color: { 
        background: "rgba(219, 234, 254, 0.4)", 
        border: "rgba(59, 130, 246, 0.7)",
        text: "#1d4ed8"
      },
      image: coursecreation,
      imageAlt: "Instructor creating an online course",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #93c5fd 100%)"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="20" x2="12" y2="10"></line>
          <line x1="18" y1="20" x2="18" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="16"></line>
        </svg>
      ),
      title: "Advanced Analytics",
      description: "Track learner progress, engagement metrics, and performance analytics in real-time",
      color: { 
        background: "rgba(233, 213, 255, 0.4)", 
        border: "rgba(168, 85, 247, 0.7)",
        text: "#7e22ce"
      },
      image: statistics,
      imageAlt: "Learning analytics dashboard",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #c4b5fd 100%)"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      title: "User Management",
      description: "Manage instructors, learners, and administrators with role-based permissions",
      color: { 
        background: "rgba(209, 250, 229, 0.4)", 
        border: "rgba(16, 185, 129, 0.7)",
        text: "#047857"
      },
      image: usermanagement,
      imageAlt: "User management interface",
      gradient: "linear-gradient(135deg, #10b981 0%, #6ee7b7 100%)"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="23 7 16 12 23 17 23 7"></polygon>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
        </svg>
      ),
      title: "Live Sessions",
      description: "Conduct virtual classrooms with video conferencing and interactive whiteboards",
      color: { 
        background: "rgba(254, 235, 200, 0.4)", 
        border: "rgba(245, 158, 11, 0.7)",
        text: "#b45309"
      },
      image: livelesson,
      imageAlt: "Online live class session",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #fcd34d 100%)"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      ),
      title: "Live Chats",
      description: "Enable real-time discussions and support between learners and instructors",
      color: { 
        background: "rgba(224, 231, 255, 0.4)", 
        border: "rgba(99, 102, 241, 0.7)",
        text: "#4338ca"
      },
      image: livechat,
      imageAlt: "Live chat interface",
      gradient: "linear-gradient(135deg, #6366f1 0%, #a5b4fc 100%)"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
      title: "Certification System",
      description: "Issue digital certificates and badges with blockchain verification support",
      color: { 
        background: "rgba(204, 251, 241, 0.4)", 
        border: "rgba(13, 148, 136, 0.7)",
        text: "#0d9488"
      },
      image: certificate,
      imageAlt: "Digital certificate example",
      gradient: "linear-gradient(135deg, #14b8a6 0%, #5eead4 100%)"
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const floatAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div style={{
      padding: "100px 20px",
      background: "linear-gradient(to bottom, #f8fafc, #f0f9ff)",
      position: "relative",
      overflow: "hidden",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      {/* Decorative elements */}
      <motion.div 
        style={{
          position: "absolute",
          top: "10%",
          left: "10%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0) 70%)",
          filter: "blur(30px)"
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        style={{
          position: "absolute",
          bottom: "15%",
          right: "10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0) 70%)",
          filter: "blur(40px)"
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

      {/* Header with floating effect */}
      <motion.div
        style={{
          textAlign: "center",
          marginBottom: "80px",
          maxWidth: "800px",
          position: "relative",
          zIndex: 2
        }}
        animate={floatAnimation}
      >
        <motion.h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: "800",
            color: "#1e293b",
            marginBottom: "20px",
            lineHeight: "1.2",
            letterSpacing: "-0.5px"
          }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          Powerful <span style={{ 
            background: "linear-gradient(90deg, #3b82f6, #10b981)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>Athena</span> Features
        </motion.h2>
        <motion.p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            color: "#64748b",
            lineHeight: "1.6",
            maxWidth: "600px",
            margin: "0 auto"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Discover our comprehensive suite of educational tools designed to transform your teaching and learning experience
        </motion.p>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          width: "100%",
          maxWidth: "1200px",
          padding: "0 20px",
          position: "relative",
          zIndex: 2
        }}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover="hover"
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 15px 40px rgba(0, 0, 0, 0.1)",
              border: `1px solid ${feature.color.border}`,
              cursor: "pointer",
              position: "relative",
              backdropFilter: "blur(10px)",
              transformStyle: "preserve-3d",
              transition: "all 0.3s ease"
            }}
          >
            {/* Image with overlay */}
            <div style={{
              position: "relative",
              height: "220px",
              overflow: "hidden"
            }}>
              <motion.img
                src={feature.image}
                alt={feature.imageAlt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  transition: "transform 0.5s ease"
                }}
                initial={{ scale: 1.1 }}
                animate={{ 
                  scale: hoveredIndex === index ? 1.15 : 1.1,
                  filter: hoveredIndex === index ? "brightness(1.1)" : "brightness(1)"
                }}
              />
              <div style={{
                position: "absolute",
                inset: "0",
                background: `linear-gradient(to top, ${feature.color.border}, transparent)`,
                opacity: 0.3
              }} />
              
              {/* Gradient overlay */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    exit={{ opacity: 0 }}
                    style={{
                      position: "absolute",
                      inset: "0",
                      background: feature.gradient,
                      mixBlendMode: "multiply"
                    }}
                  />
                )}
              </AnimatePresence>
            </div>
            
            {/* Content */}
            <div style={{
              padding: "24px",
              backgroundColor: feature.color.background,
              borderTop: `4px solid ${feature.color.border}`,
              position: "relative",
              overflow: "hidden"
            }}>
              {/* Floating circles decoration */}
              <div style={{
                position: "absolute",
                top: "-50px",
                right: "-50px",
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.1)",
                zIndex: 0
              }} />
              
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "16px",
                position: "relative",
                zIndex: 1
              }}>
                <motion.div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "12px",
                    background: "rgba(255, 255, 255, 0.8)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: feature.color.text,
                    fontSize: "24px"
                  }}
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: index * 0.2
                  }}
                >
                  {feature.icon}
                </motion.div>
                <motion.h3 
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "700",
                    color: feature.color.text,
                    margin: "0",
                    flex: 1
                  }}
                  animate={{
                    x: hoveredIndex === index ? [0, 5, 0] : 0
                  }}
                  transition={{
                    duration: 0.5
                  }}
                >
                  {feature.title}
                </motion.h3>
              </div>
              
              <motion.p 
                style={{
                  color: "#334155",
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  margin: "0",
                  position: "relative",
                  zIndex: 1
                }}
                animate={{
                  x: hoveredIndex === index ? [0, 3, 0] : 0
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.1
                }}
              >
                {feature.description}
              </motion.p>
              
              {/* Learn more link */}
              <motion.div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  zIndex: 1
                }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ 
                  opacity: hoveredIndex === index ? 1 : 0.7,
                  x: hoveredIndex === index ? 0 : -10
                }}
              >
                <a href="#" style={{
                  color: feature.color.text,
                  fontWeight: "600",
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}>
                  Learn more
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Responsive styles */}
      <style>
        {`
          @media (max-width: 768px) {
            .features-grid {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </div>
  );
};

export default FeaturesLMS;