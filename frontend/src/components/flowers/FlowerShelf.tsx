
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { flowers } from "../../data/flowers";
import type { FlowerCategory } from "../../types/flower";
import { useBouquet } from "../../context/BouquetContext";
import FlowerCard from "./FlowerCard";

type FilterCategory = "all" | FlowerCategory;

const filters: { label: string; value: FilterCategory }[] = [
  { label: "All flowers", value: "all" },
  { label: "Romantic", value: "romantic" },
  { label: "Cheerful", value: "cheerful" },
  { label: "Elegant", value: "elegant" },
  { label: "Classic", value: "classic" },
];

function FlowerShelf() {
  const [activeFilter, setActiveFilter] =
    useState<FilterCategory>("all");

  const { totalItems, totalPrice } = useBouquet();
  const navigate = useNavigate();

  const filteredFlowers =
    activeFilter === "all"
      ? flowers
      : flowers.filter((flower) => flower.category === activeFilter);

  return (
    <section
      id="flowers"
      className="mx-auto max-w-7xl px-6 py-20 md:px-12 lg:py-24"
    >
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-peacock-teal">
          Our little collection
        </p>

        <h2 className="mt-3 text-3xl font-bold text-peacock-indigo md:text-4xl">
          Find your favourite blooms
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-dark-text/70 md:text-base">
          Every flower has its own story. Explore our collection
          and find the perfect blooms for your bouquet.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.value;

          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              aria-pressed={isActive}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "border-peacock-indigo bg-peacock-indigo text-white"
                  : "border-sage bg-white text-dark-text hover:border-peacock-teal hover:text-peacock-indigo"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <div className="mt-10 flex items-center justify-between">
        <p className="text-sm text-dark-text/60">
          Showing {filteredFlowers.length} flowers
        </p>

        <p className="text-xs font-medium uppercase tracking-wider text-peacock-indigo">
          Made with love ♡
        </p>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredFlowers.map((flower, index) => (
          <FlowerCard
            key={flower.id}
            flower={flower}
            index={index}
          />
        ))}
      </div>

      {filteredFlowers.length === 0 && (
        <div className="py-16 text-center text-dark-text/60">
          No flowers found in this category.
        </div>
      )}

      {/* Bouquet selection summary */}
      <div className="mt-12 flex flex-col gap-5 rounded-2xl border border-sage bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-dark-text/60">
            Your bouquet so far
          </p>

          <p className="mt-1 text-xl font-semibold text-peacock-indigo">
            {totalItems} {totalItems === 1 ? "flower" : "flowers"} selected
          </p>

          <p className="mt-1 text-sm text-dark-text/70">
            Estimated total: ₹{totalPrice}
          </p>
        </div>

        <button
          type="button"
          disabled={totalItems === 0}
          onClick={() => navigate("/bouquet-builder")}
          className="rounded-full bg-peacock-indigo px-7 py-3 text-sm font-semibold text-white transition hover:bg-peacock-indigo/90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Continue to bouquet builder →
        </button>
      </div>
    </section>
  );
}

export default FlowerShelf;
