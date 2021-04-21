import React, { useEffect } from "react";
import { connect } from "react-redux";
import { productCardsActions } from "redux/actions"
import { ProductMiniСardItems } from "components";


const Index = ({ items, fetchItems }) => {
    useEffect(() => {
        if (items === null) {
            fetchItems();
        }
        // eslint-disable-next-line
    }, [items]);

    return <ProductMiniСardItems
        items={items}
    />
};

export default connect(
    ({ productCards }) => productCards,
    productCardsActions
)(Index);