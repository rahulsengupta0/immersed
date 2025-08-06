import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiArrowRight, FiDollarSign, FiCreditCard, FiBriefcase } from 'react-icons/fi';
import Senior from '../assets/senior.jpeg';

const RoadmapStepThree = () => {
  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: "'Inter', sans-serif"
    }}>
      {/* Header Section */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'flex-start', md: 'flex-end' },
        marginBottom: '40px',
        borderBottom: '2px solid #e0e7ff',
        paddingBottom: '20px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          marginBottom: '20px',
          width: '100%'
        }}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: 'clamp(60px, 15vw, 120px)',
              fontWeight: 800,
              color: '#3b82f6',
              lineHeight: 0.8,
              marginRight: '20px'
            }}
          >
            3
          </motion.div>
          <div>
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                fontSize: 'clamp(24px, 5vw, 36px)',
                fontWeight: 700,
                color: '#1e3a8a',
                marginBottom: '8px'
              }}
            >
              Private Business Credit
            </motion.h2>
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            fontSize: 'clamp(14px, 4vw, 18px)',
            color: '#4b5563',
            width: '100%'
          }}
        >
          Build $200K+ in Business Credit — No SSN. No PG. No Banks.
        </motion.p>
      </div>

      {/* Course Card - Operate Private with Image */}
      <motion.div 
        whileHover={{ y: -5 }}
        style={{
          width: '100%',
          maxWidth: '400px',
          backgroundColor: 'white',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          margin: '0 auto 40px',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Image Header Section */}
        <div style={{
          height: '180px',
          backgroundImage: `url(${Senior})`, // Replace with your image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'flex-end',
          position: 'relative'
        }}>
          {/* Dark overlay for better text visibility */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)'
          }}></div>
          
          {/* Premium Course Badge */}
          <div style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            backgroundColor: 'rgba(255,255,255,0.2)',
            padding: '4px 8px',
            borderRadius: '20px',
            color: 'white',
            fontSize: '12px',
            fontWeight: 600,
            backdropFilter: 'blur(5px)',
            zIndex: 1
          }}>
            Premium Course
          </div>
          
          {/* Title Section */}
          <div style={{
            color: 'white',
            padding: '20px',
            position: 'relative',
            zIndex: 1,
            width: '100%',
            textAlign: 'center'
          }}>
            <h3 style={{ 
              fontSize: '22px', 
              fontWeight: 600, 
              margin: '0 0 8px',
              textShadow: '0 1px 3px rgba(0,0,0,0.3)'
            }}>
              Private Business Credit
            </h3>
            <p style={{ 
              fontSize: '14px', 
              opacity: 0.9, 
              margin: 0,
              textShadow: '0 1px 2px rgba(0,0,0,0.3)'
            }}>
              Learn how to build unlimited business credit in the Private
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div style={{ 
          padding: '25px',
          flex: 1,
          display: 'flex',
          flexDirection: 'column'
        }}>
          <p style={{
            fontSize: '15px',
            color: '#6b7280',
            lineHeight: 1.6,
            marginBottom: '20px',
            flex: 1
          }}>
            Build business credit using UBOT Trusts and establish private merchant processing — no banks, no KYC, no shutdowns.
          </p>
          <div style={{ marginTop: 'auto' }}>
            <Link 
              to="/ContactSection"
              style={{
                display: 'block',
                padding: '12px 20px',
                backgroundColor: '#3b82f6',
                color: 'white',
                borderRadius: '6px',
                fontSize: '15px',
                fontWeight: 600,
                textDecoration: 'none',
                textAlign: 'center',
                transition: 'all 0.2s ease',
                ':hover': {
                  backgroundColor: '#2563eb'
                }
              }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Course Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundColor: '#f0f9ff',
          borderRadius: '12px',
          padding: '25px',
          marginBottom: '40px',
          borderLeft: '4px solid #3b82f6'
        }}
      >
        <p style={{
          fontSize: '16px',
          lineHeight: 1.6,
          color: '#1e3a8a',
          margin: 0
        }}>
          This isn't just funding. It's financial sovereignty. You'll learn how to build business credit using UBOT Trusts, fix your personal credit through our "I Want Remedy Now" system, and set up Private Merchant Processing — completely outside the traditional banking system.
        </p>
      </motion.div>

      {/* Two Column Layout */}
      <div style={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: '30px',
        marginBottom: '40px'
      }}>
        {/* What You'll Master Section */}
        <div style={{ flex: 1 }}>
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: '22px',
              fontWeight: 700,
              color: '#1e3a8a',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            <FiCreditCard style={{ color: '#3b82f6', fontSize: '24px' }} />
            What You'll Master:
          </motion.h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '15px'
          }}>
            {[
              "Structure UBOTs to unlock vendor and card accounts (Tier 1-4)",
              "Dispute & fix your public credit file lawfully",
              "Improve personal credit for cards, loans & mortgages",
              "Private merchant processing (no KYC requirements)",
              "0% APR funding strategies for rapid scaling",
              "Asset protection through private structures",
              "Advanced credit stacking techniques"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{
                  padding: '16px',
                  backgroundColor: 'white',
                  borderRadius: '10px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  borderLeft: '3px solid #3b82f6'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    backgroundColor: '#dbeafe',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '12px',
                    flexShrink: 0
                  }}>
                    <FiCheckCircle style={{ color: '#3b82f6', fontSize: '14px' }} />
                  </div>
                  <span style={{ color: '#4b5563', fontSize: '15px' }}>{item}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Business Opportunities Section */}
        <div style={{ flex: 1 }}>
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontSize: '22px',
              fontWeight: 700,
              color: '#1e3a8a',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            <FiBriefcase style={{ color: '#3b82f6', fontSize: '24px' }} />
            Business Opportunities:
          </motion.h3>
          
          <div style={{ marginBottom: '25px' }}>
            <h4 style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#3b82f6',
              marginBottom: '15px'
            }}>Top 10 Credit-Funded Businesses:</h4>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '12px',
              marginBottom: '20px'
            }}>
              {[
                { name: "Car Rental", desc: "(Turo, HyreCar)" },
                { name: "Rental Arbitrage", desc: "(Airbnb, VRBO)" },
                { name: "Payment Processing", desc: "Merchant Services" },
                { name: "Coaching Business", desc: "Consulting Firm" },
                { name: "E-commerce", desc: "Dropshipping" },
                { name: "Cleaning Services", desc: "Commercial/Residential" },
                { name: "Media Studio", desc: "Podcast/Video Production" },
                { name: "Credit Services", desc: "Repair/Funding Agency" },
                { name: "Virtual Offices", desc: "Notary Services" },
                { name: "Financial Services", desc: "Tax Prep & Bookkeeping" }
              ].map((business, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    padding: '14px',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                    borderTop: '3px solid #60a5fa'
                  }}
                >
                  <h5 style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#1e3a8a',
                    margin: '0 0 4px'
                  }}>{business.name}</h5>
                  <p style={{
                    fontSize: '13px',
                    color: '#6b7280',
                    margin: 0
                  }}>{business.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#3b82f6',
              marginBottom: '15px'
            }}>15 Additional Opportunities:</h4>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '10px',
              padding: '18px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
            }}>
              <p style={{
                color: '#4b5563',
                fontSize: '14px',
                lineHeight: 1.6,
                margin: 0
              }}>
                Mobile Notary • Box Truck Freight • ATM Placement • Funnel Agency • Event Rentals • 
                Dispatching • 360 Photo Booths • Supplement Brands • Print-on-Demand • Auto Detailing • 
                Subscription Boxes • Virtual Assistants • Online Courses • Pet Services • Commercial Cleaning
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundColor: '#1e40af',
          borderRadius: '12px',
          padding: '25px',
          color: 'white',
          marginTop: '30px',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
        }}
      >
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{
            fontSize: '20px',
            fontWeight: 700,
            marginBottom: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <FiArrowRight style={{ fontSize: '24px' }} />
            Ready to Build Your Financial Sovereignty?
          </h3>
          <p style={{
            fontSize: '16px',
            lineHeight: 1.6,
            opacity: 0.9,
            marginBottom: '20px'
          }}>
            Book your $49 Roadmap Session today. You'll complete a Business Credit Scorecard and meet with your assigned counselor to:
          </p>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: '0 0 20px'
          }}>
            {[
              "Review your current credit profile and goals",
              "Choose the optimal funding path for your business",
              "Set up your private payment processing system",
              "Get personalized strategy for credit building"
            ].map((item, index) => (
              <li key={index} style={{
                padding: '8px 0',
                display: 'flex',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '12px',
                  flexShrink: 0
                }}>
                  <FiCheckCircle style={{ color: 'white', fontSize: '12px' }} />
                </div>
                <span style={{ fontSize: '15px' }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <Link 
          to="/ContactSection"
          style={{ textDecoration: 'none', width: '100%' }}
        >
          <button style={{
            padding: '14px 24px',
            backgroundColor: 'white',
            color: '#1e40af',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 700,
            cursor: 'pointer',
            fontSize: '16px',
            width: '100%',
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            ':hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 8px -1px rgba(0, 0, 0, 0.15)'
            }
          }}>
            Contact Us Now to Book Your Session
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default RoadmapStepThree;