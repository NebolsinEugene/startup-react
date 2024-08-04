import React from "react";
import classes from "./FilterInput.module.css";

interface FilterInputProps{
    title: string
    placeholder?: string,
}

const FilterInput = (props: FilterInputProps) => {
    return (
        <div className={classes.content}>
            <p className={classes.title}>{props.title}</p>
            <input className={classes.input} type="text" placeholder={props.placeholder}></input>
        </div>
    );
}

export default FilterInput;