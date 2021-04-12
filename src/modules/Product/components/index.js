import React from "react";
import {NavLink} from "react-router-dom";
import {ProductCarousel, ProductDeliveryDrop, ProductDescriptionDrop} from "components"
import styles from "./styles.module.scss";

const Root = ({name,
    price,
    currency,
    description,
    images,
    handleShowOrHide,
    isHideDelivery,
    isHideDescription,
}) => {
    return (<div className={styles.container}>
        <ProductCarousel images={images} />
        <div className={styles.right}>
            <NavLink className={styles.brand} to="/">{description && description.brand}</NavLink>
            <div className={styles.name}>{name}</div>
            <div className={styles.price}>{price} <span>₽</span></div>
            <button className={styles.addToBag}>В корзину</button>
            <ProductDescriptionDrop
                handleShowOrHide={handleShowOrHide}
                isHide={isHideDescription}
                {...description}
            />
            <ProductDeliveryDrop
                handleShowOrHide={handleShowOrHide}
                isHide={isHideDelivery}
            />
        </div>
    </div>);
}

export default Root;