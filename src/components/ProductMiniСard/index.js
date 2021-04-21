import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";
import noImage from "assets/img/no_image.png";

const index = ({
    image,
    designer,
    size,
    name,
    price
}) => {
    return (<div className={styles.wrapper}>
        <div className={styles.wrapperInner}>
            <NavLink to="/"><img src={image? image : noImage} alt="t-shirt" /></NavLink>
            <div className={styles.top}>
                <div>{designer}</div>
                <div>{size}</div>
            </div>
            <div className={styles.middle}>{name}</div>
            <div className={styles.bottom}>
                <div className={styles.price}>{price}</div>
                <div className={styles.addToCart}>В корзину</div>
            </div>
        </div>
    </div>);
}

export default index;

