import React from "react";
import Header from "modules/Header";
import Footer from "modules/Footer";
import Product from "modules/Product";
// eslint-disable-next-line
import styles from "./styles.module.scss";

const index = () => {
    return(<>
        <Header />
        <Product />
        <Footer />
    </>);
};

export default index;