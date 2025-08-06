import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiArrowRight, FiBookOpen } from 'react-icons/fi';
import BecomePrivate from '../assets/sophomore.jpg';
import SOV from '../assets/sovereignty.jpg';

const RoadmapStepOne = () => {
  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: "'Inter', sans-serif"
    }}>
      {/* Header Section - Stacked on mobile */}
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
            1
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
              Roadmap Series: First Step
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
          Begin your journey to private status and sovereignty
        </motion.p>
      </div>

      {/* Two Card Row - Matching Operate Private Style */}
      <div style={{
        display: 'flex',
        gap: '20px',
        marginBottom: '40px',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '@media (min-width: 768px)': {
          flexDirection: 'row',
          justifyContent: 'center'
        }
      }}>
      {/* Card 1 - Become Private with Image */}
      <motion.div 
        whileHover={{ y: -5 }}
        style={{
          width: '500px',
          maxWidth: '100%',
          backgroundColor: 'white',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Image Header Section */}
        <div style={{
          height: '180px',
          backgroundImage: `url(${BecomePrivate})`, // Replace with your image URL
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
            width: '100%'
          }}>
            <h3 style={{ 
              fontSize: '22px', 
              fontWeight: 600, 
              margin: '0 0 8px',
              textShadow: '0 1px 3px rgba(0,0,0,0.3)'
            }}>
              Become Private
            </h3>
            <p style={{ 
              fontSize: '14px', 
              opacity: 0.9, 
              margin: 0,
              textShadow: '0 1px 2px rgba(0,0,0,0.3)'
            }}>
              Status Correction Masterclass
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
            Reclaim your legal identity and exit the public system through proper status correction.
          </p>
          <div style={{ marginTop: 'auto' }}>
            <Link 
              to="/sophomore"
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

      {/* Card 2 - New SOV 101 with Image */}
      <motion.div 
        whileHover={{ y: -5 }}
        style={{
          width: '500px',
          maxWidth: '100%',
          backgroundColor: 'white',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Image Header Section */}
        <div style={{
          height: '180px',
          backgroundImage: `url(${SOV})`, // Replace with your image URL
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
            width: '100%'
          }}>
            <h3 style={{ 
              fontSize: '22px', 
              fontWeight: 600, 
              margin: '0 0 8px',
              textShadow: '0 1px 3px rgba(0,0,0,0.3)'
            }}>
              New SOV 101
            </h3>
            <p style={{ 
              fontSize: '14px', 
              opacity: 0.9, 
              margin: 0,
              textShadow: '0 1px 2px rgba(0,0,0,0.3)'
            }}>
              Sovereignty Foundations
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
            Master the principles of sovereignty and how to rebut legal presumptions effectively.
          </p>
          <div style={{ marginTop: 'auto' }}>
            <Link 
              to="/sov"
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
      </div>

      {/* Content Section - Stack on mobile */}
      <div style={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: '30px',
        marginBottom: '40px'
      }}>
        <div style={{ flex: 2 }}>
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: '20px',
              fontWeight: 600,
              color: '#1e3a8a',
              marginBottom: '15px'
            }}
          >
            What You'll Learn:
          </motion.h3>
          <ul style={{
            listStyle: 'none',
            padding: 0
          }}>
            {[
              "Status correction and the principles of sovereignty",
              "Understanding legal fictions and how to rebut presumption",
              "How to remove yourself from public jurisdiction",
              "The first legal documents and private contracts you'll need",
              "How to begin protecting yourself and your estate"
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{
                  padding: '10px 0',
                  borderBottom: '1px solid #e5e7eb',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <div style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: '#dbeafe',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '10px',
                  flexShrink: 0
                }}>
                  <FiCheckCircle style={{ color: '#3b82f6', fontSize: '12px' }} />
                </div>
                <span style={{ color: '#4b5563', fontSize: '14px' }}>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              backgroundColor: '#f0f9ff',
              borderRadius: '12px',
              padding: '20px',
              border: '1px solid #dbeafe'
            }}
          >
            <h4 style={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#1e3a8a',
              marginBottom: '12px'
            }}>What You Can Do After This Course:</h4>
            <ul style={{
              listStyle: 'none',
              padding: 0
            }}>
              {[
                "Offer sovereignty or status correction consulting",
                "Launch a private education, coaching, or legal literacy business",
                "Create your own trust-based services or business",
                "Start laying the legal foundation to discharge debt and reclaim assets"
              ].map((item, index) => (
                <li key={index} style={{
                  padding: '6px 0',
                  display: 'flex',
                  alignItems: 'flex-start'
                }}>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    backgroundColor: '#bfdbfe',
                    borderRadius: '50%',
                    marginRight: '8px',
                    marginTop: '3px',
                    flexShrink: 0
                  }}></div>
                  <span style={{ color: '#4b5563', fontSize: '13px' }}>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Consulting Session Box */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              backgroundColor: '#1e40af',
              borderRadius: '12px',
              padding: '16px',
              color: 'white'
            }}
          >
            <h4 style={{
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '8px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <FiArrowRight style={{ marginRight: '8px' }} />
              Consulting Session
            </h4>
            <p style={{
              fontSize: '13px',
              lineHeight: 1.5,
              marginBottom: '12px',
              opacity: 0.9
            }}>
              1-on-1 guidance to complete your Readiness Checklist and get rated on your Sovereignty Score.
            </p>
            <button style={{
              width: '100%',
              padding: '8px',
              backgroundColor: 'white',
              color: '#1e40af',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '14px'
            }}>
              Book Session
            </button>
          </motion.div>
        </div>
      </div>

      {/* Next Steps - Stack buttons on mobile */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundColor: '#f8fafc',
          borderRadius: '12px',
          padding: '20px',
          border: '1px solid #e2e8f0',
          marginTop: '30px'
        }}
      >
        <h3 style={{
          fontSize: '18px',
          fontWeight: 600,
          color: '#1e3a8a',
          marginBottom: '12px',
          textAlign: 'center'
        }}>
          Ready to Begin Your Journey?
        </h3>
        <p style={{
          color: '#4b5563',
          fontSize: '14px',
          margin: '0 auto 20px',
          lineHeight: 1.5,
          textAlign: 'center',
          maxWidth: '600px'
        }}>
          After completing these courses, you'll be guided on whether to move into business credit or private trust operations next based on your Sovereignty Score.
        </p>
        <div style={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          gap: '12px'
        }}>
          <a href="/become-private" style={{
            padding: '10px 16px',
            backgroundColor: '#3b82f6',
            color: 'white',
            borderRadius: '6px',
            fontWeight: 600,
            textDecoration: 'none',
            textAlign: 'center',
            fontSize: '14px'
          }}>
            Enroll in Become Private
          </a>
          <a href="/new-sov-101" style={{
            padding: '10px 16px',
            backgroundColor: 'white',
            color: '#3b82f6',
            border: '1px solid #3b82f6',
            borderRadius: '6px',
            fontWeight: 600,
            textDecoration: 'none',
            textAlign: 'center',
            fontSize: '14px'
          }}>
            Enroll in New SOV 101
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default RoadmapStepOne;