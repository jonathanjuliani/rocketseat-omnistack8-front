import React from "react";
import logo from "../assets/logo.svg";
import like from "../assets/like.svg";
import dislike from "../assets/dislike.svg";
import "./Main.css";

const Main = ({ match }) => {
  return (
    <div className="main-container">
      <img src={logo} alt="tindev" />
      <ul>
        <li>
          <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="" />
          <footer>
            <strong>Diego Fernandes</strong>
            <p>
              {
                "CTO na @Rocketseat. Apaixonado por Javascript, ReactJS, React Native, NodeJS e todo ecossistema em torno dessas tecnologias."
              }
            </p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={like} alt="" />
            </button>
            <button type="button">
              <img src={dislike} alt="" />
            </button>
          </div>
        </li>

        <li>
          <img src="https://avatars3.githubusercontent.com/u/11651984?v=4" alt="" />
          <footer>
            <strong>Jonathan Juliani</strong>
            <p>
              {"Engenheiro de Software fullstack que curte muito JS, React, ReactNative, NodeJS, AWS, e tudo isso misturado :)"}
            </p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={like} alt="" />
            </button>
            <button type="button">
              <img src={dislike} alt="" />
            </button>
          </div>
        </li>

        <li>
          <img src="https://avatars0.githubusercontent.com/u/4248081?v=4" alt="" />
          <footer>
            <strong>Filipe Deschamps</strong>
            <p>{"A nice guy."}</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={like} alt="" />
            </button>
            <button type="button">
              <img src={dislike} alt="" />
            </button>
          </div>
        </li>

        <li>
          <img src="https://avatars0.githubusercontent.com/u/16693247?v=4" alt="" />
          <footer>
            <strong>Vinicius Filenga</strong>
            <p>{""}</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={like} alt="" />
            </button>
            <button type="button">
              <img src={dislike} alt="" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Main;
