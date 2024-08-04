import React from "react";
import classes from "./RegistrationButton.module.css"

interface RegistrationButtonProps {
    text: string
}

const RegistrationButton: React.FC<RegistrationButtonProps> = ({text}) => {
    return (
        <button className={classes.button}>
            {text}
        </button>
    )
}

export default RegistrationButton;