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

export { letterVariants, container, textVariants };
