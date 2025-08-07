import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { motion, useScroll, useTransform } from 'framer-motion';

import img1 from '../assets/anyone.jpg';
import img2 from '../assets/private.jpg';
import img3 from '../assets/IdentitySop.jpg';
import img4 from '../assets/junior.jpg';
import img5 from '../assets/launch.jpg';

const cardData = [
  {
    image: img1,
    title: 'Personal Credit Repair',
    text: 'Dispute, delete, and rebuild negative items using process strategies designed for financial reputation and open credit.',
    icon: '💳',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    image: img2,
    title: 'Become Private',
    text: 'Shift your legal status, file your SPC, get private EINs, and reclaim your sovereignty under the law—with full paperwork and support.',
    icon: '🛡️',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    image: img3,
    title: 'Operate Private',
    text: 'Run your business through trusts, PMAs, and private contracts to shield assets, minimize taxes, and exit the public system.',
    icon: '🏢',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    image: img4,
    title: 'Business-in-a-Box Coaching',
    text: 'Plug-and-play launch plans for real businesses—like car rentals, digital agencies, and tax prep—ready to start in just days.',
    icon: '📦',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  },
  {
    image: img5,
    title: 'Credit Mastery',
    text: 'Unlock secrets in revolving credit, and installment funding to launch your business or side hustle—without using personal savings.',
    icon: '🚀',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  },
];

const EmpowermentSlider = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const swiperRef = useRef(null);

  // Scroll animation setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerTop = container.getBoundingClientRect().top;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      if (containerTop <= windowHeight * 0.2 && containerTop >= -containerHeight + windowHeight * 0.8) {
        setIsSticky(true);
        
        // Calculate active index based on scroll position
        const scrollRatio = (windowHeight * 0.2 - containerTop) / (containerHeight - windowHeight * 0.8);
        const newIndex = Math.min(Math.floor(scrollRatio * cardData.length), cardData.length - 1);
        setActiveIndex(newIndex);
        
        // Update swiper to match scroll position
        if (swiperRef.current) {
          swiperRef.current.swiper.slideTo(newIndex);
        }
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.section 
      ref={containerRef}
      style={{ 
        background: 'linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%)',
        padding: '80px 20px',
        position: 'relative',
        overflow: 'hidden',
        height: `${cardData.length * 100}vh`,
        minHeight: '100vh'
      }}
    >
      {/* Background Pattern with Parallax */}
      <motion.div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'url("data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23000000\" fill-opacity=\"0.02\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        opacity: 0.3,
        y
      }}></motion.div>
      
      <motion.div 
        style={{ 
          position: isSticky ? 'fixed' : 'relative',
          top: isSticky ? '50%' : 'auto',
          left: 0,
          right: 0,
          transform: isSticky ? 'translateY(-50%)' : 'none',
          maxWidth: '1400px', 
          margin: '0 auto', 
          textAlign: 'center',
          zIndex: 2,
          opacity
        }}
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ 
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
            fontWeight: '800', 
            marginBottom: '40px', 
            color: '#1a202c',
            lineHeight: '1.2'
          }}
        >
          What He Teaches
        </motion.h2>

        <div style={{ position: 'relative', padding: '0 40px' }}>
          <Swiper
            ref={swiperRef}
            slidesPerView={1.2}
            spaceBetween={20}
            centeredSlides={true}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 2.2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3.2,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 3.5,
                spaceBetween: 40,
              }
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            style={{
              padding: '20px 0 60px',
              overflow: 'visible',
            }}
          >
            {cardData.map((card, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ 
                    opacity: activeIndex === index ? 1 : 0.8,
                    y: 0,
                    scale: activeIndex === index ? 1.05 : 0.95
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: '#ffffff',
                    borderRadius: '24px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    overflow: 'hidden',
                    height: '100%',
                    minHeight: '450px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  whileHover={{ 
                    boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                    y: -5
                  }}
                >
                  <div style={{
                    position: 'relative',
                    height: '200px',
                    background: card.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden'
                  }}>
                    <motion.img
                      src={card.image}
                      alt={card.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                      whileHover={{ scale: 1.1 }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      fontSize: '2rem',
                      background: 'rgba(255,255,255,0.2)',
                      borderRadius: '50%',
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backdropFilter: 'blur(5px)'
                    }}>
                      {card.icon}
                    </div>
                  </div>
                  
                  <div style={{ 
                    padding: '24px',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <h3 style={{ 
                      fontSize: '1.3rem', 
                      fontWeight: '700', 
                      marginBottom: '12px',
                      color: '#1a202c',
                      lineHeight: '1.3'
                    }}>
                      {card.title}
                    </h3>
                    <p style={{ 
                      fontSize: '0.95rem', 
                      color: '#4a5568', 
                      lineHeight: '1.6',
                      marginBottom: '20px',
                      flex: 1
                    }}>
                      {card.text}
                    </p>
                    <div style={{
                      alignSelf: 'flex-start',
                      padding: '8px 0',
                      borderTop: '1px solid rgba(0,0,0,0.1)',
                      width: '100%'
                    }}>
                      <button style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#3182ce',
                        fontWeight: '600',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px'
                      }}>
                        Learn More <span style={{ fontSize: '1.2rem' }}>→</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="swiper-button-prev" style={{
            left: '0',
            color: '#1a202c',
            background: 'rgba(255,255,255,0.9)',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backdropFilter: 'blur(5px)',
            border: '1px solid rgba(0,0,0,0.1)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}></div>
          <div className="swiper-button-next" style={{
            right: '0',
            color: '#1a202c',
            background: 'rgba(255,255,255,0.9)',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backdropFilter: 'blur(5px)',
            border: '1px solid rgba(0,0,0,0.1)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}></div>

          {/* Scroll Indicator */}
          <motion.div 
            style={{
              position: 'absolute',
              bottom: '-80px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isSticky ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div style={{
              fontSize: '0.9rem',
              color: '#4a5568',
              marginBottom: '5px',
              fontWeight: '500'
            }}>
              Scroll to navigate
            </div>
            <div style={{
              width: '30px',
              height: '50px',
              border: '2px solid #4a5568',
              borderRadius: '15px',
              position: 'relative'
            }}>
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  width: '6px',
                  height: '6px',
                  background: '#4a5568',
                  borderRadius: '50%',
                  position: 'absolute',
                  top: '10px',
                  left: '50%',
                  transform: 'translateX(-50%)'
                }}
              />
            </div>
          </motion.div>

          {/* Custom Styles */}
          <style jsx>{`
            .swiper-button-next:hover,
            .swiper-button-prev:hover {
              background: rgba(255,255,255,1) !important;
              transform: scale(1.1);
            }
            .swiper-button-next::after,
            .swiper-button-prev::after {
              font-size: 1.2rem;
              font-weight: bold;
            }
          `}</style>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default EmpowermentSlider;