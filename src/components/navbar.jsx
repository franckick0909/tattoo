"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NavLink from "./navLink";
import Social from "./social";

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
      y: 0,
      transition: {
        duration: 0.1,
        ease: "easeInOut",
      },
    },
    open: {
      y: "0.5rem",
      backgroundColor: "white",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
      rotate: 45,
      originX: "center",
    },
  };

  const middleVariants = {
    close: {
      when: "afterChildren",
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const bottomVariants = {
    close: {
      y: 0,
      transition: {
        when: "afterChildren",
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    open: {
      y: "-0.5rem",
      rotate: -45,
      originX: "center",
      backgroundColor: "white",
      duration: 0.2,
      ease: "easeInOut",
    },
  };

  const menuVariants = {
    close: {
      y: "-100%",
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1,
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        type: "spring",
        stiffness: 300,
        damping: 35,
      },
    },
  };
  // const menuVariants = {
  //   close: {
  //     clipPath: "circle(0% at 50% -30%)",
  //     transition: {
  //       delay: 0.2,
  //       staggerChildren: 0.1,
  //       staggerDirection: -1,
  //       type: "spring",
  //       stiffness: 100,
  //       damping: 30,
  //       resDelta: 30,
  //     },
  //   },
  //   open: {
  //     clipPath: "circle(200% at 50% 100%)",
  //     transition: {
  //       staggerChildren: 0.1,
  //       type: "spring",
  //       stiffness: 30,
  //       damping: 40,
  //       resDelta: 2,
  //     },
  //   },
  // };

  const listItemsVariants = {
    close: {
      x: -10,
      rotateX: 180,
       opacity: 0, 
      },
    open: {
      x: 0,
      rotateX: 0,
      opacity: 1,
    },
  };

  return (
    <div className="w-full h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px20 xl:px48 text-xl">
      {/* LOGO */}
      <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
        Logo <span>FK</span>
      </Link>

      {/* MENU */}
      <div className="hidden flex-1 justify-end gap-4 w-1/3 text-sm md:text-sm lg:text-lg md:flex">
        {links.map((link) => (
          <NavLink key={link.title} link={link} />
        ))}
      </div>

      {/* MENU RESPONSIVE */}
      <div className="">
        {/* BURGER BUTTON */}
        <div className="md:hidden flex items-center justify-center bg-slate-300 w-14 h-14 rounded-full ">
        <button
          className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-[5px] z-50 relative"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={isOpen ? "open" : "close"}
            className="w-8 h-[3px] bg-black rounded"
          ></motion.div>
          <motion.div
            variants={middleVariants}
            animate={isOpen ? "open" : "close"}
            className="w-8 h-[3px] bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={isOpen ? "open" : "close"}
            className="w-8 h-[3px] bg-black rounded"
          ></motion.div>
        </button>
        </div>

        {/* DESKTOP MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="close"
              animate="open"
              exit="close"
              className="flex flex-col justify-center items-center gap-4 absolute top-0 left-0 bg-black text-white w-full h-screen z-40"
            >
              <div className=" flex flex-col items-end justify-center gap-4 w-[80%] h-[90%] ">
                <div className="flex items-center justify-between w-full mb-8 border-[1px] border-transparent border-b-slate-600 pb-8 text-sm text-slate-600">
                  Navigation
                  <Social />
                </div>
              {links.map((link) => (
                <motion.div
                  variants={listItemsVariants}
                  className="flex justify-start px-[0%] z-50 w-full text-center rounded-md"
                  key={link.title}
                >
                  <Link className=" cursor-pointer text-5xl" href={link.url}>{link.title}</Link>
                </motion.div>
              ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
