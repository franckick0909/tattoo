import Image from "next/image";

export default function Team() {
  return (
    <section
      id="Team"
      className="relative w-full min-h-screen grid place-items-center grid-cols-1 overflow-hidden py-28"
    >
      <div class="py-20">
        <div class="xl:container mx-auto px-6 md:px-12">
          <div class="mb-16 md:w-2/3 lg:w-1/2">
            <h2 class="mb-4 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
              Voici la <span className="text-amber-500">Team</span> Angel Tattoo
            </h2>
            <p class="text-gray-600 dark:text-gray-300">
              Tailus prides itself not only on award-winning technology, but
              also on the talent of its people of some of the brightest minds
              and most experienced executives in business.
            </p>
          </div>
          <div class="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div class="group relative rounded-3xl  space-y-6 overflow-hidden">
              <Image
                class="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src="/images/woman1.jpg"
                alt="woman"
                loading="lazy"
                width="640"
                height="805"
              />
              <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 class="text-xl font-semibold dark:text-gray-700 text-white">
                    Hentoni Doe
                  </h4>
                  <span class="block text-sm text-gray-500">CEO-Founder</span>
                </div>
                <p class="mt-8 text-gray-300 dark:text-gray-600">
                  Quae labore quia tempora dolor impedit. Possimus, sint ducimus
                  ipsam?
                </p>
              </div>
            </div>
            <div class="group relative rounded-3xl  space-y-6 overflow-hidden">
              <Image
                class="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src="/images/man1.jpg"
                alt="homme"
                loading="lazy"
                width="640"
                height="805"
              />
              <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 class="text-xl font-semibold dark:text-gray-700 text-white">
                    Hentoni Doe
                  </h4>
                  <span class="block text-sm text-gray-500">CEO-Founder</span>
                </div>
                <p class="mt-8 text-gray-300 dark:text-gray-600">
                  Quae labore quia tempora dolor impedit. Possimus, sint ducimus
                  ipsam?
                </p>
              </div>
            </div>
            <div class="group relative rounded-3xl  space-y-6 overflow-hidden">
              <Image
                class="mx-auto h-[26rem] w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src="/images/woman2.jpg"
                alt="woman"
                loading="lazy"
                width="640"
                height="805"
              />
              <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 class="text-xl font-semibold dark:text-gray-700 text-white">
                    Hentoni Doe
                  </h4>
                  <span class="block text-sm text-gray-500">CEO-Founder</span>
                </div>
                <p class="mt-8 text-gray-300 dark:text-gray-600">
                  Quae labore quia tempora dolor impedit. Possimus, sint ducimus
                  ipsam?
                </p>
              </div>
            </div>
            <div class="group relative rounded-3xl  space-y-6 overflow-hidden">
              <Image
                class="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src="/images/man2.jpg"
                alt="homme"
                loading="lazy"
                width="640"
                height="805"
              />
              <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 class="text-xl font-semibold dark:text-gray-700 text-white">
                    Hentoni Doe
                  </h4>
                  <span class="block text-sm text-gray-500">CEO-Founder</span>
                </div>
                <p class="mt-8 text-gray-300 dark:text-gray-600">
                  Quae labore quia tempora dolor impedit. Possimus, sint ducimus
                  ipsam?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
