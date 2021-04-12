import React from "react";
import arrow from "assets/img/arrow.svg";
import styles from "./styles.module.scss";

const index = ({isHide, handleShowOrHide}) => {
    return (<div className={styles.wrapper}>
        <div className={styles.title} data-name="delivery" onClick={handleShowOrHide}>
            <div>Доставка</div>
            <img src={arrow} className={isHide? styles.up : ""} alt="arrow"></img>
        </div>
        { !isHide && <>
            <div className={styles.text}>Стандартный срок бесплатной доставки курьером  в пределах МКАД составляет 3 рабочих дня. При необходимости срочной доставки, или доставки за пределы МКАД, укажите эту информацию в комментарии к заказу.</div>
            <div className={styles.text}>Напоминаем, что на протяжении действия карантина на территории Москвы, вы можете выбрать до 10 товаров на примерку с бесплатной доставкой на дом в случае приобретения одной из вещей.</div>
            <div className={styles.text}>Сроки и стоимость доставки в другие регионы России и мира вы можете уточнить в в разделе Доставка</div>
            <div className={styles.text}>Так же вы можете самостоятельно забрать  заказ или покупку из нашего шоу-рума в часы, когда мы открыты.</div>
        </> }
    </div>);
}

export default index;

