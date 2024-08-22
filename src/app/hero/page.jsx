"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ButtonAnimatedBorder } from "@/components/buttons/buttonAnimatedBorder";

export default function Hero() {
  return (
    <section
      id="Accueil"
      className="w-full h-[calc(100vh-0rem)] overflow-hidden"
    >
      <div className="relative w-full h-full overflow-hidden">
        <motion.div
          initial={{ clipPath: "circle(0% at 0% 0%)" }}
          whileInView={{ clipPath: "circle(260% at 50% 50%)" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute w-full h-full overflow-hidden"
        >

            <Image
              src="/images/aiguille.jpg"
              alt="photo d'une aiguille de tatoueur"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="fixed inset-0 w-full h-full object-cover z-0"
              priority
            />
       
        </motion.div>
        <div className="container mx-auto flex flex-col justify-center h-full">
          <div className="relative flex flex-col items-center justify-center h-full w-full">
            <motion.h1
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-bold font-playfair text-white border-b-4 border-amber-500 tracking-widest pb-2"
            >
             Angel Tattoo
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-3xl font-playfair text-amber-300 tracking-widest"
            >
              TATOO
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-white text-xl mt-4 text-center tracking-widest font-orbitron font-[100]"
            >
              VOTRE SALON DE TATOUAGE à Lille
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex items-center h-auto mt-20 relative"
            >
              <Link
                href="/#Galerie" className="flex items-center justify-center text-white"
              >
                <ButtonAnimatedBorder btnText="Découvrir" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}