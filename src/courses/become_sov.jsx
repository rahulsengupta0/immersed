import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FaBalanceScale,
  FaGavel,
  FaUserLock,
  FaFileContract,
  FaShieldAlt
} from 'react-icons/fa';
import Banner from '../assets/BPSOV_Banner.png';
import GameBanner from '../components/GameBanner';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const BecomePrivateCourse = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef(null);
  
  const cards = [
    {
      title: "Status Correction",
      desc: "Learn how to correct your legal status and establish sovereignty",
      Icon: FaBalanceScale,
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "#4a6bdf"
    },
    {
      title: "Legal Fictions",
      desc: "Understand legal fictions and how to rebut presumption",
      Icon: FaGavel,
      img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "#8e44ad"
    },
    {
      title: "Private Jurisdiction",
      desc: "Remove yourself from public jurisdiction effectively",
      Icon: FaUserLock,
      img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "#27ae60"
    },
    {
      title: "Essential Documents",
      desc: "Create the necessary legal documents and private contracts",
      Icon: FaFileContract,
      img: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "#e67e22"
    },
    {
      title: "Estate Protection",
      desc: "Begin protecting yourself and your estate properly",
      Icon: FaShieldAlt,
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "#e74c3c"
    }
  ];

  const visibleCards = 4; // Always show 4 cards
  const maxSlides = Math.max(0, cards.length - visibleCards);

  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    if (currentSlide >= maxSlides) {
      // If at the end, loop back to beginning
      setCurrentSlide(0);
    } else {
      setCurrentSlide(prev => prev + 1);
    }
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    if (currentSlide === 0) {
      // If at beginning, loop to end
      setCurrentSlide(maxSlides);
    } else {
      setCurrentSlide(prev => prev - 1);
    }
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#f4f6f8', color: '#2c3e50', padding: '20px 20px' }}>
      {/* Banner Section */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        style={{
          position: 'relative',
          width: '100%',
          height: 'auto',
          overflow: 'hidden',
          marginBottom: '60px',
          borderRadius: '20px',
        }}
      >
        <img
          src={Banner}
          alt="Banner"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            objectFit: 'cover',
            borderRadius: '20px',
          }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1,
          pointerEvents: 'none',
        }}></div>
      </motion.div>

      {/* Title Section */}
      <div style={{
        textAlign: 'center',
        padding: '0 20px',
        maxWidth: '900px',
        margin: '0 auto 60px',
      }}>
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            marginBottom: '15px',
            fontWeight: '700',
            color: '#0056b3'
          }}
        >
          Become Private + New SOV 101
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            maxWidth: '700px',
            margin: '0 auto 25px',
            color: '#444',
            lineHeight: '1.6'
          }}
        >
          Reclaim Your Legal Identity and Exit the Public System
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          style={{
            background: 'linear-gradient(90deg, #0056b3, #2c52cfff)',
            border: 'none',
            borderRadius: '50px',
            padding: '12px 30px',
            color: '#ffffff',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            marginTop: '15px'
          }}
        >
          Start Your Journey Today
        </motion.button>
      </div>

      {/* Course Overview Section */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '60px',
          marginBottom: '80px',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '40px 20px',
          background: 'linear-gradient(135deg, #d3e9ffff 0%, #f0f7ff 100%)',
          borderRadius: '20px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background elements */}
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,86,179,0.03) 0%, rgba(0,86,179,0) 70%)'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-150px',
          left: '-150px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,161,255,0.04) 0%, rgba(0,161,255,0) 70%)'
        }}></div>
        
        {/* Video Preview */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          style={{
            flex: '1 1 550px',
            minWidth: '300px',
            maxWidth: '800px',
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}
        >
          <div style={{
            width: '100%',
            aspectRatio: '16/9',
            backgroundColor: '#0f172a',
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            borderRadius: 'inherit',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            position: 'relative'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(5px)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5V19L19 12L8 5Z" fill="white"/>
              </svg>
            </div>
            <p style={{
              fontSize: '1.1rem',
              fontWeight: '500',
              marginBottom: '8px'
            }}>
              Preview this course
            </p>
            <p style={{
              fontSize: '0.9rem',
              opacity: 0.8
            }}>
              2:34 min introduction
            </p>
            <div style={{
              position: 'absolute',
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0) 70%)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 0
            }}></div>
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, transparent 0%, transparent 50%, #0056b3 50%, #0056b3 100%)',
              borderTopRightRadius: '20px'
            }}></div>
          </div>
        </motion.div>
        
        {/* Course Description */}
        <div style={{
          flex: '1 1 550px',
          minWidth: '300px',
          padding: '20px'
        }}>
          <motion.h2
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              marginBottom: '25px',
              color: '#0056b3',
              fontWeight: '700',
              lineHeight: '1.3',
              position: 'relative',
              display: 'inline-block'
            }}
          >
            Course Overview
            <span style={{
              position: 'absolute',
              bottom: '-10px',
              left: '0',
              width: '60px',
              height: '4px',
              background: 'linear-gradient(90deg, #0056b3, #00a1ff)',
              borderRadius: '2px'
            }}></span>
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              lineHeight: '1.8',
              fontSize: '1.1rem',
              color: '#334155',
              marginBottom: '30px'
            }}
          >
            Discover how the public system views you as a corporate fiction and learn how to correct your status.
            This foundational course equips you with the knowledge and legal framework to reclaim your identity and start living in the private.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '15px',
              marginTop: '30px'
            }}
          >
            {[
              { icon: '📜', text: 'Legal Status Correction' },
              { icon: '⚖️', text: 'Sovereignty Framework' },
              { icon: '🔐', text: 'Private Jurisdiction' },
              { icon: '🛡️', text: 'Asset Protection' }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                style={{
                  background: 'rgba(0, 86, 179, 0.08)',
                  borderRadius: '8px',
                  padding: '12px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(0, 86, 179, 0.1)'
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                <span style={{
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  color: '#0056b3'
                }}>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* What You'll Learn Section with 4-card slider */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          margin: '80px auto',
          padding: '0 20px',
          maxWidth: '1200px',
          textAlign: 'center',
          position: 'relative'
        }}
      >
        <div style={{ marginBottom: '50px' }}>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: '700',
              color: '#0056b3',
              marginBottom: '15px'
            }}
          >
            <span style={{ marginRight: '10px' }}>🎯</span>
            What You'll Learn
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}
          >
            Master these essential concepts to take control of your legal standing
          </motion.p>
        </div>

        <div 
          ref={sliderRef}
          style={{
            position: 'relative',
            maxWidth: '100%',
            margin: '0 auto',
            overflow: 'hidden',
            padding: '0 40px'
          }}
        >
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            style={{
              position: 'absolute',
              left: '0',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'white',
              border: 'none',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            aria-label="Previous slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="#0056b3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Cards Container */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${cards.length}, 1fr)`,
              gap: '30px',
              padding: '20px 0',
              transform: `translateX(-${currentSlide * (100 / visibleCards)}%)`,
              transition: 'transform 0.5s ease-in-out',
              width: `${cards.length * (100 / visibleCards)}%`
            }}
          >
            {cards.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                style={{
                  background: '#fff',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
                  position: 'relative',
                  border: '1px solid rgba(0,0,0,0.08)',
                }}
              >
                <div style={{
                  height: '180px',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, ${item.color}80 100%)`
                  }}></div>
                </div>
                <div style={{
                  position: 'absolute',
                  top: '150px',
                  left: '20px',
                  width: '60px',
                  height: '60px',
                  borderRadius: '15px',
                  background: 'rgba(255,255,255,0.95)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                  border: `2px solid ${item.color}`
                }}>
                  <item.Icon style={{
                    fontSize: '1.8rem',
                    color: item.color
                  }}/>
                </div>
                <div style={{
                  padding: '25px',
                  paddingTop: '40px'
                }}>
                  <h3 style={{
                    fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)',
                    fontWeight: '700',
                    marginBottom: '15px',
                    color: '#1a1a1a'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: 'clamp(0.9rem, 1.1vw, 1rem)',
                    color: '#555',
                    lineHeight: '1.6',
                    marginBottom: '20px'
                  }}>
                    {item.desc}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      background: 'transparent',
                      border: `2px solid ${item.color}`,
                      borderRadius: '50px',
                      padding: '8px 20px',
                      color: item.color,
                      fontSize: 'clamp(0.8rem, 1vw, 0.9rem)',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    Learn more
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke={item.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            style={{
              position: 'absolute',
              right: '0',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'white',
              border: 'none',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            aria-label="Next slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="#0056b3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Mobile Indicators */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginTop: '30px'
        }}>
          {Array.from({ length: cards.length - visibleCards + 1 }).map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: index === currentSlide ? '#0056b3' : 'rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'background 0.3s ease'
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Game Banner Section */}
      <GameBanner />

      {/* What You Can Do Section */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        style={{
          marginBottom: '100px',
          padding: '0 20px'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              marginBottom: '20px',
              color: '#0056b3',
              fontWeight: '700',
              background: 'linear-gradient(90deg, #0056b3, #00a1ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}
          >
            💼 What You Can Do After This Course
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}
          >
            Transform your knowledge into powerful real-world applications
          </motion.p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {[
            {
              title: "Sovereignty Consulting",
              description: "Offer professional status correction and sovereignty consulting services",
              icon: "📋",
              color: "#4a6bdf"
            },
            {
              title: "Education Business",
              description: "Launch a private education, coaching, or legal literacy business",
              icon: "🎓",
              color: "#8e44ad"
            },
            {
              title: "Trust Services",
              description: "Create your own trust-based services or business framework",
              icon: "🤝",
              color: "#27ae60"
            },
            {
              title: "Asset Reclamation",
              description: "Start laying the legal foundation to discharge debt and reclaim assets",
              icon: "🏦",
              color: "#e67e22"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true, margin: "0px" }}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '30px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                borderTop: `4px solid ${item.color}`,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: '60px',
                height: '60px',
                background: `${item.color}10`,
                borderBottomLeftRadius: '16px'
              }}></div>
              <div style={{
                fontSize: '2rem',
                marginBottom: '20px',
                color: item.color
              }}>
                {item.icon}
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '600',
                marginBottom: '15px',
                color: '#222'
              }}>
                {item.title}
              </h3>
              <p style={{
                fontSize: '1.05rem',
                color: '#555',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                {item.description}
              </p>
              <motion.div
                whileHover={{ x: 5 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: item.color,
                  fontWeight: '500',
                  cursor: 'pointer',
                  fontSize: '0.95rem'
                }}
              >
                <span>Learn how</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '5px' }}>
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke={item.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '50px' }}
        >
          <motion.button
            whileHover={{ scale: 1.02, boxShadow: "0 5px 15px rgba(0,86,179,0.3)" }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: 'linear-gradient(90deg, #0056b3, #0088ff)',
              border: 'none',
              borderRadius: '8px',
              padding: '15px 35px',
              color: 'white',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 5px 10px rgba(0,86,179,0.2)'
            }}
          >
            Start Your Transformation
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Consultation Section */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        style={{
          background: 'linear-gradient(135deg, #eef5ff 0%, #e0ebff 100%)',
          padding: '60px 30px',
          borderRadius: '20px',
          textAlign: 'center',
          boxShadow: '0 15px 40px rgba(0,86,179,0.1)',
          marginBottom: '70px',
          border: '1px solid rgba(0,86,179,0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,86,179,0.08) 0%, rgba(0,86,179,0) 70%)'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-30px',
          left: '-30px',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,86,179,0.05) 0%, rgba(0,86,179,0) 70%)'
        }}></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ position: 'relative', zIndex: 2 }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #0056b3 0%, #00a1ff 100%)',
            marginBottom: '25px',
            boxShadow: '0 10px 20px rgba(0,86,179,0.2)'
          }}>
            <span style={{ fontSize: '1.8rem' }}>🎯</span>
          </div>
          <h3 style={{
            fontSize: 'clamp(1.5rem, 3vw, 1.8rem)',
            marginBottom: '20px',
            fontWeight: '700',
            color: '#003366'
          }}>
            Ready For Your Next Step?
          </h3>
          <div style={{
            maxWidth: '700px',
            margin: '0 auto 25px',
            textAlign: 'center'
          }}>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                marginBottom: '15px',
                color: '#334155'
              }}
            >
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: 'rgba(0,86,179,0.1)',
                marginRight: '10px'
              }}>📞</span>
              <strong>Book your 1-on-1 counselor session</strong> to complete your Readiness Checklist and get your personalized Sovereignty Score.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: '#334155'
              }}
            >
              Get expert guidance on whether to focus on business credit or private trust operations as your next strategic move.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(255,255,255,0.7)',
              borderRadius: '50px',
              padding: '12px 25px',
              marginBottom: '30px',
              backdropFilter: 'blur(5px)',
              border: '1px solid rgba(0,86,179,0.1)'
            }}
          >
            <span style={{ fontWeight: '500', color: '#003366' }}>Course Investment:</span>
            <span style={{
              fontSize: '1.4rem',
              fontWeight: '700',
              background: 'linear-gradient(90deg, #0056b3, #00a1ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>$49</span>
          </motion.div>
          <div>
            <motion.button
              whileHover={{
                scale: 1.03,
                boxShadow: '0 10px 20px rgba(0,86,179,0.2)'
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: 'linear-gradient(90deg, #0056b3, #00a1ff)',
                color: 'white',
                padding: '16px 40px',
                fontSize: '1.1rem',
                fontWeight: '600',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 5px 15px rgba(0,86,179,0.3)'
              }}
            >
              <span>📅</span>
              Book Your Private Consultation
            </motion.button>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                fontSize: '0.9rem',
                color: '#64748b',
                marginTop: '20px'
              }}
            >
              Limited slots available - Secure your session today
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      {/* Enrollment CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7 }}
        style={{
          textAlign: 'center',
          margin: '80px 0',
          padding: '0 20px'
        }}
      >
        <div style={{
          position: 'relative',
          display: 'inline-block',
          maxWidth: '100%'
        }}>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0 15px 30px rgba(0,161,255,0.4)'
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: 'linear-gradient(135deg, #2c3e50 0%, #4a6bdf 100%)',
              color: 'white',
              padding: '22px 60px',
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              fontWeight: '600',
              border: 'none',
              borderRadius: '16px',
              cursor: 'pointer',
              boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
              position: 'relative',
              overflow: 'hidden',
              zIndex: 2,
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)',
              opacity: 0,
              transition: 'opacity 0.3s ease'
            }} className="button-glow"/>
            <motion.span
              animate={{
                rotate: [0, 15, -15, 0],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 3
                }
              }}
              style={{ display: 'inline-block', fontSize: '1.4em' }}
            >
              🚀
            </motion.span>
            Enroll in Roadmap Series
          </motion.button>
          <div style={{
            position: 'absolute',
            bottom: '-10px',
            left: '10%',
            right: '10%',
            height: '20px',
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)',
            filter: 'blur(5px)',
            zIndex: 1,
            borderRadius: '50%'
          }}/>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: '25px',
            color: '#64748b',
            fontSize: '0.95rem',
            maxWidth: '500px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          Join 1,200+ students who've transformed their legal standing. Enrollment closes soon.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default BecomePrivateCourse;