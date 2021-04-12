import React from "react";
import arrow from "assets/img/arrow.svg";
import styles from "./styles.module.scss";

const index = ({
    isHide,
    handleShowOrHide,
    brand,
    size,
    composition,
    condition,
    style,
    color,
    productCode
}) => {
    return (<div className={styles.wrapper}>
        <div className={styles.title} data-name="description" onClick={handleShowOrHide}>
            <div>Описание</div>
            <img src={arrow} className={isHide? styles.up : ""} alt="arrow"></img>
        </div>
        { !isHide && <>
            { brand && <div className={styles.inner}>
                <div>Дизайнер:</div>
                <div>{brand}</div>
            </div> }
            { size && <div className={styles.inner}>
                <div>Размер:</div>
                <div>{size}</div>
            </div> }
            { composition && <div className={styles.inner}>
                <div>Состав:</div>
                <div>{composition}</div>
            </div> }
            { condition && <div className={styles.inner}>
                <div>Состояние:</div>
                <div>{condition}</div>
            </div> }
            { style && <div className={styles.inner}>
                <div>Стиль:</div>
                <div>{style}</div>
            </div> }
            { color && <div className={styles.inner}>
                <div>Цвет:</div>
                <div>{color}</div>
            </div> }
            { productCode && <div className={styles.inner}>
                <div>Код товара:</div>
                <div>{productCode}</div>
            </div> }
        </> }

    </div>);
}

export default index;

