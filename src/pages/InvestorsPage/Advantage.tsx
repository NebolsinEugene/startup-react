import React from 'react';
import classes from "./Advantage.module.css";

interface AdvantageProps {
    header: string,
    content: string
}

const Advantage: React.FC<AdvantageProps> = ({header, content}) => {
    return (
        <div className={classes. adv}>
            <div>{header}</div>
            <div className={classes.text}>{content}</div>
        </div>
    );
}

export default Advantage; 