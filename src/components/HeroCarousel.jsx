import React, { useEffect, useRef } from 'react';
import img1 from '../assets/Couple.jpg';
import img2 from '../assets/carluxury.jpg';
import img3 from '../assets/jet.jpg';
import img4 from '../assets/yatchview.jpg';

const slides = [
  {
    image: img1,
    heading: 'Protect What You Build. Pass On What Matters',
    subline: '',
  },
  {
    image: img2,
    heading: 'Thomas Jefferson',
    subline:
      '"When the people fear the government there is tyranny. When the government fears the people, there is liberty."',
  },
  {
    image: img3,
    heading: 'Board as a Student. Land as a Sovereign',
    subline: '',
  },
  {
    image: img4,
    heading: 'Operate Private. Take Control. Live Sovereign',
    subline: '',
  },
];

const HeroCarousel = () => {
  const carouselRef = useRef(null);
  const totalSlides = slides.length;

  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % totalSlides;
      if (carouselRef.current) {
        carouselRef.current.style.transform = `translateX(-${(idx * 100) / totalSlides}%)`;
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e, index) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;

    target.style.transform = `scale(1.02) perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg)`;

    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const size = 60; // smaller ripple size
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    target.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: '90vh',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <style>
        {`
          .ripple {
            position: absolute;
            background: rgba(255, 255, 255, 0.25);
            border-radius: 50%;
            pointer-events: none;
            transform: scale(0);
            animation: ripple-effect 0.6s ease-out;
            z-index: 10;
          }

          @keyframes ripple-effect {
            to {
              transform: scale(2.5);
              opacity: 0;
            }
          }

          .slide-container {
            transition: transform 0.3s ease;
            will-change: transform;
          }
        `}
      </style>

      <div
        id="hero-carousel"
        ref={carouselRef}
        style={{
          display: 'flex',
          width: `${totalSlides * 100}%`,
          height: '100%',
          transition: 'transform 1s ease',
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide-container"
            style={{
              flex: `0 0 ${100 / totalSlides}%`,
              position: 'relative',
              background: `url(${slide.image}) center/cover no-repeat`,
              transformStyle: 'preserve-3d',
            }}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.4)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
                color: '#fff',
                padding: '0 20px 100px',
                textAlign: 'center',
                zIndex: 5,
              }}
            >
              <h1
                style={{
                  fontSize: '2em',
                  fontWeight: 'bold',
                  margin: '0 0 12px',
                }}
              >
                <span>{slide.heading}</span>
              </h1>
              <div
                style={{
                  height: '3px',
                  width: '100%',
                  maxWidth: slide.subline ? '300px' : '800px',
                  backgroundColor: '#0ea5e9',
                  marginBottom: slide.subline ? '20px' : '0',
                }}
              ></div>
              {slide.subline && (
                <p style={{ fontSize: '1em', maxWidth: '700px' }}>
                  <span>{slide.subline}</span>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
