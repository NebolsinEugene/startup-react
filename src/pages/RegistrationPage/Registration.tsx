import React from "react";
import Step from "./Step.tsx";
import classes from "./Registration.module.css";
import RegistrationInput from "./RegistrationInput.tsx";
import PassportLoader from "./PassportLoader.tsx";
import RegistrationButton from "./RegistrationButton.tsx";

const Registration = () => {
    return (
        <div className={classes.content}>
            <Step labelText="Шаг 1. Укажите Ваше имя и контактные данные" />
            <div className={classes.user_data}>
                <RegistrationInput title="Фамилия" placeholder="Введите фамилию" isRequired />
                <RegistrationInput title="Имя" placeholder="Введите имя" isRequired />
                <RegistrationInput title="Отчество" placeholder="Введите отчество" />
            </div>
            <div className={classes.birthtime_input}>
                <RegistrationInput title="Место рождения" placeholder=" Введите место рождения" isRequired width="940px" />
            </div>
            <div className={classes.user_data}>
                <RegistrationInput title="Email" placeholder="Введите email" isRequired />
                <RegistrationInput title="Дата рождения" placeholder="" isRequired isDateType />
                <RegistrationInput title="СНИЛС" placeholder="Введите СНИЛС" />
            </div>
            <Step labelText="Шаг 2. Загрузите страницы паспорта" />
            <div className={classes.passport_loaders}>
                <PassportLoader title="Первая страница паспорта" />
                <PassportLoader title="Страница паспорта о регистрации" />
            </div>
            <Step labelText="Шаг 3. Укажите паспортные данные, ИНН" />
            <div className={classes.user_data}>
                <RegistrationInput title="Серия и номер паспорта" placeholder="__ __ ______" isRequired />
                <RegistrationInput title="Дата выдачи" placeholder="Введите имя" isRequired isDateType />
                <RegistrationInput title="Код подразделения" placeholder="___-___" isRequired />
            </div>
            <div className={classes.passport_long_fields}>
                <RegistrationInput title="Кем выдан" placeholder="Введите подразделение" isRequired width="520px" />
                <RegistrationInput title="Адрес регистрации" placeholder="Введите адрес регистрации" isRequired width="520px" />
            </div>
            <div className={classes.inn_content}>
                <RegistrationInput title="ИНН" placeholder="Введите ИНН" isRequired />
            </div>
            <div className={classes.button_content}>
                <RegistrationButton text="Сохранить данные" />
                <div className={classes.button_gap} />
                <RegistrationButton text="Отправить анкету на проверку" />
            </div>
        </div>
    );
}

export default Registration;