// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/Navbar";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Vans from "./pages/Vans";
import VanDetails from "./pages/VanDetails";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetails></VanDetails>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
