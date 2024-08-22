"use client";
import { useState } from "react";
import Image from "next/image";
import { galleryData } from "@/components/datas/data";

const initialImages = [
  { id: 1, src: "/gallery/img1.jpg", alt: "Image 1" },
  { id: 2, src: "/gallery/img2.jpg", alt: "Image 2" },
  { id: 3, src: "/gallery/img3.jpg", alt: "Image 3" },
  { id: 4, src: "/gallery/img4.jpg", alt: "Image 4" },
  { id: 5, src: "/gallery/img5.jpg", alt: "Image 5" },
  { id: 6, src: "/gallery/img6.jpg", alt: "Image 6" },
  { id: 7, src: "/gallery/img7.jpg", alt: "Image 7" },
  { id: 8, src: "/gallery/img8.jpg", alt: "Image 8" },
  { id: 9, src: "/gallery/img9.jpg", alt: "Image 9" },
  { id: 10, src: "/gallery/img10.jpg", alt: "Image 10" },
  { id: 11, src: "/gallery/img11.jpg", alt: "Image 11" },
  { id: 12, src: "/gallery/img12.jpg", alt: "Image 12" },
  { id: 13, src: "/gallery/img13.jpg", alt: "Image 13" },
  { id: 14, src: "/gallery/img14.jpg", alt: "Image 14" },
  { id: 15, src: "/gallery/img15.jpg", alt: "Image 15" },
  { id: 16, src: "/gallery/img16.jpg", alt: "Image 16" },
  { id: 17, src: "/gallery/img17.jpg", alt: "Image 17" },
  { id: 18, src: "/gallery/img18.jpg", alt: "Image 18" },
  { id: 19, src: "/gallery/img19.jpg", alt: "Image 19" },
  { id: 20, src: "/gallery/img20.jpg", alt: "Image 20" },
  { id: 21, src: "/gallery/img21.jpg", alt: "Image 21" },
  // Ajoutez ici toutes vos images
];

export default function Galerie() {
  const [displayedImages, setDisplayedImages] = useState(initialImages.slice(0, 5));
  const [lightboxImage, setLightboxImage] = useState(null);

  const loadMore = () => {
    const currentLength = displayedImages.length;
    const newImages = initialImages.slice(currentLength, currentLength + 5);
    setDisplayedImages([...displayedImages, ...newImages]);
  };

  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <section
      id="Galerie"
      className="relative w-full min-h-screen grid place-items-center grid-cols-1 overflow-hidden py-28">

<h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal mb-4 md:mb-6 lg:mb-8 xl:mb-10 max-w-32 uppercase">
    {galleryData.title}
</h2>

      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 xl:columns-5 px-4 md:px-8 lg:px-16 xl:px-20 w-full h-full">
        {displayedImages.map((image) => (
          <div key={image.id} className="relative mb-4 cursor-pointer" onClick={() => openLightbox(image)}>
            <Image
              className="rounded-lg object-cover w-full h-auto"
              src={image.src}
              alt={image.alt}
              width={300}
              height={300}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
      {displayedImages.length < initialImages.length && (
        <div className="flex justify-center items-center mt-8">
          <button
            className="text-white bg-amber-500 hover:bg-amber-600 transition-all duration-300 ease-in-out px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 group"
            onClick={loadMore}
          >
            {galleryData.btnText}
            <div className="group-hover:translate-x-2 transition-all duration-300 ease-in-out">{galleryData.btnIcon}</div>
          </button>
        </div>
      )}
      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeLightbox}>
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              width={1200}
              height={800}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
              onClick={closeLightbox}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}