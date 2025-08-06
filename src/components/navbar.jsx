import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/creditorlogo.png';
import mascot from '../assets/paul_avatar.png';
import AdminModal from './AdminModal';
import './navbar.css';

const desktopTourSteps = [
  { selector: null, text: "👋 Welcome to Creditor Academy!", description: "We empower individuals with private education on credit, remedy processes, and business structuring. Let's take a quick tour of the platform." },
  { selector: '#nav-courses', text: 'Explore all credit-building courses.', description: 'Browse our structured education paths covering credit, sovereignty, and private business solutions.' },
  { selector: '#nav-services', text: 'Check services like website and merchant support.', description: 'We offer additional services like private website setups and merchant processing tailored to your journey.' },
  { selector: '#nav-membership', text: 'Join our membership to unlock full benefits.', description: 'Access exclusive content, member-only classes, priority support, and more with our all-in-one membership.' },
  { selector: '#nav-contact', text: 'Have a question? Contact us here.', description: 'Need help or have a query? Reach out to us anytime through our contact page.' },
  { selector: '#nav-remedy', text: 'Start your remedy journey now.', description: 'Take action with practical remedy courses to correct status, claim rights, and restore credit powerfully.' },
  { selector: '#nav-login', text: 'Already a member? Login here.', description: "If you've joined us before, log in to access your dashboard, courses, and exclusive resources." }
];

// Updated mobile tour steps for your requested behavior
const mobileTourSteps = [
  {
    selector: '.nav-menu-btn',
    text: "Hamburger Menu",
    description: "This is the hamburger icon. Tap here to access Courses, Services & more."
  },
  {
    selector: null,
    text: "Menu Options",
    description: "Here you can see the services, courses, and other relevant offerings !."
  },
  {
    selector: '#nav-login.mobile',
    text: "🔑 Login Button",
    description: "Tap here to create an account or login to access member features."
  },
  {
    selector: null,
    text: "🤖 AI Assistant",
    description: "This is your AI assistant chatbot ready to help with any questions."
  }
];

function getTourSteps(isMobile) {
  return isMobile ? mobileTourSteps : desktopTourSteps;
}

function getDeviceGroup(width) {
  if (width <= 599) return 'mobile';
  if (width >= 600 && width < 1300) return 'tablet';
  return 'desktop';
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [deviceGroup, setDeviceGroup] = useState(getDeviceGroup(window.innerWidth));
  const [scrolled, setScrolled] = useState(false);
  const isMobileTablet = width <= 1024;

  // Tour state
  const [tourStep, setTourStep] = useState(0);
  const [tourActive, setTourActive] = useState(true);
  const [animateIn, setAnimateIn] = useState(false);

  const coursesTimeoutRef = useRef(null);
  const servicesTimeoutRef = useRef(null);
  const dropdownRef = useRef(null);

  const [tourSteps, setTourSteps] = useState(getTourSteps(isMobileTablet));

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setDeviceGroup(getDeviceGroup(window.innerWidth));
      setTourSteps(getTourSteps(window.innerWidth <= 1024));
      if (!(window.innerWidth <= 1024) && isMenuOpen) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCourses(false);
        setShowServices(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (tourActive) setTimeout(() => setAnimateIn(true), 100);
    else setAnimateIn(false);
  }, [tourActive]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 5);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileTablet && isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen, isMobileTablet]);

  // CONTROL MENU AND DROPDOWNS BASED ON TOUR STEP - Mobile simplified version
  useEffect(() => {
    if (!isMobileTablet || !tourActive) return;

    /*
      Step 0: Explain hamburger icon, menu closed
      Step 1: Open menu, no dropdowns - general explanation
      Step 2: Login button highlight - menu remains open, dropdowns closed
      Step 3: Chatbot highlight - menu closed
      After step 3: close menu and tour ends
    */

    switch (tourStep) {
      case 0:
        setIsMenuOpen(false);
        setShowCourses(false);
        setShowServices(false);
        break;
      case 1:
        setIsMenuOpen(true);
        setShowCourses(false);
        setShowServices(false);
        break;
      case 2:
        setIsMenuOpen(true);
        setShowCourses(false);
        setShowServices(false);
        break;
      case 3:
        setIsMenuOpen(false);
        setShowCourses(false);
        setShowServices(false);
        break;
      default:
        // Just close menu & dropdowns after tour end or unexpected step
        setIsMenuOpen(false);
        setShowCourses(false);
        setShowServices(false);
        break;
    }
  }, [tourStep, tourActive, isMobileTablet]);

  const handleCoursesEnter = () => {
    clearTimeout(coursesTimeoutRef.current);
    setShowCourses(true);
  };
  const handleCoursesLeave = () => {
    coursesTimeoutRef.current = setTimeout(() => setShowCourses(false), 150);
  };
  const handleServicesEnter = () => {
    clearTimeout(servicesTimeoutRef.current);
    setShowServices(true);
  };
  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => setShowServices(false), 150);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const handleMobileLinkClick = () => {
    setShowCourses(false);
    setShowServices(false);
    toggleMenu();
  };

  const loginButton = (isMobileView = false) => (
    <a
      id="nav-login"
      href="#"
      onClick={openModal}
      className={`nav-login-btn${isMobileView ? ' mobile' : ''}`}
      style={isMobileView ? { flexShrink: 0, marginLeft: 'auto' } : {}}
    >
      Login
    </a>
  );

  // For mobile step highlighting the login button
  // We set id="nav-login.mobile" in the loginButton mobile render for tour selector
  // So add this here:
  const loginButtonMobile = (
    <a
      id="nav-login.mobile"
      href="#"
      onClick={openModal}
      className="nav-login-btn mobile"
      style={{ flexShrink: 0, marginLeft: 'auto' }}
    >
      Login
    </a>
  );

  const getCurrentRect = () => {
    const step = tourSteps[tourStep];
    if (!step || !step.selector) return null;
    const el = document.querySelector(step.selector);
    return el?.getBoundingClientRect();
  };

  // Mascot styles unchanged
  let mascotGuideContainerStyle, mascotImageStyle, messageBoxStyle, textSize, descSize;
  if (deviceGroup === 'mobile') {
    mascotGuideContainerStyle = {
      position: 'fixed',
      left: 8,
      bottom: 17,
      zIndex: 10010,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'end',
      pointerEvents: 'none'
    };
    mascotImageStyle = {
      width: '90px',
      height: '145px',
      objectFit: 'contain',
      pointerEvents: 'none',
      userSelect: 'none'
    };
    messageBoxStyle = {
      marginLeft: 6,
      width: 175,
      minHeight: 77,
      background: '#18223a',
      color: '#f0f7ff',
      borderRadius: 14,
      boxShadow: '0 4px 11px rgba(56,110,200,0.27)',
      border: '1.3px solid #27408b',
      padding: '12px 11px 9px 12px',
      display: 'flex',
      flexDirection: 'column',
      pointerEvents: 'auto',
      fontFamily: "'Poppins',sans-serif",
      zIndex: 10011
    };
    textSize = '0.96rem';
    descSize = '0.78rem';
  } else if (deviceGroup === 'tablet') {
    mascotGuideContainerStyle = {
      position: 'fixed',
      left: 24,
      bottom: 46,
      zIndex: 10010,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'end',
      pointerEvents: 'none'
    };
    mascotImageStyle = {
      width: '108px',
      height: '148px',
      objectFit: 'contain',
      pointerEvents: 'none',
      userSelect: 'none'
    };
    messageBoxStyle = {
      marginLeft: 18,
      width: 270,
      minHeight: 124,
      background: '#18223a',
      color: '#f0f7ff',
      borderRadius: 18,
      boxShadow: '0 7px 29px rgba(53,110,220,0.17)',
      border: '1.7px solid #25408c',
      padding: '19px 20px 14px 20px',
      display: 'flex',
      flexDirection: 'column',
      pointerEvents: 'auto',
      fontFamily: "'Poppins',sans-serif",
      zIndex: 100
    };
    textSize = '1.08rem';
    descSize = '0.93rem';
  } else { // desktop
    mascotGuideContainerStyle = {
      position: 'fixed',
      left: 42,
      bottom: 44,
      zIndex: 10010,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'end',
      pointerEvents: 'none'
    };
    mascotImageStyle = {
      width: '140px',
      height: '180px',
      objectFit: 'contain',
      pointerEvents: 'none',
      userSelect: 'none',
      zIndex: 101
    };
    messageBoxStyle = {
      marginLeft: 28,
      width: 350,
      minHeight: 138,
      background: '#18223a',
      color: '#f0f7ff',
      borderRadius: 20,
      boxShadow: '0 8px 30px rgba(53,110,210,0.22)',
      border: '1.8px solid #25408c',
      padding: '28px 33px 19px 33px',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: "'Poppins',sans-serif",
      zIndex: 100
    };
    textSize = '1.23rem';
    descSize = '1.06rem';
  }

  const showMascotGuide = tourActive && tourSteps[tourStep];

  return (
    <>
      <header className={`nav-root${scrolled ? " scrolled" : ""}`} ref={dropdownRef}>
        <div className="nav-logo-wrap">
          {isMobileTablet && (
            <button onClick={toggleMenu} className="nav-menu-btn" aria-label="Menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#59b7ff">
                {isMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" strokeWidth="2.5" strokeLinecap="round" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" strokeWidth="2.5" strokeLinecap="round" />
                )}
              </svg>
            </button>
          )}
          <Link to="/" className="nav-logo-link">
            <img src={logo} alt="Creditor Academy" className="nav-logo" />
          </Link>
        </div>
        {!isMobileTablet && (
          <nav className="nav-main-menu">
            <div className="nav-dropdown-wrap" onMouseEnter={handleCoursesEnter} onMouseLeave={handleCoursesLeave}>
              <span id="nav-courses" className="nav-link cool-underline">Courses ▾</span>
              <div className={`nav-dropdown${showCourses ? ' visible' : ''}`}>
                <NavLink to="/newsov" className="nav-dropdown-link cool-underline" onClick={() => setShowCourses(false)}>BecomePrivate & New SOV 101</NavLink>
                <NavLink to="/operate" className="nav-dropdown-link cool-underline" onClick={() => setShowCourses(false)}>Operate Private</NavLink>
                <NavLink to="/private" className="nav-dropdown-link cool-underline" onClick={() => setShowCourses(false)}>PRIVATE BUSINESS CREDIT</NavLink>
              </div>
            </div>
            <div className="nav-dropdown-wrap" onMouseEnter={handleServicesEnter} onMouseLeave={handleServicesLeave}>
              <span id="nav-services" className="nav-link cool-underline">Services ▾</span>
              <div className={`nav-dropdown${showServices ? ' visible' : ''}`}>
                <NavLink to="/liveclass" className="nav-dropdown-link cool-underline" onClick={() => setShowServices(false)}>Live Class</NavLink>
                <NavLink to="/athena" className="nav-dropdown-link cool-underline" onClick={() => setShowServices(false)}>Athena LMS</NavLink>
                <NavLink to="/website" className="nav-dropdown-link cool-underline" onClick={() => setShowServices(false)}>Website Creation</NavLink>
                <NavLink to="/pmp" className="nav-dropdown-link cool-underline" onClick={() => setShowServices(false)}>Merchant Processing</NavLink>
              </div>
            </div>
            <NavLink id="nav-membership" to="/masterclass" className="nav-link cool-underline">Membership</NavLink>
            <NavLink id="nav-contact" to="/ContactSection" className="nav-link cool-underline">Contact</NavLink>
            <NavLink id="nav-remedy" to="/remedy" className="nav-link cool-underline">Remedy NOW</NavLink>
            {loginButton()}
          </nav>
        )}
        {isMobileTablet && (tourStep === 2 ? loginButtonMobile : loginButton(true))}

        {isMobileTablet && isMenuOpen && (
          <div className="nav-mobile-menu">
            <div className="nav-mobile-dropdown">
              <button onClick={() => setShowCourses(!showCourses)} className="nav-mobile-dropdown-btn">
                Courses {showCourses ? '▴' : '▾'}
              </button>
              {showCourses && (
                <div className="nav-mobile-dropdown-content">
                  <NavLink to="/newsov" className="nav-mobile-link cool-underline" onClick={handleMobileLinkClick}>BecomePrivate & New SOV 101</NavLink>
                  <NavLink to="/operate" className="nav-mobile-link cool-underline" onClick={handleMobileLinkClick}>Operate Private</NavLink>
                  <NavLink to="/private" className="nav-mobile-link cool-underline" onClick={handleMobileLinkClick}>PRIVATE BUSINESS CREDIT</NavLink>
                </div>
              )}
            </div>
            <div className="nav-mobile-dropdown">
              <button onClick={() => setShowServices(!showServices)} className="nav-mobile-dropdown-btn">
                Services {showServices ? '▴' : '▾'}
              </button>
              {showServices && (
                <div className="nav-mobile-dropdown-content">
                  <NavLink to="/liveclass" className="nav-mobile-link cool-underline" onClick={handleMobileLinkClick}>Live Class</NavLink>
                  <NavLink to="/athena" className="nav-mobile-link cool-underline" onClick={handleMobileLinkClick}>Athena LMS</NavLink>
                  <NavLink to="/website" className="nav-mobile-link cool-underline" onClick={handleMobileLinkClick}>Website Creation</NavLink>
                  <NavLink to="/pmp" className="nav-mobile-link cool-underline" onClick={handleMobileLinkClick}>Merchant Processing</NavLink>
                </div>
              )}
            </div>
            <NavLink to="/masterclass" className="nav-mobile-link cool-underline" onClick={handleMobileLinkClick}>Membership</NavLink>
            <NavLink to="/ContactSection" className="nav-mobile-link cool-underline" onClick={handleMobileLinkClick}>Contact</NavLink>
            <NavLink to="/remedy" className="nav-mobile-link cool-underline" onClick={handleMobileLinkClick}>I Want Remedy NOW !</NavLink>
          </div>
        )}
      </header>

      {showMascotGuide && (
        <>
          {/* Overlay */}
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.58)',
            zIndex: 998
          }} />
          {/* Focus highlight */}
          {(() => {
            const rect = getCurrentRect();
            if (!rect) return null;
            const size = Math.max(rect.width, rect.height) + (isMobileTablet ? 26 : 50);
            const top = rect.top + window.scrollY + rect.height / 2 - size / 2;
            const left = rect.left + window.scrollX + rect.width / 2 - size / 2;
            return (
              <div style={{
                position: 'absolute',
                top,
                left,
                width: size,
                height: size,
                borderRadius: '50%',
                boxShadow: '0 0 0 2.7px #fff, 0 0 12px 7px #3498db',
                zIndex: 9999,
                pointerEvents: 'none',
                transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)'
              }} />
            );
          })()}
          {/* Mascot/box container */}
          <div style={mascotGuideContainerStyle}>
            <img src={mascot} alt="Mascot" style={mascotImageStyle} />
            <div style={messageBoxStyle}>
              <p style={{
                fontSize: textSize,
                fontWeight: 700,
                margin: '0 0 6px 0',
                letterSpacing: '-0.5px',
                lineHeight: '1.17'
              }}>
                {tourSteps[tourStep].text}
              </p>
              {tourSteps[tourStep].description && (
                <p style={{
                  fontSize: descSize,
                  color: '#b6d7ff',
                  lineHeight: 1.27,
                  fontWeight: 400,
                  letterSpacing: '-0.14px',
                  margin: 0,
                  marginBottom: 10
                }}>
                  {tourSteps[tourStep].description}
                </p>
              )}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                marginTop: 6
              }}>
                <button
                  onClick={() => setTourActive(false)}
                  style={{
                    border: 'none',
                    background: 'none',
                    color: '#6fb5fe',
                    fontSize: descSize,
                    fontFamily: 'Poppins, sans-serif',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    padding: '0 2.5px',
                    pointerEvents: 'auto'
                  }}
                >Skip</button>
                <div style={{ display: 'flex', gap: '9px' }}>
                  {tourStep > 0 && (
                    <button
                      onClick={() => setTourStep(tourStep - 1)}
                      style={{
                        backgroundColor: '#18223a',
                        color: '#bedaff',
                        border: '1.2px solid #5384b8',
                        padding: '4.8px 14px',
                        borderRadius: '7px',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: descSize,
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        pointerEvents: 'auto'
                      }}
                    >←</button>
                  )}
                  <button
                    onClick={() => {
                      if (tourStep < tourSteps.length - 1) setTourStep(tourStep + 1);
                      else setTourActive(false);
                    }}
                    style={{
                      backgroundColor: '#3498db',
                      color: '#fff',
                      border: 'none',
                      padding: '4.8px 18px',
                      borderRadius: '7px',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: descSize,
                      fontWeight: 600,
                      cursor: 'pointer',
                      boxShadow: '0 2px 8px 0 rgba(52,152,219,0.13)',
                      transition: 'all 0.2s ease',
                      pointerEvents: 'auto'
                    }}
                  >{tourStep === tourSteps.length - 1 ? 'Finish' : 'Next →'}</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <AdminModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Navbar;
