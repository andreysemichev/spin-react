import React from "react";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line
import styles from "./styles.module.scss";

const index = () => {
    return(<div className={styles.wrapper}>
        <div className={styles.error}>404 ошибка</div>
        <NavLink className={styles.link} to="/">перейти на главную</NavLink>
    </div>);
};

export default index;