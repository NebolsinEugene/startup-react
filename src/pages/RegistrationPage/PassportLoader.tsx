import React from "react";
import classes from "./PassportLoader.module.css";

interface PassportLoaderProps {
    title: string
}

const PassportLoader: React.FC<PassportLoaderProps> = ({ title }) => {
    return (<div className={classes.content}>
        <div className={classes.title_content}>
            <div className={classes.title}>{title}</div>
            <div className={classes.required_mark}>*</div>
        </div>
        <div className={classes.button_content}>
            <button className={classes.button_load}>Загрузить</button>
            <button className={classes.button_remove}>Удалить</button>
        </div>
        <div className={classes.limitation}>Изображения до 10 Мб</div>
    </div>
    )
}

export default PassportLoader;