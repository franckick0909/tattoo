"use client"
import Image from "next/image";
import Link from "next/link";
import { BtnTop } from "../../components/buttons/btnTop";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="Accueil" className="relative w-full h-screen overflow-hidden"
    style={{ overflow: "hidden", width: "100%", height: "100vh"}}
    >
      <div className="relative w-full h-full overflow-hidden">
      <motion.div
      initial={{ clipPath: "circle(0% at 50% 50%)" }}
      whileInView={{ clipPath: "circle(260% at 50% 50%)" }}
      transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
      className="absolute w-full h-full overflow-hidden"
      >
        <div className="relative w-full h-full">
      <Image src="/bg.png" alt="bghero" width={1000} height={1000} className="fixed inset-0 w-full h-full object-cover z-0" /></div>
      </motion.div>
      <div className="container mx-auto flex flex-col justify-center h-full">
        <div className="relative flex flex-col items-center justify-center h-full w-full">
          <motion.h1 initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-bold font-playfair bg-clip-text text-transparent bg-gradient-to-r from-amber-500/50 via-amber-300 to-amber-100/80 z-10 border-b-amber-200/70 border-b-4 tracking-widest">
           THE VOID
          </motion.h1>
          <motion.h2 initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-3xl font-playfair text-amber-500 tracking-widest">
            TATOO
          </motion.h2>
          <motion.p initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-amber-100/70 text-xl mt-4 text-center tracking-widest font-orbitron font-[100]">
          VOTRE SALON DE TATOUAGE À PARIS 3ÈME
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex items-center h-auto mt-20 relative">
            <Link href="/#Galerie" className="text-xl font-raleway text-white flex items-center">
            <BtnTop btn="Découvrir" />
            </Link>
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  )
}