import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PlayCircle, CheckCircle, ArrowRight, DollarSign, Phone, 
  Briefcase, Star, Search, Shield, Lock, Globe, CreditCard,
  ChevronDown, ChevronUp, Plus, Minus, Zap,
  Car, Home, Droplet, Mic, FileText, Calendar, BookOpen,
  MessageSquare, ShoppingCart,
  Truck, Box, Camera, Activity, PawPrint,
  Headphones, Package, ChevronLeft, ChevronRight
} from 'lucide-react';

import GameBanner from './GameBanner';

import cardaccount from '../assets/cardaccount.jpg';
import pubiccredit from '../assets/publiccredit.jpg';
import luxurypersonal from '../assets/luxurypersonal.jpg';
import acceptpayments from '../assets/acceptpayments.jpg';
import stack from '../assets/stack.jpg';
import begin from '../assets/begin.jpg';
import Remedy from '../assets/Remedy_Result_3.jpg';
import MP from '../assets/PMP2.jpg';

const AboutPrivateBusiness = () => {
    // Color scheme
    const colors = {
        primary: '#0369a1',
        primaryLight: '#e0f2fe',
        secondary: '#0ea5e9',
        dark: '#0c4a6e',
        light: '#ffffff',
        background: '#f8fafc',
        text: '#334155',
        accent: '#38bdf8',
        mutedText: '#64748b',
        success: '#10b981',
        gradient: 'linear-gradient(135deg, #0369a1 0%, #0ea5e9 100%)',
        gradientHover: 'linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)'
    };

    // Business icons mapping
    const businessIcons = {
        "Car Rental": <Car size={24} color="#3b82f6" />,
        "Airbnb": <Home size={24} color="#8b5cf6" />,
        "Payment Processing": <CreditCard size={24} color="#10b981" />,
        "Coaching": <MessageSquare size={24} color="#ec4899" />,
        "E-commerce": <ShoppingCart size={24} color="#f59e0b" />,
        "Cleaning": <Droplet size={24} color="#06b6d4" />,
        "Podcast": <Mic size={24} color="#ef4444" />,
        "Credit Repair": <FileText size={24} color="#84cc16" />,
        "Notary": <Calendar size={24} color="#f97316" />,
        "Bookkeeping": <BookOpen size={24} color="#6366f1" />
    };

    // Features data
    const features = [
        {
            title: "Structure UBOTs to unlock vendor and card accounts",
            image: cardaccount,
            icon: <Shield size={24} color={colors.secondary} />
        },
        {
            title: "Dispute & fix your public credit file lawfully",
            image: pubiccredit,
            icon: <Search size={24} color={colors.success} />
        },
        {
            title: "Improve personal credit for loans & mortgages",
            image: luxurypersonal,
            icon: <CreditCard size={24} color="#8b5cf6" />
        },
        {
            title: "Accept payments privately with non-KYC gateways",
            image: acceptpayments,
            icon: <Globe size={24} color="#f59e0b" />
        },
        {
            title: "Stack funding at 0% APR to launch and scale fast",
            image: stack,
            icon: <Zap size={24} color="#ec4899" />
        }
    ];

    const scrollRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set on initial render
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 500;
    if (container) {
        container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
    };

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
    const container = scrollRef.current;

    const handleScroll = () => {
        if (!container) return;

        const scrollLeft = container.scrollLeft;
        const cardWidth = container.firstChild?.getBoundingClientRect().width + 20; // card width + gap
        const index = Math.round(scrollLeft / cardWidth);
        setCurrentIndex(index);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    // Add this state at the top of your component
    const [activeDot, setActiveDot] = useState(0);

    // Add this scroll handler
    const handleScroll = () => {
    if (!scrollRef.current) return;
    
    const container = scrollRef.current;
    const cardWidth = container.firstChild?.offsetWidth || 280;
    const scrollPosition = container.scrollLeft;
    const newActiveDot = Math.round(scrollPosition / (cardWidth + 20)); // 20 is the gap
    
    if (newActiveDot !== activeDot && newActiveDot >= 0 && newActiveDot <= 4) {
        setActiveDot(newActiveDot);
    }
    };

    const businessIdeas = [
        "Car Rental", "Airbnb", "Payment Processing", "Coaching", 
        "E-commerce", "Cleaning", "Podcast", "Credit Repair", 
        "Notary", "Bookkeeping"
    ];

    const checklistItems = [
        { text: "Review your goals and credit profile", completed: false },
        { text: "Choose the best funding path", completed: false },
        { text: "Set up your private payment system", completed: true }
    ];

    // State management
    const [expandedIdeas, setExpandedIdeas] = useState(false);
    const [activeFeature, setActiveFeature] = useState(null);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const scaleUp = {
        hidden: { scale: 0.95, opacity: 0 },
        visible: { 
            scale: 1, 
            opacity: 1,
            transition: { 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1] 
            }
        }
    };

    const slideUp = {
        hidden: { y: 30, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1] 
            }
        }
    };

    // Responsive glass card style
    const glassCardStyle = {
        background: `linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)`,
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        borderRadius: '24px',
        overflow: 'hidden',
        padding: 'clamp(24px, 5vw, 48px)',
        margin: '0 16px'
    };

    // Add this utility function at the top of your file
    const hexToRgba = (hex, alpha = 1) => {
    // Remove # if present
    hex = hex.replace('#', '');
    
    // Parse r, g, b values
    const r = parseInt(hex.length === 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2), 16);
    const g = parseInt(hex.length === 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4), 16);
    const b = parseInt(hex.length === 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6), 16);
    
    // Return rgba string
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    return (
        <div style={{
            backgroundColor: colors.background,
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
            minHeight: '100vh',
            position: 'relative'
        }}>
            {/* Hero Section */}
            <section style={{
                backgroundColor: colors.dark,
                color: colors.light,
                padding: '120px 20px 80px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    maxWidth: '1000px',
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 2
                }}>
                    <motion.h1
                        style={{
                            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                            fontWeight: '800',
                            marginBottom: '20px',
                            lineHeight: '1.2',
                            background: 'linear-gradient(90deg, #ffffff, #e0f2fe)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent'
                        }}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        SENIOR: Private Business Credit
                    </motion.h1>
                    
                    <motion.p
                        style={{
                            fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
                            fontWeight: '600',
                            color: 'rgba(255,255,255,0.9)',
                            marginBottom: '40px',
                            lineHeight: '1.5'
                        }}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Build $200K+ in Business Credit — <span style={{ color: colors.accent }}>No SSN. No PG. No Banks.</span>
                    </motion.p>
                    
                    <motion.div
                        style={{
                            maxWidth: '800px',
                            margin: '0 auto',
                            aspectRatio: '16 / 9',
                            position: 'relative',
                            cursor: 'pointer',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            border: `2px solid ${colors.secondary}`,
                            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                        }}
                        whileHover={{ scale: 1.02 }}
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        onClick={() => alert("Video player will be implemented here.")}
                    >
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 2,
                            background: 'rgba(0,0,0,0.3)'
                        }}>
                            <PlayCircle size={60} color={colors.light} />
                        </div>
                        <img 
                            src={begin} 
                            alt="Preview" 
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </motion.div>
                </div>
            </section>

                <motion.div
                    style={{
                        Width: '1200px',
                        margin: '0 auto',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={containerVariants}
                >
                {/* Enhanced Intro Section */}
                <motion.section 
                    style={{
                        ...glassCardStyle,
                        marginTop: '40px',
                        padding: '60px 30px',
                        borderRadius: '24px',
                        backdropFilter: 'blur(12px)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
                    }}
                    variants={scaleUp}
                >
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '50px',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}>
                        <motion.div
                            style={{
                                flex: 1,
                                minWidth: '320px',
                                maxWidth: '480px',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
                                transition: 'transform 0.3s ease',
                            }}
                            whileHover={{ scale: 1.02 }}
                            variants={fadeIn}
                        >
                            <img 
                                src={begin} 
                                alt="Financial Sovereignty"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'block',
                                    objectFit: 'cover'
                                }}
                            />
                        </motion.div>
                        
                        <motion.div 
                            style={{
                                flex: 1,
                                minWidth: '300px',
                                maxWidth: '600px'
                            }}
                            variants={fadeIn}
                            transition={{ delay: 0.2 }}
                        >
                            <p style={{
                                fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                                color: colors.text,
                                lineHeight: '1.8',
                                fontWeight: 500,
                                marginBottom: '1.5rem'
                            }}>
                                This isn't just funding. It's <span style={{
                                    color: colors.primary,
                                    fontWeight: '700',
                                    background: `linear-gradient(120deg, ${colors.primaryLight} 0%, rgba(255,255,255,0) 90%)`,
                                    padding: '4px 10px',
                                    borderRadius: '6px',
                                    display: 'inline-block',
                                    boxShadow: `0 0 0 3px rgba(0,0,0,0.05)`
                                }}>
                                    financial sovereignty
                                </span>.
                            </p>
                            
                            <p style={{
                                fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                                color: colors.text,
                                lineHeight: '1.75',
                                marginBottom: '1.8rem'
                            }}>
                                Learn to build elite business credit with <strong style={{
                                    color: colors.primary,
                                    fontWeight: '600'
                                }}>UBOT Trusts</strong>, repair your personal credit, and establish Private Merchant Processing — no banks, no KYC, no risk of shutdowns.
                            </p>
                            
                            <div style={{
                                display: 'flex',
                                gap: '16px',
                                flexWrap: 'wrap',
                                marginTop: '35px'
                            }}>
                                <motion.button
                                    whileHover={{ y: -4, boxShadow: '0 10px 20px rgba(0,0,0,0.25)' }}
                                    whileTap={{ scale: 0.97 }}
                                    style={{
                                        padding: '14px 28px',
                                        background: colors.primary,
                                        color: '#fff',
                                        borderRadius: '10px',
                                        fontWeight: '600',
                                        fontSize: '1rem',
                                        border: 'none',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    Learn More
                                </motion.button>

                                <motion.button
                                    whileHover={{ y: -4, boxShadow: `0 10px 20px ${colors.primary}40` }}
                                    whileTap={{ scale: 0.97 }}
                                    style={{
                                        padding: '14px 28px',
                                        background: 'transparent',
                                        color: colors.primary,
                                        border: `2px solid ${colors.primary}`,
                                        borderRadius: '10px',
                                        fontWeight: '600',
                                        fontSize: '1rem',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    Watch Video
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Courses Section with Creative Layout */}
                <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                style={{
                    margin: '20px 0',
                    position: 'relative'
                }}
                >
                {/* Decorative elements */}
                <div style={{
                    position: 'absolute',
                    top: '-50px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${colors.primaryLight} 0%, rgba(255,255,255,0) 70%)`,
                    filter: 'blur(30px)',
                    zIndex: 0
                }} />
                
                {/* Section header */}
                <motion.h3 
                    style={{
                    textAlign: 'center',
                    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                    marginBottom: '60px',
                    position: 'relative',
                    color: colors.text
                    }}
                    variants={fadeIn}
                >
                    Your Path to <span style={{
                    color: colors.primary,
                    position: 'relative',
                    display: 'inline-block'
                    }}>
                    Financial Freedom
                    <motion.span 
                        style={{
                        position: 'absolute',
                        bottom: '-5px',
                        left: 0,
                        width: '100%',
                        height: '3px',
                        background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
                        borderRadius: '3px'
                        }}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: false, amount: 0.3 }}
                    />
                    </span>
                </motion.h3>

                {/* Courses container */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: '40px',
                    position: 'relative',
                    zIndex: 1
                }}>
                    {/* "I Want Remedy Now" Course Card */}
                    <motion.div
                    whileHover={{ y: -10 }}
                    style={{
                        background: `linear-gradient(135deg, ${colors.cardBg || '#fff'}, ${hexToRgba(colors.cardBg || '#fff', 0.8)})`,
                        borderRadius: '20px',
                        padding: '30px',
                        width: 'clamp(300px, 30vw, 400px)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                        border: `1px solid ${hexToRgba(colors.primary, 0.2)}`,
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.3 }}
                    >
                    {/* Added Image at the Top */}
                    <div style={{
                        width: '100%',
                        height: '220px',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        marginBottom: '20px',
                        position: 'relative'
                    }}>
                        <img 
                        src={Remedy} 
                        alt="Credit Repair Illustration"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                        />
                        <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '40%',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)'
                        }} />
                    </div>

                    <div style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '100px',
                        height: '100px',
                        background: `linear-gradient(45deg, ${colors.primary}, ${colors.secondary})`,
                        clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
                        opacity: 0.1
                    }} />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px'
                    }}>
                        <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px'
                        }}>
                        <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '12px',
                            background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                        </div>
                        <h4 style={{
                            fontSize: '1.5rem',
                            margin: 0,
                            color: colors.primary,
                            fontWeight: '700'
                        }}>I Want Remedy Now</h4>
                        </div>
                        <p style={{
                        color: colors.textSecondary,
                        lineHeight: '1.7'
                        }}>
                        Fix your personal credit with our proven system. Remove negative items, boost your score, and gain financial control.
                        </p>
                    </div>
                    </motion.div>

                    {/* Plus sign connector */}
                    <motion.div
                    style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: colors.primary,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        flexShrink: 0
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    viewport={{ once: false, amount: 0.3 }}
                    >
                    <div style={{
                        position: 'absolute',
                        width: '30px',
                        height: '4px',
                        background: 'white',
                        borderRadius: '2px'
                    }} />
                    <div style={{
                        position: 'absolute',
                        width: '4px',
                        height: '30px',
                        background: 'white',
                        borderRadius: '2px'
                    }} />
                    <div style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        border: `2px dashed ${colors.primary}`,
                        animation: 'spin 15s linear infinite',
                        opacity: 0.3
                    }} />
                    </motion.div>

                    {/* Private Merchant Processing Course Card */}
                    <motion.div
                    whileHover={{ y: -10 }}
                    style={{
                        background: `linear-gradient(135deg, ${colors.cardBg || '#fff'}, ${hexToRgba(colors.cardBg || '#fff', 0.8)})`,
                        borderRadius: '20px',
                        padding: '30px',
                        width: 'clamp(300px, 30vw, 400px)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                        border: `1px solid ${hexToRgba(colors.secondary, 0.2)}`,
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.3 }}
                    >
                    {/* Added Image at the Top */}
                    <div style={{
                        width: '100%',
                        height: '220px',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        marginBottom: '20px',
                        position: 'relative'
                    }}>
                        <img 
                        src={MP} 
                        alt="Payment Processing Illustration"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                        />
                        <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '40%',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)'
                        }} />
                    </div>

                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100px',
                        height: '100px',
                        background: `linear-gradient(45deg, ${colors.secondary}, ${colors.primary})`,
                        clipPath: 'polygon(0 100%, 100% 0, 0 0)',
                        opacity: 0.1
                    }} />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px'
                    }}>
                        <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px'
                        }}>
                        <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '12px',
                            background: `linear-gradient(135deg, ${colors.secondary}, ${colors.primary})`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                            <path d="M2 10h20M7 15h1m4 0h1m4 0h1"></path>
                            </svg>
                        </div>
                        <h4 style={{
                            fontSize: '1.5rem',
                            margin: 0,
                            color: colors.secondary,
                            fontWeight: '700'
                        }}>Private Merchant Processing</h4>
                        </div>
                        <p style={{
                        color: colors.textSecondary,
                        lineHeight: '1.7'
                        }}>
                        Process payments without banks. No KYC, no shutdowns. Take full control of your financial transactions.
                        </p>
                    </div>
                    </motion.div>
                </div>

                {/* UBOT Trusts mention at bottom */}
                <motion.p
                    style={{
                    textAlign: 'center',
                    marginTop: '60px',
                    fontSize: '1.2rem',
                    color: colors.text
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    Plus learn to build business credit with <strong style={{
                    color: colors.primary,
                    fontWeight: '600',
                    position: 'relative'
                    }}>
                    UBOT Trusts
                    <motion.span 
                        style={{
                        position: 'absolute',
                        bottom: '-2px',
                        left: 0,
                        width: '100%',
                        height: '2px',
                        background: colors.primary,
                        borderRadius: '2px'
                        }}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                    />
                    </strong>
                </motion.p>
                </motion.section>

                {/* Add this to your global styles */}
                <style jsx global>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                `}</style>

                    {/*What You'll Learn */}
                    <motion.section 
                    style={{
                        marginTop: '20px', 
                        padding: '50px 0px',
                        position: 'relative',
                        overflow: 'hidden',
                        backgroundColor: '#cbe9ffff'
                    }}
                    variants={scaleUp}
                    >
                    {/* Title */}
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
                        textAlign: 'center'
                        }}
                        variants={slideUp}
                    >
                        <CheckCircle size={28} color={colors.secondary} />
                        What You'll Master:
                    </motion.h2>

                    {/* Arrow Buttons (Desktop Only) */}
                    {!isMobile && (
                        <>
                        <button 
                            onClick={() => scroll('left')} 
                            style={{
                            position: 'absolute',
                            top: '50%',
                            left: '20px',
                            transform: 'translateY(-50%)',
                            background: colors.light,
                            border: 'none',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                            padding: '10px',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            zIndex: 2
                            }}
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <button 
                            onClick={() => scroll('right')} 
                            style={{
                            position: 'absolute',
                            top: '50%',
                            right: '20px',
                            transform: 'translateY(-50%)',
                            background: colors.light,
                            border: 'none',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                            padding: '10px',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            zIndex: 2
                            }}
                        >
                            <ChevronRight size={24} />
                        </button>
                        </>
                    )}

                    {/* Scrollable Cards */}
                    <motion.div
                    ref={scrollRef}
                    style={{
                        display: 'flex',
                        overflowX: 'auto',
                        gap: '20px',
                        scrollBehavior: 'smooth',
                        paddingBottom: isMobile ? '0' : '8px',
                        WebkitOverflowScrolling: 'touch',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        ...(!isMobile && {  // Only apply margin on desktop
                        margin: '0 80px'
                        }),
                        ...(isMobile && {
                        margin: '0 1rem',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        scrollSnapType: 'x mandatory'
                        })
                    }}
                    variants={containerVariants}
                    onScroll={isMobile ? handleScroll : undefined}
                    onWheel={(e) => e.stopPropagation()}
                    >
                        {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            style={{
                            width: 'clamp(240px, 80vw, 280px)',
                            flex: '0 0 auto',
                            background: colors.light,
                            borderRadius: '16px',
                            padding: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                            border: `1px solid ${colors.primaryLight}`,
                            ...(isMobile && { scrollSnapAlign: 'start' })
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
                                borderRadius: '12px'
                            }}
                            />
                            
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{
                                background: 'rgba(14, 165, 233, 0.1)',
                                padding: '10px',
                                borderRadius: '8px'
                            }}>
                                {feature.icon}
                            </div>
                            <p style={{
                                fontSize: '16px',
                                fontWeight: '500',
                                flex: 1
                            }}>
                                {feature.title}
                            </p>
                            </div>

                            <div style={{
                            padding: '12px',
                            background: 'rgba(14, 165, 233, 0.05)',
                            borderRadius: '8px',
                            borderLeft: `3px solid ${colors.secondary}`
                            }}>
                            <p style={{
                                fontSize: '14px',
                                lineHeight: '1.6',
                                color: colors.text
                            }}>
                                {feature.description || "Detailed explanation about this feature and how it benefits your business."}
                            </p>
                            </div>
                        </motion.div>
                        ))}
                    </motion.div>

                    {/* Mobile Indicators */}
                    {isMobile && (
                        <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '8px',
                        marginTop: '16px'
                        }}>
                        {/* Dot Indicators */}
                        <div style={{ display: 'flex', gap: '8px' }}>
                            {features.slice(0, 5).map((_, index) => (
                            <div 
                                key={index}
                                style={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                backgroundColor: currentIndex === index ? colors.secondary : '#ddd',
                                transition: 'background-color 0.3s ease'
                                }}
                            />
                            ))}
                        </div>
                        
                        {/* Swipe Indicator */}
                        <div
                            style={{
                            textAlign: 'center',
                            fontSize: '14px',
                            color: colors.mutedText || '#888',
                            animation: 'bounceFade 2s infinite',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '6px'
                            }}
                        >
                            <ChevronLeft size={16} />
                            Swipe to explore
                            <ChevronRight size={16} />
                        </div>
                        </div>
                    )}

                    {/* Keyframe for mobile animation */}
                    <style>
                        {`
                        @keyframes bounceFade {
                            0%, 100% {
                            opacity: 0.4;
                            transform: translateY(0);
                            }
                            50% {
                            opacity: 1;
                            transform: translateY(-3px);
                            }
                        }

                        /* Hide scrollbar on WebKit */
                        div::-webkit-scrollbar {
                            display: none;
                        }
                        `}
                    </style>
                    </motion.section>
                    
                    <GameBanner />

                    {/* Business Ideas Section */}
                    <motion.section 
                    style={{
                        ...glassCardStyle,
                        marginTop: '40px',
                        padding: 'clamp(24px, 5vw, 40px)'
                    }}
                    variants={scaleUp}
                    >
                    <motion.h2 
                        style={{
                        fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                        fontWeight: '700',
                        color: colors.dark,
                        marginBottom: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        justifyContent: 'center', // 👈 center the icon + text
                        width: '100%',            // 👈 ensures it spans full width
                        textAlign: 'center'
                        }}
                        variants={slideUp}
                    >
                        <Briefcase size={28} color={colors.secondary} />
                        Launch These Businesses Using Business Credit
                    </motion.h2>

                    {/* Top 10 Ideas */}
                    <motion.div variants={fadeIn}>
                        <motion.h3 
                        style={{
                            fontSize: '1.25rem',
                            fontWeight: '600',
                            color: colors.dark,
                            marginBottom: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}
                        >
                        <Star size={20} color={colors.secondary} />
                        Top 10 Ideas:
                        </motion.h3>

                        <motion.div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                            gap: '16px',
                            marginBottom: '30px'
                        }}
                        variants={containerVariants}
                        >
                        {[
                            { name: "Car Rental (Turo, HyreCar)", icon: <Car size={20} color="#3b82f6" /> },
                            { name: "Airbnb / Rental Arbitrage", icon: <Home size={20} color="#8b5cf6" /> },
                            { name: "Merchant Services / Payment Processing", icon: <CreditCard size={20} color="#10b981" /> },
                            { name: "Coaching / Consulting", icon: <MessageSquare size={20} color="#ec4899" /> },
                            { name: "E-commerce / Dropshipping", icon: <ShoppingCart size={20} color="#f59e0b" /> },
                            { name: "Cleaning Services", icon: <Droplet size={20} color="#06b6d4" /> },
                            { name: "Podcast / Digital Studio", icon: <Mic size={20} color="#ef4444" /> },
                            { name: "Credit Repair / Funding Agency", icon: <FileText size={20} color="#84cc16" /> },
                            { name: "Virtual Office / Notary Services", icon: <Calendar size={20} color="#f97316" /> },
                            { name: "Tax Prep & Bookkeeping", icon: <BookOpen size={20} color="#6366f1" /> }
                        ].map((idea, index) => (
                            <motion.div
                            key={`top10-${index}`}
                            style={{
                                background: colors.light,
                                borderRadius: '12px',
                                padding: '16px',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                                border: `1px solid ${colors.primaryLight}`,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                transition: 'all 0.3s ease'
                            }}
                            variants={itemVariants}
                            whileHover={{ 
                                y: -3,
                                boxShadow: `0 8px 20px rgba(3, 105, 161, 0.15)`,
                                borderColor: colors.secondary
                            }}
                            >
                            <div style={{
                                background: 'rgba(14, 165, 233, 0.1)',
                                padding: '10px',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {idea.icon}
                            </div>
                            <span style={{
                                fontSize: '15px',
                                fontWeight: '500',
                                flex: 1
                            }}>
                                {idea.name}
                            </span>
                            </motion.div>
                        ))}
                        </motion.div>
                    </motion.div>

                    {/* +15 More Ideas - Tag Style */}
                    <motion.div style={{ marginTop: '24px', position: 'relative' }}>
                        {/* Tag Button */}
                        <motion.div
                            style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            background: colors.primary,
                            color: colors.light,
                            borderRadius: '20px',
                            padding: '8px 16px',
                            cursor: 'pointer',
                            boxShadow: `0 2px 8px ${colors.primaryLight}`,
                            position: 'relative',
                            zIndex: 2
                            }}
                            whileHover={{ 
                            background: colors.secondary,
                            scale: 1.05 
                            }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setExpandedIdeas(!expandedIdeas)}
                        >
                            <span style={{ 
                            fontSize: '14px',
                            fontWeight: '600',
                            marginRight: '8px'
                            }}>
                            {expandedIdeas ? 'Hide' : '+15 More'}
                            </span>
                            {expandedIdeas ? (
                            <Minus size={16} color={colors.light} />
                            ) : (
                            <Plus size={16} color={colors.light} />
                            )}
                        </motion.div>

                        {/* Continuous Tag Body */}
                        <AnimatePresence>
                            {expandedIdeas && (
                            <motion.div
                                initial={{ 
                                opacity: 0,
                                height: 0,
                                marginTop: 0
                                }}
                                animate={{ 
                                opacity: 1,
                                height: 'auto',
                                marginTop: '12px'
                                }}
                                exit={{ 
                                opacity: 0,
                                height: 0,
                                marginTop: 0
                                }}
                                transition={{ duration: 0.3 }}
                                style={{
                                background: colors.primaryLight,
                                borderRadius: '0 16px 16px 16px',
                                padding: '20px',
                                position: 'relative',
                                left: '-16px'
                                }}
                            >
                                {/* Notch effect */}
                                <div style={{
                                position: 'absolute',
                                top: '-12px',
                                left: '16px',
                                width: '24px',
                                height: '12px',
                                background: colors.primaryLight,
                                clipPath: 'polygon(0 100%, 50% 0, 100% 100%)'
                                }}></div>

                                <motion.div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                                    gap: '12px'
                                }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                >
                                {[
                                    "Mobile Notary", "Box Truck Freight", "ATMs", 
                                    "Funnel Agency", "Event Rentals", "Dispatching",
                                    "360 Photo Booths", "Supplement Brands", "Print-on-Demand",
                                    "Detailing", "Subscription Boxes", "Virtual Assistants",
                                    "Online Courses", "Pet Services & more"
                                ].map((idea, index) => (
                                    <motion.div
                                    key={`more-${index}`}
                                    style={{
                                        background: colors.light,
                                        borderRadius: '8px',
                                        padding: '10px 12px',
                                        fontSize: '14px',
                                        fontWeight: '500',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}
                                    initial={{ x: -10, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.03 }}
                                    >
                                    <div style={{
                                        width: '6px',
                                        height: '6px',
                                        borderRadius: '50%',
                                        background: colors.primary
                                    }}></div>
                                    {idea}
                                    </motion.div>
                                ))}
                                </motion.div>
                            </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                    </motion.section>

                    {/* CTA Section */}
                    <motion.section
                        style={{
                            ...glassCardStyle,
                            marginTop: '40px',
                            textAlign: 'center'
                        }}
                        variants={scaleUp}
                    >
                        <motion.h2 
                            style={{
                                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                                fontWeight: '700',
                                color: colors.dark,
                                marginBottom: '20px'
                            }}
                            variants={slideUp}
                        >
                            Next Step:
                        </motion.h2>
                        
                        <motion.p 
                            style={{
                                fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                                color: colors.text,
                                lineHeight: '1.6',
                                marginBottom: '24px'
                            }}
                            variants={fadeIn}
                        >
                            Book your <strong>$49 Roadmap Session</strong> and meet your assigned counselor to:
                        </motion.p>
                        
                        <motion.ul 
                            style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: '0 auto 24px',
                                maxWidth: '500px'
                            }}
                            variants={containerVariants}
                        >
                            {checklistItems.map((item, index) => (
                                <motion.li
                                    key={index}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        fontSize: '15px',
                                        marginBottom: '12px',
                                        padding: '12px',
                                        borderRadius: '8px',
                                        background: item.completed ? '#f0fdf4' : 'rgba(14, 165, 233, 0.05)',
                                        border: `1px solid ${item.completed ? '#10b981' : colors.primaryLight}`
                                    }}
                                    variants={itemVariants}
                                >
                                    {item.completed ? (
                                        <CheckCircle size={18} color="#10b981" />
                                    ) : (
                                        <div style={{
                                            width: '18px',
                                            height: '18px',
                                            border: `2px solid ${colors.mutedText}`,
                                            borderRadius: '4px',
                                            flexShrink: 0
                                        }} />
                                    )}
                                    <span style={{
                                        textDecoration: item.completed ? 'none' : 'none',
                                        color: item.completed ? colors.success : colors.text
                                    }}>
                                        {item.text}
                                    </span>
                                </motion.li>
                            ))}
                        </motion.ul>
                        
                        <motion.div 
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '12px',
                                fontSize: '18px',
                                fontWeight: '600',
                                color: colors.dark,
                                marginBottom: '24px'
                            }}
                            variants={fadeIn}
                        >
                            <DollarSign size={20} color={colors.secondary} />
                            <span>Session: <strong style={{ color: colors.primary }}>$49</strong></span>
                        </motion.div>
                        
                        <motion.button
                            style={{
                                background: colors.gradient,
                                color: colors.light,
                                border: 'none',
                                padding: '16px 24px',
                                fontSize: '16px',
                                borderRadius: '12px',
                                cursor: 'pointer',
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                margin: '0 auto',
                                maxWidth: '350px',
                                width: '100%',
                                justifyContent: 'center'
                            }}
                            whileHover={{ background: colors.gradientHover }}
                            whileTap={{ scale: 0.98 }}
                            variants={slideUp}
                        >
                            <Phone size={18} />
                            <span>Contact Us Now</span>
                            <ArrowRight size={18} />
                        </motion.button>
                    </motion.section>
                </motion.div>
        </div>
    );
};

export default AboutPrivateBusiness;