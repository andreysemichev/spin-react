import React from "react";
import classnames from "classnames";
import styles from "./styles.module.scss";

const index = ({
    isHide,
    handleShowOrHide,
    refDropList,
    refDropClick,
    selected,
    handleChangeSort
}) => {
    return (<div className={styles.wrapper}>
        <div  className={styles.title}>Сортировать
            <span className={styles.selected} onClick={handleShowOrHide} ref={refDropClick}> 
                { selected === "new" && "по новизне" }
                { selected === "name_asc" && "по алфавиту: от А до Я" }
                { selected === "name_desc" && "по алфавиту: от Я до А" }
                { selected === "price_asc" && "по цене: дешевые выше" }
                { selected === "price_desc" && "по цене: дорогие выше" }
            <span className={classnames(isHide? styles.down : styles.up)}></span></span>
        </div>
        { !isHide && <>
            <ul className={styles.list} ref={refDropList}>
                <li className={classnames(styles.item, selected === "new" && styles.itemSelected)} data-sort="new" onClick={handleChangeSort}>по новизне</li>
                <li className={classnames(styles.item, selected === "name_asc" && styles.itemSelected)} data-sort="name_asc" onClick={handleChangeSort}>по алфавиту: от А до Я</li>
                <li className={classnames(styles.item, selected === "name_desc" && styles.itemSelected)} data-sort="name_desc" onClick={handleChangeSort}>по алфавиту: от Я до А</li>
                <li className={classnames(styles.item, selected === "price_asc" && styles.itemSelected)} data-sort="price_asc" onClick={handleChangeSort}>по цене: дешевые выше</li>
                <li className={classnames(styles.item, selected === "price_desc" && styles.itemSelected)} data-sort="price_desc" onClick={handleChangeSort}>по цене: дорогие выше</li>
            </ul>
        </> }
    </div>);
}

export default index;

