import React from "react";

const Filters = () => {
    return (
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
    );
}

export default Filters;