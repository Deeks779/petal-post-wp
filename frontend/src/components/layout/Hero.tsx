
import { ArrowRight, Flower2 } from "lucide-react";
import { motion } from "motion/react";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream px-6 py-16 md:px-12 lg:px-20 lg:py-24">

      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="z-10"
        >
          <div className="mb-6 flex items-center gap-2 text-peacock-teal">
            <Flower2 size={20} />

            <span className="text-sm font-semibold uppercase tracking-[0.2em]">
              A little flower magic
            </span>
          </div>

          <h1 className="max-w-xl text-5xl font-bold leading-tight text-peacock-indigo md:text-6xl lg:text-7xl">
            A little bouquet,
            <span className="mt-2 block text-cupid-pink">
              a lot of love.
            </span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-8 text-dark-text md:text-lg">
            Pick your favourite blooms, wrap them with love,
            and create something beautiful for someone special.
          </p>

          <button
            onClick={() =>
              document.getElementById("flowers")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-peacock-indigo px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-peacock-blue"
          >
            Create your bouquet
            <ArrowRight size={19} />
          </button>
        </motion.div>

        {/* Hero Artwork */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="absolute inset-8 rounded-full bg-pale-green blur-3xl" />

          <div className="relative flex aspect-square items-center justify-center rounded-[48%] bg-sage/40 p-8">
            <img
              src="src/assets/flowers/hero-bouquet.png"
              alt="Illustrated flower bouquet"
              className="h-full w-full object-contain"
            />

            <span className="absolute bottom-8 right-2 rotate-6 rounded-full bg-white px-5 py-3 text-sm font-medium text-peacock-indigo shadow-md">
              Made with love ♡
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
