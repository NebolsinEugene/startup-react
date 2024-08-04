import React from "react";
import classes from "./Filters.module.css"
import FilterSelect from "./FilterSelect.tsx";
import FilterInput from "./FilterInput/FilterInput.tsx";

const Filters = () => {
    return (
        <div className={classes.filters}>
            <div className={classes.title}>Фильтр</div>
            <FilterSelect title="Отрасль" placeholder="Выберите отрасль" />
            <FilterSelect title="Страна" placeholder="Выберите страну" />

            <FilterInput title="Стадия реализации проекта" placeholder="Выберите стадию" />
            <FilterInput title="Объем инвестирования от, руб." />
            <FilterInput title="Срок инвестирования от, лет" />
            <FilterInput title="Срок инвестирования до, лет" />
            
            <button className={classes.clear_filters} id="clearButton">Сбросить фильтры</button>
        </div>
    );
}

export default Filters;