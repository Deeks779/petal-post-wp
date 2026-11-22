
import { flowers } from "./data/flowers";

function App() {
  return (
    <main className="min-h-screen bg-cream p-8">
      <h1 className="text-3xl font-bold text-peacock-indigo">
        Petal Post 🌷
      </h1>

      <p className="mt-2 text-dark-text">
        Your little flower shop.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {flowers.map((flower) => (
          <div
            key={flower.id}
            className="rounded-xl bg-white p-5 shadow-sm"
          >
            <h2 className="font-semibold text-peacock-indigo">
              {flower.name}
            </h2>

            <p className="mt-2 text-sm">
              {flower.meaning}
            </p>

            <p className="mt-3 font-semibold">
              ₹{flower.price}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
