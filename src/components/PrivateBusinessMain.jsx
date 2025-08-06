import { motion } from 'framer-motion';
import { CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

export default function FeaturesSection({ features }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const glassCardStyle = {
  background: 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(12px)',
  borderRadius: '20px',
  padding: '30px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
};

  return (
    <motion.section
      style={{
        ...glassCardStyle,
        marginTop: '40px',
        position: 'relative',
        padding: '20px 0',
      }}
      variants={scaleUp}
    >
      {/* Heading */}
      <motion.h2
        style={{
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          fontWeight: '700',
          color: colors.dark,
          marginBottom: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          width: '100%',
          textAlign: 'center',
        }}
        variants={slideUp}
      >
        <CheckCircle size={28} color={colors.secondary} />
        What You'll Master:
      </motion.h2>

      {/* Scroll buttons */}
      <button
        onClick={() => scroll('left')}
        style={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          background: '#fff',
          border: `1px solid ${colors.primaryLight}`,
          borderRadius: '50%',
          padding: '8px',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          zIndex: 10,
        }}
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => scroll('right')}
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          background: '#fff',
          border: `1px solid ${colors.primaryLight}`,
          borderRadius: '50%',
          padding: '8px',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          zIndex: 10,
        }}
      >
        <ChevronRight size={20} />
      </button>

      {/* Slider */}
      <motion.div
        ref={scrollRef}
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          gap: '20px',
          padding: '0 10px 10px',
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
        }}
        variants={containerVariants}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            style={{
              flex: '0 0 auto',
              minWidth: '280px',
              maxWidth: '320px',
              background: colors.light,
              borderRadius: '16px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              border: `1px solid ${colors.primaryLight}`,
              scrollSnapAlign: 'start',
              transition: 'transform 0.3s ease',
            }}
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <img
              src={feature.image}
              alt={feature.title}
              style={{
                width: '100%',
                height: '160px',
                objectFit: 'cover',
                borderRadius: '12px',
              }}
            />

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <div
                style={{
                  background: 'rgba(14, 165, 233, 0.1)',
                  padding: '10px',
                  borderRadius: '8px',
                }}
              >
                {feature.icon}
              </div>
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: '500',
                  flex: 1,
                }}
              >
                {feature.title}
              </p>
            </div>

            <div
              style={{
                padding: '12px',
                background: 'rgba(14, 165, 233, 0.05)',
                borderRadius: '8px',
                borderLeft: `3px solid ${colors.secondary}`,
              }}
            >
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: '1.6',
                  color: colors.text,
                }}
              >
                {feature.description ||
                  'Detailed explanation about this feature and how it benefits your business.'}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
