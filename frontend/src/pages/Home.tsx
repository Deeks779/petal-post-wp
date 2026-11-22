
import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import FlowerShelf from "../components/flowers/FlowerShelf";

function Home() {
  return (
    <main id="home" className="min-h-screen bg-cream">
      <Navbar />

      <Hero />

      <FlowerShelf />

    </main>
  );
}

export default Home;
