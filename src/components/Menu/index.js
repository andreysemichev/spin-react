import React from "react";
import styles from "./styles.module.scss";

const SubMenuItem = ({name, items}) => {
    return (<div className={styles.contentBlock}>
        <div className={styles.contentBlockName}>{name}</div>
        { items.map((item, i) => {
            return <a href={item.link} key={i}>{item.name}</a>
        }) }
    </div>);
}

const MenuItem = ({itemName, link, items, bottomButton}) => {
    return (<div className={styles.item}>
        <a href={link} className={styles.itemText}>{itemName}</a>
        { Array.isArray(items) && <div className={styles.content}>
            { items.map((item, i) => <SubMenuItem {...item} key={i} />) }
            { bottomButton && <div className={styles.contentBlockLink}>
                <a href={bottomButton.link}>{bottomButton.name}</a>
            </div>}
        </div> }
    </div>);
}

const AuthDrop = ({items}) => {
    return (<div className={styles.wrapper}>
        { Array.isArray(items) && items.map((item, i) => <MenuItem {...item} key={i} />) }
    </div>);
}

export default AuthDrop;