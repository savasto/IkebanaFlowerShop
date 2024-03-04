import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import Plants from "./pages/Plants/Plants";
import Flowers from "./pages/Flowers/Flowers";
import Orders from "./pages/Orders/Orders";
import Dried  from "./pages/Dried/Dried";
import FakeData from "./pages/FakeData/FakeData";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="orders" element={<Orders />} />
          <Route path="plants" element={<Plants />} />
          <Route path="flowers" element={<Flowers/>} />
          <Route path="dried" element={<Dried/>} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />     
          <Route path="fakeData" element={<FakeData />} />
          </Route>
      </Routes>
    </BrowserRouter>
    
  );
}
