import React from "react";
import { ProductMiniСard } from "components";
import styles from "./styles.module.scss";

const index = ({ items }) => {
    return (<div className={styles.wrapper}>
        { Array.isArray(items) && items.map(item => {
            return  <ProductMiniСard
                key={item.id}
                image={item.image}
                designer={item.designer}
                size={item.size}
                name={item.name}
                price={item.price}
            />
        }) }
    </div>);
}

export default index;