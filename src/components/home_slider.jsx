import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


import mcbanner from '../assets/Masterclass.png';
import sovbanner from '../assets/BPSOV_Banner.png';
// import becomeprivatebanner from '../assets/BecomePrivateBanner.png';
import opbanner from '../assets/OperateBanner.png';
import seniorbanner from '../assets/PrivateBusiness.png';
import iwrnbanner from '../assets/iwrn_banner.png';
// import pmcbanner from '../assets/PrivateMerchantFootball.png';
const courseSlides = [
  {
    title: "Masterclass",
    description: "Learn how to set up your trust, your private identity and Business Credit step-by-step.",
    price: "Only $69/month",
    banner: mcbanner,
    link: "/masterclass" // Add your actual route here
  },
  {
    title: "Become Private + New SOV 101",
    description: "Correct your status and exit public contracts to reclaim sovereignty.",

    price: "View More",
    banner: sovbanner,
    link: "/newsov"
  },
  // {
  //   title: "SOPHOMORE: Become Private",
  //   description: "Discover the ideal structure for your business success.",
  //   price: "Connect with Us",
  //   banner: becomeprivatebanner,
  //   link: "/sophomore"
  // },
  {
    title: "JUNIOR: Operate Private",
    description: "Build trusts and PMAs to operate without state oversight.",
    price: "View More",
    banner: opbanner,
    link: "/operate"
  },
  // {
  //   title: "SENIOR: Private Business Credit",
  //   description: "Learn how to build unlimited business credit in the Private.",
  //   price: "Connect with Us",
  //   banner: seniorbanner,
  //   link: "/unlimitedcredit"
  // },
  // {
  //   title: "I Want Remedy Now!",
  //   description: "Fast, lawful credit discharge that puts you back in control.",
  //   price: "Offer Price $399",
  //   banner: iwrnbanner,
  //   link: "/remedy"
  // },
  {

    title: "SENIOR: Private Business Credit",
    description: "Build business credit through UBOT Trusts and private processing.",
    price: "View More",
    banner: seniorbanner,
    link: "/private"
  },
  {
    title: "I Want Remedy Now!",
    description: "Fast, lawful credit discharge that puts you back in control.",
    price: "Offer Price $399",
    banner: iwrnbanner,
    link: "/remedy"
  },
  // {
  //   title: "Private Merchant Course",
  //   description: "Discover the foundation of private commerce and take control of how you get paid",
  //   price: "Connect with Us",
  //   banner: pmcbanner,
  //   link: "/privatemerchant"
  // }

];

const HomeSlider = () => {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);
  const isInView = useInView(sliderRef, { once: true });
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % courseSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + courseSlides.length) % courseSlides.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % courseSlides.length);
  };

  const handlePriceClick = (link) => {
    navigate(link);
  };

  const isMobile = windowWidth < 768;
  const bannerHeight = isMobile ? '180px' : '250px';
  const titleFontSize = isMobile ? '16px' : '18px';
  const descFontSize = isMobile ? '13px' : '14px';
  const buttonFontSize = isMobile ? '13px' : '14px';
  const cardPadding = isMobile ? '15px' : '20px';
  const arrowSize = isMobile ? '35px' : '40px';
  const arrowIconSize = isMobile ? 16 : 18;
  const containerPadding = isMobile ? '0 3vw' : '0 5vw';
  const slidePadding = isMobile ? '0 5px' : '0 10px';
  const buttonPadding = isMobile ? '8px 15px' : '10px 20px';
  const sectionPadding = isMobile ? '20px 0' : '40px 0';
  const arrowTopPosition = `calc(${bannerHeight} / 2 + ${isMobile ? '20px' : '40px'})`;

  return (
    <section
      ref={sliderRef}
      style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        fontFamily: 'Poppins, sans-serif',
        background: 'linear-gradient(to bottom right, #c8ddfaff, #014979ff)',
        padding: sectionPadding,
      }}
    >
      <div style={{
        overflow: 'hidden',
        padding: containerPadding,
      }}>
        <div
          style={{
            display: 'flex',
            width: `${courseSlides.length * 100}%`,
            transform: `translateX(-${current * (100 / courseSlides.length)}%)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          {courseSlides.map((slide, index) => (
            <div
              key={index}
              style={{
                width: `${100 / courseSlides.length}%`,
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: slidePadding,
                boxSizing: 'border-box',
              }}
            >
              <div
                style={{
                  width: '100%',
                  background: '#fff',
                  borderRadius: '12px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: bannerHeight,
                    backgroundImage: `url(${slide.banner})`,
                    backgroundSize: isMobile ? 'contain' : 'cover',
                    backgroundPosition: isMobile ? 'center center' : 'center top',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#f8f9fa',
                  }}
                />
                {isInView && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    style={{
                      width: '100%',
                      textAlign: 'center',
                      color: '#333',
                      padding: cardPadding,
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <motion.h2
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      style={{
                        fontSize: titleFontSize,
                        marginBottom: '5px',
                        fontWeight: '700',
                        color: '#014979',
                      }}
                    >
                      {slide.title}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      style={{
                        fontSize: descFontSize,
                        marginBottom: '10px',
                        lineHeight: '1.5',
                        color: '#666',
                        flex: 1,
                      }}
                    >
                      {slide.description}
                    </motion.p>
                    <motion.button
                      onClick={() => handlePriceClick(slide.link)}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                      style={{
                        background: 'linear-gradient(to right, #3498db, #014979)',
                        color: '#fff',
                        padding: buttonPadding,
                        borderRadius: '25px',
                        fontWeight: 'bold',
                        fontSize: buttonFontSize,
                        display: 'inline-block',
                        alignSelf: 'center',
                        boxShadow: '0 4px 10px rgba(52, 152, 219, 0.3)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: '100%',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {slide.price}
                    </motion.button>
                  </motion.div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handlePrev}
        style={{
          position: 'absolute',
          top: arrowTopPosition,
          left: isMobile ? '5px' : '10px',
          transform: 'translateY(-50%)',
          background: '#fff',
          color: '#014979',
          border: 'none',
          borderRadius: '50%',
          padding: '8px',
          cursor: 'pointer',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: arrowSize,
          height: arrowSize,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        <FaChevronLeft size={arrowIconSize} />
      </button>
      <button
        onClick={handleNext}
        style={{
          position: 'absolute',
          top: arrowTopPosition,
          right: isMobile ? '5px' : '10px',
          transform: 'translateY(-50%)',
          background: '#fff',
          color: '#014979',
          border: 'none',
          borderRadius: '50%',
          padding: '8px',
          cursor: 'pointer',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: arrowSize,
          height: arrowSize,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        <FaChevronRight size={arrowIconSize} />
      </button>
    </section>
  );
};

export default HomeSlider;