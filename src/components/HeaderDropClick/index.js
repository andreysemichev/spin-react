import React from "react";
import { HeaderDropClickItem } from "components"
import styles from "./styles.module.scss";

const HeaderDropClick = ({ img, items, isHide, handleHideOrShow, nodeRefWrapper, nodeRefSub, btnName, ifEmpty }) => {
    let counter = Array.isArray(items) ? items.length : 0;

    return(<div className={styles.drop} ref={nodeRefWrapper}>
        <div className={styles.wrapper} onClick={handleHideOrShow}>
            <img src={img} alt="icon"></img>
            { counter !== 0 && <span className={styles.counter}>{counter}</span> }
        </div>
        { !isHide &&
            <div className={styles.items} ref={nodeRefSub}>
                <ul>
                    { counter === 0 && <li className={styles.empty}>{ifEmpty}</li> }
                    { Array.isArray(items) && items.map(item => <HeaderDropClickItem key={item.id} {...item} />) }
                </ul>
                { counter !== 0 && 
                    <div className={styles.button}>
                        <a href="/">{btnName}</a>
                    </div> }
            </div> }
        
    </div>);
};

export default HeaderDropClick;