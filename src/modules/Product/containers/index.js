import React, { useState, useEffect } from "react";
import {useLocation} from "react-router-dom"
import { connect } from "react-redux";
import { productActions } from "redux/actions"
import Product from "../components";

const Index = ({ id, images, name, price, currency, description, isLoading, fetchProduct }) => {
    const [isHideDelivery, setIsHideDelivery] = useState(true);
    const [isHideDescription, setIsHideDescription] = useState(false);
    const productId = useLocation().pathname.slice(3);

    useEffect(() => {
        if (id === null) {
            fetchProduct(productId);
        }
        // eslint-disable-next-line
    }, [id]);

    const handleShowOrHide = event => {
        const target = event.currentTarget;
        const name = target.getAttribute("data-name");

        if (name === "delivery") {
            setIsHideDelivery(!isHideDelivery);
        }

        if (name === "description") {
            setIsHideDescription(!isHideDescription);
        }
    }

    return <Product
        name={name}
        price={price}
        currency={currency}
        description={description}
        images={images}
        handleShowOrHide={handleShowOrHide}
        isHideDelivery={isHideDelivery}
        isHideDescription={isHideDescription}
    />
};

export default connect(
    ({ product }) => product,
    productActions
)(Index);