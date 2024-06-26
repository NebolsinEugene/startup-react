import "./style.css";
import vk from "./../../images/vk.svg";
import tg from "./../../images/tg.svg";

import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-social">
          <h1>Start.Up</h1>
          <p>
            <a href="mailto:startup.@mail.ru">startup.@mail.ru</a>
          </p>
          <a href="#!">
            <img src={tg} alt="Telegram" />
          </a>
          <a href="#!">
            <img src={vk} alt="VK" />
          </a>
        </div>
        <div className="footer-nav">
          <nav className="footer">
            <p>Правовые вопросы</p>
            <ul>
              <li>
                <NavLink to="/documents" className="nav-list__link">
                  Документы
                </NavLink>
              </li>
              <li>
                <NavLink to="/info_reveal" className="nav-list__link">
                  Раскрытие информации
                </NavLink>
              </li>
              <li>
                <NavLink to="/project_requirements" className="nav-list__link">
                  Требования к проектам
                </NavLink>
              </li>
            </ul>
          </nav>
          <nav className="footer">
            <p>Полезно</p>
            <ul>
              <li>
                <NavLink to="/investment_risks" className="nav-list__link">
                  Инвестиционные риски
                </NavLink>
              </li>
              <li>
                <NavLink to="/docы_for_project" className="nav-list__link">
                  Документация для размещения проекта
                </NavLink>
              </li>
              <li>
                <NavLink to="/partners" className="nav-list__link">
                  Партнеры Start.Up
                </NavLink>
              </li>
              <li>
                <NavLink to="/news" className="nav-list__link">
                  Новости
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
