"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Social from "./social";
import { navLinks } from "./datas/data";
import Image from "next/image";
import logo from "../../public/logo.svg";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsActive(window.scrollY > 100);
    });
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash.slice(1) || "");
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname]);

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${sectionId}`);
      setActiveSection(sectionId);
    }
    setIsOpen(false);
  };

  const topVariants = {
    close: {
      y: 0,
      backgroundColor: "rgb(0, 0, 0)",
      transition: {
        duration: 0.1,
        ease: "easeInOut",
      },
    },
    open: {
      y: "0.5rem",
      backgroundColor: "rgb(255, 255, 255)",
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
      backgroundColor: "rgb(0, 0, 0)",
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
      backgroundColor: "rgb(255, 255, 255)",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const menuVariants = {
    close: {
      y: "-100%",
      transition: {
        when: "afterChildren",
        staggerChildren: 0.15,
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
        staggerChildren: 0.15,
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

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
    <header
      className={`fixed top-0 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-xl z-20 w-full h-24 transition-colors duration-300 ease-in-out shadow-lg ${
        isActive ? "bg-white/80" : "bg-white"
      }`}
    >
      {/* LOGO */}
      <Link href="/" className="text-2xl font-bold flex-shrink-0">
      <div className="w-24 h-10 md:w-32 md:h-16 relative">
        <Image
          src={logo}
          alt="logo"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 80px, 96px"
          priority
        />
        </div>
      </Link>

      {/* MENU */}
      <div className="hidden flex-1 justify-center gap-4 text-sm md:text-sm lg:text-base lg:flex uppercase font-sans">
        {navLinks.map((link) => (
          <div className="relative" key={link.id}>
            <Link
              href={`/#${link.href}`}
              onClick={(e) => handleScrollToSection(e, link.href)}
              className={`
                relative
                transition-colors duration-300
                before:content-['']
                before:absolute
                before:-bottom-1
                before:left-0
                before:w-full
                before:h-[3px]
                before:bg-amber-500
                before:origin-left
                before:transition-transform
                before:duration-300
                before:ease-out
                before:translate-x-0
                ${
                  activeSection === link.href
                    ? "before:scale-x-100 before:bg-amber-500"
                    : "before:scale-x-0 hover:before:scale-x-100"
                }
              `}
            >
              {link.name}
            </Link>
          </div>
        ))}
      </div>

      <div className="hidden lg:flex items-center flex-shrink-0 ">
        <Social className="text-black hover:text-amber-600 text-sm md:text-base" />
      </div>

      {/* MENU RESPONSIVE */}
      <div className="lg:hidden">
        {/* BURGER BUTTON */}
        <div className="lg:hidden flex items-center justify-center md:w-14 md:h-14 w-12 h-12">
          <button
            className="lg:hidden w-8 h-8 flex flex-col items-center justify-center gap-[5px] z-50 relative"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <motion.div
              variants={topVariants}
              animate={isOpen ? "open" : "close"}
              className="w-8 h-[3px] rounded"
            ></motion.div>
            <motion.div
              variants={middleVariants}
              animate={isOpen ? "open" : "close"}
              className="w-8 h-[3px] bg-black rounded"
            ></motion.div>
            <motion.div
              variants={bottomVariants}
              animate={isOpen ? "open" : "close"}
              className="w-8 h-[3px] rounded"
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
                <div className="flex items-center justify-between w-full mb-8 border-[1px] border-transparent border-b-slate-600 pb-8 text-sm md:text-base text-neutral-300 tracking-wide">
                  Navigation
                  <div className="flex items-center justify-end w-full text-white hover:text-gray-700">
                  <Social className="text-white hover:text-amber-400 text-sm md:text-base" />
                </div>
                </div>
                
                {navLinks.map((link) => (
                  <motion.div
                    variants={listItemsVariants}
                    className="flex justify-start px-[0%] z-50 w-full text-center rounded-md  uppercase"
                    key={link.id}
                  >
                    <Link
                      className={`
                      cursor-pointer text-5xl
                      relative
                      transition-colors duration-300
                      before:content-['']
                      before:absolute
                      before:-bottom-1
                      before:left-0
                      before:w-full
                      before:h-[3px]
                      before:bg-amber-500
                      before:origin-left
                      before:transition-transform
                      before:duration-300
                      before:ease-out
                ${
                  activeSection === link.href
                    ? "before:scale-x-100 before:bg-amber-500"
                    : "before:scale-x-0 hover:before:scale-x-100"
                }
                    `}
                      href={`/#${link.href}`}
                      onClick={(e) => handleScrollToSection(e, link.href)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}