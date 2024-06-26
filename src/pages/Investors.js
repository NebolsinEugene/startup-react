import bakery from "./../images/bakery.jpg";

const Investors = () => {
  return (
    <>
      <div className="intro">
        <div className="container">
          <div className="intro_media">
            <img className="intro_media-pic" src={bakery} alt="бизнес" />
          </div>
          <div className="intro_content-pic">
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
              <div className="adv">
                <div className="name">Доходность</div>
                <div className="text">
                  Инвестируя в стартапы, инвестиционный доход может составить
                  30-40% годовых.
                </div>
              </div>
              <div className="adv">
                <div className="name">Надежность</div>
                <div className="text">
                  Кредитные эксперты сервиса тщательно проверяют заемщика и его
                  бизнес.
                </div>
              </div>
              <div className="adv">
                <div className="name">Удобство</div>
                <div className="text">
                  Принять инвестиционное предложение онлайн без посещения офиса.
                </div>
              </div>
              <div className="adv">
                <div className="name">Поддержка</div>
                <div className="text">
                  Помогаем в подготовке полного комплекта документов,
                  контролируем исполнение обязательств.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
