import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const LMSHowItWorks = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const [hoveredStep, setHoveredStep] = useState(null);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const steps = [
    {
      title: "Engaging Learning",
      description: "Access interactive courses with videos, readings, and activities",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      ),
      color: "#4fc3f7",
      gradient: "linear-gradient(135deg, #4fc3f7 0%, #29b6f6 100%)",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Knowledge Check",
      description: "Test your understanding with interactive quizzes and assessments",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      ),
      color: "#29b6f6",
      gradient: "linear-gradient(135deg, #29b6f6 0%, #039be5 100%)",
      image: "https://images.pexels.com/photos/4145193/pexels-photo-4145193.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Earn Badges",
      description: "Collect achievement badges as you master each concept",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7"></circle>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </svg>
      ),
      color: "#039be5",
      gradient: "linear-gradient(135deg, #039be5 0%, #0288d1 100%)",
      image: "https://images.pexels.com/photos/4145197/pexels-photo-4145197.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Get Certified",
      description: "Receive verifiable certificates upon course completion",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="12" y1="14" x2="16" y2="14"></line>
          <line x1="12" y1="17" x2="16" y2="17"></line>
          <line x1="10" y1="11" x2="18" y2="11"></line>
        </svg>
      ),
      color: "#0288d1",
      gradient: "linear-gradient(135deg, #0288d1 0%, #0277bd 100%)",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div
      ref={ref}
      style={{
        padding: "120px 0",
        background: "linear-gradient(to bottom, #ffffff 0%, #f5fbff 100%)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Floating background elements */}
      <motion.div 
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(79, 195, 247, 0.15) 0%, rgba(79, 195, 247, 0) 70%)",
          filter: "blur(30px)"
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
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
          right: "5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(2, 136, 209, 0.15) 0%, rgba(2, 136, 209, 0) 70%)",
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

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          position: "relative",
          zIndex: 2
        }}
      >
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6, type: "spring" }}
          style={{
            textAlign: "center",
            marginBottom: "80px"
          }}
        >
          <motion.h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: "800",
              color: "#1e293b",
              marginBottom: "20px",
              lineHeight: "1.2",
              letterSpacing: "-0.5px"
            }}
          >
            How <span style={{ 
              background: "linear-gradient(90deg, #4fc3f7, #0288d1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>Athena LMS</span> Works
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
            Your journey from learning to certification in 4 simple steps
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div
          style={{
            position: "relative",
            maxWidth: "1000px",
            margin: "0 auto",
            padding: "60px 0"
          }}
        >
          {/* Animated Timeline Line */}
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "8px",
              height: "0%",
              background: "linear-gradient(to bottom, #4fc3f7, #0288d1)",
              borderRadius: "10px",
              zIndex: 1,
              boxShadow: "0 0 20px rgba(2, 136, 209, 0.4)"
            }}
            animate={{
              height: "100%"
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              delay: 0.5
            }}
          />

          {/* Timeline Steps */}
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                style={{
                  position: "relative",
                  display: "flex",
                  width: "100%",
                  marginBottom: "80px",
                  zIndex: 2,
                  alignItems: "center",
                  flexDirection: isEven ? "row" : "row-reverse"
                }}
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: 50, x: isEven ? -50 : 50 },
                  visible: { opacity: 1, y: 0, x: 0 }
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 80
                }}
                onHoverStart={() => setHoveredStep(index)}
                onHoverEnd={() => setHoveredStep(null)}
              >
                {/* Image Container */}
                <motion.div
                  style={{
                    flex: "1",
                    position: "relative",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
                    cursor: "pointer",
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                    aspectRatio: "16/9"
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)"
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.img
                    src={step.image}
                    alt={step.title}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block"
                    }}
                    initial={{ scale: 1.1 }}
                    animate={{ 
                      scale: hoveredStep === index ? 1.15 : 1.1,
                      filter: hoveredStep === index ? "brightness(1.1) contrast(1.1)" : "brightness(1) contrast(1)"
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Gradient overlay */}
                  <AnimatePresence>
                    {hoveredStep === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        exit={{ opacity: 0 }}
                        style={{
                          position: "absolute",
                          inset: "0",
                          background: step.gradient,
                          mixBlendMode: "multiply"
                        }}
                        transition={{ duration: 0.4 }}
                      />
                    )}
                  </AnimatePresence>
                  
                  {/* Step number */}
                  <motion.div
                    style={{
                      position: "absolute",
                      top: "20px",
                      left: isEven ? "20px" : "auto",
                      right: !isEven ? "20px" : "auto",
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      backgroundColor: step.color,
                      zIndex: 2,
                      boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    0{index + 1}
                  </motion.div>
                </motion.div>

                {/* Content Container */}
                <motion.div
                  style={{
                    flex: "1",
                    background: "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(10px)",
                    padding: "40px",
                    borderRadius: "16px",
                    boxShadow: "0 15px 40px rgba(0, 0, 0, 0.1)",
                    margin: isEven ? "0 40px 0 60px" : "0 60px 0 40px",
                    position: "relative",
                    border: "1px solid rgba(203, 213, 225, 0.3)",
                    transformStyle: "preserve-3d"
                  }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Arrow pointer */}
                  <motion.div
                    style={{
                      position: "absolute",
                      top: "50%",
                      [isEven ? "left" : "right"]: "-10px",
                      width: "20px",
                      height: "20px",
                      background: "white",
                      transform: "translateY(-50%) rotate(45deg)",
                      boxShadow: "5px -5px 10px rgba(0,0,0,0.05)",
                      zIndex: 1,
                      borderTop: "1px solid rgba(203, 213, 225, 0.3)",
                      borderRight: "1px solid rgba(203, 213, 225, 0.3)"
                    }}
                  />

                  {/* Icon floating above */}
                  <motion.div
                    style={{
                      position: "absolute",
                      bottom: "100%",
                      [isEven ? "right" : "left"]: "40px",
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
                      zIndex: 3,
                      backgroundColor: step.color,
                      marginBottom: "-30px"
                    }}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: index * 0.3
                    }}
                  >
                    {step.icon}
                  </motion.div>

                  <motion.h3
                    style={{
                      fontSize: "1.5rem",
                      marginBottom: "16px",
                      color: step.color,
                      fontWeight: "700"
                    }}
                    animate={{
                      x: hoveredStep === index ? [0, 5, 0] : 0
                    }}
                    transition={{
                      duration: 0.6
                    }}
                  >
                    {step.title}
                  </motion.h3>
                  
                  <motion.p
                    style={{
                      color: "#475569",
                      lineHeight: "1.7",
                      fontSize: "1.1rem",
                      marginBottom: "24px"
                    }}
                    animate={{
                      x: hoveredStep === index ? [0, 3, 0] : 0
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.1
                    }}
                  >
                    {step.description}
                  </motion.p>
                  
                  {/* Progress bar */}
                  <motion.div
                    style={{
                      height: "6px",
                      width: "100%",
                      borderRadius: "3px",
                      backgroundColor: "rgba(203, 213, 225, 0.3)",
                      overflow: "hidden"
                    }}
                  >
                    <motion.div
                      style={{
                        height: "100%",
                        width: "0%",
                        borderRadius: "3px",
                        backgroundColor: step.color,
                        boxShadow: `0 0 10px ${step.color}`
                      }}
                      animate={{
                        width: hoveredStep === index ? "100%" : "70%"
                      }}
                      transition={{
                        duration: 0.8,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ delay: 1, duration: 0.7 }}
          style={{
            textAlign: "center",
            marginTop: "60px"
          }}
        >
          <motion.a
            href="https://aathenaa.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "18px 42px",
              background: "linear-gradient(90deg, #0288d1, #039be5)",
              color: "white",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "1.2rem",
              userSelect: "none",
              boxShadow: "0 10px 25px rgba(2, 136, 209, 0.3)",
              position: "relative",
              overflow: "hidden"
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 35px rgba(2, 136, 209, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Button shine effect */}
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)"
              }}
              animate={{
                left: ["-100%", "100%", "100%"],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }
              }}
            />
            
            Start Learning Journey
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginLeft: "12px" }}
              animate={{ 
                x: [0, 8, 0],
                opacity: [1, 0.7, 1]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <path d="M5 12h13"></path>
              <path d="M12 5l7 7-7 7"></path>
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default LMSHowItWorks;