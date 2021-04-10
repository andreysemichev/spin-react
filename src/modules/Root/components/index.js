import React from "react";
import styles from "./styles.module.scss";

const Root = ({html}) => {
    return (<main className={styles.wrapper}>
        <div dangerouslySetInnerHTML={{__html: html}} className={styles.container}></div>
    </main>);
}

export default Root;