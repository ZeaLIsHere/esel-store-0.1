import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import GameCard from "@/components/GameCard";
import Footer from "@/components/Footer";

import gameMl from "@/assets/game-ml.jpg";
import gameGenshin from "@/assets/game-genshin.jpg";
import gameValorant from "@/assets/voucher-steam.jpg";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#popular-games") {
      const section = document.getElementById("popular-games");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const games = [
    { name: "Mobile Legends", image: gameMl, slug: "mobile-legends" },
    { name: "Genshin Impact", image: gameGenshin, slug: "genshin-impact" },
    {
      name: "Steam Wallet",
      image: gameValorant,
      slug: "steam-wallet",
      category: "voucher",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroBanner />
      <main className="container mx-auto px-4 py-12">
        <section id="popular-games">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Popular Games</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <GameCard
                key={game.slug}
                name={game.name}
                image={game.image}
                slug={game.slug}
                category={game.category}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;