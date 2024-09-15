import React from "react";
import "./HomeTools.css";
import testImg from "./images/online-test 1.png";
import genImg from "./images/exam 1.png";
import sertifcatImg from "./images/certification 1.png";

function HomeTools() {
  return (
    <div className="mini-texts">
      <div className="item">
        <figure>
          <img src={testImg} alt="" />
        </figure>
        <div className="text">
          <h1>Курсы</h1>
          <p>
            И обучающие материалы для самообразования, повышения квалификации,
            аттестации. База курсов постоянно расширяется
          </p>
        </div>
      </div>
      <div className="item">
        <figure>
          <img src={genImg} alt="" />
        </figure>
        <div className="text">
          <h1>Генераторы</h1>
          <p>
            Задачи, на которые нет решений и дети не смогут списать их. Плюс
            возможность большого выбора заданий для индивидуальной работы
          </p>
        </div>
      </div>
      <div className="item">
        <figure>
          <img src={sertifcatImg} alt="" />
        </figure>
        <div className="text">
          <h1>Сертификат</h1>
          <p>
            Мы работаем над получением образовательной лицензии, чтобы выдавать
            документы государственного образца
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeTools;
