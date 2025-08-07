import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useScroll, useInView } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";
import paul from "../assets/Paul.png";

const CreditorPaulintro = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  
  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const isTimelineInView = useInView(timelineRef, { once: true, amount: 0.2 });

  // Corner animations
  const topLeftX = useTransform(scrollYProgress, [0, 1], [-300, 0]);
  const topLeftY = useTransform(scrollYProgress, [0, 1], [-300, 0]);
  const topRightX = useTransform(scrollYProgress, [0, 1], [300, 0]);
  const topRightY = useTransform(scrollYProgress, [0, 1], [-300, 0]);
  const bottomLeftX = useTransform(scrollYProgress, [0, 1], [-300, 0]);
  const bottomLeftY = useTransform(scrollYProgress, [0, 1], [300, 0]);
  const bottomRightX = useTransform(scrollYProgress, [0, 1], [300, 0]);
  const bottomRightY = useTransform(scrollYProgress, [0, 1], [300, 0]);

  // Content fade
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;

  // Audio functions
  const playHoverSound = () => {
    if (!audioEnabled) return;
    const audio = new Audio('/sounds/hover.mp3');
    audio.volume = 0.2;
    audio.play().catch(e => console.log("Audio play failed:", e));
  };

  const playClickSound = () => {
    if (!audioEnabled) return;
    const audio = new Audio('/sounds/click.mp3');
    audio.volume = 0.3;
    audio.play().catch(e => console.log("Audio play failed:", e));
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const statCardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(2, 132, 199, 0.3)",
      background: "linear-gradient(145deg, #ffffff 0%, #f0f9ff 100%)",
      transition: { duration: 0.3 }
    }
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    hover: {
      x: [0, 10, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0 5px 15px rgba(2, 132, 199, 0.4)",
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  // Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useTransform(mouseX, value => value * 0.5);
  const smoothMouseY = useTransform(mouseY, value => value * 0.5);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Timeline data
  const timelineItems = [
    { year: "2015", event: "Founded Creditor Academy" },
    { year: "2017", event: "Developed Business Credit System" },
    { year: "2019", event: "Helped 1,000+ Entrepreneurs" },
    { year: "2021", event: "$1B+ Debt Eliminated" },
    { year: "2023", event: "Expanded to International Markets" }
  ];

  return (
    <motion.div 
      ref={containerRef}
      style={{
        fontFamily: "'Poppins', sans-serif",
        background: "linear-gradient(145deg, #ffffff 0%, #f8faff 100%)",
        padding: isMobile ? "40px 5%" : "80px 5%",
        width: "100%",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "minmax(300px, 1fr) minmax(300px, 1fr)",
        gap: isMobile ? "40px" : "60px",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
        minHeight: "100vh"
      }}
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.2 }}
      onMouseMove={handleMouseMove}
    >
      {/* Corner Animation Elements */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "300px",
          height: "300px",
          background: "linear-gradient(135deg, rgba(2,132,199,0.1) 0%, rgba(224,247,255,0) 70%)",
          borderRadius: "20%",
          zIndex: 0,
          x: topLeftX,
          y: topLeftY,
          opacity: contentOpacity
        }}
      />
      
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "300px",
          height: "300px",
          background: "linear-gradient(225deg, rgba(2,132,199,0.1) 0%, rgba(224,247,255,0) 70%)",
          borderRadius: "20%",
          zIndex: 0,
          x: topRightX,
          y: topRightY,
          opacity: contentOpacity
        }}
      />
      
      <motion.div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "300px",
          height: "300px",
          background: "linear-gradient(45deg, rgba(2,132,199,0.1) 0%, rgba(224,247,255,0) 70%)",
          borderRadius: "20%",
          zIndex: 0,
          x: bottomLeftX,
          y: bottomLeftY,
          opacity: contentOpacity
        }}
      />
      
      <motion.div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "300px",
          height: "300px",
          background: "linear-gradient(315deg, rgba(2,132,199,0.1) 0%, rgba(224,247,255,0) 70%)",
          borderRadius: "20%",
          zIndex: 0,
          x: bottomRightX,
          y: bottomRightY,
          opacity: contentOpacity
        }}
      />

      {/* 3D Background Element */}
      <motion.div 
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "200px",
          height: "200px",
          zIndex: 0,
          opacity: contentOpacity
        }}
      >
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <mesh rotation={[0.5, 0.5, 0]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color={'#0284c7'} />
          </mesh>
          <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
      </motion.div>

      {/* Floating background text */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -2,
          color: "rgba(2, 132, 199, 0.1)",
          fontSize: "6rem",
          fontWeight: 700,
          textTransform: "uppercase",
          pointerEvents: "none",
          textShadow: "0 0 10px rgba(2, 132, 199, 0.3)",
          willChange: "transform",
          opacity: contentOpacity
        }}
        animate={{
          x: smoothMouseX,
          y: smoothMouseY,
        }}
      >
        Creditor Academy
      </motion.div>

      {/* Left Content */}
      <motion.div 
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "700px",
          justifySelf: "center",
          textAlign: isMobile ? "center" : "left",
          opacity: contentOpacity
        }}
        variants={itemVariants}
      >
        <motion.h1 
          style={{
            fontSize: isMobile ? "2rem" : "clamp(2.5rem, 5vw, 3.5rem)",
            fontWeight: 700,
            lineHeight: 1.2,
            background: "linear-gradient(90deg, #0f172a 0%, #0284c7 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: "15px",
            willChange: "background"
          }}
          whileHover={{ 
            background: "linear-gradient(90deg, #0284c7 0%, #0f172a 100%)",
            transition: { duration: 0.5 }
          }}
          onHoverStart={playHoverSound}
        >
          Paulmichael Rowland
        </motion.h1>

        <motion.div 
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: isMobile ? "center" : "flex-start",
            marginBottom: "30px"
          }}
          variants={itemVariants}
        >
          <motion.div 
            style={{
              width: "80px",
              height: "4px",
              background: "linear-gradient(90deg, #0284c7, #7dd3fc)",
              marginRight: "20px"
            }}
            whileHover={{ width: "100px" }}
            transition={{ duration: 0.3 }}
            onHoverStart={playHoverSound}
          />
          <h2 style={{
            fontSize: "1rem",
            fontWeight: 600,
            color: "#64748b",
            letterSpacing: "2px",
            textTransform: "uppercase"
          }}>
            FOUNDER & VISIONARY
          </h2>
        </motion.div>

        <motion.div 
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "30px",
            justifyContent: isMobile ? "center" : "flex-start"
          }}
          variants={itemVariants}
        >
          {["Founder, Creditor Academy", "Business Credit Architect", "Sovereignty Strategist"].map((item, index) => (
            <motion.div 
              key={index}
              style={{
                background: "rgba(2,132,199,0.1)",
                color: "#0284c7",
                padding: "8px 16px",
                borderRadius: "20px",
                fontSize: "0.9rem",
                fontWeight: 600,
                whiteSpace: "nowrap",
                cursor: "pointer",
                willChange: "transform"
              }}
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              onHoverStart={playHoverSound}
              onClick={() => {
                playClickSound();
                // Add your click handler here
              }}
            >
              {item}
            </motion.div>
          ))}
        </motion.div>

        <motion.p 
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "#334155",
            marginBottom: "40px"
          }}
          variants={itemVariants}
        >
          The architect behind <strong style={{
            color: "#0284c7",
            fontWeight: 600,
            position: "relative"
          }}>
            <span style={{
              position: "absolute",
              bottom: "2px",
              left: 0,
              width: "100%",
              height: "8px",
              background: "rgba(2,132,199,0.2)",
              zIndex: -1
            }}></span>
            Creditor Academy
          </strong>, transforming how entrepreneurs access capital and build financial independence.
        </motion.p>

        <motion.div 
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "20px",
            marginBottom: "40px"
          }}
          variants={containerVariants}
        >
          {[
            { value: "$50K+", label: "Business Credit" },
            { value: "1.27B+", label: "Debt Eliminated" },
            { value: "1000s", label: "Entrepreneurs Helped" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                textAlign: "center",
                minWidth: "150px",
                position: "relative",
                overflow: "hidden",
                willChange: "transform",
                cursor: "pointer"
              }}
              variants={statCardVariants}
              whileHover="hover"
              onHoverStart={playHoverSound}
              onClick={() => {
                playClickSound();
                // Add your click handler here
              }}
            >
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(45deg, rgba(2,132,199,0.05), rgba(125,211,252,0.05))",
                zIndex: -1
              }} />
              <div style={{
                fontSize: "1.8rem",
                fontWeight: 700,
                color: "#0284c7",
                lineHeight: 1,
                marginBottom: "5px"
              }}>{stat.value}</div>
              <div style={{
                fontSize: "0.9rem",
                color: "#64748b"
              }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "16px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            position: "relative",
            marginBottom: "40px",
            willChange: "transform"
          }}
          variants={itemVariants}
          whileHover={{ 
            boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
            y: -5
          }}
          transition={{ duration: 0.3 }}
          onHoverStart={playHoverSound}
        >
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "5px",
            height: "100%",
            background: "linear-gradient(to bottom, #0284c7, #7dd3fc)"
          }}></div>
          <h3 style={{
            fontSize: "1.3rem",
            fontWeight: 600,
            color: "#0f172a",
            marginBottom: "15px",
            paddingLeft: "15px"
          }}>
            The Creditor Philosophy
          </h3>
          <p style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "#475569",
            paddingLeft: "15px",
            fontStyle: "italic"
          }}>
            "True financial freedom comes from understanding the systems of credit and capital. We don't just build credit scores - we architect financial sovereignty."
          </p>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          ref={timelineRef}
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "16px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            position: "relative"
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3 style={{
            fontSize: "1.3rem",
            fontWeight: 600,
            color: "#0284c7",
            marginBottom: "20px"
          }}>
            Journey Timeline
          </h3>
          <div style={{
            position: "relative",
            paddingLeft: "30px"
          }}>
            <div style={{
              position: "absolute",
              left: "15px",
              top: 0,
              bottom: 0,
              width: "2px",
              background: "linear-gradient(to bottom, #0284c7, #7dd3fc)"
            }} />
            {timelineItems.map((item, i) => (
              <motion.div
                key={i}
                style={{
                  position: "relative",
                  marginBottom: "30px",
                  paddingLeft: "20px"
                }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              >
                <div style={{
                  position: "absolute",
                  left: "-8px",
                  top: "5px",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  background: "#0284c7",
                  border: "3px solid #7dd3fc"
                }} />
                <h4 style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "#0f172a",
                  marginBottom: "5px"
                }}>{item.year}</h4>
                <p style={{
                  fontSize: "1rem",
                  color: "#475569",
                  lineHeight: 1.6
                }}>{item.event}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Right Side */}
      <motion.div 
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "600px",
          justifySelf: "center",
          opacity: contentOpacity
        }}
        variants={containerVariants}
      >
        <motion.div 
          style={{
            position: "relative",
            display: "inline-block",
            width: "100%",
            maxWidth: "500px",
            willChange: "transform"
          }}
          variants={imageVariants}
          whileHover="hover"
        >
          <motion.div 
            style={{
              position: "absolute",
              top: "-20px",
              right: "-20px",
              width: "150px",
              height: "150px",
              background: "linear-gradient(45deg, #e0f7ff 0%, rgba(224,247,255,0) 70%)",
              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              zIndex: -1
            }}
            animate={{
              rotate: [0, 360],
              transition: {
                duration: 60,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          />
          <motion.img
            src={paul}
            alt="Paulmichael Rowland"
            style={{
              width: "100%",
              borderRadius: "20px",
              boxShadow: "0 25px 50px -15px rgba(2,132,199,0.3)",
              border: "10px solid white",
              willChange: "transform"
            }}
            whileHover={{
              boxShadow: "0 30px 60px -10px rgba(2,132,199,0.4)"
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div 
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "16px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            width: "100%",
            maxWidth: "500px",
            margin: "40px 0 0",
            position: "relative",
            willChange: "transform"
          }}
          variants={itemVariants}
          whileHover={{ 
            boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
            y: -5
          }}
          transition={{ duration: 0.3 }}
          onHoverStart={playHoverSound}
        >
          <h3 style={{
            fontSize: "1.2rem",
            fontWeight: 600,
            color: "#0284c7",
            marginBottom: "20px"
          }}>
            Key Expertise:
          </h3>
          <ul style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            columns: isMobile ? "1" : "2",
            gap: "20px"
          }}>
            {[
              "Business Credit Architecture",
              "Private Wealth Systems",
              "Financial Sovereignty",
              "Credit Repair Mastery",
              "Corporate Structuring",
              "Asset Protection"
            ].map((item, index) => (
              <motion.li 
                key={index}
                style={{
                  marginBottom: "12px",
                  position: "relative",
                  paddingLeft: "25px",
                  fontSize: "1rem",
                  color: "#334155",
                  breakInside: "avoid",
                  cursor: "pointer"
                }}
                whileHover={{
                  x: 5,
                  color: "#0284c7"
                }}
                transition={{ duration: 0.2 }}
                onHoverStart={playHoverSound}
                onClick={() => {
                  playClickSound();
                  // Add your click handler here
                }}
              >
                <span style={{
                  position: "absolute",
                  left: 0,
                  color: "#0284c7",
                  fontWeight: "bold"
                }}>•</span> {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* Audio Toggle Button */}
      <motion.button
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 100,
          padding: "10px 20px",
          background: "linear-gradient(90deg, #0284c7, #7dd3fc)",
          color: "white",
          border: "none",
          borderRadius: "30px",
          fontWeight: 600,
          cursor: "pointer",
          boxShadow: "0 4px 15px rgba(2, 132, 199, 0.3)"
        }}
        variants={buttonVariants}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        onClick={() => {
          playClickSound();
          setAudioEnabled(!audioEnabled);
        }}
      >
        {audioEnabled ? "🔊 Sound On" : "🔇 Sound Off"}
      </motion.button>
    </motion.div>
  );
};

export default CreditorPaulintro;