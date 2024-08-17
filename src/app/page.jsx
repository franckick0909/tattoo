import Hero from "./hero/page";
import Propos from "./Propos/page";
import Galerie from "./Galerie/page";
import Interviews from "./Galerie2/page";
import Articles from "./Team/page";
import Contact from "./Contact/page";

export default function Home() {
  return (
    <main className="w-full h-full max-w-full">
      <Hero />
      <Propos />
      <Galerie />
      <Interviews />
      <Articles />
      <Contact />
    </main>
  );
}