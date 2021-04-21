import React, { useEffect } from "react";
import { connect } from "react-redux";
import { paginationActions } from "redux/actions"
import { Pagination } from "components";

// TODO
// допилить функционал пагинации
const Index = ({ allPageCount, currentPage, fetchItems }) => {
    useEffect(() => {
        if (allPageCount === null) {
            fetchItems();
        }
        // eslint-disable-next-line
    }, [allPageCount]);

    return <Pagination />
};

export default connect(
    ({ pagination }) => pagination,
    paginationActions
)(Index);