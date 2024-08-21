import React from "react";
import classes from "./Header.module.css";
import ColorModeButton from "../buttons/ColorModeButton/ColorModeButton.tsx";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <div className={classes.container}>
        <NavLink to="/" className={classes.logo}>
          Start.Up
        </NavLink>

        <div className={classes.menu}>
          <nav>
            <ul>
              <li className={classes.nav_list_item}>
                <NavLink to="/projects" className={classes.nav_list_link}>
                  Проекты
                </NavLink>
              </li>
              <li className={classes.nav_list_item}>
                <NavLink to="/investors" className={classes.nav_list_link}>
                  Инвестору
                </NavLink>
              </li>
              <li className={classes.nav_list_item}>
                <a href="#!" className={classes.nav_list_link}>
                  Помощь
                </a>
              </li>
              <li className={classes.nav_list_item}>
                <a href="#!" className={classes.nav_list_link}>
                  Услуги
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <button className={classes.reg_btn}
          name="sign-up"
          onClick={() => navigate("/registration")}
        >
          Начать
        </button>
        <button className={classes.reg_btn}
          name="log-in">
          Войти
        </button>
        <ColorModeButton />
      </div>
    </header>
  );
}
export default Header;
