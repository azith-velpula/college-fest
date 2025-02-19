import { useEffect } from "react";
import About from "./About";
import Highlights from "./Highlights";
import { motion, useAnimationControls } from "framer-motion";
import UniversityPatronage from "./UniversityPatronage";
import EventSchedule from "./EventSchedule";
import Footer from "./Footer";
import ContactSection from "./ContactSection";
import EventHighlights from "./EventsHighlights";
import { container, letterVariants, textVariants } from "../config/textEffects";
import logo from "../assets/images/logo.png";

export default function Home() {
  const controls = useAnimationControls();

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
      <div className="relative h-screen bg-black/50 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-12">
        <div className="flex flex-col justify-center items-center w-full md:w-1/2">
          <img
            key={"logo"}
            src={logo}
            alt="Event Logo"
            className="w-[250px] md:w-[450px] lg:w-[650px] h-auto"
          />
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center text-center mt-6 md:mt-0">
          <div className="max-w-3xl px-6 md:px-12">
            <div className="relative isolate">
              <motion.div
                variants={container}
                initial="initial"
                animate="animate"
                className="perspective"
              >
                <motion.h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
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
                        className="inline-block relative magic-text mr-1 md:mr-2 text-white drop-shadow-[0_0_10px_rgba(255,165,0,0.8)]"
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
                className="mt-4 text-lg md:text-xl lg:text-2xl text-white/60 font-semibold drop-shadow-md"
                variants={textVariants}
                initial="initial"
                animate="animate"
              >
                The ultimate futurepreneurship experience.
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
