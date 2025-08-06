import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';

import img1 from '../assets/anyone.jpg';
import img2 from '../assets/private.jpg';
import img3 from '../assets/IdentitySop.jpg';
import img4 from '../assets/junior.jpg';
import img5 from '../assets/launch.jpg';

const cardData = [
  {
    image: img1,
    title: 'Personal Credit Repair',
    text: 'Dispute, delete, and rebuild negative items using process strategies designed for financial reputation and open credit.',
    icon: '💳',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    image: img2,
    title: 'Become Private',
    text: 'Shift your legal status, file your SPC, get private EINs, and reclaim your sovereignty under the law—with full paperwork and support.',
    icon: '🛡️',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    image: img3,
    title: 'Operate Private',
    text: 'Run your business through trusts, PMAs, and private contracts to shield assets, minimize taxes, and exit the public system.',
    icon: '🏢',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    image: img4,
    title: 'Business-in-a-Box Coaching',
    text: 'Plug-and-play launch plans for real businesses—like car rentals, digital agencies, and tax prep—ready to start in just days.',
    icon: '📦',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  },
  {
    image: img5,
    title: 'Credit Mastery',
    text: 'Unlock secrets in revolving credit, and installment funding to launch your business or side hustle—without using personal savings.',
    icon: '🚀',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  },
  // Duplicate cards for better slider performance
  {
    image: img1,
    title: 'Personal Credit Repair',
    text: 'Dispute, delete, and rebuild negative items using process strategies designed for financial reputation and open credit.',
    icon: '💳',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    image: img2,
    title: 'Become Private',
    text: 'Shift your legal status, file your SPC, get private EINs, and reclaim your sovereignty under the law—with full paperwork and support.',
    icon: '🛡️',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    image: img3,
    title: 'Operate Private',
    text: 'Run your business through trusts, PMAs, and private contracts to shield assets, minimize taxes, and exit the public system.',
    icon: '🏢',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    image: img4,
    title: 'Business-in-a-Box Coaching',
    text: 'Plug-and-play launch plans for real businesses—like car rentals, digital agencies, and tax prep—ready to start in just days.',
    icon: '📦',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  },
  {
    image: img5,
    title: 'Credit Mastery',
    text: 'Unlock secrets in revolving credit, and installment funding to launch your business or side hustle—without using personal savings.',
    icon: '🚀',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  },
];

const EmpowermentSlider = () => {
  return (
    <section style={{ 
      background: 'linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%)',
      padding: '40px 20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.02"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        opacity: 0.3
      }}></div>
      
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        textAlign: 'center',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ 
            fontSize: '3rem', 
            fontWeight: '800', 
            marginBottom: '0px', 
            color: '#1a202c',
            letterSpacing: '-0.02em'
          }}>
            What He Teaches
          </h2>
        </div>

        <div style={{ position: 'relative' }}>
          <Swiper
            effect="coverflow"
            grabCursor={true}
            loop
            slidesPerView="auto"
            centeredSlides={true}
            spaceBetween={20}
            touchRatio={1.5}
            touchAngle={45}
            resistance={true}
            resistanceRatio={0.85}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 2.5,
              slideShadows: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            style={{
              padding: '40px 20px',
              overflow: 'visible',
            }}
          >
            {cardData.map((card, index) => (
              <SwiperSlide
                key={index}
                style={{
                  width: '320px',
                  background: '#ffffff',
                  borderRadius: '24px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  transform: 'translateY(0)',
                  cursor: 'pointer',
                }}
              >
                <div style={{
                  position: 'relative',
                  height: '200px',
                  background: card.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}>
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: 1,
                      transition: 'opacity 0.3s ease'
                    }}
                  />
                </div>
                
                <div style={{ 
                  padding: '24px',
                  background: '#ffffff'
                }}>
                  <h3 style={{ 
                    fontSize: '1.3rem', 
                    fontWeight: '700', 
                    marginBottom: '12px',
                    color: '#1a202c',
                    lineHeight: '1.3'
                  }}>
                    {card.title}
                  </h3>
                  <p style={{ 
                    fontSize: '0.95rem', 
                    color: '#4a5568', 
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {card.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Enhanced Navigation Buttons */}
          <div className="swiper-button-next" style={{
            color: '#1a202c',
            background: 'rgba(255,255,255,0.9)',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backdropFilter: 'blur(10px)',
            border: '2px solid rgba(26,32,44,0.1)',
            transition: 'all 0.3s ease',
            right: '20px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}></div>
          <div className="swiper-button-prev" style={{
            color: '#1a202c',
            background: 'rgba(255,255,255,0.9)',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backdropFilter: 'blur(10px)',
            border: '2px solid rgba(26,32,44,0.1)',
            transition: 'all 0.3s ease',
            left: '20px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}></div>

          {/* Custom Navigation Styles */}
          <style>{`
            .swiper-button-next:hover,
            .swiper-button-prev:hover {
              background: rgba(255,255,255,1) !important;
              transform: scale(1.1);
              box-shadow: 0 6px 16px rgba(0,0,0,0.15) !important;
            }
            .swiper-button-next::after,
            .swiper-button-prev::after {
              font-size: 18px;
              font-weight: bold;
            }
            .swiper-slide {
              transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }
            .swiper-slide-active {
              transform: scale(1.05) !important;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default EmpowermentSlider;


