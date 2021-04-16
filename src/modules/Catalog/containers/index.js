import React, { useState, useEffect } from "react";
import {useLocation, Redirect} from "react-router-dom"
import { connect } from "react-redux";
import { filtersActions } from "redux/actions"
import Catalog from "../components";
import queryVariable from "utils/queryVariable";
import addIsCheckField from "utils/addIsCheckField";
import getQuetySelectedFields from "utils/getQuetySelectedFields";

// http://localhost:3000/c/t-shirt?condition=new+good&size=xs

const Container = ({
    isLoading,
    setIsLoading,
    fetchItems,
    condition,
    conditionIsHide,
    setConditionIsHide,
    designer,
    designerIsHide,
    setDesignerIsHide,
    size,
    sizeIsHide,
    setSizeIsHide,
}) => {
    const [localCondition, setLocalCondition] = useState(null);
    const [localSize, setLocalSize] = useState(null);
    const [localDesigner, setLocalDesigner] = useState(null);
    const [isUpdatedFilters, setIsUpdatedFilters] = useState(false);
    const [redirectURL, setRedirectURL] = useState(null);
    // const [squeryIsEmpty, setQueryIsEmpty] = useState(null);
    const query = queryVariable(useLocation().search);
    const pathname = useLocation().pathname;
    const queryIsEmpty = useLocation().search.length === 0;


    useEffect(() => {
        if (redirectURL !== null) {
            setRedirectURL(null);
            setIsUpdatedFilters(null);
        }
        // eslint-disable-next-line
    }, [redirectURL]);

    useEffect(() => {
        fetchItems();
        // eslint-disable-next-line
    }, []);
    
    useEffect(() => {
        if (condition !== null) {
            setLocalCondition(addIsCheckField(condition, query.condition));
        }
        // eslint-disable-next-line
    }, [condition]);

    useEffect(() => {
        if (size !== null) {
            setLocalSize(addIsCheckField(size, query.size));
        }
        // eslint-disable-next-line
    }, [size]);

    useEffect(() => {
        if (designer !== null) {
            setLocalDesigner(addIsCheckField(designer, query.designer));
        }
        // eslint-disable-next-line
    }, [designer]);

    const handleSetConditionIsHide = () => {
        setConditionIsHide();
    }

    const handlesetDesignerIsHide = () => {
        setDesignerIsHide();
    }
    const handlesetSizeIsHide = () => {
        setSizeIsHide();
    }

    // TODO
    // Перепиши повторы кода в функцию, которую нужно создать в утилитах

    const handleSetIsCheckLocalCondition = (event) => {
        const target = event.currentTarget;
        const name = target.getAttribute("data-name");

        setIsUpdatedFilters(true);

        setLocalCondition(localCondition.map(item => {
            if (item.name === name) {
                item.isCheck = !item.isCheck;
            }

            return item;
        }));
    }

    const handleSetIsCheckLocalSize = (event) => {
        const target = event.currentTarget;
        const name = target.getAttribute("data-name");

        setIsUpdatedFilters(true);

        setLocalSize(localSize.map(item => {
            if (item.name === name) {
                item.isCheck = !item.isCheck;
            }

            return item;
        }))
    }

    const handleSetIsCheckLocalDesigner = (event) => {
        const target = event.currentTarget;
        const name = target.getAttribute("data-name");

        setIsUpdatedFilters(true);

        setLocalDesigner(localDesigner.map(item => {
            if (item.name === name) {
                item.isCheck = !item.isCheck;
            }

            return item;
        }));
    }

    const applyFilters = () => {
        let result = "";
        let flag = true; // нет чекнутых полей

        let conditionQuery = getQuetySelectedFields(localCondition, "condition");
        if (conditionQuery) {
            flag = false;
            result += "?" + conditionQuery;
        }

        let sizeQuery = getQuetySelectedFields(localSize, "size");
        if (sizeQuery) {
            flag = false;
            result += (result.length === 0)? "?" + sizeQuery : "&" + sizeQuery;
        }
        
        let designerQuery = getQuetySelectedFields(localDesigner, "size");
        if (designerQuery) {
            flag = false;
            result += (result.length === 0)? "?" + designerQuery : "&" + designerQuery;
        }

        if (result.length !== 1) {
            setRedirectURL(pathname + result);
        } else if (flag) {
            resetFilters();
        }
    }

    const resetFilters = () => {
        if (!queryIsEmpty) {
            setRedirectURL(pathname);
        }
        setIsUpdatedFilters(false);
        setLocalCondition(addIsCheckField(condition));
        setLocalSize(addIsCheckField(size));
        setLocalDesigner(addIsCheckField(designer));
    }

    if (redirectURL) {
        return <Redirect to={redirectURL} />
    }

    return <Catalog
        condition={localCondition}
        size={localSize}
        designer={localDesigner}
        conditionIsHide={conditionIsHide}
        designerIsHide={designerIsHide}
        sizeIsHide={sizeIsHide}
        handleSetConditionIsHide={handleSetConditionIsHide}
        handlesetDesignerIsHide={handlesetDesignerIsHide}
        handlesetSizeIsHide={handlesetSizeIsHide}
        handleSetIsCheckLocalCondition={handleSetIsCheckLocalCondition}
        handleSetIsCheckLocalSize={handleSetIsCheckLocalSize}
        handleSetIsCheckLocalDesigner={handleSetIsCheckLocalDesigner}
        isUpdatedFilters={isUpdatedFilters}
        applyFilters={applyFilters}
        resetFilters={resetFilters}
        queryIsEmpty={queryIsEmpty}
    />
};

export default connect(
    ({ filters }) => filters,
    filtersActions
)(Container);