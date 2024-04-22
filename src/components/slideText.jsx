"use client";

import { motion, AnimatePresence } from "framer-motion";

const SlideText = () => {

  const variants = {
    initial: {
      x: "-90%",
      opacity: 1,
    },
    animate: {
      x: "95%",
      opacity: 1,
      transition: {
        repeat: Infinity,
        duration: 24,
        ease: "linear",
      },
    },
    exit: {
      x: -100,
      opacity: 0.5,
    },
  };


  return (
    <AnimatePresence>
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div className=" bg-clip-text text-transparent bg-gradient-to-t from-slate-300 via-slate-100 to-white font-spaceGrotesk font-thin  ">

          <motion.span className="">Franck</motion.span>
          <motion.span className="">{" "}-{" "}</motion.span>
          <motion.span className="">Chapelon</motion.span>
        
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SlideText;
