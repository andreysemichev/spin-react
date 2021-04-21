import React from "react";
import classnames from "classnames";
import styles from "./styles.module.scss";

const index = () => {
    return (<div className={styles.wrapper}>
        <div className={classnames(styles.item, styles.selected)}>1</div>
        <div className={styles.item}>2</div>
        <div className={styles.item}>3</div>
    </div>);
}

export default index;