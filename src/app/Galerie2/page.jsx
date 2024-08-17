"use client";
import { useState } from "react";
import { galleryData } from "@/components/datas/data";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";

const slides = galleryData.images.map(({ width, height, original }) => ({
  src: original,
  width,
  height,
}));

export default function Galerie2() {
  const [index, setIndex] = useState(-1);

  const { title, btnText, btnIcon, images } = galleryData;

  return (
    <section
      id="Galerie2"
      className="relative bg-indigo-200 w-full min-h-screen grid place-items-center grid-cols-1 overflow-hidden py-28"
    >
      <div className="w-full h-full px-4 md:px-8 lg:px-16 xl:px-20 ">
        <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal mb-4 md:mb-6 lg:mb-20 max-w-96 uppercase">
          {title}
        </motion.h2>

        <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: false, amount: 0.2 }}
         className="mb-8 lg:mb-20">
          <MasonryPhotoAlbum
            photos={images}
            onClick={({ index }) => setIndex(index)}
            className="rounded-lg shadow-lg"
            componentsProps={{ container: { style: { borderRadius: "8px" } } }}
            layout="masonry"
            layoutOptions={{  
              borderRadius: "8px",
              backgroundColor: "red",
            }}
          />

          <Lightbox
            slides={slides}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.8)" } }}
          />
        </motion.div>
        <div className="flex justify-center">
        <button className="text-white bg-slate-900 hover:bg-slate-950 transition-all duration-300 ease-in-out px-6 py-4 sm:text-sm md:text-base lg:text-lg xl:text-xl flex items-center gap-2 group font-light font-playfairSC uppercase">
          {btnText} 
          <div className="group-hover:translate-x-2 transition-all duration-300 ease-in-out">
            {btnIcon}
          </div>
        </button>
        </div>
      </div>
    </section>
  );
}
