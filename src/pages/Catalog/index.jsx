import React from "react";
import Header from "modules/Header";
import Footer from "modules/Footer";
import Catalog from "modules/Catalog";
// eslint-disable-next-line
import styles from "./styles.module.scss";

const Index = () => {
    return(<>
        <Header />
        <Catalog />
        <Footer />
    </>);
};

export default Index;