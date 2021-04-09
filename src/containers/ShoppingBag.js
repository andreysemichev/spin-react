import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { shoppingBagActions } from "redux/actions"
import { HeaderDropClick } from "components";
import shoppingBag from "assets/img/shopping-bag.svg";

const HeaderDropClickContainer = ({ items, isLoading, isHide, fetchItems, setIsHide }) => {
    const ifEmpty = "Корзина пуста";
    const btnName = "Оформить заказ";
    const toLink = "/";

    const nodeRefWrapper = useRef(null);
    const nodeRefSub = useRef(null);

    function showOrHide(event) {
        const current = nodeRefSub.current;
        const wrapper = nodeRefWrapper.current;
        const target = event.target;

        if (current) {
            const isAnother = !wrapper.contains(target);
            if (isAnother) {
                setIsHide();
            }
        }
    }
    
    useEffect(() => {
        document.addEventListener("click", showOrHide);

        return () => {
            document.removeEventListener("click", showOrHide);
        };
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (items === null) {
            fetchItems();
        }
        // eslint-disable-next-line
    }, [items]);

    const handleHideOrShow = () => {
        setIsHide();
    }

    return <HeaderDropClick
        btnName={btnName}
        toLink={toLink}
        img={shoppingBag}
        ifEmpty={ifEmpty}
        items={items}
        isLoading={isLoading}
        isHide={isHide}
        nodeRefWrapper={nodeRefWrapper}
        nodeRefSub={nodeRefSub}
        handleHideOrShow={handleHideOrShow}
    />
};

export default connect(
    ({ shoppingBag }) => shoppingBag,
    shoppingBagActions
)(HeaderDropClickContainer);