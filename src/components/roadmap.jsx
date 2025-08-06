import React from 'react';
import { motion } from 'framer-motion';
import roadmapImg from '../assets/logo_roadmap.png';
import Banner from '../assets/roadmap-banner.png';

const RoadmapSeries = () => {
  return (
    <section
      style={{
        fontFamily: "'Inter', sans-serif",
        background: 'linear-gradient(to bottom, #f9fafb 0%, #f0f9ff 100%)',
        paddingBottom: '80px',
      }}
    >
      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          position: 'relative',
          width: '100%',
          marginTop: '50px',
          minHeight: '60vh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          backgroundImage: `url(${Banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background:
              'linear-gradient(to right, rgba(255,255,255,0.85), rgba(236,245,255,0.8), rgba(255,255,255,0.85))',
            zIndex: 1,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            padding: '40px 20px',
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            <motion.h1
              style={{
                fontSize: 'clamp(1.75rem, 6vw, 4rem)',
                fontWeight: 800,
                color: '#111827',
                margin: 0,
                lineHeight: 1.2,
                textShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}
              whileHover={{ scale: 1.02 }}
            >
              The{' '}
              <motion.span
                style={{ color: '#0e6297ff', display: 'inline-block' }}
                whileHover={{
                  scale: 1.05,
                  rotate: [0, -2, 2, -2, 0],
                  transition: { duration: 0.5 },
                }}
              >
                Roadmap
              </motion.span>{' '}
              Series
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                color: '#374151',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              Your comprehensive guide to financial sovereignty and credit mastery
            </motion.p>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, type: 'spring' }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2)',
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(8px)',
                padding: '12px 28px',
                borderRadius: '50px',
                border: '1px solid rgba(37, 99, 235, 0.2)',
                marginTop: '16px',
              }}
            >
              <span
                style={{
                  color: '#374151',
                  fontSize: '1rem',
                  fontWeight: 600,
                  marginRight: '8px',
                }}
              >
                Only
              </span>
              <motion.span
                style={{
                  color: '#0e6297ff',
                  fontSize: '1.6rem',
                  fontWeight: 700,
                }}
                animate={{
                  scale: [1, 1.05, 1],
                  textShadow: [
                    '0 0 0 rgba(37,99,235,0)',
                    '0 0 10px rgba(37,99,235,0.3)',
                    '0 0 0 rgba(37,99,235,0)',
                  ],
                }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
              >
                $49
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* CONTENT CONTAINER */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '2rem 1.25rem',
        }}
      >
        {/* Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              flex: '0 0 auto',
              background: '#eee',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '30px',
            }}
          >
            <motion.img
              src={roadmapImg}
              alt="Atlas Logo"
              style={{
                width: '100%',
                maxWidth: '120px',
                height: 'auto',
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            />
          </div>

          <div
            style={{
              flex: 1,
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#111827',
                marginBottom: '1rem',
                lineHeight: 1.3,
              }}
            >
              Start Your Journey to{' '}
              <span style={{ color: '#0e6297ff' }}>Private Wealth</span>, Legal Freedom & Credit Power
            </h3>
            <p
              style={{
                fontSize: '0.9rem',
                color: '#4b5563',
                marginBottom: '1rem',
                lineHeight: 1.6,
              }}
            >
              The Roadmap Series by Paulmichael is your gateway to exiting the public system, restoring your private status, and building real businesses using credit and trust law.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['Sovereignty', 'Credit Mastery', 'Trust Operations', 'Private Commerce'].map((item, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    padding: '0.375rem 0.75rem',
                    backgroundColor: '#dbeafe',
                    color: '#0e5988ff',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            background: 'linear-gradient(135deg, #0e63a9ff 0%, #237fe1ff 100%)',
            borderRadius: '20px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            marginTop: '2rem',
          }}
        >
          <div style={{ padding: '2rem 1.25rem', textAlign: 'center' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                margin: '0 auto 1.25rem',
                color: 'white',
                opacity: 0.5,
              }}
            >
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p
              style={{
                fontSize: '1rem',
                color: 'white',
                fontWeight: 500,
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              "Whether you're just getting started or ready to scale, this series gives you the full blueprint — from sovereignty and credit to trust operations and private commerce."
            </p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            textAlign: 'center',
            marginTop: '2rem',
          }}
        >
          <h3
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#111827',
              marginBottom: '1.5rem',
            }}
          >
            Ready to Transform Your Financial Future?
          </h3>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 25px -5px rgba(37, 99, 235, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '0.75rem 1.5rem',
              background: 'linear-gradient(135deg, #3799daff 0%, #1d84d8ff 100%)',
              color: 'white',
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Enroll Now for $49
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default RoadmapSeries;
