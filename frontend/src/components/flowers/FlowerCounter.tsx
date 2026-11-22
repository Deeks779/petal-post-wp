
import { Minus, Plus } from "lucide-react";

interface FlowerCounterProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

function FlowerCounter({
  quantity,
  onIncrease,
  onDecrease,
}: FlowerCounterProps) {
  return (
    <div
      className="inline-flex items-center gap-3 rounded-full border border-sage bg-cream px-2 py-1.5"
      aria-label="Flower quantity controls"
    >
      <button
        type="button"
        onClick={onDecrease}
        disabled={quantity === 0}
        aria-label="Decrease quantity"
        className="flex h-8 w-8 items-center justify-center rounded-full text-peacock-indigo transition hover:bg-sage disabled:cursor-not-allowed disabled:opacity-30"
      >
        <Minus size={15} />
      </button>

      <span
        className="min-w-5 text-center text-sm font-semibold tabular-nums text-peacock-indigo"
        aria-live="polite"
      >
        {quantity}
      </span>

      <button
        type="button"
        onClick={onIncrease}
        aria-label="Increase quantity"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-peacock-indigo text-white transition hover:bg-peacock-indigo/85"
      >
        <Plus size={15} />
      </button>
    </div>
  );
}

export default FlowerCounter;
