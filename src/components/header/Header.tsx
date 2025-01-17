import React from "react";
import "./style.css";
import ColorModeButton from "../buttons/ColorModeButton/ColorModeButton.tsx";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <div className="container">
        <NavLink to="/" className="logo">
          <h1>Start.Up</h1>
        </NavLink>

        <div className="menu">
          <nav>
            <ul>
              <li className="nav-list__item">
                <NavLink to="/projects" className="nav-list__link">
                  Проекты
                </NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink to="/investors" className="nav-list__link">
                  Инвестору
                </NavLink>
              </li>
              <li className="nav-list__item">
                <a href="#!" className="nav-list__link">
                  Помощь
                </a>
              </li>
              <li className="nav-list__item">
                <a href="#!" className="nav-list__link">
                  Услуги
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <button className="reg-btn"
          name="sign-up"
          onClick={() => navigate("/registration")}
        >
          Начать
        </button>
        <button className="reg-btn" name="log-in">
          Войти
        </button>
        <ColorModeButton />
      </div>
    </header>
  );
}
export default Header;
