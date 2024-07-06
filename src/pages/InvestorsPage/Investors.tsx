import React from 'react';
import bakery from "./../../images/bakery.jpg";
import classes from "../InvestorsPage/Investors.module.css";
import Advantage from './Advantage.tsx';

const Investors = () => {
  return (
    <>
      <div className={classes.intro}>
        <div className={classes.container}>
          <div className={classes.intro_content}>
            <img className={classes.intro_media_pic} src={bakery} alt="бизнес" />
          </div>
          <div className={classes.intro_content_pic}>
            <h3>
              Увеличивайте капитал, инвестируя в займы бизнесам, которые прошли
              тщательный отбор
            </h3>
          </div>
        </div>
      </div>
      <div className="advantages">
        <div className="container">
          <div className="pluses">
            <h2>Наши преимущества</h2>
            <div className="content-center">
              <Advantage
                header='Доходность'
                content='Инвестируя в стартапы, инвестиционный доход может составить 30-40% годовых' />
              <Advantage
                header='Надежность'
                content='Кредитные эксперты сервиса тщательно проверяют заемщика и его бизнес.' />
              <Advantage
                header='Удобство'
                content='Принять инвестиционное предложение онлайн без посещения офиса.' />
              <Advantage
                header='Поддержка'
                content='Помогаем в подготовке полного комплекта документов, контролируем исполнение обязательств.' />
            </div>
          </div>
        </div>
      </div >
      <div className="how-to-start">
        <div className="container">
          <div className="steps">
            <h2>Как начать инвестировать?</h2>
            <div className="grid-center">
              <div className="step">
                <div className="num">1</div>
                <div className="title-step">Зарегистрируйтесь</div>
                <div className="text">
                  Получите доступ в личный кабинет и к инстументам платформы
                </div>
              </div>

              <div className="step">
                <div className="num">2</div>
                <div className="title-step">Выберите проект</div>
                <div className="text">
                  Посмотрите информацию о проекте, план реализации и отчеты
                </div>
              </div>

              <div className="step">
                <div className="num">3</div>
                <div className="title-step">Пополните лицевой счет</div>
                <div className="text">
                  Перечислите сумму, которую хотите проинвестировать на
                  созданный при регистрации счет
                </div>
              </div>

              <div className="step">
                <div className="num">4</div>
                <div className="title-step">Предложите инвестицию</div>
                <div className="text">
                  Примите предложение и укажите предлагаемую сумму инвестиции
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Investors;
