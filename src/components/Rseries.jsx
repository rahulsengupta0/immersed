import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

// Import your images (replace with actual image imports)
import img1 from "../assets/sophomore.jpg";
import img2 from "../assets/junior.jpg";
import img3 from "../assets/private.jpg";

const CourseRoadmap = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Your Sovereignty Blueprint Starts Here</h2>
      <div style={styles.cardsContainer}>
        {/* Card 1 */}
        <CourseCard 
          title="Become Private + New SOV 101" 
          image={img1}
          subtitle="Reclaim Your Legal Identity"
          description="Correct your status and exit public contracts to reclaim sovereignty"
          learnings={[
            "Status correction principles",
            "Remove from public jurisdiction",
            "Essential legal documents",
            "Estate protection basics"
          ]}
          outcomes={[
            "Sovereignty consulting",
            "Private education",
            "Trust services",
            "Debt discharge"
          ]}
          badge="FOUNDATION"
        
          onLearnMore={() => navigate("/newsov")} // Add click handler
        />
        
        {/* Card 2 */}
        <CourseCard 
          title="Operate Private" 
          image={img2}
          subtitle="Asset Protection & Business"
          description="Build trusts and PMAs to operate without state oversight"
          learnings={[
            "UBOT business trusts",
            "Private Membership Associations",
            "Real estate in trusts",
            "Intergenerational protection"
          ]}
          outcomes={[
            "Real estate trusts",
            "Wellness PMAs",
            "Private coaching",
            "Trade guilds"
          ]}
          badge="JUNIOR"
         
          highlight={true}
          onLearnMore={() => navigate("/operate")} // Add click handler
        />
        
        {/* Card 3 */}
        <CourseCard 
          title="Private Business Credit" 
          image={img3}
          subtitle="$200K+ Without Banks"
          description="Build business credit through UBOT Trusts and private processing"
          learnings={[
            "Unlock vendor accounts",
            "Fix public credit lawfully",
            "0% APR funding",
            "Non-KYC payments"
          ]}
          outcomes={[
            "Rental businesses",
            "E-commerce",
            "Merchant services",
            "15+ other models"
          ]}
          badge="SENIOR"
          
          onLearnMore={() => navigate("/private")} // Add click handler
        />
      </div>
    </div>
  );
};

const CourseCard = ({ 
  title, 
  image, 
  subtitle, 
  description, 
  learnings, 
  outcomes, 
  price, 
  badge, 
  highlight, 
  onLearnMore 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={{
        ...styles.card,
        transform: isHovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: isHovered 
          ? highlight 
            ? "0 15px 30px rgba(13, 71, 161, 0.3)" 
            : "0 15px 30px rgba(100, 149, 237, 0.3)"
          : highlight
            ? "0 5px 15px rgba(13, 71, 161, 0.2)"
            : "0 5px 15px rgba(100, 149, 237, 0.2)",
        borderTop: highlight ? "4px solid #0d47a1" : "4px solid #42a5f5"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Course Badge */}
      <div style={styles.badge}>{badge}</div>
      
      {/* Course Image */}
      <div style={styles.imageContainer}>
        <img 
          src={image} 
          alt={title} 
          style={styles.image}
        />
        <div style={styles.imageOverlay}>{title.split(' ')[0]}</div>
      </div>
      
      {/* Course Content */}
      <div style={styles.content}>
        <h3 style={styles.courseTitle}>{title}</h3>
        <p style={styles.courseSubtitle}>{subtitle}</p>
        
        <div style={styles.descriptionBox}>
          <p style={styles.description}>{description}</p>
        </div>
        
        {/* What You'll Learn Section */}
        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>✅ What You'll Learn:</h4>
          <ul style={styles.list}>
            {learnings.map((item, index) => (
              <li key={index} style={styles.listItem}>{item}</li>
            ))}
          </ul>
        </div>
        
        {/* Outcomes Section */}
        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>💎 Business Models:</h4>
          <div style={styles.pillContainer}>
            {outcomes.map((item, index) => (
              <span key={index} style={styles.pill}>{item}</span>
            ))}
          </div>
        </div>
        
        {/* Price and CTA */}
        <div style={styles.priceSection}>
          <div style={styles.priceBox}>
            <p style={styles.nextStep}>Next Step: Private session</p>
            <p style={styles.price}>{price}</p>
          </div>
          <button 
            style={{
              ...styles.button,
              ...(isHovered && styles.buttonHover)
            }}
            onClick={onLearnMore} // Use the passed click handler
          >
            Learn More ➔
          </button>
        </div>
      </div>
    </div>
  );
};

// Updated styles to include hover effect for button
const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f8fbff"
  },
  header: {
    textAlign: "center",
    fontSize: "2.2rem",
    color: "#105ea3ff",
    marginBottom: "40px",
    fontWeight: "700"
  },
  cardsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px"
  },
  card: {
    width: "100%",
    maxWidth: "380px",
    backgroundColor: "white",
    borderRadius: "10px",
    overflow: "hidden",
    transition: "all 0.3s ease-out",
    position: "relative",
    flex: "1 1 300px"
  },
  badge: {
    position: "absolute",
    top: "15px",
    right: "15px",
    backgroundColor: "#e3f2fd",
    color: "#1565c0",
    padding: "6px 15px",
    fontSize: "12px",
    fontWeight: "bold",
    borderRadius: "20px",
    zIndex: "2",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  },
  imageContainer: {
    height: "160px",
    position: "relative",
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  imageOverlay: {
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    backgroundColor: "rgba(25, 118, 210, 0.7)",
    color: "white",
    padding: "10px 20px",
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center"
  },
  content: {
    padding: "25px"
  },
  courseTitle: {
    margin: "0 0 5px 0",
    color: "#0d47a1",
    fontSize: "22px",
    fontWeight: "700"
  },
  courseSubtitle: {
    margin: "0 0 15px 0",
    color: "#546e7a",
    fontSize: "16px",
    fontWeight: "400"
  },
  descriptionBox: {
    backgroundColor: "#e3f2fd",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "20px",
    borderLeft: "4px solid #42a5f5"
  },
  description: {
    margin: "0",
    color: "#1565c0",
    fontSize: "14px",
    lineHeight: "1.5"
  },
  section: {
    marginBottom: "20px"
  },
  sectionTitle: {
    margin: "0 0 12px 0",
    color: "#0d47a1",
    fontSize: "16px",
    fontWeight: "600"
  },
  list: {
    paddingLeft: "20px",
    margin: "0"
  },
  listItem: {
    marginBottom: "8px",
    color: "#37474f",
    fontSize: "14px",
    position: "relative"
  },
  pillContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px"
  },
  pill: {
    backgroundColor: "#e3f2fd",
    color: "#1565c0",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "500"
  },
  priceSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "25px"
  },
  priceBox: {
    flex: "1"
  },
  nextStep: {
    margin: "0 0 5px 0",
    color: "#546e7a",
    fontSize: "13px"
  },
  price: {
    margin: "0",
    color: "#0d47a1",
    fontSize: "24px",
    fontWeight: "700"
  },
  button: {
    backgroundColor: "#1976d2",
    color: "white",
    border: "none",
    padding: "12px 25px",
    borderRadius: "6px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.2s ease",
    boxShadow: "0 3px 6px rgba(25, 118, 210, 0.3)",
    whiteSpace: "nowrap"
  },
  buttonHover: {
    backgroundColor: "#1565c0",
    transform: "translateY(-2px)",
    boxShadow: "0 5px 15px rgba(21, 101, 192, 0.4)"
  }
};

export default CourseRoadmap;