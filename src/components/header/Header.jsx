import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <NavLink to={"/"}>
        <div className="logo">
          <h2>Твоё образование</h2>
          <p>Дополнительное образование и курсы обучения онлайн</p>
        </div>
      </NavLink>
      <nav>
        <NavLink to={"/"}>Главная</NavLink>
        <NavLink to={"/234"}>Курсы</NavLink>
        <NavLink to={"/sfgdf"}>Генераторы</NavLink>
        <NavLink to={"/ewretdfgd"}>Учителю</NavLink>
        <NavLink to={"/egdtvbh"}>Ученику</NavLink>
        <NavLink to={"/crthvdrh"}>Руководства</NavLink>
        <NavLink to={"/asrdvtb"}>Новости</NavLink>
        <NavLink to={"/vrsbt"}>Магазин</NavLink>
        <button>
          <NavLink to={"/eacfrsgv"}>Войти</NavLink>
        </button>
      </nav>
    </header>
  );
}

export default Header;
