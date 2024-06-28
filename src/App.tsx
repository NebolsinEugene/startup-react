import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import Home from "./pages/Home.tsx";
import Investors from "./pages/Investors.tsx";
import ProjectPage from "./pages/ProjectPage/ProjectPage.tsx";
import Registration from './pages/RegistrationPage/Registration.tsx';
import "./styles/style.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<ProjectPage />}></Route>
          <Route path="/investors" element={<Investors />}></Route>
          <Route path="/registration" element={<Registration/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
