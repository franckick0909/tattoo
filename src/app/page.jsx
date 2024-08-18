import Hero from "./hero/page";
import Propos from "./Propos/page";
import Contact from "./Contact/page";
import Galerie2 from "./Galerie2/page";
import Team from "./Team/page";
import Article from "./Article/page";

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