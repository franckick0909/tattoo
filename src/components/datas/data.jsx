import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaTiktok, FaLinkedin } from "react-icons/fa6";



export const navLinks = [
  {
    id: "Accueil",
    name: "Accueil",
    href: "Accueil",
  },
  {
    id: "A Propos",
    name: "A Propos",
    href: "Propos",
  },
  {
    id: "Galerie2",
    name: "Galerie2",
    href: "Galerie2",
  },
  {
    id: "Team",
    name: "Team",
    href: "Team",
  },
  {
    id: "Article",
    name: "Article",
    href: "Article",
  },
  {
    id: "Contact",
    name: "Contact",
    href: "Contact",
  },
];



export const socialLinks = [
  {
    id: 1,
    name: "Instagram",
    href: "https://www.instagram.com",
    icon: <FaInstagram />,
  },
  {
    id: 2,
    name: "Facebook",
    href: "https://www.facebook.com",
    icon: <FaFacebook />,
  },
  {
    id: 3,
    name: "Twitter",
    href: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 4,
    name: "Youtube",
    href: "https://www.youtube.com",
    icon: <FaYoutube />,
  },
  {
    id: 5,
    name: "Tiktok",
    href: "https://www.tiktok.com",
    icon: <FaTiktok />,
  },
  {
    id: 6,
    name: "Linkedin",
    href: "https://www.linkedin.com",
    icon: <FaLinkedin />,
  },
];

import { FaArrowRight } from "react-icons/fa6";

export const aboutData = {
  title: "My Story:",
  subtitle1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  subtitle2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  btnText: "En savoir plus",
  btnIcon: <FaArrowRight />,
};


export const galleryData = {
  title: "Check my Gallery:",
  btnText: "En voir plus",
  btnIcon: <FaArrowRight />,
  images: [
    { src: "/gallery/img1.jpg", width: 474, height: 710, original: "/gallery/img1.jpg" },
    { src: "/gallery/img2.jpg", width: 1000, height: 571, original: "/gallery/img2.jpg" },
    { src: "/gallery/img3.jpg", width: 667, height: 1000, original: "/gallery/img3.jpg" },
    { src: "/gallery/img4.jpg", width: 736, height: 736, original: "/gallery/img4.jpg" },
    { src: "/gallery/img5.jpg", width: 600, height: 1042, original: "/gallery/img5.jpg" },
    { src: "/gallery/img6.jpg", width: 720, height: 1280, original: "/gallery/img6.jpg" },
    { src: "/gallery/img7.jpg", width: 736, height: 1308, original: "/gallery/img7.jpg" },
    { src: "/gallery/img8.jpg", width: 736, height: 1104, original: "/gallery/img8.jpg" },
    { src: "/gallery/img9.jpg", width: 640, height: 962, original: "/gallery/img9.jpg" },
    { src: "/gallery/img10.jpg", width: 640, height: 962, original: "/gallery/img10.jpg" },
    { src: "/gallery/img11.jpg", width: 6240, height: 4160, original: "/gallery/img11.jpg" },
    { src: "/gallery/img12.jpg", width: 6000, height: 4000, original: "/gallery/img12.jpg" },
    { src: "/gallery/img13.jpg", width: 1280, height: 1920, original: "/gallery/img13.jpg" },
    { src: "/gallery/img14.jpg", width: 640, height: 960, original: "/gallery/img14.jpg" },
    { src: "/gallery/img15.jpg", width: 1280, height: 853, original: "/gallery/img15.jpg" },
    { src: "/gallery/img16.jpg", width: 640, height: 960, original: "/gallery/img16.jpg" },
    { src: "/gallery/img17.jpg", width: 640, height: 960, original: "/gallery/img17.jpg" },
    { src: "/gallery/img18.jpg", width: 640, height: 877, original: "/gallery/img18.jpg" },
    { src: "/gallery/img19.jpg", width: 640, height: 1242, original: "/gallery/img19.jpg" },
    { src: "/gallery/img20.jpg", width: 5184, height: 3456, original: "/gallery/img20.jpg" },
    { src: "/gallery/img21.jpg", width: 640, height: 960, original: "/gallery/img21.jpg" },
  ],
};

export const teamData = {
  title: "Team",
  subtitle1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  subtitle2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  btnText: "En savoir plus",
  btnIcon: <FaArrowRight />,
};


export const tarifData = {
  title: "Tarifs",
  text: "Minimum 80 euros.\nDe 150 à 250 euros de l&apos;heure selon difficulté et positionnement sur le corps.\nAvant chaque tattoo, un devis vous est présenté pour un prix sans surprise.\nLes retouches sont bien entendu gratuites.\nTout rendez-vous sera confirmé par un versement d&apos;arrhes qui sera déduit du prix final."
}

