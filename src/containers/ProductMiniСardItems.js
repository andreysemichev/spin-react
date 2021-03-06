import React, { useEffect } from "react";
import { connect } from "react-redux";
import { productCardsActions } from "redux/actions"
import { ProductMiniĞ¡ardItems } from "components";


const Index = ({ items, fetchItems }) => {
    useEffect(() => {
        if (items === null) {
            fetchItems();
        }
        // eslint-disable-next-line
    }, [items]);

    return <ProductMiniĞ¡ardItems
        items={items}
    />
};

export default connect(
    ({ productCards }) => productCards,
    productCardsActions
)(Index);