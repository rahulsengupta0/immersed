import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

// Import video from src/assets folder
import demoVideo from '../assets/demo.mp4';  // Adjust this path as needed

const stats = [
  { value: "10,000+", label: "Active Learners", icon: "👩‍🎓" },
  { value: "98%", label: "Satisfaction Rate", icon: "⭐" },
  { value: "24/7", label: "Platform Availability", icon: "🕒" },
  { value: "50+", label: "Courses Available", icon: "📚" }
];

const features = [
  { label: "AI Personalization", desc: "Adapts courses for every learner." },
  { label: "Intuitive Tools", desc: "Effortless course creation & analytics." },
  { label: "Data-Driven Success", desc: "Track progress & impact in real time." }
];

const LMSAbout = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      style={{
        minHeight: "100vh",
        padding: "80px 5vw 60px",
        background: "linear-gradient(120deg, #f0f4ff 0%, #e3fafc 100%)"
      }}
    >
      <div style={{
        maxWidth: "1180px",
        margin: "0 auto"
      }}>
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 55 }}
        >
          <h2 style={{
            fontSize: "2.7rem",
            fontWeight: 800,
            letterSpacing: "-1.5px",
            marginBottom: "1rem"
          }}>
            Redefining{" "}
            <span style={{
              background: "linear-gradient(90deg,#2563eb 30%,#06b6d4 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 900
            }}>
              Online Education
            </span>
          </h2>
          <p style={{
            fontSize: "1.15rem",
            color: "#636a80",
            maxWidth: "650px",
            margin: "0 auto",
            lineHeight: "1.7"
          }}>
            Athena LMS combines cutting-edge technology with pedagogical excellence for learners, educators, and institutions everywhere.
          </p>
        </motion.div>

        {/* Centered Two Column Area */}
        <div className="lms-about-flex" style={{
          display: "flex",
          alignItems: "stretch",
          justifyContent: "center",
          gap: "44px",
          margin: "0 auto",
          flexWrap: "wrap"
        }}>
          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: -60, scale: 0.97 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              flex: "1 1 410px",
              minWidth: "320px",
              maxWidth: "470px",
              background: "#fff",
              borderRadius: "18px",
              boxShadow: "0 8px 32px rgba(59,130,246,0.10)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              aspectRatio: "16 / 9",
              width: "100%",
              margin: "0 auto"
            }}
          >
            {!isVideoLoaded && (
              <img
                src="/images/lms-preview-fallback.gif"
                alt="Athena LMS Preview"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "18px"
                }}
              />
            )}
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                borderRadius: "18px",
                objectFit: "cover",
                opacity: isVideoLoaded ? 1 : 0,
                transition: "opacity 0.5s"
              }}
              onLoadedData={() => setIsVideoLoaded(true)}
              poster="/images/lms-video-poster.jpg"
            >
              <source src={demoVideo} type="video/mp4" />
            </video>
            <motion.div
              whileHover={{
                scale: 1.08,
                background: "rgba(37,99,235,0.14)"
              }}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "55px",
                height: "55px",
                background: "rgba(255,255,255,0.39)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 10px #2563eb23",
                cursor: "pointer",
                transition: "all 0.3s"
              }}>
              <svg width="29" height="29" viewBox="0 0 24 24" style={{ fill: "#2563eb" }}>
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.div>
          </motion.div>

          {/* Content/Stats */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 28 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.7, delay: 0.12 }}
            style={{
              flex: "1 1 390px",
              minWidth: "320px",
              maxWidth: "470px",
              background: "#fff",
              borderRadius: "18px",
              boxShadow: "0 8px 32px rgba(59,130,246,0.10)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "34px 28px"
            }}
          >
            <h3 style={{
              color: "#2563eb",
              fontSize: "1.37rem",
              fontWeight: 700,
              marginBottom: "1.1rem",
              letterSpacing: "-0.5px"
            }}>
              The Athena Difference
            </h3>

            {/* Features List */}
            <ul style={{ color: "#49507b", fontSize: "1.01rem", paddingLeft: 0, listStyle: "none", marginBottom: "2rem" }}>
              {features.map((f, i) => (
                <li
                  key={i}
                  style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: ".8em" }}
                >
                  <svg width="19" height="19" fill="none">
                    <circle cx="9.5" cy="9.5" r="8.5" stroke="#30aec8" strokeWidth="2" />
                    <path d="M6.2 10.2l2.2 2.1 4-4.2"
                      stroke="#30aec8" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>
                    <b>{f.label}</b>: {f.desc}
                  </span>
                </li>
              ))}
            </ul>
            {/* Stats Grid */}
            <div className="lms-about-stats" style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "18px",
            }}>
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{
                    y: -4,
                    boxShadow: "0 6px 20px rgba(37,99,235,.08)"
                  }}
                  style={{
                    background: "#f6faff",
                    padding: "22px 10px 17px",
                    borderRadius: "11px",
                    boxShadow: "0 1px 4px rgba(59,130,246,0.04)",
                    textAlign: "center",
                    border: "1px solid #e7eaf6",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                  }}>
                  <span style={{ fontSize: "1.9rem", marginBottom: "1px" }}>{stat.icon}</span>
                  <span style={{
                    fontSize: "1.55rem",
                    fontWeight: "700",
                    color: "#2563eb",
                  }}>
                    {stat.value}
                  </span>
                  <span style={{
                    fontSize: "0.98rem",
                    color: "#63718a",
                    fontWeight: 500
                  }}>
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      {/* Responsive CSS */}
      <style>
        {`
          @media (max-width: 1000px) {
            .lms-about-flex {
              flex-direction: column;
              gap: 35px;
            }
            .lms-about-stats {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 600px) {
            .lms-about-flex {
              padding: 0;
            }
            .lms-about-stats {
              grid-template-columns: 1fr;
              gap: 15px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default LMSAbout;
