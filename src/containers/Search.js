import React from "react";
import { connect } from "react-redux";
import { HeaderSearch } from "components";
import { searchActions } from "redux/actions"

const Search = ({value, setValue}) => {
    const handleUpdateValue = event => {
        const value = event.target.value;
        setValue(value);
    }

    const handleSearch = () => {
        console.log("Логика поиска");
    }

    return <HeaderSearch
        value={value}
        handleUpdateValue={handleUpdateValue}
        handleSearch={handleSearch}
    />;
};

export default connect(
    ({ search }) => search,
    searchActions
)(Search);