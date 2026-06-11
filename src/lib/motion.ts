import type { Variants, Transition } from "motion/react";

export const easeQuiet: Transition = {
  duration: 1.2,
  ease: [0.2, 0.7, 0.2, 1],
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: easeQuiet },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.4, ease: [0.2, 0.7, 0.2, 1] } },
};

export const stagger = (delay = 0.12): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: delay, delayChildren: 0.1 } },
});

export const typewriter = {
  hidden: { width: 0 },
  visible: { width: "100%", transition: { duration: 0.6, ease: "easeOut" as const } },
};
