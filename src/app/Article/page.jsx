"use client";

import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/article/article1.png",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/article/article2.png",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/article/article3.png",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/article/article4.png",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/article/article1.png",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/article/article2.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative cursor-pointer overflow-hidden flex bg-slate-900 rounded-lg w-[320px] md:w-[500px] h-32 hover:bg-slate-800"
      )}
    >
      <div className="bg-white rounded-full md:rounded-none flex items-center justify-center w-14 h-14 md:w-28 md:h-full absolute md:static top-2 right-2 md:top-0 md:right-0">
        <Image
          className="object-contain rounded-full md:rounded-none"
          src={img}
          alt={name}
          width="100"
          height="100"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-col items-start justify-center pt-6 px-4 py-2 md:p-8 text-left space-x-0 md:space-y-2 ">
        <figcaption className="font-medium">
          <div className="text-sky-400">{name}</div>
          <div className="text-slate-300">{username}</div>
        </figcaption>
        <blockquote>
          <p className="text-sm md:text-lg font-light md:font-medium text-slate-200 font-sans">
            {body}
          </p>
        </blockquote>
      </div>
    </figure>
  );
};

export default function Article() {
  return (
    <section
      id="Article"
      className="relative w-full min-h-screen grid place-items-center grid-cols-1 overflow-hidden py-28 bg-slate-950"
    >
      <div className="absolute top-0 left-1/4 right-0 bottom-0 w-[50%] h-full z-[1] opacity-10 pointer-events-none">
        <Image
          src="/quote.svg"
          alt="quote"
          fill
          style={{ objectFit: "contain" }}
          className="w-full h-full"
        />
      </div>
      <div className="w-full h-full px-4 md:px-8 lg:px-16 xl:px-20 ">
        <div className="flex flex-col gap-8 items-center justify-center w-full mb-10">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal max-w-96 uppercase text-white"
          >
            Testimonials:
          </motion.h2>
          <p className="text-slate-400">
            Here are some of the things people have said about me.
          </p>
        </div>
        <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:30s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:22s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee pauseOnHover className="[--duration:40s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-slate-950 dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-slate-950 dark:from-background"></div>
        </div>
      </div>
    </section>
  );
}