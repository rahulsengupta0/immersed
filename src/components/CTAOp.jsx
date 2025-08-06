import React from 'react';
import { motion } from 'framer-motion';

const NextStepSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
        borderRadius: '20px',
        padding: '50px 30px',
        maxWidth: '900px',
        margin: '80px auto',
        boxShadow: '0 25px 50px rgba(2, 132, 199, 0.15)',
        fontFamily: 'Inter, sans-serif',
        border: '1px solid rgba(2, 132, 199, 0.1)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(2, 132, 199, 0.1) 0%, rgba(2, 132, 199, 0) 70%)',
        zIndex: 0
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '-30px',
        left: '-30px',
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(2, 132, 199, 0.08) 0%, rgba(2, 132, 199, 0) 70%)',
        zIndex: 0
      }}></div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{
          fontSize: '2.2rem',
          fontWeight: '800',
          marginBottom: '20px',
          textAlign: 'center',
          color: '#0369a1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px'
        }}>
          <span style={{
            display: 'inline-flex',
            width: '50px',
            height: '50px',
            background: '#0284c7',
            color: 'white',
            borderRadius: '50%',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 5px 15px rgba(2, 132, 199, 0.3)'
          }}>🚀</span>
          Your Next Step
        </h2>

        <p style={{
          fontSize: '1.2rem',
          color: '#083344',
          lineHeight: '1.7',
          marginBottom: '30px',
          textAlign: 'center',
          maxWidth: '700px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <strong style={{ color: '#0369a1' }}>Complete the Operate Private Checklist</strong> and book your private session. 
          Our expert counselor will evaluate your legal and asset profile to determine if this is the right next step for your journey.
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <div style={{
            background: 'rgba(2, 132, 199, 0.1)',
            padding: '16px 25px',
            borderRadius: '12px',
            color: '#0369a1',
            fontWeight: '600',
            fontSize: '1.2rem',
            border: '1px solid rgba(2, 132, 199, 0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            width: '100%',
            justifyContent: 'center'
          }}>
            <span style={{ 
              background: '#0284c7',
              color: 'white',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>💰</span>
            <span>Course Investment: <span style={{ fontWeight: '800', color: '#075985' }}>$49</span></span>
          </div>

          <motion.button
            whileHover={{ 
              scale: 1.03,
              boxShadow: '0 15px 30px rgba(2, 132, 199, 0.4)'
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: 'linear-gradient(135deg, #0284c7, #0ea5e9)',
              color: 'white',
              border: 'none',
              padding: '18px 32px',
              fontSize: '1.2rem',
              borderRadius: '12px',
              boxShadow: '0 15px 30px rgba(2, 132, 199, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              width: '100%',
              justifyContent: 'center'
            }}
            onClick={() => alert("Redirecting to booking page...")}
          >
            <span style={{ 
              background: 'rgba(255,255,255,0.2)',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>📞</span>
            Book Private Counselor Session
          </motion.button>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: '#64748b',
            fontSize: '0.9rem',
            marginTop: '10px'
          }}>
            {/* <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8V12" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 16H12.01" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Limited spots available - Next session starts in 3 days</span> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NextStepSection;