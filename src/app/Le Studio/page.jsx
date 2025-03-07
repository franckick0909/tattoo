"use client";
import { aboutData } from "@/components/datas/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function LeStudio() {
  return (
    <section
      id="Le studio"
      className="relative w-full min-h-screen grid place-items-center grid-cols-1 overflow-hidden pb-28"
    >
      <div className="px-4 md:px-8 lg:px-16 xl:px-20 ">

        <div className="flex flex-col lg:flex-row md:gap-x-0 lg:gap-x-0 xl:gap-x-20 items-center ">
          {/* numbers */}
          <motion.div
            className="flex flex-col lg:flex-row flex-1 items-center w-full h-full"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div
              className="text-[360px] xl:text-[720px] font-bold leading-none font-playfair lg:-tracking-[0.055em] bg-clip-text text-transparent relative bg-cover bg-center"
              style={{
                backgroundImage: "url('/about.png')",
              }}
            >
              01
            </div>
          </motion.div>
          {/* text */}
          <motion.div
            className="flex-1 h-full w-full"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal mb-4 md:mb-6 lg:mb-8 xl:mb-10 max-w-32 uppercase"
            >
              {aboutData.title}
            </motion.h2>
            <div className="flex flex-col items-end">
              <div className="max-w-[530px] font-rozhaOne">
                <p className="mb-6">{aboutData.subtitle2}</p>
                <p className="mb-9">{aboutData.subtitle1}</p>
                <Link href="/Contact" className="text-white bg-amber-500 hover:bg-amber-600 transition-all duration-300 ease-in-out px-6 py-3 rounded-full text-sm font-medium inline-flex items-center gap-2 group">
                  {aboutData.btnText}{" "}
                  <div className="group-hover:translate-x-2 transition-all duration-300 ease-in-out">
                    {aboutData.btnIcon}
                  </div>{" "}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row md:gap-x-0 lg:gap-x-0 xl:gap-x-32 items-center justify-center mt-16">
          <div className="flex flex-col flex-1 w-full h-full">
            <div className="max-w-[530px] font-rozhaOne">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal mb-4 md:mb-6 lg:mb-8 xl:mb-10 max-w-32 uppercase"
            >
              {aboutData.title2}
            </motion.h2>
              <p className="mb-9">{aboutData.subtitle3}</p>
              <div className="flex justify-between gap-4 items-center mt-10">
                <Image src="/images/coffee.jpg" alt="coffee" width={300} height={200} className="rounded-lg shadow-lg object-cover"  />
                <Image src="/images/aiguille.jpg" alt="coffee" width={300} height={200} className="rounded-lg shadow-lg object-cover"  />
              </div>
            </div>
          </div>
          <div className="flex-1 w-full h-full">
            <Image src="/images/salon.jpg" alt="about" width={700} height={600} className="rounded-lg shadow-lg object-cover"  />
          </div>
        </div>
      </div>
    </section>
  );
}
