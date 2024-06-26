import "./../styles/projects.css";
import park from "./../images/park.jpg";
import shop from "./../images/shop.jpg";

const Projects = () => {
  return (
    <main className="section">
      <div className="title">
        <h2 className="title-1">Проекты</h2>
        <p className="title-2">
          Здесь вы можете предложить свой проект, присоединиться к
          единомышленникам, или найти проект для инвестирования!
        </p>
        <button className="offer">Разместить предложение</button>
      </div>

      <div className="wrapper">
        <div className="filters">
          <h3>Фильтр</h3>

          <div className="industry">
            <p>Отрасль</p>
            <input
              id="industry"
              type="text"
              placeholder="Выберите отрасль"
            ></input>
          </div>

          <div className="country">
            <p>Страна</p>
            <input
              id="country"
              type="text"
              placeholder="Выберите страну"
            ></input>
          </div>

          <div className="stage">
            <p>Стадия реализации проекта</p>
            <input id="stage" type="text" placeholder="Выберите стадию"></input>
          </div>

          <div className="volume">
            <p>Объем инвестирования от, руб.</p>
            <input id="volume" type="text"></input>
          </div>

          <div className="term-from">
            <p>Срок инвестирования от, лет</p>
            <input id="term-from" type="text"></input>
          </div>

          <div className="term-to">
            <p>Срок инвестирования до, лет</p>
            <input id="term-to" type="text"></input>
          </div>
          <button id="clearButton">Сбросить фильтры</button>
        </div>

        <ul className="projects">
          <li className="project">
            <a href="./project-page.html">
              <img src={park} alt="park" className="project__img" />
            </a>

            <div className="item-wrapper">
              <p>№1234</p>
              <h3 className="project__title">Семейный парк развлечений</h3>
              <div className="country">Россия, Краснодар</div>
              <div className="industry-item">Обустройство</div>
              <div className="price">От 10 000 000 ₽ до 50 000 000 ₽ </div>
            </div>
            <button className="learn-more">Подробнее</button>
          </li>
          <li className="project">
            <a href="./project-page.html">
              <img src={shop} alt="shop" className="project__img" />
              <h3 className="project__title">Строительство нового магазина</h3>
            </a>
            <div className="country">Россия, Краснодар</div>
            <div className="industry-item">Обустройство</div>
            <div className="price">От 10 000 000 ₽ до 50 000 000 ₽ </div>
            <button className="learn-more">Подробнее</button>
          </li>
          <li className="project">
            <a href="./project-page.html">
              <img
                src="./img/projects/03.jpg"
                alt="Project img"
                className="project__img"
              />
              <h3 className="project__title">Video portal</h3>
            </a>
          </li>

          <li className="project">
            <img
              src="./img/projects/04.jpg"
              alt="Project img"
              className="project__img"
            />
            <h3 className="project__title">Dating app</h3>
          </li>
          <li className="project">
            <img
              src="./img/projects/05.jpg"
              alt="Project img"
              className="project__img"
            />
            <h3 className="project__title">Landing</h3>
          </li>
          <li className="project">
            <img
              src="./img/projects/06.jpg"
              alt="Project img"
              className="project__img"
            />
            <h3 className="project__title">Gaming community</h3>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Projects;
