import React, { useState, useEffect } from "react";
import {useLocation, Redirect} from "react-router-dom"
import { connect } from "react-redux";
import { filtersActions } from "redux/actions"
import Catalog from "../components";
import queryVariable from "utils/queryVariable";
import addIsCheckField from "utils/addIsCheckField";
import getQuetySelectedFields from "utils/getQuetySelectedFields";


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
    const query = queryVariable(useLocation().search);
    const pathname = useLocation().pathname;
    const clothingType = useLocation().pathname.slice(3);

    let isEmptyFilter = true;
    if (query.condition || query.size || query.designer) {
        isEmptyFilter = false
    }

    // подгрузка категорий
    // только при первичном рендере
    useEffect(() => {
        fetchItems();
        // eslint-disable-next-line
    }, []);

    // обнуление параметров, когда обновляется redirectURL
    useEffect(() => {
        if (redirectURL !== null) {
            setRedirectURL(null);
            setIsUpdatedFilters(null);
        }
        // eslint-disable-next-line
    }, [redirectURL]);

    // заполнение чекбоксов
    useEffect(() => {
        if (condition !== null) {
            setLocalCondition(addIsCheckField(condition, query.condition));
        }
        // eslint-disable-next-line
    }, [condition]);

    // заполнение чекбоксов
    useEffect(() => {
        if (size !== null) {
            setLocalSize(addIsCheckField(size, query.size));
        }
        // eslint-disable-next-line
    }, [size]);

    // заполнение чекбоксов
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

    const setCheckbox = (event, local, setLocal) => {
        const target = event.currentTarget;
        const name = target.getAttribute("data-name");
        setIsUpdatedFilters(true);
        setLocal(local.map(item => {
            if (item.name === name) {
                item.isCheck = !item.isCheck;
            }
            return item;
        }));
    }

    const handleSetIsCheckLocalCondition = (event) => {
        setCheckbox(event, localCondition, setLocalCondition);
    }

    const handleSetIsCheckLocalSize = (event) => {
        setCheckbox(event, localSize, setLocalSize);
    }

    const handleSetIsCheckLocalDesigner = (event) => {
        setCheckbox(event, localDesigner, setIsUpdatedFilters);
    }

    const applyFilters = () => {
        let result = "";
        let conditionQuery = getQuetySelectedFields(localCondition, "condition");
        let sizeQuery = getQuetySelectedFields(localSize, "size");
        let designerQuery = getQuetySelectedFields(localDesigner, "designer");

        if (query.category) {
            result += `?category=${query.category}`;
        }

        if (conditionQuery) {
            result += (result.length === 0)? "?" + conditionQuery : "&" + conditionQuery;
        }

        if (sizeQuery) {
            result += (result.length === 0)? "?" + sizeQuery : "&" + sizeQuery;
        }

        if (designerQuery) {
            result += (result.length === 0)? "?" + designerQuery : "&" + designerQuery;
        }

        if (query.sorting) {
            let sorting = `sorting=${query.sorting}`;
            result += (result.length === 0)? "?" + sorting : "&" + sorting; 
        }

        setRedirectURL(pathname + result);
    }

    const resetFilters = () => {
        let resultUrl = "";

        if (query.category) {
            resultUrl += `?category=${query.category}`;
        }

        if (query.sorting) {
            let sorting = `sorting=${query.sorting}`;
            resultUrl += (resultUrl.length === 0)? "?" + sorting : "&" + sorting; 
        }

        setRedirectURL(pathname + resultUrl);
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
        isEmptyFilter={isEmptyFilter}
        title={query.category ? query.category : clothingType}
        counter={322}
    />
};

export default connect(
    ({ filters }) => filters,
    filtersActions
)(Container);