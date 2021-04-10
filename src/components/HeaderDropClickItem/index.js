import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

const HeaderDropClickItem = ({id, link, img, name, price, currency}) => {
    return (<li className={styles.gridContainer}>
        <div className={styles.img}>
            <NavLink to={link}><img src={img} alt={name} /></NavLink>
        </div>
        <div className={styles.name}>
            <NavLink to={link}>{name}</NavLink>
        </div>
        <div className={styles.price}>{price} {currency}</div>
        <div className={styles.delete}><span className={styles.deleteInner}>✖</span></div>
    </li>);
};

export default HeaderDropClickItem;