import React from "react";
import classnames from "classnames";
import {NavLink} from "react-router-dom";
import {CheckBox} from "components";
import styles from "./styles.module.scss";

const Index = ({
    isRows = false,
    isDesigners = false,
    isHide = false,
    items,
    name,
    handleSetIsHide,
    handleSetIsCheck,
}) => {
    return (<div className={styles.wrapper}>
        <div className={classnames(styles.title, isHide? styles.titleDown : styles.titleUp)} onClick={handleSetIsHide}>{name}</div>
        {!isHide && <>
            <div className={classnames(styles.items, isRows? styles.itemsRows : "")}>
                { Array.isArray(items) && items.map((item, i) => {
                    return <div className={styles.item} key={i} onClick={handleSetIsCheck} data-name={item.name}>
                        <CheckBox text={item.name} isCheck={item.isCheck} />
                    </div>
                }) }
            </div>
            {isDesigners && <NavLink className={styles.designers} to="/">Все дизайнеры</NavLink>}
        </>}
    </div>);
}

export default Index;

