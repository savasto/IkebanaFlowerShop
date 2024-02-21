import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import Plants from "./pages/Plants";
import Flowers from "./pages/Flowers";
import Orders from "./pages/Orders";
import Bouquets from "./pages/Bouquets";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="orders" element={<Orders />} />
          <Route path="plants" element={<Plants />} />
          <Route path="flowers" element={<Flowers/>} />
          <Route path="bouquets" element={<Bouquets />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}
