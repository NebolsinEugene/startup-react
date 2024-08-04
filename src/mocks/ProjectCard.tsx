import React from "react";
import classes from "./ProjectCard.module.css";

export interface ProjectCardProps {
    id: number,
    title: string,
    country: string,
    industry: string,
    priceMin: number,
    priceMax: number,
    imageSource: string,
}

const ProjectCard = (props: ProjectCardProps) => {
    return (
        <li className={classes.project}>
            <a href="./project-page.html">
                <img className={classes.project_image} src={props.imageSource} alt="Нет данных" />
            </a>
            <div className={classes.content}>
                <p className={classes.id}>№{props.id}</p>
                <div className={classes.title}>{props.title}</div>
                <div className={classes.country}>{props.country}</div>
                <div className={classes.industry}>{props.industry}</div>
                <div className={classes.price_content}>
                    <div className={classes.price}>От {props.priceMin} ₽</div>
                    <div className={classes.price}>до {props.priceMax} ₽</div>
                </div>
            </div>
            <button className={classes.learn_more}>Подробнее</button>
        </li>
    );
}

export default ProjectCard;