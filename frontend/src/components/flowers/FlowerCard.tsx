
import { useState } from "react";
import { Flower2 } from "lucide-react";
import { motion } from "motion/react";

import type { Flower } from "../../types/flower";
import { useBouquet } from "../../context/BouquetContext";
import FlowerCounter from "./FlowerCounter";

interface FlowerCardProps {
  flower: Flower;
  index: number;
}

function FlowerCard({ flower, index }: FlowerCardProps) {
  const [imageError, setImageError] = useState(false);

  const { getQuantity, addFlower, removeFlower } = useBouquet();
  const quantity = getQuantity(flower.id);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-2xl border border-sage/60 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-pale-green/50 p-6">
        {!imageError ? (
          <img
            src={flower.image}
            alt={flower.name}
            loading="lazy"
            onError={() => setImageError(true)}
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-peacock-indigo">
            <Flower2 size={64} strokeWidth={1} />
            <span className="text-xs">Artwork coming soon</span>
          </div>
        )}

        <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-peacock-indigo shadow-sm">
          {flower.color}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-peacock-indigo">
              {flower.name}
            </h3>
            <p className="mt-1 text-sm text-dark-text/60">
              {flower.meaning}
            </p>
          </div>

          <span className="shrink-0 font-semibold text-peacock-indigo">
            ₹{flower.price}
          </span>
        </div>

        <p className="mt-4 min-h-12 text-sm leading-6 text-dark-text/75">
          {flower.description}
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-sage/50 pt-4">
          <span className="text-xs font-medium uppercase tracking-wider text-peacock-teal">
            {flower.category}
          </span>

          <FlowerCounter
            quantity={quantity}
            onIncrease={() => addFlower(flower.id)}
            onDecrease={() => removeFlower(flower.id)}
          />
        </div>
      </div>
    </motion.article>
  );
}

export default FlowerCard;
