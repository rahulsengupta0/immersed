import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaBookOpen, FaFlask, FaCheckCircle, FaGraduationCap } from 'react-icons/fa';
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const roadmapData = [
  {
    title: "Foundation",
    icon: <FaLightbulb />,
    description: "Core principles of sovereignty and jurisdiction",
    color: "#3b82f6",
    accent: "#1d4ed8"
  },
  {
    title: "Knowledge",
    icon: <FaBookOpen />,
    description: "Deep dive into law and contracts",
    color: "#4f46e5",
    accent: "#3730a3"
  },
  {
    title: "Application",
    icon: <FaFlask />,
    description: "Real-world implementation exercises",
    color: "#7c3aed",
    accent: "#5b21b6"
  },
  {
    title: "Milestones",
    icon: <FaCheckCircle />,
    description: "Assessments to reinforce understanding",
    color: "#9333ea",
    accent: "#6b21a8"
  },
  {
    title: "Mastery",
    icon: <FaGraduationCap />,
    description: "Certificate and next steps",
    color: "#a855f7",
    accent: "#7e22ce"
  }
];

const AthenaRoadmap = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = 300; // Adjust this value based on your card width + gap
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });

      // Update arrow visibility after scroll
      setTimeout(() => {
        if (container.scrollLeft <= 10) {
          setShowLeftArrow(false);
        } else {
          setShowLeftArrow(true);
        }
        
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
          setShowRightArrow(false);
        } else {
          setShowRightArrow(true);
        }
      }, 300);
    }
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      if (container.scrollLeft <= 10) {
        setShowLeftArrow(false);
      } else {
        setShowLeftArrow(true);
      }
      
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        setShowRightArrow(false);
      } else {
        setShowRightArrow(true);
      }
    }
  };

  return (
    <section style={{ 
      padding: '80px 5%', 
      background: '#f8fafc',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'Inter, sans-serif'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        position: 'relative'
      }}>
        <motion.h2 
          style={{ 
            textAlign: 'center', 
            fontSize: '2.5rem', 
            color: '#111827', 
            marginBottom: '60px',
            fontWeight: '700',
            letterSpacing: '-0.5px'
          }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Your <span style={{    
            background: "linear-gradient(90deg, #3b82f6, #10b981)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent" 
          }}>Athena Learning </span>Journey
        </motion.h2>

        <div style={{ 
          position: 'relative',
          width: '100%'
        }}>
          {/* Left Arrow */}
          {showLeftArrow && (
            <motion.button
              onClick={() => scroll('left')}
              style={{
                position: 'absolute',
                left: '-40px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                zIndex: 20
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiChevronLeft size={24} color="#3b82f6" />
            </motion.button>
          )}

          {/* Right Arrow */}
          {showRightArrow && (
            <motion.button
              onClick={() => scroll('right')}
              style={{
                position: 'absolute',
                right: '-40px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                zIndex: 20
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiChevronRight size={24} color="#3b82f6" />
            </motion.button>
          )}

          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            style={{ 
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              position: 'relative',
              overflowX: 'auto',
              padding: '20px 10px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              scrollSnapType: 'x mandatory',
              '&::-webkit-scrollbar': {
                display: 'none'
              }
            }}
          >
            {roadmapData.map((step, index) => (
              <React.Fragment key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    type: 'spring',
                    stiffness: 100
                  }}
                  viewport={{ once: true, margin: '-50px' }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  style={{
                    background: '#ffffff',
                    borderRadius: '16px',
                    padding: '30px',
                    width: '220px',
                    minWidth: '220px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    textAlign: 'center',
                    cursor: 'pointer',
                    border: `2px solid ${hoveredCard === index ? step.color : '#e5e7eb'}`,
                    position: 'relative',
                    zIndex: hoveredCard === index ? 10 : 2,
                    transition: 'all 0.3s ease',
                    scrollSnapAlign: 'start',
                    flexShrink: 0
                  }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)'
                  }}
                >
                  <div style={{ 
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: `${step.color}10`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    border: `2px solid ${step.color}30`,
                    color: step.color,
                    fontSize: '1.5rem',
                    transition: 'all 0.3s ease'
                  }}>
                    {step.icon}
                  </div>
                  
                  <h3 style={{ 
                    fontSize: '1.1rem', 
                    color: '#111827', 
                    marginBottom: '10px',
                    fontWeight: '600'
                  }}>
                    {step.title}
                  </h3>
                  
                  <p style={{ 
                    fontSize: '0.9rem', 
                    color: '#4b5563',
                    lineHeight: '1.5'
                  }}>
                    {step.description}
                  </p>

                  <div style={{
                    position: 'absolute',
                    bottom: '-2px',
                    left: '0',
                    right: '0',
                    height: '4px',
                    background: step.color,
                    borderRadius: '0 0 16px 16px',
                    transform: hoveredCard === index ? 'scaleY(1.5)' : 'scaleY(1)',
                    transformOrigin: 'bottom',
                    transition: 'transform 0.3s ease'
                  }} />
                </motion.div>

                {index < roadmapData.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                    viewport={{ once: true }}
                    style={{
                      color: '#9ca3af',
                      display: 'flex',
                      alignItems: 'center',
                      flexShrink: 0
                    }}
                  >
                    <FiArrowRight size={24} />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AthenaRoadmap;