import React from "react";
import classes from "./RegistrationInput.module.css";

interface RegistrationInputProps {
    title: string
    placeholder: string
    isRequired?: boolean
    width?: string 
    isDateType?: boolean
}

const RegistrationInput: React.FC<RegistrationInputProps> = ({ title, placeholder, isRequired = false, width, isDateType = false}) => {
    return (
        <div className={classes.content}>
            <div className={classes.title_content}>
                <div className={classes.title}>{title}</div>
                {isRequired ? (<div className={classes.required_mark}>*</div>) : null}
            </div>
            <input 
            type={isDateType ? "date" : "text"}
            className={classes.input }
            style={{width: width ?? ''}}
            placeholder={placeholder} />
        </div>
    );
};

export default RegistrationInput;