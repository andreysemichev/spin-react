import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

const SubMenuItem = ({name, items}) => {
    return (<div className={styles.contentBlock}>
        <div className={styles.contentBlockName}>{name}</div>
        { items.map((item, i) => {
            return <NavLink to={item.link} key={i}>{item.name}</NavLink>
        }) }
    </div>);
}

const MenuItem = ({itemName, link, items, bottomButton}) => {
    return (<div className={styles.item}>
        <NavLink className={styles.itemText} to={link}>{itemName}</NavLink>
        { Array.isArray(items) && <div className={styles.content}>
            { items.map((item, i) => <SubMenuItem {...item} key={i} />) }
            { bottomButton && <div className={styles.contentBlockLink}>
                <NavLink to={bottomButton.link}>{bottomButton.name}</NavLink>
            </div>}
        </div> }
    </div>);
}

const Menu = ({items}) => {
    return (<div className={styles.wrapper}>
        { Array.isArray(items) && items.map((item, i) => <MenuItem {...item} key={i} />) }
    </div>);
}

export default Menu;