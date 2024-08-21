import React from "react";
import classes from "./Footer.module.css";
import vk from "./../../images/vk.svg";
import tg from "./../../images/tg.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className={classes.footer_social}>
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
      <div className={classes.footer_nav}>
        <div className={classes.footer_title}>Правовые вопросы</div>
        <ul className={classes.footer}>
          <li>
            <NavLink to="/documents" className={classes.nav_list_link}>
              Документы
            </NavLink>
          </li>
          <li>
            <NavLink to="/info_reveal" className={classes.nav_list_link}>
              Раскрытие информации
            </NavLink>
          </li>
          <li>
            <NavLink to="/project_requirements" className={classes.nav_list_link}>
              Требования к проектам
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={classes.footer_nav}>
        <div className={classes.footer_title}>Полезно</div>
        <ul className={classes.footer}>
          <li>
            <NavLink to="/investment_risks" className={classes.nav_list_link}>
              Инвестиционные риски
            </NavLink>
          </li>
          <li>
            <NavLink to="/docы_for_project" className={classes.nav_list_link}>
              Документация для размещения проекта
            </NavLink>
          </li>
          <li>
            <NavLink to="/partners" className={classes.nav_list_link}>
              Партнеры Start.Up
            </NavLink>
          </li>
          <li>
            <NavLink to="/news" className={classes.nav_list_link}>
              Новости
            </NavLink>
          </li>
        </ul>
      </div>
    </footer >
  );
};

export default Footer;
