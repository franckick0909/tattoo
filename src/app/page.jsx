import Hero from "./hero/page";
import Propos from "./Le Studio/page";
import Contact from "./Contact/page";
import Galerie2 from "./Galerie/page";
import Team from "./Team/page";
import Article from "./Testimonial/page";

export default function Home() {
  return (
    <main className="w-full h-full max-w-full">
      <Hero />
      <Propos />
      <Galerie2 />
      <Team />
      <Article />
      <Contact />
    </main>
  );
}