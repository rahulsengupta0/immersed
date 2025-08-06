import React from "react";
import { motion } from "framer-motion";

const InfoOp = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const listItemAnim = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.15, duration: 0.4 }
    })
  };

  const containerStagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      {/* Header Section */}
   <motion.div
  style={{
    background: "linear-gradient(135deg, #e0f7ff 0%, #b3e5fc 100%)",
    padding: "80px 20px",
    position: "relative",
    overflow: "hidden"
  }}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  }}
>
  {/* Decorative elements */}
  <div style={{
    position: "absolute",
    top: "-100px",
    right: "-100px",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(2, 136, 209, 0.1) 0%, rgba(2, 136, 209, 0) 70%)"
  }}></div>
  
  <div style={{
    position: "absolute",
    bottom: "-150px",
    left: "-150px",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(2, 136, 209, 0.08) 0%, rgba(2, 136, 209, 0) 70%)"
  }}></div>

  <motion.div
    style={{
      maxWidth: "1000px",
      margin: "auto",
      background: "rgba(255, 255, 255, 0.7)",
      borderRadius: "20px",
      padding: "60px",
      boxShadow: "0 15px 50px rgba(2, 136, 209, 0.15)",
      backdropFilter: "blur(8px)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      position: "relative",
      zIndex: 1
    }}
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <motion.h1
      style={{ 
        fontSize: "clamp(2rem, 5vw, 3.5rem)",
        marginBottom: "20px",
        fontWeight: "800",
        textAlign: "center",
        color: "#0369a1",
        lineHeight: 1.2
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      OPERATE <span style={{ color: "#0288d1" }}>PRIVATE</span>
    </motion.h1>

    <motion.p
      style={{ 
        fontSize: "clamp(1.1rem, 3vw, 1.3rem)",
        marginBottom: "30px",
        textAlign: "center",
        color: "#0f172a",
        lineHeight: 1.7,
        maxWidth: "800px",
        marginLeft: "auto",
        marginRight: "auto"
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ once: true }}
    >
      Protect Your Assets & Run Your Business in the Private
    </motion.p>

    <motion.div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: "16px",
        padding: "30px",
        marginBottom: "40px",
        borderLeft: "4px solid #0288d1",
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)"
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      viewport={{ once: true }}
    >
      <p style={{
        fontSize: "1.1rem",
        lineHeight: 1.8,
        color: "#334155",
        margin: 0
      }}>
        This powerful course teaches you how to build business trusts, create PMAs (Private Membership Associations), 
        and operate without state oversight. You'll learn how to structure businesses, real estate, and commerce 
        in the private, away from contracts that expose you to liability and control.
      </p>
    </motion.div>

    <motion.div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "960px",
        margin: "0 auto",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 20px 50px rgba(2, 136, 209, 0.25)",
        transform: "perspective(1000px) rotateX(5deg)",
        transition: "transform 0.5s ease"
      }}
      whileHover={{ transform: "perspective(1000px) rotateX(0)" }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div style={{ position: "relative", paddingTop: "56.25%", height: 0 }}>
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none"
          }}
          src="https://drive.google.com/file/d/1JDzWkLSFtHMuuRceyogbfCTdM3o2NgJp/preview"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Operate Private Video"
        ></iframe>
      </div>
    </motion.div>
  </motion.div>
</motion.div>

      {/* Two Column Section */}
      <motion.div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "60px 5%",
          background: "#f0f9ff",
          gap: "30px"
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerStagger}
      >
        {/* Learn */}
        <motion.div
          style={{
            flex: "1 1 320px",
            background: "white",
            borderLeft: "6px solid #0b3770ff",
            borderRadius: "12px",
            padding: "25px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.05)"
          }}
          variants={fadeIn}
        >
          <h2 style={{ fontSize: "1.7em", color: "#0f5b92ff", marginBottom: "16px" }}>What You’ll Learn</h2>
       
          <ul style={{ listStyle: "none", paddingLeft: 0, marginTop: "20px" }}>
            {[
             "Set up and operate a UBOT business trust",
        "Create lawful PMAs for private services, coaching, or healing",
        "Hold real estate in private trust structures",
        "Build intergenerational estate protection and privacy",
        "Operate outside the UCC and statutory commercial codes"
            ].map((text, i) => (
              <motion.li
                key={i}
                custom={i}
                variants={listItemAnim}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  marginBottom: "12px",
                  display: "flex",
                  alignItems: "center",
                  color: "#444"
                }}
              >
                <svg
                  style={{ fill: "#0e519fff", width: "18px", height: "18px", marginRight: "10px" }}
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                </svg>
                {text}
              </motion.li>
            ))}
          </ul>
          <div style={{
            marginTop: "20px",
            fontWeight: "bold",
            background: "#fef2f2",
            padding: "12px 20px",
            borderLeft: "4px solid #e11d48",
            borderRadius: "6px"
          }}>
            Until you're operating through a lawful <span style={{ color: "#e11d48" }}>Private Trust</span>, you're not truly private.
          </div>
        </motion.div>

        {/* Business */}
        <motion.div
          style={{
            flex: "1 1 320px",
            background: "white",
            borderLeft: "6px solid #10b981",
            borderRadius: "12px",
            padding: "25px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.05)"
          }}
          variants={fadeIn}
        >
          <h2 style={{ fontSize: "1.7em", color: "#10b981", marginBottom: "16px" }}>Business Models You Can Launch:</h2>
          <p style={{ color: "#333" }}>
            This course is your private operating system. It’s not theory — it’s execution of a bulletproof private structure.
          </p>
          <ul style={{ listStyle: "none", paddingLeft: 0, marginTop: "20px" }}>
            {[
      "Real Estate Holding and Leasing via Trusts",
        " Wellness or Healing PMAs",
        " Private Homeschools or Coaching Centers",
        " Skilled Trades & Artisan Guilds (under PMA)",
        " Trust-Based Estate & Wealth Protection Services"
            ].map((item, i) => (
              <motion.li
                key={i}
                custom={i}
                variants={listItemAnim}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  marginBottom: "12px",
                  display: "flex",
                  alignItems: "center",
                  color: "#444"
                }}
              >
                <svg
                  style={{ fill: "#10b981", width: "18px", height: "18px", marginRight: "10px" }}
                  viewBox="0 0 24 24"
                >
                  <path d="M9 16.2L4.8 12 3.4 13.4 9 19 21 7l-1.4-1.4z" />
                </svg>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </>
  );
};

export default InfoOp;
