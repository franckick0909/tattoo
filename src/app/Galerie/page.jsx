"use client";
import { useState, useEffect } from "react";
import { galleryData } from "@/components/datas/data";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Galerie2() {
  const [index, setIndex] = useState(-1);
  const [currentGallery, setCurrentGallery] = useState("gallery1");
  const [gallery, setGallery] = useState([]);
  const [displayCount, setDisplayCount] = useState(5);
  const [key, setKey] = useState(0);

  const { title, btnText, btnIcon, galleryAll } = galleryData;

  useEffect(() => {
    const selectedGallery = galleryAll.find(g => g.id === currentGallery);
    setGallery(selectedGallery ? selectedGallery.images.slice(0, displayCount) : []);
  }, [currentGallery, galleryAll, displayCount]);

  const handleGalleryChange = (galleryId) => {
    setCurrentGallery(galleryId);
    setDisplayCount(4);
    setKey(prevKey => prevKey + 1);
  }

  const handleLoadMore = () => {
    setDisplayCount(prevCount => prevCount + 10);
  }

  const slides = gallery.map(({ width, height, original }) => ({
    src: original,
    width,
    height,
  }));

  return (  
    <section
      id="Galerie"
      className="relative w-full min-h-screen grid place-items-center grid-cols-1 overflow-hidden py-28"
    >
      <div className="w-full h-full px-4 md:px-8 lg:px-16 xl:px-20 ">
        <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal mb-4 md:mb-6 lg:mb-20 text-center uppercase">
          {title}
        </motion.h2>

<div className="flex justify-center gap-4 mb-8">
  <ButtonGallery gallery="galerie Franck" onClick={() => handleGalleryChange("gallery1")} />
  <ButtonGallery gallery="galerie Chris" onClick={() => handleGalleryChange("gallery2")} />
  <ButtonGallery gallery="galerie Nono" onClick={() => handleGalleryChange("gallery3")} />
  <ButtonGallery gallery="galerie Alicia" onClick={() => handleGalleryChange("gallery4")} />
</div>

        <motion.div
        key={key}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-8 lg:mb-20">
          <AnimatePresence>
            <MasonryPhotoAlbum
              photos={gallery}
              onClick={({ index }) => setIndex(index)}
              className="rounded-lg shadow-lg"
              componentsProps={{ container: { style: { borderRadius: "8px", width: "100%", height: "100%"} } }}
              layout="masonry"
              layoutOptions={{  
                width: 100,
                borderRadius: "8px",
                backgroundColor: "red",
              }}
              renderPhoto={({ photo, wrapperStyle, imageProps }) => (
                <motion.div
                  key={photo.src}
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                  style={wrapperStyle}
                >
                  <Image 
                    {...imageProps}  
                    alt={photo.alt || `Image de la galerie ${currentGallery}`}  
                    className="rounded-lg object-cover shadow-lg"
                  />
                </motion.div>
              )}
            />
          </AnimatePresence>

          <Lightbox
            slides={slides}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.8)" } }}
          />
        </motion.div>
        <div className="flex justify-center">
        <button onClick={handleLoadMore} className="text-white bg-slate-900 hover:bg-slate-950 transition-all duration-300 ease-in-out px-[6px] sm:px-3 md:px-6 py-[6px] xs:py-[6px] sm:py-2 md:py-4 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl flex items-center gap-2 group font-light font-playfairSC uppercase">
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


const ButtonGallery = ({ gallery, onClick }) => {
  return (
    <button onClick={onClick} className="text-white bg-slate-900 hover:bg-slate-950 transition-all duration-300 ease-in-out px-[6px] sm:px-3 md:px-6 py-[6px] xs:py-[6px] sm:py-2 md:py-4 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl flex items-center gap-1 md:gap-2 group font-light font-playfairSC uppercase">
      {gallery}
    </button>
  );
};