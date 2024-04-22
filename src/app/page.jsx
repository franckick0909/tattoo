import PortfolioPage from "./portfolio/page";
import HeroPage from "./hero/page";

const HomePage = () => {
  return (
    <main className="max-w-full container m-auto">
      <HeroPage />

      <PortfolioPage />
    </main>
  );
};

export default HomePage;
