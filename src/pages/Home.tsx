import { useEffect, useState } from "react";
import About from "./About";
import Highlights from "./Highlights";
import { motion, useAnimationControls } from "framer-motion";
import UniversityPatronage from "./UniversityPatronage";
import EventSchedule from "./EventSchedule";
import Footer from "./Footer";
import ContactSection from "./ContactSection";
import EventHighlights from "./EventsHighlights";

const textVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const letterVariants = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.5,
    rotateX: -90,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
  },
};

const container = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const controls = useAnimationControls();

  const images = [
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1495837174058-628aafc7d610?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateLetters = async () => {
      await controls.start("animate");
      controls.start({
        scale: [1, 1.1, 1],
        transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
      });
    };
    animateLetters();
  }, [controls]);
  return (
    <div>
      {/* Hero Section with Carousel */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                index === currentSlide ? "opacity-60" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-[#0B0B3B]/30" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-center z-10">
          <div className="max-w-3xl px-12 ">
            <div className="relative isolate">
              <motion.div
                variants={container}
                initial="initial"
                animate="animate"
                className="perspective"
              >
                <motion.h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">
                  <motion.span
                    variants={textVariants}
                    className="block text-white mb-4"
                  >
                    Experience the
                  </motion.span>
                  <motion.div className="relative inline-block">
                    {"Thrill of the Blitz!".split(" ").map((letter, index) => (
                      <motion.span
                        key={index}
                        variants={letterVariants}
                        className="inline-block relative magic-text mr-6"
                        animate={controls}
                        custom={index}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.04,
                          ease: "easeOut",
                        }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.h1>
              </motion.div>
              <motion.p
                className="mt-6 text-[1.3rem] leading-8  text-white/80"
                variants={textVariants}
                initial="initial"
                animate="animate"
              >
                Join us at OUCCBM's premier management fest where innovation
                meets excellence. Compete, learn, and network with the brightest
                minds in business.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      <EventHighlights />
      <About />
      <Highlights />
      <EventSchedule />
      <ContactSection />
      <UniversityPatronage />
      <Footer />
    </div>
  );
}
