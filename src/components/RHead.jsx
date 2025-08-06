import React from "react";
import { motion } from "framer-motion";

const RoadmapHeader = () => {
  return (
    <div style={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={styles.content}
      >
        <motion.div
          style={styles.badge}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          🚀 The Roadmap Series
        </motion.div>

        <h1 style={styles.title}>
          Legal Freedom, Private Wealth & Credit Power
        </h1>

        <p style={styles.subtitle}>
          Your complete blueprint from sovereignty to private business mastery
        </p>

        <motion.div 
          style={styles.priceTag}
          whileHover={{ scale: 1.02 }}
        >
          <div style={styles.price}>Only $49</div>
          <div style={styles.priceSub}>Start Your Journey Today</div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "80vh",
    padding: "40px 20px",
    textAlign: "center",
    backgroundColor: "#f8fbff"
  },
  content: {
    maxWidth: "800px",
    margin: "0 auto"
  },
  badge: {
    backgroundColor: "#e3f2fd",
    color: "#1565c0",
    padding: "10px 20px",
    borderRadius: "20px",
    display: "inline-block",
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "20px"
  },
  title: {
    fontSize: "2.5rem",
    lineHeight: "1.2",
    margin: "0 0 20px 0",
    fontWeight: "700",
    color: "#0d47a1"
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#546e7a",
    maxWidth: "600px",
    margin: "0 auto 30px",
    lineHeight: "1.6"
  },
  priceTag: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    display: "inline-block",
    boxShadow: "0 5px 15px rgba(13, 71, 161, 0.1)",
    cursor: "pointer"
  },
  price: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#1565c0",
    lineHeight: "1"
  },
  priceSub: {
    fontSize: "1rem",
    color: "#546e7a",
    marginTop: "8px"
  }
};

export default RoadmapHeader;