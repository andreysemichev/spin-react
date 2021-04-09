import React from "react";
import styles from "./styles.module.scss";

const HeaderDropClickItem = ({id, link, img, name, price, currency}) => {
    return (<li className={styles.gridContainer}>
        <div className={styles.img}>
            <a href={link}><img src={img} alt={name} /></a>
        </div>
        <div className={styles.name}>
            <a href={link}>{name}</a>
        </div>
        <div className={styles.price}>{price} {currency}</div>
        <div className={styles.delete}><span className={styles.deleteInner}>✖</span></div>
    </li>);
};

export default HeaderDropClickItem;