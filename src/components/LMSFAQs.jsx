import React, { useState } from 'react';

const faqData = [
  {
    question: "Do I need any prior legal or sovereignty knowledge?",
    answer: "No. Athena is designed to guide you from beginner to advanced with structured, simplified learning flows.",
  },
  {
    question: "How long does each module take?",
    answer: "Each module is self-paced and takes approximately 30–60 minutes, depending on your speed.",
  },
  {
    question: "Can I access the LMS on mobile?",
    answer: "Yes. The dashboard is fully responsive and works seamlessly on mobile, tablet, and desktop.",
  },
  {
    question: "Is there a certificate after completion?",
    answer: "Yes. You’ll receive a digitally verifiable certificate, shareable on LinkedIn or your professional profiles.",
  },
];

const LMSFAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{
      padding: '60px 5%',
      backgroundColor: '#f0f9ff',
      fontFamily: 'Poppins, sans-serif',
    }}>
      <h2 style={{
        fontSize: '2.2rem',
        textAlign: 'center',
        marginBottom: '40px',
        color: '#1e3a8a',
      }}>
        Frequently Asked Questions
      </h2>
      <div style={{ maxWidth: '800px', margin: 'auto' }}>
        {faqData.map((item, index) => (
          <div
            key={index}
            onClick={() => toggleFAQ(index)}
            style={{
              marginBottom: '20px',
              cursor: 'pointer',
              backgroundColor: openIndex === index ? '#e0f2fe' : '#ffffff',
              border: '1px solid #bae6fd',
              borderRadius: '12px',
              padding: '20px 25px',
              boxShadow: openIndex === index ? '0 8px 24px rgba(30, 58, 138, 0.1)' : '0 4px 12px rgba(0,0,0,0.05)',
              transition: 'all 0.3s ease',
            }}
          >
            <h4 style={{
              margin: 0,
              fontSize: '1.2rem',
              color: '#0c4a6e',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              {item.question}
              <span style={{
                fontSize: '1.4rem',
                transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0)',
                transition: 'transform 0.2s ease-in-out',
                color: '#0ea5e9',
              }}>
                +
              </span>
            </h4>
            {openIndex === index && (
              <p style={{
                marginTop: '12px',
                fontSize: '0.95rem',
                color: '#1e3a8a',
                lineHeight: '1.6',
                animation: 'fadeIn 0.3s ease',
              }}>
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Fade animation keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-5px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
};

export default LMSFAQs;
