import React from "react";
import classnames from "classnames";
import { HeaderTop } from "components";
import { ShoppingBag, WishList, LanguageDrop, Search, AuthPopUp, AuthDrop, Menu } from "containers";
import styles from "./styles.module.scss";
import logo from "assets/img/logo.svg";

const Header = props => {
    return(<header>
        <AuthPopUp />
        <HeaderTop />
        <div className={classnames(styles.headerCenter, styles.container)}>
            <a href="/">
                <img className={styles.logo} src={logo} alt="Spin 4 Spin" />
            </a>
            <div className={styles.right}>
                <LanguageDrop />
                <AuthDrop />
                <WishList />
                <ShoppingBag />
                <a className={styles.rightLink} href="/">Продать</a>
                <Search />
            </div>
        </div>
        <div className={styles.container}>
            <Menu />
        </div>
    </header>);
};

export default Header;