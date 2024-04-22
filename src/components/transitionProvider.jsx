"use client";

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-full h-screen bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-zinc-100 via-zinc-200 to-zinc-400" 
      >
        <motion.div
          className="w-full h-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />

        <motion.div
          className="w-fit h-fit fixed m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white cursor-default z-50 text-6xl lg:text-7xl xl:text-8xl"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {pathName.substring(1)}
        </motion.div>

        <motion.div
          className="w-full h-screen fixed bg-black rounded-t-[100px] bottom-0 z-40"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 }}}
        />

        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
