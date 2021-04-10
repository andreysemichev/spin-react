import React from "react";
import Root from "modules/Root";
import Header from "modules/Header";
import Footer from "modules/Footer";

// eslint-disable-next-line
import styles from "./styles.module.scss";

const index = () => {
    return(<>
        <Header />
        <Root />
        <Footer />
    </>);
};

export default index;