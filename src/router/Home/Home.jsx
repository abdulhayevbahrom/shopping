import React from "react";
import "./Home.css";
import { FaSearch } from "react-icons/fa";
import HomeTools from "../../components/homepageTools/HomeTools";

function Home() {
  return (
    <div className="home">
      <div className="background"></div>
      <div className="home-content">
        <h1>
          Обучающие <span className="mark">курсы</span>
          <span className="break"></span>
          Генераторы <span className="mark">задач</span>
        </h1>
        <p>
          И многое другое для учителей и обучающихся. Проект старается сделать
          онлайн образовательние более доступным
        </p>
        <div className="search-box">
          <FaSearch className="fa-search" />
          <input type="text" placeholder="Искать по сайту..." />
          <button>Найти</button>
        </div>
      </div>
      <HomeTools />
    </div>
  );
}

export default Home;
