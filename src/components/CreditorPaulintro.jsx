
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import paul from "../assets/Paul.png";

const CreditorPaulintro = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;

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

  // Mouse tracking for floating text
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useTransform(mouseX, value => value * 0.5); // Slower movement for smoother effect
  const smoothMouseY = useTransform(mouseY, value => value * 0.5);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div 
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
        boxSizing: "border-box"
      }}
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.2 }}
      onMouseMove={handleMouseMove}
    >
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
          pointerEvents: "none", // Prevents text from interfering with mouse events
          textShadow: "0 0 10px rgba(2, 132, 199, 0.3)",
          willChange: "transform", // Optimizes animation performance
        }}
        animate={{
          x: smoothMouseX,
          y: smoothMouseY,
        }}
      >
        Creditor Academy
      </motion.div>

      {/* Floating background elements */}
      <motion.div 
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "500px",
          height: "500px",
          background: "linear-gradient(45deg, #e0f7ff 0%, rgba(224,247,255,0) 70%)",
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
          zIndex: 0
        }}
        animate={{
          rotate: [0, 360],
          transition: {
            duration: 120,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      />

      {/* Left Content */}
      <motion.div 
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "700px",
          justifySelf: "center",
          textAlign: isMobile ? "center" : "left"
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
            marginBottom: "15px"
          }}
          whileHover={{ 
            background: "linear-gradient(90deg, #0284c7 0%, #0f172a 100%)",
            transition: { duration: 0.5 }
          }}
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
                whiteSpace: "nowrap"
              }}
              whileHover={{
                scale: 1.05,
                background: "rgba(2,132,199,0.2)",
                boxShadow: "0 5px 15px rgba(2,132,199,0.1)"
              }}
              transition={{ duration: 0.2 }}
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
                overflow: "hidden"
              }}
              variants={statCardVariants}
              whileHover="hover"
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
            position: "relative"
          }}
          variants={itemVariants}
          whileHover={{ 
            boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
            y: -5
          }}
          transition={{ duration: 0.3 }}
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
          justifySelf: "center"
        }}
        variants={containerVariants}
      >
        <motion.div 
          style={{
            position: "relative",
            display: "inline-block",
            width: "100%",
            maxWidth: "500px"
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
              border: "10px solid white"
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
            position: "relative"
          }}
          variants={itemVariants}
          whileHover={{ 
            boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
            y: -5
          }}
          transition={{ duration: 0.3 }}
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
                  breakInside: "avoid"
                }}
                whileHover={{
                  x: 5,
                  color: "#0284c7"
                }}
                transition={{ duration: 0.2 }}
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
    </motion.div>
  );
};

export default CreditorPaulintro;