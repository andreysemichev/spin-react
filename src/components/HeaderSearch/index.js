import React from "react";
import styles from "./styles.module.scss";
import search from "assets/img/search-new.svg"

const HeaderSearch = ({value, handleUpdateValue, handleSearch}) => {
    return(<div className={styles.wrapper}>
        <input type="text" value={value} onChange={handleUpdateValue} />
        <button onClick={handleSearch}>
            <img src={search} alt="search" />
        </button>
    </div>);
};

export default HeaderSearch;