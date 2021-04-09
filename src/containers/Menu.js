import React, { useEffect } from "react";
import { connect } from "react-redux";
import { menuActions } from "redux/actions"
import { Menu } from "components";

const MenuContainer = ({ items, isLoading, fetchItems }) => {
    useEffect(() => {
        if (items === null) {
            fetchItems();
        }
        // eslint-disable-next-line
    }, [items]);

    return <Menu
        items={items}
        isLoading={isLoading}
    />
};

export default connect(
    ({ menu }) => menu,
    menuActions
)(MenuContainer);