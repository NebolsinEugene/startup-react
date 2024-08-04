import React from "react";
import classes from "./FilterSelect.module.css";

interface FilterSelectProps{
    title: string
    placeholder: string,
}

const FilterSelect = (props: FilterSelectProps) => {
    return (
        <div className={classes.select}>
            <p className={classes.title}>{props.title}</p>
            <input className={classes.input}
                type="text"
                placeholder={props.placeholder}
            ></input>
        </div>
    );
}

export default FilterSelect;