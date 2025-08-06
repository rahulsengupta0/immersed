import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, TrendingUp, MessageCircle, DollarSign, Handshake, Star } from "lucide-react";
import lmso1 from '../assets/lmso1.jpg';
import lmso2 from '../assets/lmso2.jpg';
import lmso3 from '../assets/lmso3.jpg';
import lmso4 from '../assets/lmso4.jpg';
import lmso5 from '../assets/lmso5.jpg';
import lmso6 from '../assets/lmso6.jpg';

const trainingCategories = [
  {
    id: "compliance",
    name: "Compliance Training",
    icon: <Check style={{ width: "2rem", height: "2rem" }} />,
    iconColor: "#3b82f6",
    selectedBg: "rgba(59, 130, 246, 0.1)",
    selectedBorder: "#3b82f6",
    textColor: "#3b82f6",
    bulletBg: "rgba(59, 130, 246, 0.2)",
    dotBg: "#3b82f6",
    title: "Build a culture of integrity with compliance training",
    description:
      "Protect your organization from risk and ensure compliance across your entire workforce. Athena LMS, with region-specific training courses, makes compliance easier, more cost-effective, and even engaging for your employees.",
    benefits: [
      "Reduce risk",
      "Build a culture of integrity",
      "Report and measure results",
      "Improve business performance",
    ],
    image:lmso1, // Compliance: business meeting/documents
  },
  {
    id: "employee-dev",
    name: "Employee Development",
    icon: <TrendingUp style={{ width: "2rem", height: "2rem" }} />,
    iconColor: "#10b981",
    selectedBg: "rgba(16, 185, 129, 0.1)",
    selectedBorder: "#10b981",
    textColor: "#10b981",
    bulletBg: "rgba(16, 185, 129, 0.2)",
    dotBg: "#10b981",
    title: "Work smarter with impactful employee training and development",
    description:
      "Empower your employees to develop their skills, advance their careers, and drive your business forward. Join over 4,000 top-performing companies who trust Athena LMS to engage and retain their talent.",
    benefits: ["Improve skills", "Support career growth", "Improve business performance"],
    image: lmso6, // Employee development: group training
  },
  {
    id: "onboarding",
    name: "Onboarding",
    icon: <MessageCircle style={{ width: "2rem", height: "2rem" }} />,
    iconColor: "#6366f1",
    selectedBg: "rgba(99, 102, 241, 0.1)",
    selectedBorder: "#6366f1",
    textColor: "#6366f1",
    bulletBg: "rgba(99, 102, 241, 0.2)",
    dotBg: "#6366f1",
    title: "Streamline your onboarding process",
    description:
      "Get new hires productive faster with structured onboarding programs that ensure consistency and engagement from day one.",
    benefits: [
      "Faster time to productivity",
      "Consistent experience",
      "Higher retention rates",
      "Improved engagement",
    ],
    image: lmso2, // Onboarding: welcome/handshake
  },
  {
    id: "revenue",
    name: "Revenue Enablement",
    icon: <DollarSign style={{ width: "2rem", height: "2rem" }} />,
    iconColor: "#f59e0b",
    selectedBg: "rgba(245, 158, 11, 0.1)",
    selectedBorder: "#f59e0b",
    textColor: "#f59e0b",
    bulletBg: "rgba(245, 158, 11, 0.2)",
    dotBg: "#f59e0b",
    title: "Drive revenue with sales enablement",
    description:
      "Equip your sales teams with the knowledge and skills they need to close more deals and drive business growth.",
    benefits: [
      "Increase sales performance",
      "Accelerate deal velocity",
      "Improve win rates",
      "Scale best practices",
    ],
    image: lmso3, // Revenue: financial chart
  },
  {
    id: "customer",
    name: "Customer Training",
    icon: <Handshake style={{ width: "2rem", height: "2rem" }} />,
    iconColor: "#ec4899",
    selectedBg: "rgba(236, 72, 153, 0.1)",
    selectedBorder: "#ec4899",
    textColor: "#ec4899",
    bulletBg: "rgba(236, 72, 153, 0.2)",
    dotBg: "#ec4899",
    title: "Enhance customer success through training",
    description:
      "Improve customer adoption, reduce support costs, and increase satisfaction with comprehensive customer training programs.",
    benefits: [
      "Improve product adoption",
      "Reduce support costs",
      "Increase customer satisfaction",
      "Drive expansion revenue",
    ],
    image: lmso4, // Customer: support/help
  },
  {
    id: "member",
    name: "Member Training",
    icon: <Star style={{ width: "2rem", height: "2rem" }} />,
    iconColor: "#8b5cf6",
    selectedBg: "rgba(139, 92, 246, 0.1)",
    selectedBorder: "#8b5cf6",
    textColor: "#8b5cf6",
    bulletBg: "rgba(139, 92, 246, 0.2)",
    dotBg: "#8b5cf6",
    title: "Engage and educate your members",
    description:
      "Build stronger communities and increase member value through comprehensive training and development programs.",
    benefits: [
      "Increase member engagement",
      "Improve member value",
      "Build stronger communities",
      "Drive membership growth",
    ],
    image: lmso5, // Member: community/group
  },
];

const LmsOutcome = () => {
  const [selectedCategory, setSelectedCategory] = useState("compliance");
  const currentCategory =
    trainingCategories.find((cat) => cat.id === selectedCategory) || trainingCategories[0];
  const selectedIndex = trainingCategories.findIndex((cat) => cat.id === selectedCategory);

  return (
    <div
      style={{
        width: "100%",
        background: "#f8fafc",
        padding: "4rem 1rem",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1rem",
        }}
      >
        {/* Header with subtitle and animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <motion.h2
            style={{
              fontSize: "2.2rem",
              fontWeight: 700,
              color: "#1e293b",
              marginBottom: "0.5rem",
              lineHeight: 1.18,
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Drive business outcomes across your entire organization.
          </motion.h2>
          <motion.p
            style={{
              fontSize: "1.125rem",
              color: "#334155",
              maxWidth: 600,
              margin: "0 auto",
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Empower your business with measurable learning outcomes and growth.
          </motion.p>
        </motion.div>

        {/* Category Icons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem",
            marginBottom: 0,
            position: "relative",
          }}
        >
          {trainingCategories.map((category) => (
            <div key={category.id} style={{ position: "relative" }}>
              <button
                onClick={() => setSelectedCategory(category.id)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "1.4rem",
                  borderRadius: "16px",
                  transition: "box-shadow 0.2s, transform 0.22s",
                  border: "2px solid",
                  width: "130px",
                  height: "130px",
                  background: selectedCategory === category.id ? category.selectedBg : "#fff",
                  borderColor:
                    selectedCategory === category.id
                      ? category.selectedBorder
                      : "transparent",
                  boxShadow: selectedCategory === category.id
                    ? `0 6px 24px 0 ${category.selectedBorder}22`
                    : "0 2px 10px rgba(0,0,0,0.02)",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    padding: "0.85rem",
                    borderRadius: "50%",
                    marginBottom: "0.5rem",
                    background: selectedCategory === category.id
                      ? category.bulletBg
                      : "#f1f5f9",
                    color: category.iconColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {category.icon}
                </div>
                <span
                  style={{
                    fontSize: "0.92rem",
                    fontWeight: 600,
                    textAlign: "center",
                    lineHeight: 1.13,
                    color: selectedCategory === category.id ? category.textColor : "#1e293b",
                  }}
                >
                  {category.name}
                </span>
                {selectedCategory === category.id && (
                  <div
                    style={{
                      width: "0.5rem",
                      height: "0.5rem",
                      borderRadius: "50%",
                      marginTop: "0.5rem",
                      backgroundColor: category.dotBg,
                    }}
                  />
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Flowing River Border */}
        <div style={{ position: "relative", marginTop: "2.5rem" }}>
          <svg
            style={{
              position: "absolute",
              top: "-2rem",
              left: 0,
              width: "100%",
              height: "calc(100% + 6rem)",
              pointerEvents: "none",
              zIndex: 0,
            }}
            viewBox="0 0 1200 700"
            preserveAspectRatio="none"
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              d={`M ${250 + selectedIndex * 150} 50
                C ${250 + selectedIndex * 150} 80, ${200 + selectedIndex * 150} 120, ${150 + selectedIndex * 150} 140
                C ${100 + selectedIndex * 150} 160, 80 180, 60 220
                C 40 260, 30 300, 30 340
                L 30 500
                C 30 540, 40 580, 80 600
                C 120 620, 160 630, 200 630
                L 1000 630
                C 1040 630, 1080 620, 1120 600
                C 1160 580, 1170 540, 1170 500
                L 1170 340
                C 1170 300, 1160 260, 1140 220
                C 1120 180, ${1100 - selectedIndex * 150} 160, ${1050 - selectedIndex * 150} 140
                C ${1000 - selectedIndex * 150} 120, ${950 - selectedIndex * 150} 80, ${950 - selectedIndex * 150} 50
                C ${900 - selectedIndex * 150} 80, ${850 + selectedIndex * 50} 120, ${400 + selectedIndex * 150} 140
                C ${350 + selectedIndex * 150} 120, ${300 + selectedIndex * 150} 80, ${250 + selectedIndex * 150} 50`}
              fill="none"
              stroke={currentCategory.iconColor}
              strokeWidth="4"
              filter="url(#glow)"
            />
            <path
              d={`M ${250 + selectedIndex * 150} 60
                C ${250 + selectedIndex * 150} 85, ${200 + selectedIndex * 150} 115, ${150 + selectedIndex * 150} 135
                C ${100 + selectedIndex * 150} 155, 90 175, 70 210
                C 50 250, 45 290, 45 330
                L 45 510
                C 45 535, 55 565, 85 585
                C 115 605, 150 615, 180 615
                L 1020 615
                C 1050 615, 1085 605, 1115 585
                C 1145 565, 1155 535, 1155 510
                L 1155 330
                C 1155 290, 1150 250, 1130 210
                C 1110 175, ${1110 - selectedIndex * 150} 155, ${1060 - selectedIndex * 150} 135
                C ${1010 - selectedIndex * 150} 115, ${960 - selectedIndex * 150} 85, ${960 - selectedIndex * 150} 60
                C ${910 - selectedIndex * 150} 85, ${860 + selectedIndex * 50} 115, ${410 + selectedIndex * 150} 135
                C ${360 + selectedIndex * 150} 115, ${310 + selectedIndex * 150} 85, ${250 + selectedIndex * 150} 60`}
              fill="none"
              stroke={`${currentCategory.iconColor}55`}
              strokeWidth="2"
            />
          </svg>

          {/* Content Section */}
          <div
            style={{
              background: "#fff",
              borderRadius: "1.3rem",
              boxShadow: `0 18px 46px -8px rgba(0,0,0,0.07)`,
              padding: "2.2rem",
              marginTop: "3.5rem",
              position: "relative",
              zIndex: 2,
              border: `3px solid ${currentCategory.iconColor}`,
              transition: "border-color 0.3s",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  window.innerWidth > 1000 ? "1fr 1fr" : "1fr",
                gap: "2.2rem",
                alignItems: "center",
              }}
            >
              {/* Left Content */}
              <div>
                <h3
                  style={{
                    fontSize: "1.7rem",
                    fontWeight: 700,
                    color: "#1e293b",
                    lineHeight: 1.21,
                    marginBottom: "1.1rem",
                  }}
                >
                  {currentCategory.title}
                </h3>
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "#64748b",
                    marginBottom: "1.4rem",
                    lineHeight: 1.55,
                  }}
                >
                  {currentCategory.description}
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.85rem",
                  }}
                >
                  {currentCategory.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.7rem",
                      }}
                    >
                      <div
                        style={{
                          padding: "0.22rem",
                          borderRadius: "50%",
                          backgroundColor: currentCategory.bulletBg,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "0.5rem",
                            height: "0.5rem",
                            borderRadius: "50%",
                            backgroundColor: currentCategory.dotBg,
                          }}
                        />
                      </div>
                      <span
                        style={{
                          color: "#1e293b",
                          fontWeight: 500,
                        }}
                      >
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  style={{
                    color: currentCategory.textColor,
                    fontWeight: 600,
                    fontSize: "1.17rem",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    marginTop: "1.6rem",
                    padding: 0,
                    textDecoration: "underline",
                  }}
                >
                  {currentCategory.linkText} 
                </button>
              </div>

              {/* Right Image */}
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    borderRadius: "1.1rem",
                    overflow: "hidden",
                    boxShadow: "0 4px 18px rgba(0,0,0,0.12)",
                  }}
                >
                  <img
                    src={currentCategory.image}
                    alt={currentCategory.name}
                    style={{
                      width: "100%",
                      height:
                        window.innerWidth > 640 ? "370px" : "210px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  {/* Icon bubble only */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "1.8rem",
                      left: "1.8rem",
                    }}
                  >
                    <div
                      style={{
                        padding: "0.68rem",
                        borderRadius: "0.7rem",
                        background: currentCategory.dotBg,
                        color: "white",
                        boxShadow: "0 6px 12px rgba(0,0,0,0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {currentCategory.icon}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .lms-content-section {
              grid-template-columns: 1fr !important;
            }
          }
          @media (max-width: 600px) {
            .lms-content-section { padding: 1.1rem !important; }
          }
        `}</style>
      </div>
    </div>
  );
};

export default LmsOutcome; 