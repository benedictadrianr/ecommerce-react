import { Navigation } from "./components/Navigation";
import { Home } from "./components/Home";
import { Route, Routes } from "react-router-dom";
// import { Mouses } from "./components/Mouses";
// import { Headsets } from "./components/Headsets";
// import { Keyboards } from "./components/Keyboards";
import { Product } from "./components/Product";
import { Footer } from "./components/Footer";
import { ColorPickerExample } from "./components/ColorPickerExample";

export default function App() {
  return (
    <>
      <Navigation />
      <ColorPickerExample />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productType" element={<Product />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
