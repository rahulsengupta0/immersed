import React, { useEffect, useState, useRef } from "react";
import { 
  motion, 
  useMotionValue, 
  useTransform, 
  animate, 
  useInView, 
  useScroll, 
  useSpring, 
  useMotionTemplate
} from "framer-motion";
import { FaEye, FaCircle, FaUsers, FaYoutube } from "react-icons/fa";

const API_KEY = "AIzaSyCJKDRtak743c9fOKLhZYnnZi_PncFjov0";
const CHANNEL_ID = "UCl_FM9KmhMA-DV6OTgr42Dw";

const StatHighlights = () => {
  const [youtubeData, setYoutubeData] = useState({
    viewCount: 0,
    subscriberCount: 0,
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  
  // Mouse position tracking
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  
  // Scroll progress for parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const smoothProgress = useSpring(scrollYProgress, { damping: 20 });

  // Handle mouse movement
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const bounds = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - bounds.left) / bounds.width);
    mouseY.set((e.clientY - bounds.top) / bounds.height);
  };

  useEffect(() => {
    const fetchYouTubeStats = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`
        );
        const data = await res.json();
        const stats = data.items[0].statistics;
        setYoutubeData({
          viewCount: parseInt(stats.viewCount, 10),
          subscriberCount: parseInt(stats.subscriberCount, 10),
        });
        setIsLoaded(true);
      } catch (error) {
        console.error("Error fetching YouTube stats:", error);
        setIsLoaded(true);
      }
    };

    fetchYouTubeStats();
  }, []);

  const Counter = ({ target, trigger }) => {
    const count = useMotionValue(0);
    const display = useTransform(count, (val) =>
      Math.floor(val).toLocaleString()
    );

    useEffect(() => {
      if (trigger) {
        const controls = animate(count, target, {
          duration: 2,
          ease: "easeOut",
        });
        return () => controls.stop();
      }
    }, [trigger, target]);

    return (
      <motion.div
        style={{ fontSize: "28px", fontWeight: 700, color: "#2c3e50" }}
      >
        {display}
      </motion.div>
    );
  };

  const stats = [
    {
      icon: <FaEye size={28} />,
      label: "YouTube Views",
      value: youtubeData.viewCount,
      color: "#0abde3",
      delay: 0.1,
      yOffset: 20,
      size: "small",
      mouseSensitivity: 10
    },
    {
      icon: <FaCircle size={20} />,
      label: "Live Learners",
      value: 1673,
      color: "#1dd1a1",
      delay: 0.3,
      yOffset: 40,
      size: "medium",
      mouseSensitivity: 15
    },
    {
      icon: <FaUsers size={28} />,
      label: "Total Debt Eliminated",
      value: 1275432,
      color: "#54a0ff",
      delay: 0.5,
      yOffset: 30,
      size: "large",
      mouseSensitivity: 20
    },
    {
      icon: <FaYoutube size={28} />,
      label: "YouTube Subscribers",
      value: youtubeData.subscriberCount,
      color: "#ff6b6b",
      delay: 0.7,
      yOffset: 10,
      size: "medium",
      mouseSensitivity: 15
    },
  ];

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom.delay,
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97]
      }
    })
  };

  const getGradient = (base) =>
    `linear-gradient(135deg, ${base}22, ${base}33, #ffffff)`;

  // Floating background elements
  const FloatingShapes = () => {
    const shapes = [
      { id: 1, color: "#0abde355", size: 120, x: 10, y: 20, speed: 0.5, delay: 0 },
      { id: 2, color: "#ff6b6b55", size: 80, x: 80, y: 70, speed: 0.3, delay: 0.5 },
      { id: 3, color: "#1dd1a155", size: 150, x: 30, y: 50, speed: 0.7, delay: 0.2 },
      { id: 4, color: "#54a0ff55", size: 100, x: 70, y: 30, speed: 0.4, delay: 0.7 },
    ];

    return (
      <>
        {shapes.map((shape) => (
          <motion.div
            key={shape.id}
            style={{
              position: "absolute",
              width: shape.size,
              height: shape.size,
              background: shape.color,
              borderRadius: "50%",
              filter: "blur(40px)",
              x: `${shape.x}%`,
              y: `${shape.y}%`,
              zIndex: 1
            }}
            animate={{
              y: [`${shape.y}%`, `${shape.y + 10}%`, `${shape.y}%`],
              x: [`${shape.x}%`, `${shape.x + 5}%`, `${shape.x}%`],
              opacity: [0.6, 0.8, 0.6],
              transition: {
                duration: 8 + shape.speed * 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: shape.delay
              }
            }}
          />
        ))}
      </>
    );
  };

  return (
    <motion.section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      style={{
        background: "linear-gradient(135deg, #f0f4f8, #e1e8ef)",
        padding: "100px 20px",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Poppins', sans-serif",
        cursor: "default"
      }}
    >
      <FloatingShapes />
      
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: Math.random() * 5 + 2,
            height: Math.random() * 5 + 2,
            background: "#ffffff",
            borderRadius: "50%",
            opacity: 0.8,
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            zIndex: 1
          }}
          animate={{
            y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            transition: {
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }
          }}
        />
      ))}

      <motion.div
        ref={containerRef}
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          position: "relative",
          zIndex: 2
        }}
      >
        {stats.map((stat, index) => {
          // Calculate mouse-aware position (inverted movement)
          const cardX = useTransform(
            mouseX,
            [0, 1],
            [stat.mouseSensitivity, -stat.mouseSensitivity]
          );
          const cardY = useTransform(
            mouseY,
            [0, 1],
            [stat.mouseSensitivity, -stat.mouseSensitivity]
          );
          
          // Combine mouse movement with scroll parallax
          const combinedY = useTransform(
            [cardY, smoothProgress],
            ([latestY, latestProgress]) => latestY + latestProgress * stat.yOffset
          );

          // Scale based on card size
          const scale = stat.size === "small" ? 0.9 : stat.size === "large" ? 1.1 : 1;

          return (
            <motion.div
              key={index}
              custom={{ delay: stat.delay, yOffset: stat.yOffset }}
              variants={cardVariant}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              initial="hidden"
              animate="visible"
              style={{
                perspective: "1000px"
              }}
            >
              <motion.div
                style={{
                  background: getGradient(stat.color),
                  borderRadius: "18px",
                  padding: "32px 40px",
                  minWidth: "220px",
                  textAlign: "center",
                  color: stat.color,
                  boxShadow: `0 4px 30px ${stat.color}33`,
                  transformStyle: "preserve-3d",
                  x: cardX,
                  y: combinedY,
                  rotateX: useTransform(smoothProgress, [0, 1], [0, 2]),
                  rotateY: useTransform(smoothProgress, [0, 1], [0, -1]),
                  scale: scale,
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  willChange: "transform"
                }}
              >
                {/* Animated border effect */}
                <motion.div 
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "4px",
                    background: stat.color,
                    scaleX: 0,
                    originX: 0
                  }}
                  animate={{
                    scaleX: [0, 1, 0],
                    originX: [0, 1],
                    transition: { duration: 2, repeat: Infinity }
                  }}
                />
                
                <div style={{ marginBottom: "14px" }}>
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                      transition: { 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: index * 0.2 
                      }
                    }}
                  >
                    {stat.icon}
                  </motion.div>
                </div>
                
                {isLoaded ? (
                  <Counter target={stat.value} trigger={isInView} />
                ) : (
                  <div
                    style={{
                      fontSize: "28px",
                      fontWeight: 700,
                      color: "#2c3e50",
                    }}
                  >
                    Loading...
                  </div>
                )}
                
                <motion.div
                  style={{
                    fontSize: "15px",
                    marginTop: "6px",
                    color: "#7f8c8d",
                  }}
                  animate={{
                    opacity: [0.8, 1, 0.8],
                    transition: { duration: 3, repeat: Infinity }
                  }}
                >
                  {stat.label}
                </motion.div>
                
                {/* Glow effect that follows mouse */}
                <motion.div 
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: useMotionTemplate`radial-gradient(600px at ${mouseX} ${mouseY}, ${stat.color}22, transparent 80%)`,
                    opacity: 0.3,
                    zIndex: -1
                  }}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default StatHighlights;