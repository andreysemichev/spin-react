import React from "react";
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
                <a className={styles.dropText} href="/">Личный кабинет</a>
                <div className={styles.dropBtn} onClick={handleHideOrShow}>Войти</div>
                <a className={classnames(styles.dropBtn, styles.dropBtnWhite)} href="/">Регистрация</a>
            </div>
        </div>
    </div>);
}

export default AuthDrop;