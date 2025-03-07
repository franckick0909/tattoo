"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="Contact"
      className="relative w-full min-h-screen grid place-items-center grid-cols-1 overflow-hidden py-36 mx-auto"
    >
      <div className="w-full h-full px-4 md:px-8 lg:px-16 xl:px-20  max-w-[1600px] mx-auto">
        <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-10">
          <div className="space-y-2 flex-1 max-w-2xl gap-8">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal max-w-96 uppercase text-black"
            >
              Get in Touch
            </motion.h1>
            <p className="text-muted-foreground">
              Have a question or need assistance? Fill out the form below and
              we&apos;ll get back to you as soon as possible.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-sky-500 w-full h-full flex-col flex items-start justify-start p-6 col-span-1">
                <h2 className="text-white text-2xl font-bold text-center mb-4">
                  HORAIRES
                </h2>
                <div className="flex flex-col items-start justify-start gap-2">
                  <p className="text-white text-center">
                  du Lundi au Vendredi de 11h à 19h
                  </p>
                  <p className="text-white text-center">du Samedi de 11h à 17h</p>
                  <p className="text-white text-center">du Dimanche de 14h à 17h</p>
                </div>
              </div>
              <div className="bg-emerald-300 w-full h-full flex-col flex items-start justify-start p-6 col-span-2"></div>
              <div className="bg-amber-500 w-full h-full flex-col flex items-start justify-start p-6 col-span-2">
                <h2 className="text-white text-2xl font-bold text-center mb-4">
                  HORAIRES
                </h2>
                <div className="flex flex-col items-start justify-start gap-2">
                  <p className="text-white text-center">
                    du Lundi - Vendredi 11h- 19h
                  </p>
                  <p className="text-white text-center">Samedi 8h- 17h</p>
                  <p className="text-white text-center">Dimanche 9h- 17h</p>
                </div>
              </div>
              <div className="bg-rose-500 w-full h-full flex-col flex items-start justify-start p-6 col-span-1"></div>
            </div>
          </div>
          <section className=" flex-1 bg-white py-12 md:py-20 rounded-lg shadow-md max-w-2xl">
            <div className="container mx-auto px-4 md:px-6">
              <div className="mx-auto max-w-2xl space-y-12">
                <div className="space-y-4 text-center">
                  <h2 className="text-3xl font-bold text-gray-800">
                    Contactez-nous
                  </h2>
                  <p className="text-gray-600 text-start">
                    Remplissez le formulaire ci-dessous et nous vous répondrons
                    dans les plus brefs délais.
                  </p>
                </div>
                <form className="space-y-6 font-sans">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm md:base lg:text-lg font-medium text-gray-700"
                      >
                        Prénom
                      </label>
                      <input
                        id="first-name"
                        placeholder="Entrez votre prénom"
                        className="mt-1 block w-full border-b-[1px] border-gray-300 shadow-sm outline-none "
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm md:base lg:text-lg font-medium text-gray-700"
                      >
                        Nom
                      </label>
                      <input
                        id="last-name"
                        placeholder="Entrez votre nom"
                        className="mt-1 block w-full border-b-[1px] border-gray-300 shadow-sm outline-none text-sm md:base lg:text-lg"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm md:base lg:text-lg font-medium text-gray-700"
                    >
                      Téléphone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="Entrez votre numéro de téléphone"
                      className="mt-1 block w-full border-b-[1px] border-gray-300 shadow-sm outline-none text-sm md:base lg:text-lg"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm md:base lg:text-lg font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Entrez votre message"
                      rows="4"
                      className="mt-1 block w-full border-b-[1px] border-gray-300 shadow-sm outline-none text-sm md:base lg:text-lg"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
                  >
                    Envoyer
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
