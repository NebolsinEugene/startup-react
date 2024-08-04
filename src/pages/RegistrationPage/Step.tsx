import React from "react";
import classes from "./Step.module.css";

interface StepProps {
    labelText: string
}

const Step = (props: StepProps) => {
    return (
        <div className={classes.content}>
            <div className={classes.label}>{props.labelText}</div>
            <img src={process.env.PUBLIC_URL + "/registration_line.png"} />
        </div>
    )
}

export default Step;