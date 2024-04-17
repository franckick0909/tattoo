"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/skills", title: "Skills" },
  { url: "/service", title: "Service" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const topVariants = {
    close: {
      rotate: 45,
      transition: {
        duration: 0.5,
      },
    },
    open: {
      rotate: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const middleVariants = {
    close: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    open: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const bottomVariants = {
    close: {
      rotate: -45,
      transition: {
        duration: 0.5,
      },
    },
    open: {
      rotate: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px20 xl:px48 text-xl">

      {/* LOGO */}
      <Link href="/" className="text-2xl font-bold">
        Logo <span>FK</span>
      </Link>

      {/* MENU */}
      <div className="flex items-center justify-center gap-4 w-1/3">
        {links.map((link) => (
          <Link href={link.url} key={link.title}>
            {link.title}
          </Link>
        ))}
      </div>
      

      {/* MENU RESPONSIVE */}
      <div className="md:hidden">
      {/* BURGER BUTTON */}
      
        <button
          className="w-10 h-8 flex flex-col items-center gap-[5px] z-50 relative"
          onClick={setIsOpen((prev) => !prev)}
        >
          <motion.span
            variants={topVariants}
            animate={isOpen ? "open" : "close"}
            className="w-9 h-[3px] bg-black rounded"
          ></motion.span>
          <motion.span
            variants={middleVariants}
            animate={isOpen ? "open" : "close"}
            className="w-9 h-[3px] bg-black rounded"
          ></motion.span>
          <motion.span
            variants={bottomVariants}
            animate={isOpen ? "open" : "close"}
            className="w-9 h-[3px] bg-black rounded"
          ></motion.span>
        </button>

        {/* DESKTOP MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "-100%" }}
              className="flex flex-col justify-center items-center gap-4 absolute top-0 left-0 w-full h-screen bg-slate-700 text-white"
            >
              {links.map((link) => (
                <Link href={link.url} key={link.title}>
                  {link.title}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
