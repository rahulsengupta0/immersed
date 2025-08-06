import { motion } from 'framer-motion';
import { useState } from 'react';

const LMSCTA = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Submitted email:', email);
      setIsLoading(false);
      setSubmitted(true);
      setEmail('');
    }, 1500);
  };

  return (
    <div
      style={{
        padding: '100px 3vw',
        background: 'linear-gradient(135deg, #ffffff 0%, #e1f5fe 100%)',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        minHeight: '450px'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          gap: '60px',
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'space-between'
        }}
      >
        {/* Left - Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ flex: '1 1 440px', zIndex: 2, minWidth: '300px' }}
        >
          <h2
            style={{
              fontSize: '2.75rem',
              color: '#222',
              marginBottom: '24px',
              fontWeight: 700,
              lineHeight: 1.15
            }}
          >
            Ready to{' '}
            <span style={{ color: '#0288d1', fontWeight: '800' }}>
              Transform Your Learning Experience?
            </span>
          </h2>
          <p
            style={{
              fontSize: '1.25rem',
              color: '#444',
              maxWidth: '420px',
              marginBottom: '48px',
              lineHeight: 1.6,
              fontWeight: 500
            }}
          >
            Join the Athena LMS waitlist and be the first to know when we launch
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} style={{ maxWidth: '420px' }}>
              <div
                style={{
                  display: 'flex',
                  position: 'relative'
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  style={{
                    flex: 1,
                    padding: '16px 26px',
                    border: '2.5px solid #cbd5e1',
                    borderRadius: '50px',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    fontWeight: 500,
                    color: '#1e293b'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#0288d1';
                    e.target.style.boxShadow =
                      '0 0 10px 3px rgba(2, 136, 209, 0.3)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#cbd5e1';
                    e.target.style.boxShadow = 'none';
                  }}
                />
                <motion.button
                  type="submit"
                  style={{
                    position: 'absolute',
                    right: '6px',
                    top: '6px',
                    padding: '14px 28px',
                    background: '#0288d1',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50px',
                    fontWeight: 600,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    userSelect: 'none',
                    boxShadow: '0 5px 15px rgba(2,136,209,0.35)',
                    transition: 'all 0.25s ease-in-out'
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 8px 28px rgba(2,136,209,0.6)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span
                      style={{
                        width: '20px',
                        height: '20px',
                        border: '3px solid rgba(255, 255, 255, 0.4)',
                        borderRadius: '50%',
                        borderTopColor: 'white',
                        animation: 'spin 1.1s linear infinite',
                        display: 'block'
                      }}
                    ></span>
                  ) : (
                    <>
                      Notify Me
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              style={{
                textAlign: 'center',
                maxWidth: '420px',
                userSelect: 'none'
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4caf50"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ marginBottom: '18px' }}
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <h3
                style={{
                  fontSize: '1.7rem',
                  color: '#222',
                  marginBottom: '16px',
                  fontWeight: 700
                }}
              >
                Thank you for joining our waitlist!
              </h3>
              <p
                style={{
                  color: '#555',
                  marginBottom: '28px',
                  fontWeight: 500,
                  fontSize: '1.1rem',
                  lineHeight: 1.5
                }}
              >
                We'll notify you as soon as Athena LMS is ready.
              </p>
              <motion.button
                style={{
                  padding: '14px 34px',
                  background: 'transparent',
                  color: '#0288d1',
                  border: '2.5px solid #0288d1',
                  borderRadius: '50px',
                  fontWeight: 600,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  marginTop: '8px',
                  userSelect: 'none',
                  transition: 'all 0.3s ease-in-out',
                  boxShadow:
                    '0 0 0 0 transparent, 0 0 6px rgba(2,136,209,0.5) inset'
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(2, 136, 209, 0.1)',
                  boxShadow:
                    '0 0 24px rgba(2,136,209,0.5), 0 0 12px rgba(2,136,209,0.9) inset'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSubmitted(false)}
              >
                Join Again
              </motion.button>
            </motion.div>
          )}
        </motion.div>

        {/* Right - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{
            flex: '1 1 420px',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 24px 48px rgb(0 0 0 / 0.1)',
            position: 'relative',
            minWidth: '280px',
            maxWidth: '520px'
          }}
        >
          {/* Gradient Overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                'linear-gradient(180deg, rgba(2,136,209,0.3) 0%, transparent 100%)',
              zIndex: 1
            }}
          />
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Athena LMS Dashboard Preview"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              borderRadius: '20px',
              position: 'relative',
              zIndex: 2
            }}
            loading="lazy"
          />
        </motion.div>
      </div>

      {/* Spinner animation */}
      <style>
        {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }

          input::-webkit-input-placeholder {
            color: #94a3b8;
            font-weight: 400;
          }
          input:-moz-placeholder {
            color: #94a3b8;
            font-weight: 400;
          }
          input::-moz-placeholder {
            color: #94a3b8;
            font-weight: 400;
          }
          input:-ms-input-placeholder {
            color: #94a3b8;
            font-weight: 400;
          }
        `}
      </style>
    </div>
  );
};

export default LMSCTA;
