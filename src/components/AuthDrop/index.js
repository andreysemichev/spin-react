import React from "react";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import userIcon from "assets/img/user-icon.svg";
import styles from "./styles.module.scss";

const AuthDrop = ({handleHideOrShow}) => {
    return (<div className={styles.drop}>
        <div className={styles.wrapper}>
            <img src={userIcon} alt="icon"></img>
        </div>
        <div className={styles.linksWrapper}>
            <div className={styles.links}>
                <NavLink className={styles.dropText} to="/">Личный кабинет</NavLink>
                <div className={styles.dropBtn} onClick={handleHideOrShow}>Войти</div>
                <NavLink className={classnames(styles.dropBtn, styles.dropBtnWhite)} to="/">Регистрация</NavLink>
            </div>
        </div>
    </div>);
}

export default AuthDrop;