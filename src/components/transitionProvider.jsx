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
        className="w-full h-screen bg-gradient-to-b from-blue-400 to-green-300"
      >
        <motion.div
          className="w-full h-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        {pathName === "/about" && (
            <motion.div
            className="fixed m-auto text-white -z-50"
            animate={{ height: "0vh" }}
            exit={{ height: "140vh" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        )}

        <motion.div
          className="w-full h-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        <motion.div
          className="w-full h-screen fixed bg-blue-800 rounded-b-[100px] bottom-0 z-40"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 2 } }}
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
