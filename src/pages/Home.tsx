import React from 'react';
import factory from "./../images/factory.svg";
import MoscowExchange from "./../images/MoscowExchangeLogo.svg";
import SkolkovoFoundation from "./../images/LogooftheSkolkovoFoundation.svg";
import logofinal from "./../images/logofinalcolor.svg";
import logo from "./../images/logo.svg";

const Home = () => {
  return (
    <>
      <main className="section">
        <div className="intro">
          <div className="container">
            <div className="intro_media">
              <video
                className="intro_media-video"
                src={process.env.PUBLIC_URL + "/video/startvideo.mp4"}
                autoPlay
                muted
                loop
              ></video>
            </div>
            <div className="intro_content">
              <h2>Start.Up</h2>
              <p>
                Мы помогаем молодым компаниям привлечь капитал для реализации
                своих проектов
              </p>
            </div>
          </div>
        </div>

        <div className="bricks">
          <div className="top-row">
            <div className="big-brick">
              <h3>Размести проект</h3>
              <p>Расскажи о проекте потенциальным инвесторам</p>
            </div>

            <div className="small-brick">
              <h3>Инвестируй</h3>
              <p>Помоги реализовать идеи и заработай на этом</p>
            </div>
          </div>

          <div className="bottom-row">
            <div className="small-brick">
              <h3>Нужна помощь?</h3>
              <p>У нас есть обучалка, которая может в достижении целей</p>
            </div>

            <div className="big-brick">
              <h3>Объединяйся</h3>
              <p>Объединись с единомышленниками и воплощайте идеи вместе</p>
            </div>
          </div>
        </div>

        <div className="join-us">
          <div className="container">
            <div className="join-us-content">
              <h2>Присоединяйтесь к Start.Up</h2>
              <p>
                От мечты до реальности — один шаг! Изучи готовые проекты или
                начни свой собственный. Мир — твоя игровая площадка.
              </p>
              <button className="reg-btn" name="sign-up">
                Начать
              </button>
            </div>
          </div>
        </div>

        <div className="partners">
          <div className="container">
            <div className="partners-content">
              <p>
                Start.Up входит в реестр инвестиционных платформ Банка России
              </p>
              <h2>Наши партнеры</h2>
              <div className="scroll-parent">
                <div className="scroll-element primary">
                  <img src={factory} alt="" />
                  <img src={MoscowExchange} alt="tosin jerugba" />
                  <img src={logo} alt="fiyin jerugba" />
                  <img src={logofinal} alt="feyikemi jerugba" />
                  <img src={SkolkovoFoundation} alt="femi jerugba" />
                </div>
                <div className="scroll-element secondary">
                  <img src={factory} alt="damilola jerugba" />
                  <img src={MoscowExchange} alt="tosin jerugba" />
                  <img src={logo} alt="fiyin jerugba" />
                  <img
                    src="/images/logo_final_color.svg"
                    alt="feyikemi jerugba"
                  />
                  <img
                    src="/images/Logo_of_the_Skolkovo_Foundation_(new).svg"
                    alt="femi jerugba"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
