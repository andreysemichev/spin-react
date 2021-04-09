import React from "react";
import styles from "./styles.module.scss";
import check from "assets/img/check.png";
import uncheck from "assets/img/uncheck.png";

const CheckBox = ({ text, isCheck }) => {
    return (<label className={styles.label}>
        { isCheck && <img src={check} alt="check" />}
        { !isCheck && <img src={uncheck} alt="uncheck" />}
        {text}
    </label>);
}

export default CheckBox;