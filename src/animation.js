export const pageTransition = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    // y: 300,
    transition: {
      duration: 1,
    },
  },
};

export const titleAnimation = {
  hidden: {
    y: 200,
  },
  show: {
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      // staggerChildren: 0.25,
    },
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};
export const photoAnimation = {
  hidden: {
    opacity: 0,
    scale: 1.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};
export const lineAnim = {
  hidden: {
    width: "0%",
  },
  show: {
    width: "100%",
    transition: {
      duration: 1,
    },
  },
};
export const slider = {
  hidden: {
    x: "-130%",
    // skew: "45deg",
  },
  show: {
    x: "100%",
    //  skew: "0deg",
    transition: { duration: 1, ease: "easeOut" },
  },
};
export const staggerFrame = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      ease: "easeOut",
    },
  },
};
export const scrollAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};
export const sliderImage= {
  hidden: {
    width: "0%",
    // skew: "45deg",
  },
  show: {
    width: "100%",
    //  skew: "0deg",
    transition: { duration: 1, ease: "easeOut" },
  },
};
