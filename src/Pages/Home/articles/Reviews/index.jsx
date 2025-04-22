import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionTemplate } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, MessageCircle, User, Award, ThumbsUp, Sparkles } from "lucide-react";

// Sample data (unchanged)
const reviews = [
  {
    text: "Absolutely amazing work! The project was delivered ahead of schedule and exceeded expectations.",
    client: "Tobi Amusan",
    position: "Finance Specialist",
    image: "/client/client.jpg",
  },
  {
    text: "Fantastic results, would definitely recommend to anyone. Very professional and attentive.",
    client: "Olatunde Bryan",
    position: "CEO of Octar",
    image: "/client/client1.jpg",
  },
  {
    text: "Impressive quality and excellent service. I'm very happy with the outcome of this project.",
    client: "Ido Dami",
    position: "Chartered Accountant",
    image: "/client/client2.jpg",
  },
  {
    text: "Great experience working with this team. Very responsive and skilled. Will hire again!",
    client: "Tolu francis",
    position: "A.c & Company",
    image: "/client/client3.jpg",
  },
  {
    text: "Remarkably creative and professional. Our collaboration was both enjoyable and highly productive.",
    client: "Collin Davis",
    position: "UX Designer",
    image: "/client/client5.jpg",
  },
  {
    text: "Professional, timely, and very dedicated. The quality of work was exceptional.",
    client: "Murray George",
    position: "Web Analyst",
    image: "/client/client4.jpg",
  },
  {
    text: "Outstanding attention to detail and an ability to deliver top-notch results on time. Truly impressive.",
    client: "Robert Martinez",
    position: "Data Scientist",
    image: "/client/client6.jpg",
  },
];

// Create a 3D perspective testimonial showcase with immersive interactions
function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [interactionMode, setInteractionMode] = useState("carousel"); // "carousel" or "showcase" or "immersive"
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const cursorRef = useRef(null);
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const sectionScale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.8, 1, 1, 0.8]);
  const yRotation = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [-5, 0, 5]);
  
  // Cursor follower for immersive mode
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setMousePosition({ x, y });
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  // Auto rotation for carousel
  useEffect(() => {
    if (!autoplayEnabled) return;
    
    const interval = setInterval(() => {
      if (!isHovering && interactionMode !== "immersive") {
        handleNext();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex, isHovering, autoplayEnabled, interactionMode]);
  
  // Handle navigation
  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setPreviousIndex(activeIndex);
    setActiveIndex((prev) => (prev + 1) % reviews.length);
    setTimeout(() => setIsAnimating(false), 700);
  };
  
  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setPreviousIndex(activeIndex);
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setTimeout(() => setIsAnimating(false), 700);
  };
  
  const jumpToIndex = (index) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setPreviousIndex(activeIndex);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 700);
  };
  
  // Toggle interaction modes
  const toggleInteractionMode = () => {
    setInteractionMode(prev => {
      if (prev === "carousel") return "showcase";
      if (prev === "showcase") return "immersive";
      return "carousel";
    });
  };
  
  // Mouse-based 3D rotation effect
  const calculateCardRotation = (idx) => {
    if (!containerRef.current || !isHovering) return { x: 0, y: 0 };
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation based on mouse position relative to center
    const rotateY = ((mousePosition.x - centerX) / centerX) * 10; // max 10deg
    const rotateX = ((centerY - mousePosition.y) / centerY) * 10; // max 10deg
    
    return { x: rotateX, y: rotateY };
  };
  
  // Generate particle positions
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      size: Math.random() * 6 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5
    }));
  }, []);
  
  // Word-by-word text animation
  const AnimatedText = ({ text, delay = 0, className = "" }) => {
    const words = text.split(" ");
    
    return (
      <div className={className}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: delay + i * 0.08,
              ease: "easeOut"
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </div>
    );
  };
  
  // Dynamic star rating with color effects
  const StarRating = ({ className = "" }) => {
    return (
      <div className={`flex gap-1 ${className}`}>
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.3 + i * 0.1
            }}
            className="relative"
          >
            <Star 
              className="w-5 h-5 fill-yellow-400 text-yellow-400"
              strokeWidth={1}
            />
            
            {/* Star shine effect */}
            <motion.div
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 1.5,
                delay: 0.8 + i * 0.2,
                repeat: Infinity,
                repeatDelay: Math.random() * 5 + 5
              }}
            >
              <div className="absolute inset-0 w-full h-full bg-white/80 rounded-full blur-sm" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    );
  };
  
  // Immersive mode viewing box
  const ImmersiveCard = ({ review }) => {
    // Generate split character spans for hover effect
    const titleChars = useMemo(() => {
      return "Client Testimonial".split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block origin-bottom"
          whileHover={{ 
            scale: 1.4, 
            rotateZ: Math.random() * 20 - 10,
            color: "#3b82f6",
            transition: { duration: 0.2 }
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ));
    }, []);
    
    const rotation = calculateCardRotation();
    
    return (
      <motion.div
        className="relative w-full h-full bg-gradient-to-br from-blue-950 via-indigo-950 to-violet-950 rounded-xl shadow-2xl overflow-hidden"
        style={{ 
          perspective: 1000,
          transformStyle: "preserve-3d"
        }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          rotateX: rotation.x,
          rotateY: rotation.y,
          transition: { 
            duration: 0.5,
            rotateX: { duration: 0.1, ease: "linear" },
            rotateY: { duration: 0.1, ease: "linear" }
          }
        }}
      >
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated gradient */}
          <motion.div 
            className="absolute -inset-[100px] bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-purple-500/20 blur-3xl opacity-30"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          
          {/* Particles */}
          {particles.map(particle => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-white/30 blur-sm"
              style={{ 
                width: particle.size, 
                height: particle.size,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              animate={{
                opacity: [0, 0.8, 0],
                y: [`${particle.y}%`, `${particle.y - 20}%`]
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* Content container with 3D layers */}
        <div className="relative h-full w-full p-12 flex flex-col justify-between items-center text-center">
          {/* Title with hover effects */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold tracking-wider text-white/90">
              {titleChars}
            </h3>
            <motion.div 
              className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mt-3"
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
          
          {/* Image with effects */}
          <div className="relative mb-8">
            {/* Rotating border */}
            <motion.div 
              className="absolute -inset-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Inner border */}
            <motion.div 
              className="absolute -inset-2 rounded-full bg-slate-900"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            
            {/* Image */}
            <motion.div
              className="w-36 h-36 rounded-full relative z-10 bg-slate-800"
              style={{
                backgroundImage: `url(${review.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "inset 0 0 30px rgba(0,0,0,0.6), 0 0 30px rgba(79, 70, 229, 0.4)"
              }}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }}
              whileHover={{ scale: 1.1 }}
            />
            
            {/* Glow effect */}
            <motion.div 
              className="absolute inset-0 rounded-full bg-indigo-500/20 blur-xl z-0"
              animate={{ 
                opacity: [0.4, 0.7, 0.4],
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
          </div>
          
          {/* Quote mark */}
          <motion.div
            className="absolute left-8 top-32 opacity-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 0.1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Quote size={60} />
          </motion.div>
          
          {/* Quote text */}
          <div className="mb-8 max-w-2xl relative z-10">
            <AnimatedText 
              text={review.text} 
              delay={0.6}
              className="text-2xl font-light italic text-white/90 leading-relaxed"
            />
          </div>
          
          {/* Client info */}
          <div className="relative z-10">
            <motion.h4 
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              {review.client}
            </motion.h4>
            
            <motion.p 
              className="text-blue-300/70 mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              {review.position}
            </motion.p>
            
            <StarRating className="mt-4 justify-center" />
          </div>
        </div>
      </motion.div>
    );
  };

  // Card for carousel/showcase modes
  const TestimonialCard = ({ review, index, isActive = false, layoutId, mode }) => {
    const isCarousel = mode === "carousel";
    const isShowcase = mode === "showcase";
    const rotation = calculateCardRotation(index);
    
    return (
      <motion.div
        layoutId={layoutId}
        className={`
          relative rounded-xl overflow-hidden
          ${isCarousel ? 'w-full' : 'w-full sm:w-[calc(33.333%-16px)]'}
          ${isActive 
            ? "border border-slate-500/20 shadow-2xl shadow-indigo-900/20" 
            : "border border-slate-800/20 shadow-lg"}
        `}
        initial={{ 
          opacity: 0, 
          y: 50,
        }}
        animate={{ 
          opacity: isActive || isShowcase ? 1 : 0.5, 
          y: 0,
          scale: isActive ? 1 : 0.95,
          filter: isActive ? "brightness(1)" : "brightness(0.7)",
          rotateX: isHovering && isActive ? rotation.x : 0,
          rotateY: isHovering && isActive ? rotation.y : 0,
        }}
        transition={{ 
          duration: 0.5, 
          delay: isShowcase ? index * 0.1 : 0,
          rotateX: { duration: 0.1, ease: "linear" },
          rotateY: { duration: 0.1, ease: "linear" }
        }}
        whileHover={isShowcase ? { 
          scale: 1.05, 
          opacity: 1, 
          filter: "brightness(1.1)",
          transition: { duration: 0.2 }
        } : {}}
        onClick={() => isShowcase && jumpToIndex(index)}
        style={{ 
          transformPerspective: "1000px",
          cursor: isShowcase ? "pointer" : "default",
          height: isShowcase ? "auto" : undefined
        }}
      >
        {/* Background gradient */}
        <div 
          className={`absolute inset-0 ${
            isActive 
              ? "bg-gradient-to-br from-blue-900/80 via-indigo-900/80 to-violet-900/80" 
              : "bg-gradient-to-br from-slate-900/90 via-slate-900/90 to-slate-800/90"
          }`}
        />
        
        {/* Animated border on active */}
        {isActive && (
          <motion.div 
            className="absolute inset-0 opacity-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
          </motion.div>
        )}
        
        {/* Content */}
        <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
          {/* Quote with floating animation */}
          <motion.div
            className="absolute right-6 top-6 text-blue-400/20"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Quote size={isActive ? 40 : 30} />
          </motion.div>
          
          <div className="flex items-start gap-4 mb-6">
            {/* Client image */}
            <div className="relative flex-shrink-0">
              {isActive && (
                <motion.div 
                  className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              )}
              
              <motion.div
                className={`rounded-full bg-slate-800 overflow-hidden relative z-10 border-2 border-slate-700 
                  ${isActive ? 'w-16 h-16 sm:w-20 sm:h-20' : 'w-14 h-14'}`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url(${review.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </motion.div>
            </div>
            
            {/* Client details */}
            <div className="flex-1">
              <motion.h3 
                className={`font-bold ${isActive ? 'text-xl text-blue-300' : 'text-lg text-blue-400/80'}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                {review.client}
              </motion.h3>
              
              <motion.p 
                className="text-sm text-blue-300/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                {review.position}
              </motion.p>
              
              {isActive && <StarRating className="mt-2" />}
            </div>
          </div>
          
          {/* Review text */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <p className={`${isActive ? 'text-white/90' : 'text-white/70'} leading-relaxed`}>
              "{review.text}"
            </p>
          </motion.div>
        </div>
        
        {/* Bottom shine effect for active card */}
        {isActive && (
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 0.5 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          />
        )}
      </motion.div>
    );
  };

  // Different modes rendering
  const renderCarouselMode = () => {
    return (
      <div className="relative px-4 py-8 overflow-hidden">
        <div className={`grid grid-cols-1 ${isAnimating ? 'pointer-events-none' : ''}`}>
          <AnimatePresence mode="wait">
            <TestimonialCard 
              key={`carousel-${activeIndex}`} 
              review={reviews[activeIndex]} 
              index={activeIndex}
              isActive={true}
              layoutId={`review-${activeIndex}`}
              mode="carousel"
            />
          </AnimatePresence>
        </div>
        
        {/* Navigation controls */}
        <div className="flex justify-center mt-8 gap-4">
          <motion.button
            className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-900/30 backdrop-blur-sm border border-blue-400/20 text-blue-300"
            whileHover={{ 
              scale: 1.1, 
              backgroundColor: "rgba(37, 99, 235, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            onClick={handlePrev}
          >
            <ChevronLeft size={24} />
          </motion.button>
          
          <motion.button
            className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-900/30 backdrop-blur-sm border border-blue-400/20 text-blue-300"
            whileHover={{ 
              scale: 1.1, 
              backgroundColor: "rgba(37, 99, 235, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            onClick={handleNext}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
        
        {/* Indicator dots with animation */}
        <div className="flex justify-center mt-8 gap-2">
          {reviews.map((_, idx) => (
            <motion.button
              key={`indicator-${idx}`}
              className="group relative"
              onClick={() => jumpToIndex(idx)}
              initial={{ opacity: 0, scale: 0, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.1 * idx + 1.2 }}
            >
              <motion.div
                className={`w-3 h-3 rounded-full ${
                  activeIndex === idx 
                    ? "bg-blue-500" 
                    : "bg-slate-600/50"
                }`}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
                animate={{ 
                  scale: activeIndex === idx ? [1, 1.2, 1] : 1,
                }}
                transition={{ 
                  scale: { 
                    duration: 1.5,
                    repeat: activeIndex === idx ? Infinity : 0,
                    repeatType: "reverse"
                  }
                }}
              />
              
              {/* Indicator tooltip */}
              <motion.div
                className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-blue-900/90 backdrop-blur-md px-2 py-1 rounded text-xs text-white opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none border border-blue-500/30"
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                whileHover={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {reviews[idx].client}
              </motion.div>
            </motion.button>
          ))}
        </div>
      </div>
    );
  };
  
  const renderShowcaseMode = () => {
    return (
      <motion.div 
        className="px-4 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-center">
          {reviews.map((review, idx) => (
            <TestimonialCard
              key={`showcase-${idx}`}
              review={review}
              index={idx}
              isActive={idx === activeIndex}
              layoutId={`review-${idx}`}
              mode="showcase"
            />
          ))}
        </div>
      </motion.div>
    );
  };
  
  const renderImmersiveMode = () => {
    return (
      <motion.div 
        className="w-full px-4 py-8 min-h-[600px] flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="w-full max-w-4xl h-[600px]">
          <AnimatePresence mode="wait">
            <ImmersiveCard key={`immersive-${activeIndex}`} review={reviews[activeIndex]} />
          </AnimatePresence>
          
          {/* Bottom navigation */}
          <div className="mt-8 flex justify-center gap-3">
            {reviews.map((_, idx) => (
              <motion.button
                key={`immersive-nav-${idx}`}
                className={`w-8 h-2 rounded-full transition-colors ${
                  idx === activeIndex ? "bg-blue-500" : "bg-slate-700"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => jumpToIndex(idx)}
              />
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <motion.section
      id="reviews"
      ref={sectionRef}
      className="py-20 relative flex flex-col items-center justify-center overflow-hidden"
      style={{ 
        opacity: sectionOpacity,
        scale: sectionScale,
        rotateY: yRotation
      }}
    >
      {/* Cosmic background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/40 to-slate-950" />
        
        {/* Animated orbs */}
        <motion.div 
          className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-blue-900/20 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />  <motion.div 
        className="absolute bottom-40 right-1/3 w-80 h-80 rounded-full bg-purple-800/10 blur-3xl"
        animate={{
          x: [0, -70, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-indigo-600/10 blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Subtle star field effect */}
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute bg-white rounded-full"
          style={{
            width: Math.random() * 2 + 1 + "px",
            height: Math.random() * 2 + 1 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
          animate={{
            opacity: [0.1, 0.8, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 5,
          }}
        />
      ))}
      
      {/* Moving light beam */}
      <motion.div
        className="absolute -left-24 top-1/4 w-48 h-[1px] bg-blue-400/30 blur-sm rotate-45"
        animate={{
          left: ["0%", "120%"],
          top: ["30%", "60%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
    
    {/* Custom cursor follower (only visible in immersive mode) */}
    {interactionMode === "immersive" && (
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-12 h-12 rounded-full bg-transparent pointer-events-none z-50 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        style={{
          mixBlendMode: "difference"
        }}
      >
        <motion.div 
          className="w-4 h-4 bg-white rounded-full"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        />
      </motion.div>
    )}

    <div className="max-w-7xl mx-auto w-full relative" ref={containerRef}>
      {/* Header with animated split text */}
      <motion.div 
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.1 }
          }
        }}
      >
        <motion.div 
          className="overflow-hidden inline-block"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >
          <motion.h2 
            className="text-6xl font-bold inline-flex"
            variants={{
              hidden: { y: 100 },
              visible: { y: 0 }
            }}
            transition={{ 
              duration: 0.8, 
              ease: [0.1, 0.3, 0.8, 1]
            }}
          >
            <span className="relative z-10 mr-3 text-white">Client</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 relative z-10">
              Testimonials
            </span>
          </motion.h2>
        </motion.div>
        
        {/* Animated underline */}
        <motion.div
          className="mx-auto h-1 mt-4"
          initial={{ width: 0 }}
          whileInView={{ width: "200px" }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="h-full w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </motion.div>
        
        {/* Subtitle with character-by-character animation */}
        <motion.p 
          className="mt-8 text-lg max-w-3xl mx-auto text-slate-300/90 overflow-hidden"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <AnimatedText
            text="I strive to deliver quality results tailored to each client's needs. These testimonials reflect my commitment to excellence, highlighting how I work closely with clients to exceed expectations and build lasting relationships."
            delay={1}
            className="leading-relaxed"
          />
        </motion.p>
      </motion.div>
      
      {/* Interactive mode selector */}
      <motion.div 
        className="flex justify-center mb-10 gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.button
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all
          ${interactionMode === "carousel" 
            ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20" 
            : "bg-slate-800/60 text-slate-300 hover:bg-slate-700"}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setInteractionMode("carousel")}
        >
          <span className="flex items-center gap-2">
            <MessageCircle size={16} />
            <span>Carousel</span>
          </span>
        </motion.button>
        
        <motion.button
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all
          ${interactionMode === "showcase" 
            ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20" 
            : "bg-slate-800/60 text-slate-300 hover:bg-slate-700"}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setInteractionMode("showcase")}
        >
          <span className="flex items-center gap-2">
            <User size={16} />
            <span>Gallery</span>
          </span>
        </motion.button>
        
        <motion.button
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all
          ${interactionMode === "immersive" 
            ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20" 
            : "bg-slate-800/60 text-slate-300 hover:bg-slate-700"}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setInteractionMode("immersive")}
        >
          <span className="flex items-center gap-2">
            <Sparkles size={16} />
            <span>Immersive</span>
          </span>
        </motion.button>
      </motion.div>
      
      {/* Autoplay toggle */}
      <motion.div 
        className="flex justify-center mb-12 text-sm text-slate-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
      >
        <label className="flex items-center gap-2 cursor-pointer">
          <input 
            type="checkbox" 
            checked={autoplayEnabled} 
            onChange={() => setAutoplayEnabled(!autoplayEnabled)}
            className="hidden"
          />
          <motion.div 
            className="w-10 h-5 rounded-full bg-slate-700/50 relative flex items-center"
            animate={{ 
              backgroundColor: autoplayEnabled ? "rgba(37, 99, 235, 0.5)" : "rgba(51, 65, 85, 0.5)"
            }}
          >
            <motion.div 
              className="absolute w-4 h-4 rounded-full shadow-md"
              animate={{ 
                left: autoplayEnabled ? "calc(100% - 16px - 2px)" : "2px",
                backgroundColor: autoplayEnabled ? "#3b82f6" : "#64748b"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
          </motion.div>
          <span>Autoplay {autoplayEnabled ? "On" : "Off"}</span>
        </label>
      </motion.div>
      
      {/* Interactive content sections */}
      <AnimatePresence mode="wait">
        <motion.div
          key={interactionMode}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
        >
          {interactionMode === "carousel" && renderCarouselMode()}
          {interactionMode === "showcase" && renderShowcaseMode()}
          {interactionMode === "immersive" && renderImmersiveMode()}
        </motion.div>
      </AnimatePresence>
      
      {/* Experience metrics */}
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        {[
          { icon: <Award />, label: "Years Experience", value: "8+" },
          { icon: <User />, label: "Happy Clients", value: "200+" },
          { icon: <ThumbsUp />, label: "Satisfaction Rate", value: "99%" },
          { icon: <MessageCircle />, label: "Positive Reviews", value: "500+" },
        ].map((item, idx) => (
          <motion.div 
            key={`metric-${idx}`}
            className="rounded-xl bg-slate-900/50 border border-slate-800/50 p-4 text-center flex flex-col items-center"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 * idx + 0.7, duration: 0.5 }}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "rgba(30, 41, 59, 0.7)",
              boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)"
            }}
          >
            <motion.div 
              className="w-12 h-12 rounded-full bg-blue-900/30 text-blue-400 flex items-center justify-center mb-3"
              whileHover={{ 
                rotate: [0, 10, -10, 0],
                transition: { duration: 0.5 } 
              }}
            >
              {item.icon}
            </motion.div>
            <motion.div 
              className="text-2xl font-bold text-white"
              whileInView={{
                opacity: [0, 1],
                y: [20, 0]
              }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 * idx + 1, duration: 0.5 }}
            >
              {item.value}
            </motion.div>
            <motion.div 
              className="text-sm text-blue-300/70"
              whileInView={{
                opacity: [0, 1]
              }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 * idx + 1.2, duration: 0.5 }}
            >
              {item.label}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Final CTA */}
      <motion.div 
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          className="inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <a 
            href="#contact" 
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium relative overflow-hidden group"
          >
            <span className="relative z-10">Start Your Project Today</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 -z-0"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div 
              className="absolute top-0 left-0 w-20 h-full bg-white/20 skew-x-12 -translate-x-32 group-hover:translate-x-[400px] transition-transform duration-1000"
            />
          </a>
        </motion.div>
      </motion.div>
    </div>
  </motion.section>
);
}

export default Reviews;