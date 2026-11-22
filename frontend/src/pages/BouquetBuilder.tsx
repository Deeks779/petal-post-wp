
import { Link } from "react-router-dom";
import { ArrowLeft, Flower2, ShoppingBag } from "lucide-react";

import { flowers } from "../data/flowers";
import { useBouquet } from "../context/BouquetContext";

function BouquetBuilder() {
  const { selectedFlowers, totalItems, totalPrice, addFlower, removeFlower } =
    useBouquet();

  const bouquetItems = selectedFlowers
    .map((item) => {
      const flower = flowers.find((flower) => flower.id === item.flowerId);

      return flower ? { flower, quantity: item.quantity } : null;
    })
    .filter((item) => item !== null);

  return (
    <main className="min-h-screen bg-cream px-6 py-10 md:px-12">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-peacock-indigo transition hover:text-peacock-teal"
        >
          <ArrowLeft size={17} />
          Back to flower collection
        </Link>

        <header className="mt-10 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-pale-green text-peacock-indigo">
            <Flower2 size={28} />
          </div>

          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-peacock-teal">
            Your little creation
          </p>

          <h1 className="mt-3 text-3xl font-bold text-peacock-indigo md:text-4xl">
            Let's build your bouquet
          </h1>

          <p className="mt-3 text-sm text-dark-text/70">
            Review your selected flowers before arranging them.
          </p>
        </header>

        {bouquetItems.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-sage bg-white px-6 py-16 text-center">
            <ShoppingBag
              size={40}
              strokeWidth={1.3}
              className="mx-auto text-peacock-teal"
            />

            <h2 className="mt-5 text-xl font-semibold text-peacock-indigo">
              Your bouquet is empty
            </h2>

            <p className="mt-2 text-sm text-dark-text/65">
              Choose some flowers from our collection to get started.
            </p>

            <Link
              to="/#flowers"
              className="mt-6 inline-flex rounded-full bg-peacock-indigo px-6 py-3 text-sm font-semibold text-white transition hover:bg-peacock-indigo/90"
            >
              Explore flowers
            </Link>
          </div>
        ) : (
          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_300px]">
            <section className="space-y-4">
              {bouquetItems.map(({ flower, quantity }) => (
                <article
                  key={flower.id}
                  className="flex items-center gap-4 rounded-2xl border border-sage bg-white p-4"
                >
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-pale-green/50 p-2">
                    <img
                      src={flower.image}
                      alt={flower.name}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h2 className="font-semibold text-peacock-indigo">
                      {flower.name}
                    </h2>

                    <p className="mt-1 text-sm text-dark-text/60">
                      ₹{flower.price} each
                    </p>

                    <p className="mt-1 text-sm font-medium text-peacock-indigo">
                      Subtotal: ₹{flower.price * quantity}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-2">
                    <button
                      type="button"
                      onClick={() => removeFlower(flower.id)}
                      aria-label={`Remove one ${flower.name}`}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-sage text-peacock-indigo hover:bg-pale-green"
                    >
                      −
                    </button>

                    <span className="min-w-5 text-center text-sm font-semibold tabular-nums">
                      {quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() => addFlower(flower.id)}
                      aria-label={`Add one ${flower.name}`}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-peacock-indigo text-white hover:bg-peacock-indigo/90"
                    >
                      +
                    </button>
                  </div>
                </article>
              ))}
            </section>

            <aside className="h-fit rounded-2xl border border-sage bg-white p-6">
              <h2 className="text-lg font-semibold text-peacock-indigo">
                Bouquet summary
              </h2>

              <div className="mt-5 flex justify-between text-sm text-dark-text/70">
                <span>Total flowers</span>
                <span className="font-semibold text-peacock-indigo">
                  {totalItems}
                </span>
              </div>

              <div className="mt-3 flex justify-between text-sm text-dark-text/70">
                <span>Flower types</span>
                <span className="font-semibold text-peacock-indigo">
                  {bouquetItems.length}
                </span>
              </div>

              <div className="my-5 border-t border-sage" />

              <div className="flex items-center justify-between">
                <span className="font-medium text-dark-text">
                  Total
                </span>

                <span className="text-2xl font-bold text-peacock-indigo">
                  ₹{totalPrice}
                </span>
              </div>

              <p className="mt-4 text-xs leading-5 text-dark-text/55">
                This is your flower subtotal. Wrapping and decorations can be
                added in the next stages.
              </p>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}

export default BouquetBuilder;
