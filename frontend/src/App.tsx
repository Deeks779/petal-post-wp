
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { BouquetProvider } from "./context/BouquetContext";
import Home from "./pages/Home";
import BouquetBuilder from "./pages/BouquetBuilder";

function App() {
  return (
    <BouquetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bouquet-builder" element={<BouquetBuilder />} />
        </Routes>
      </BrowserRouter>
    </BouquetProvider>
  );
}

export default App;
