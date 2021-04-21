import React, {useState, useEffect, useRef} from "react";
import { useLocation, Redirect } from "react-router-dom";
import { SortField } from "components";
import queryVariable from "utils/queryVariable";

const Index = () => {
    const [isHide, setIsHide] = useState(true);
    const [selected, setSelected] = useState("new");
    const refDropList = useRef(null);
    const refDropClick = useRef(null);
    const query = queryVariable(useLocation().search);
    const sorting = query.sorting ? query.sorting[0] : null;

    // TODO перенести похожий функционал в единую функцию
    function showOrHide(event) {
        const target = event.target;
        const currentList = refDropList.current;
        const currentClick = refDropClick.current;

        if (currentList) {
            const isCurrentNode = currentList.contains(target) || currentClick.contains(target);

            if (!isCurrentNode) {
                setIsHide(true);
            }
        }
    }

    // записывает событие отображения или скрытия фильтров, когда создается компонента
    useEffect(() => {
        if (sorting) {
            console.log(sorting)
            setSelected(sorting);
        }
        document.addEventListener("click", showOrHide);
        return () => document.removeEventListener("click", showOrHide);
        // eslint-disable-next-line
    }, []);

    const handleShowOrHide = () => {
        setIsHide(!isHide);
    }

    const handleChangeSort = event => {
        const target = event.target;
        const sort = target.getAttribute("data-sort");

        // TODO сделать единую функцию для работы с URL
        // если меняется фильтр, то сбрасывается страница до 1й
    }

    return <SortField
        isHide={isHide}
        handleShowOrHide={handleShowOrHide}
        refDropList={refDropList}
        refDropClick={refDropClick}
        selected={selected}
        handleChangeSort={handleChangeSort}
    />
};

export default Index;