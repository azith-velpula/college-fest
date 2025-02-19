import { useEffect, useState } from "react";
import About from "./About";
import Highlights from "./Highlights";
import { motion, useAnimationControls } from "framer-motion";
import UniversityPatronage from "./UniversityPatronage";
import EventSchedule from "./EventSchedule";
import Footer from "./Footer";
import ContactSection from "./ContactSection";
import EventHighlights from "./EventsHighlights";
import Images from "../assets/images/img";
import { container, letterVariants, textVariants } from "../config/textEffects";
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const controls = useAnimationControls();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Images.length);
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
          {Images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
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
                    className="block bg-gradient-to-r from-[#ff8c00] via-[#ff0080] to-[#ff8c00] bg-clip-text text-transparent mb-4 p-4"
                  >
                    Experience the
                  </motion.span>
                  <motion.div className="relative inline-block">
                    {"Thrill of the Blitz!".split(" ").map((letter, index) => (
                      <motion.span
                        key={index}
                        variants={letterVariants}
                        className="inline-block relative magic-text mr-6 text-white drop-shadow-[0_0_10px_rgba(255,165,0,0.8)]"
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
                className="mt-6 text-[1.3rem] leading-8 text-white/90 drop-shadow-md"
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
