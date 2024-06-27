import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import Home from "./pages/Home.tsx";
import Investors from "./pages/Investors.tsx";
import Projects from "./pages/Projects.tsx";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/investors" element={<Investors />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
