import React from "react"

const Items = () => {
  return (
    <section className="items">
      <div className="container">
        <div className="items_header ">
          <h1>Проекты</h1>
          <p>
            Здесь вы можете предложить свой проект, присоединиться к
            единомышленникам, или найти проект для инвестирования!
          </p>
          <button className="place-order">Разместить предложение</button>
        </div>
        <div className="items_cards "></div>
      </div>
    </section>
  );
};

export default Items;
