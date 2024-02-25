import Footer from './Footer.jsx'
import Header from "./Header.jsx";

import { Outlet, Link } from "react-router-dom";

export default function Layout () {

  return (
    <>
      <nav class="w3-top">
      <div class="w3-bar w3-light-grey w3-padding w3-card"
          style={{ letterSpacing: "6px" }}>
          
        
        <Link class="w3-bar-item w3-button" to="/">Home</Link> {"    "}
        <Link class="w3-bar-item w3-button w3-right" to="/orders">Orders</Link>{"    "}
        <Link class="w3-bar-item w3-button" to="/flowers">Flowers</Link> {"    "}
        <Link class="w3-bar-item w3-button" to="/dried">Dried flowers</Link>{"    "}
        <Link class="w3-bar-item w3-button" to="/plants">Plants</Link> {"    "}
        <Link class="w3-bar-item w3-button" to="/about">About</Link>
        </div>
        
      </nav>

      <div>
      <Header class="w3-container"  />
      </div>

      <div class="w3-content" style={{ width: " 100%" }}>
      <Outlet />
      </div>

      <div class="w3-bar">
      <Footer />
      </div>
    </>
  );
};