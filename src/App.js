import "./styles/style.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Investors from "./pages/Investors";
import Projects from "./pages/Projects";
// import Items from "./components/Items";

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
